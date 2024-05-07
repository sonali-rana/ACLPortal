<template>
	<h4>Phase 1</h4>
	<p>Please fill all the essential details to proceed.</p>
	<div
		class="progress my-3"
		role="progressbar"
		aria-label="Default striped example"
		aria-valuenow="completionPercentage"
		aria-valuemin="0"
		aria-valuemax="100"
	>
		<div
			class="progress-bar progress-bar-striped"
			:style="{ width: completionPercentage + '%' }"
		></div>
	</div>
	<div class="row">
		<div class="col-8">
			<div class="box p-5" style="width: 100% !important">
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Date</label>
					</div>
					<div class="col-md-4">
						<input type="date" class="form-control" v-model="payload.date" />
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Date of Surgery</label>
					</div>
					<div class="col-md-4">
						<input
							type="date"
							class="form-control"
							v-model="payload.date_of_surgery"
						/>
					</div>
					<div class="col-md-2">
						<label class="form-label">Graft Type</label>
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" v-model="payload.graft" />
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Passive Knee Extension (Degrees)</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.passive_extension"
						/>
					</div>
					<div class="col-md-2">
						<label class="form-label">Passive Knee Flexion (Degrees)</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.passive_flexion"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Swelling/Effusion</label>
					</div>
					<div class="col-md-4">
						<SelectDropdown
							:dropdownOptions="swelling"
							:defaultOption="``"
							:Key="`swelling`"
							:isDisabled="isDisabled"
							@onChange="onChangeSelect"
						/>
					</div>
					<div class="col-md-2">
						<label class="form-label">Quads Lag Test (Degrees)</label>
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" v-model="payload.quads" />
					</div>
				</div>

				<div class="d-flex justify-content-between" style="margin-top: 20px">
					<button class="btn btn-outline-secondary" @click="onCancel">
						Cancel
					</button>
					<div>
						<button class="btn btn-outline-secondary" @click="onSavetoDrafts">
							Save
						</button>
						<button class="btn btn-primary ml2" @click="onFinalize">
							Finalize
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="col-3" style="font-size: 12px">
			<h5>Phase 1: Recovery from Surgery</h5>
			<hr />
			<p>Related Documents</p>
			<p>
				<a href="/src/assets/ACL_Guide.pdf#page=7" target="_blank">
					<i class="bi bi-file-earmark-fill"></i> ACL Guide (pg. 7-8)</a
				>
			</p>
			<p>Most important goals</p>
			<ul>
				<li>
					<b>Get the knee straight (full extension)</b>
				</li>
				<li>
					<b>Settle the swelling down to 'mild'</b>
				</li>
				<li><b>Get the quadriceps firing again</b></li>
			</ul>
			<p>More Information</p>
			<p>
				ACL reconstruction surgery is traumatic to the knee and a period of rest
				and recovery is required after the operation. Whilst it’s tempting to
				want to get going and improve strength and range of motion, it’s best to
				let the knee settle for the first 1-2 weeks with basic range exercises,
				quadriceps setting drills, ice and compression.
			</p>
			<p>
				Typical exercises and management activities during this phase include
				regular icing of the knee and graft donor site (usually either the
				hamstrings, quad or patella tendon), compression of the knee and lower
				limb, basic quadriceps setting exercises, and gentle range of motion
				exercises to improve knee extension (straightening) and flexion
				(bending). Analgesics and other medications should only be used in
				consultation with your doctor.
			</p>
		</div>
		<div class="col-1"></div>
	</div>
</template>

<script>
import SelectDropdown from "./SelectDropdown.vue";
import { useUserStore } from "@/store/UserStore";
import { mapActions } from "pinia";

export default {
	components: { SelectDropdown },
	props: ["isDisabled"],
	data() {
		return {
			swelling: ["Zero", "Trace", "1+", "2+", "3+"],
			payload: {
				date: "",
				date_of_surgery: "",
				graft: "",
				passive_extension: "",
				passive_flexion: "",
				swelling: "",
				quads: "",
			},
		};
	},
	methods: {
		...mapActions(useUserStore, ["onCreatePhase"]),
		onChangeSelect(key, value) {
			const selectedData = this.swelling.filter(
				(option) => option === value
			)[0];

			this.payload[key] = selectedData;
		},
		async onFinalize() {
			try {
				this.payload = {
					...this.payload,
					percentage: 100,
					draft: false,
					phase: "Phase 1",
				};
				const res = await this.onCreatePhase(this.payload);
				if (res?.status === 200) {
					this.$router.push("/all-surveys");
				}
			} catch (error) {
				throw new Error(error);
			}
		},

		async onSavetoDrafts() {
			try {
				this.payload = {
					...this.payload,
					percentage: this.completionPercentage,
					draft: true,
					phase: "Phase 1",
				};
				const res = await this.onCreatePhase(this.payload);
				if (res?.status === 200) {
					this.$router.push("/all-surveys");
				}
			} catch (error) {
				throw new Error(error);
			}
		},
	},
	computed: {
		completionPercentage() {
			return Math.trunc(
				(Object.values(this.payload).filter((field) => field.toString().length)
					?.length /
					7) *
					100
			);
		},
	},
	mounted() {
		const inputElements = document.querySelectorAll(`input.form-control`);
		for (const input of inputElements) {
			input.disabled = this.isDisabled;
		}
	},
};
</script>
