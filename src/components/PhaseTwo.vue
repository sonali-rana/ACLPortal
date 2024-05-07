<template>
	<h4>Phase 2</h4>
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
						<label class="form-label">Prone Hang Test (cm)</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.prone_hang"
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
						<label class="form-label">Functional Alignment Test</label>
					</div>
					<div class="col-md-4">
						<SelectDropdown
							:dropdownOptions="functionalAlignment"
							:defaultOption="``"
							:Key="`functional_alignment`"
							:isDisabled="isDisabled"
							@onChange="onChangeSelect"
						/>
					</div>
				</div>

				<h5>Single Leg Bridge Test</h5>
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
						<label class="form-label">Repetitions</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.bridge_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.bridge_non_affected"
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
							v-model="payload.bridge_symmetry"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Hurdle Requirement</label>
					</div>
					<div class="col-md-4">
						<RadioButton
							:options="bridge_hurdle"
							:Key="`bridge_hurdle`"
							:isDisabled="isDisabled"
							@onChange="onRadioSelect"
						/>
					</div>
				</div>

				<h5>Single Leg Calf Raises Test</h5>
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
						<label class="form-label">Repetitions</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.calf_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.calf_non_affected"
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
							v-model="payload.calf_symmetry"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Hurdle Requirement</label>
					</div>
					<div class="col-md-4">
						<RadioButton
							:options="calf_hurdle"
							:Key="`calf_hurdle`"
							:isDisabled="isDisabled"
							@onChange="onRadioSelect"
						/>
					</div>
				</div>

				<h5>Side Endurance Test</h5>
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
						<label class="form-label">Seconds</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.endurance_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.endurance_non_affected"
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
							v-model="payload.endurance_symmetry"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Hurdle Requirement</label>
					</div>
					<div class="col-md-4">
						<RadioButton
							:options="endurance_hurdle"
							:Key="`endurance_hurdle`"
							:isDisabled="isDisabled"
							@onChange="onRadioSelect"
						/>
					</div>
				</div>

				<h5>Single Leg Rise Test</h5>
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
						<label class="form-label">Repetitions</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.leg_rise_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.leg_rise_non_affected"
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
							v-model="payload.leg_rise_symmetry"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Hurdle Requirement</label>
					</div>
					<div class="col-md-4">
						<RadioButton
							:options="leg_rise_hurdle"
							:Key="`leg_rise_hurdle`"
							:isDisabled="isDisabled"
							@onChange="onRadioSelect"
						/>
					</div>
				</div>

				<h5>Unipedal Stance Test</h5>
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
						<label class="form-label">Eyes Open (seconds)</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.unipedal_open_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.unipedal_open_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Eyes Closed (seconds)</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.unipedal_closed_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.unipedal_closed_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Hurdle Requirement</label>
					</div>
					<div class="col-md-4">
						<RadioButton
							:options="unipedal_affected_hurdel"
							:Key="`unipedal_affected_hurdel`"
							:isDisabled="isDisabled"
							@onChange="onRadioSelect"
						/>
					</div>
					<div class="col-md-4">
						<RadioButton
							:options="unipedal_affected_non_hurdel"
							:Key="`unipedal_affected_non_hurdel`"
							:isDisabled="isDisabled"
							@onChange="onRadioSelect"
						/>
					</div>
				</div>
			</div>

			<div class="box p-5" style="width: 100% !important">
				<h5>Supplementary Goals</h5>
				<div class="my-3 row">
					<div class="col-md-4">
						<label class="form-label">Bodyweight (Kgs)</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.weight"
						/>
					</div>
				</div>
				<h6>Single Leg Press 1RM</h6>
				<div class="mt-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">1RM (sled = weight) Kgs</label>
					</div>
					<div class="col-md-4">
						<label class="form-label">Percent of Bodyweight</label>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Affected Limb</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.leg_press_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.leg_press_affected_weight"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Non-affected Limb</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.leg_press_non_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.leg_press_non_affected_weight"
						/>
					</div>
				</div>
				<h6>Squat 1RM</h6>
				<div class="mt-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">1RM Kgs</label>
					</div>
					<div class="col-md-4">
						<label class="form-label">Percent of Bodyweight</label>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Squat</label>
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" v-model="payload.squat" />
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.squat_weight"
						/>
					</div>
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
		<div class="col-3" style="font-size: 12px">
			<h5>Phase 2: Strength and neuromuscular control</h5>
			<hr />
			<p>Related Documents</p>
			<p>
				<a href="/src/assets/ACL_Guide.pdf#page=9" target="_blank">
					<i class="bi bi-file-earmark-fill"></i> ACL Guide (pg. 9-12)</a
				>
			</p>
			<p>Most important goals</p>
			<ul>
				<li>
					<b>Regain most of your single leg balance</b>
				</li>
				<li>
					<b>Regain most of your muscle strength</b>
				</li>
				<li><b>Single leg squat with good technique and alignment</b></li>
			</ul>
			<p>More Information</p>
			<p>
				Regaining muscle strength, balance, and basic co-ordination are the
				goals of Phase 2. This phase usually commences with easy body weight
				type exercises and progresses into a gym-based regime with a mixture of
				resistance, balance, and co-ordination exercises.
			</p>
			<p>
				It’s important for clinicians and patients to ‘listen to the knee’
				during this phase and only progress as quickly as the knee will allow.
				Increase in pain and/or swelling are the two main symptoms that indicate
				that the knee is not tolerating the workload.
			</p>
			<p>
				Typical exercises and management activities during this phase include
				lunges, step-ups, squats, bridging, calf raises, hip abduction
				strengthening, core exercises, balance, gait re-education drills, and
				non-impact aerobic condition such as cycling, swimming, and walking.
				Some clinicians may start some introductory impact type activities such
				as walk-jogging or mini jumps during this phase, but the bulk of this
				type of training should be reserved for Phase 3.
			</p>
		</div>
		<div class="col-1"></div>
	</div>
