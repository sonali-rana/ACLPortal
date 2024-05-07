<template>
	<h4>Pre-Op</h4>
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
				</div>
				<h5>Strength Hamstrings</h5>
				<div class="mt-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Affected Limb</label>
					</div>
					<div class="col-md-4">
						<label class="form-label">Non-affected Limb</label>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Dynamometer</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.dynamometer_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.dynamometer_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Limb Symmetry Index</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.dynamometer_symmetry"
						/>
					</div>
				</div>
				<h5>Single Hop Test</h5>
				<div class="my-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Affected Limb</label>
					</div>
					<div class="col-md-4">
						<label class="form-label">Non-affected Limb</label>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Trial 1</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.hop_trial_1"
						/>
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" v-model="payload.date" />
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Trial 2</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.hop_trial_1"
						/>
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" v-model="payload.date" />
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Average</label>
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" v-model="payload.date" />
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" v-model="payload.date" />
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Limb Symmetry Index</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.hop_symmetry"
						/>
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
			<h5>Pre-Op Phase: Injury recovery & readiness for surgery</h5>
			<hr />
			<p>Related Documents</p>
			<p>
				<a href="/src/assets/ACL_Guide.pdf#page=5" target="_blank">
					<i class="bi bi-file-earmark-fill"></i> ACL Guide (pg. 5-6)</a
				>
			</p>
			<p>Most important goals</p>
			<ul>
				<li>
					<b>Eliminate swelling</b>
				</li>
				<li>
					<b>Regain full range of motion</b>
				</li>
				<li>
					<b
						>Regain 90% strength in the quads and hamstring compared with the
						other side</b
					>
				</li>
			</ul>
			<p>More Information</p>
			<p>
				Whilst people may want to have the operation as soon as possible, it’s
				important to allow the knee to settle from the injury and regain a good
				level of strength and function before surgery.
			</p>
			<p>
				Recent research has suggested that people who attain full range of
				motion, good quadriceps and hamstring strength, and minimal swelling
				prior to surgery have better outcomes than those who don’t up to 2 years
				post surgery.
			</p>
			<p>
				Exercises and activities during this phase typically include regular
				icing of the knee to reduce swelling, range of motion exercises, low
				impact aerobic exercise such as cycling, and a progressive strengthening
				regime.
			</p>
			<p>
				Strength exercises should progress in parallel with the clinical
				condition of the knee. As the pain & swelling settles, and the range of
				motion increases, strength exercise can progress to include weighted
				exercises in the gym and jump and land activities such as hopping
				drills.
			</p>
			<p>
				Aggressive change of direction activities should be avoided during this
				phase.
			</p>
			<p>
				This pre-surgery phase also allows clinicians to gather information that
				can be used to determine readiness to return to training and sport.
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
	props: ["isDisabled"],
	components: { SelectDropdown },
	data() {
		return {
			swelling: ["Zero", "Trace", "1+", "2+", "3+"],
			payload: {
				date: "",
				passive_extension: "",
				passive_flexion: "",
				swelling: "",
				dynamometer_affected: "",
				dynamometer_non_affected: "",
				dynamometer_symmetry: "",
				hop_trial_1: "",
				hop_trial_2: "",
				hop_symmetry: "",
			},
		};
	},
	setup() {},
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
					phase: "Pre-Op",
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
					phase: "Pre-Op",
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
					10) *
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