</template>

<script>
import SelectDropdown from "./SelectDropdown.vue";
import { useUserStore } from "@/store/UserStore";
import { mapActions } from "pinia";
import RadioButton from "./RadioButton.vue";

export default {
	props: ["isDisabled"],
	components: { SelectDropdown, RadioButton },
	data() {
		return {
			swelling: ["Zero", "Trace", "1+", "2+", "3+"],
			functionalAlignment: ["Poor", "Fair", "Good"],
			bridge_hurdle: [
				{ name: "Pass", isChecked: false },
				{ name: "Fail", isChecked: false },
			],
			calf_hurdle: [
				{ name: "Pass", isChecked: false },
				{ name: "Fail", isChecked: false },
			],
			endurance_hurdle: [
				{ name: "Pass", isChecked: false },
				{ name: "Fail", isChecked: false },
			],
			leg_rise_hurdle: [
				{ name: "Pass", isChecked: false },
				{ name: "Fail", isChecked: false },
			],
			unipedal_affected_hurdel: [
				{ name: "Pass", isChecked: false },
				{ name: "Fail", isChecked: false },
			],
			unipedal_affected_non_hurdel: [
				{ name: "Pass", isChecked: false },
				{ name: "Fail", isChecked: false },
			],
			payload: {
				date: "",
				prone_hang: "",
				passive_flexion: "",
				swelling: "",
				functional_alignment: "",
				bridge_affected: "",
				bridge_non_affected: "",
				bridge_hurdle: "",
				bridge_symmetry: "",
				calf_affected: "",
				calf_non_affected: "",
				calf_hurdle: "",
				calf_symmetry: "",
				endurance_affected: "",
				endurance_non_affected: "",
				endurance_hurdle: "",
				endurance_symmetry: "",
				leg_rise_affected: "",
				leg_rise_non_affected: "",
				leg_rise_hurdle: "",
				leg_rise_symmetry: "",
				unipedal_open_affected: "",
				unipedal_closed_affected: "",
				unipedal_open_non_affected: "",
				unipedal_closed_non_affected: "",
				unipedal_affected_hurdel: "",
				unipedal_affected_non_hurdel: "",
				weight: "",
				leg_press_affected: "",
				leg_press_affected_weight: "",
				leg_press_non_affected: "",
				leg_press_non_affected_weight: "",
				squat: "",
				squat_weight: "",
			},
		};
	},
	setup() {},
	methods: {
		...mapActions(useUserStore, ["onCreatePhase"]),
		onChangeSelect(key, value) {
			let array =
				key === "functional_alignment"
					? this.functionalAlignment
					: this.swelling;

			const selectedData = array.filter((option) => option === value)[0];

			this.payload[key] = selectedData;
		},

		onRadioSelect(key, value) {
			let array =
				key === "bridge_hurdle"
					? this.bridge_hurdle
					: key === "calf_hurdle"
						? this.calf_hurdle
						: key === "endurance_hurdle"
							? this.endurance_hurdle
							: key === "leg_rise_hurdle"
								? this.leg_rise_hurdle
								: key === "unipedal_affected_hurdel"
									? this.unipedal_affected_hurdel
									: this.unipedal_affected_non_hurdel;

			const new_list = array.map((option) => {
				return { ...option, isChecked: option.name === value };
			});

			array = [...new_list];

			const selectedData = array.filter((option) => option.isChecked)[0]?.name;

			key === "bridge_hurdle"
				? (this.bridge_hurdle = [...new_list])
				: key === "calf_hurdle"
					? (this.calf_hurdle = [...new_list])
					: key === "endurance_hurdle"
						? (this.endurance_hurdle = [...new_list])
						: key === "leg_rise_hurdle"
							? (this.leg_rise_hurdle = [...new_list])
							: key === "unipedal_affected_hurdel"
								? (this.unipedal_affected_hurdel = [...new_list])
								: (this.unipedal_affected_non_hurdel = [...new_list]);

			this.payload[key] = selectedData;
		},

		async onFinalize() {
			try {
				this.payload = {
					...this.payload,
					percentage: 100,
					draft: false,
					phase: "Phase 2",
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
					phase: "Phase 2",
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
					33) *
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
