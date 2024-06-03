<template>
	<h4>Demographics</h4>
	<p>Please fill all the essential details to proceed.</p>
	<div
		class="progress mt-3"
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
	<div
		class="box form-box p-5 my-3"
		style="background-color: rgba(0, 119, 182, 0.1)"
	>
		<div class="mb-3 row">
			<div class="col-md-2">
				<label class="form-label"
					>Which country are you currently living in?</label
				>
			</div>
			<div class="col-md-4">
				<input
					type="text"
					class="form-control"
					v-model="payload.country"
					:disabled="isDisabled"
				/>
			</div>
			<div class="col-md-2">
				<label class="form-label">Sex</label>
			</div>
			<div class="col-md-4 d-flex">
				<RadioButton
					:options="options"
					:Key="`gender`"
					:isDisabled="isDisabled"
					:selectedOption="payload.gender"
					@onChange="onRadioSelect"
				/>
			</div>
		</div>
		<div class="mb-3 row">
			<div class="col-md-2">
				<label class="form-label">Date of birth (patient)</label>
			</div>
			<div class="col-md-4">
				<input type="date" class="form-control" v-model="payload.dob" />
			</div>
			<div class="col-md-2">
				<label class="form-label">Approximate Height (cm)</label>
			</div>
			<div class="col-md-4">
				<input type="number" class="form-control" v-model="payload.height" />
			</div>
		</div>
		<div class="mb-3 row">
			<div class="col-md-2">
				<label class="form-label">Approximate Weight (kg)</label>
			</div>
			<div class="col-md-4">
				<input type="number" class="form-control" v-model="payload.weight" />
			</div>
			<div class="col-md-2">
				<label class="form-label">Main sport prior to ACL injury</label>
			</div>
			<div class="col-md-4">
				<SelectDropdown
					:dropdownOptions="mainSport"
					:defaultOption="payload.sport || `Please select a sport`"
					:Key="`sport`"
					:isDisabled="isDisabled"
					@onChange="onChangeSelect"
				/>
			</div>
		</div>
		<div class="mb-3 row">
			<div class="col-md-2">
				<label class="form-label">Current activity level</label>
			</div>
			<div class="col-md-4">
				<SelectDropdown
					:dropdownOptions="activityLevel"
					:defaultOption="
						payload.current_activity || `Please select current activity level`
					"
					:Key="`current_activity`"
					:isDisabled="isDisabled"
					@onChange="onChangeSelect"
				/>
			</div>
			<div class="col-md-2">
				<label class="form-label">Date of knee injury</label>
			</div>
			<div class="col-md-4">
				<input
					type="date"
					class="form-control"
					v-model="payload.date_of_injury"
				/>
			</div>
		</div>
		<div class="mb-3 row">
			<div class="col-md-2">
				<label class="form-label">Which knee is affected</label>
			</div>
			<div class="col-md-4">
				<div class="col-md-4 d-flex">
					<RadioButton
						:options="knee"
						:Key="`knee`"
						:isDisabled="isDisabled"
						:selectedOption="payload.knee"
						@onChange="onRadioSelect"
					/>
				</div>
			</div>
			<div class="col-md-2">
				<label class="form-label">Mechanism of injury</label>
			</div>
			<div class="col-md-4">
				<SelectDropdown
					:dropdownOptions="mechanismInjury"
					:defaultOption="
						payload.mechanism_injury || `Please select a mechanism of injury`
					"
					:Key="`mechanism_injury`"
					:isDisabled="isDisabled"
					@onChange="onChangeSelect"
				/>
			</div>
		</div>

		<div class="mb-3 row">
			<div class="col-md-2">
				<label class="form-label">Previous ACL injuries on same knee</label>
			</div>
			<div class="col-md-4">
				<input
					type="number"
					class="form-control"
					v-model="payload.injuries_same"
				/>
			</div>
			<div class="col-md-2">
				<label class="form-label">Previous ACL injuries on other knee</label>
			</div>
			<div class="col-md-4">
				<input
					type="number"
					class="form-control"
					v-model="payload.injuries_other"
				/>
			</div>
		</div>
		<div class="mb-3 row">
			<div class="col-md-2">
				<label class="form-label"
					>Previous ACL reconstructions on same knee</label
				>
			</div>
			<div class="col-md-4">
				<input
					type="number"
					class="form-control"
					v-model="payload.reconstructions_same"
				/>
			</div>
			<div class="col-md-2">
				<label class="form-label"
					>Previous ACL reconstructions on other knee</label
				>
			</div>
			<div class="col-md-4">
				<input
					type="number"
					class="form-control"
					v-model="payload.reconstructions_other"
				/>
			</div>
		</div>
		<div class="mb-3 row">
			<div class="col-md-2">
				<label class="form-label">Choose Practitioner</label>
			</div>
			<div class="col-md-4">
				<SelectDropdown
					:dropdownOptions="doctorList"
					:defaultOption="payload.doctor || `Select a Doctor`"
					:Key="`doctor`"
					:isDisabled="isDisabled"
					@onChange="onSelectDoctor"
				/>
			</div>
			<div class="col-md-2">
				<label class="form-label">Planned management</label>
			</div>
			<div class="col-md-4">
				<SelectDropdown
					:dropdownOptions="plannedManagement"
					:defaultOption="
						payload.planned_management || `Please select management plan`
					"
					:Key="`planned_management`"
					:isDisabled="isDisabled"
					@onChange="onChangeSelect"
				/>
			</div>
		</div>
		<div class="mb-3 row">
			<div class="col-md-2">
				<label class="form-label"
					>Other injuries sustained to knee (optional)</label
				>
			</div>
			<div class="col-10">
				<textarea
					type="text"
					class="form-control"
					rows="3"
					v-model="other_injuries"
					:disabled="isDisabled"
				/>
			</div>
		</div>
		<div class="d-flex justify-content-between" style="margin-top: 20px">
			<button class="btn btn-outline-secondary" @click="onCancel">
				Cancel
			</button>
			<div>
				<button
					class="btn btn-outline-secondary"
					@click="onSavetoDrafts"
					:disabled="isDisabled"
				>
					Save
				</button>
				<button
					class="btn btn-primary ml2"
					@click="onFinalize"
					:disabled="isDisabled"
				>
					Finalize
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import SelectDropdown from "./SelectDropdown.vue";
import RadioButton from "./RadioButton.vue";
import { useUserStore } from "@/store/UserStore";
import { mapActions } from "pinia";

export default {
	props: ["isDisabled", "fields", "role"],
	components: { RadioButton, SelectDropdown },
	data() {
		return {
			Role: "",
			details: {},
			allDoctors: [],
			doctorList: [],
			other_injuries: "",
			payload: {
				country: "",
				gender: "",
				dob: "",
				height: "",
				weight: "",
				sport: "",
				current_activity: "",
				date_of_injury: "",
				knee: "",
				mechanism_injury: "",
				injuries_same: "",
				injuries_other: "",
				reconstructions_same: "",
				reconstructions_other: "",
				planned_management: "",
				// survey_date: new Date(),
				doctor: "",
				// patient: ''
				// percentage: ''
			},
			selectedMainSport: "",
			options: [
				{ name: "Male", isChecked: false },
				{ name: "Female", isChecked: false },
			],
			knee: [
				{ name: "Left", isChecked: false },
				{ name: "Right", isChecked: false },
			],
			mainSport: [
				"Alpine Skiing/Snowboarding",
				"Athletics",
				"Australian Rules Football",
				"Basketball",
				"Cricket",
				"Cycling",
				"Dancing/Aerobics/Gymnastics/Ballet",
				"Golf",
				"Gymnastics",
				"Hockey",
				"Martial Arts",
				"Netball",
				"Racquetball",
				"Rugby",
				"Running",
				"Skiing",
				"Swimming",
				"Soccer",
				"Surfing",
				"Tennis/Squash",
				"Volleyball",
				"Wrestling",
				"Other",
				"None",
			],
			activityLevel: [
				"Sick leave or disability pension because of knee problems",
				"Work (eg. Light Labour), Walking on even ground possible",
				"Work (eg. Light Labour), Walking on uneven ground possible but impossible to backpack or hike",
				"Work (eg. Light Labour), Comp & Rec Sports (eg. Swimming, Hiking, Backpacking)",
				"Work (Moderately Heavy Labour (eg. truck driving, etc)), Recreational Sports (eg. Cycling, Cross Country Skiing, Jogging on even ground 2x/week)",
				"Work (eg. Heavy Labour), Competitive Sports (eg. Cycling, X-country Skiing), Recreational Sports (eg. Jogging on uneven ground 2x/week)",
				"Recreational Sports (eg. Tennis, Handball, Basketball, Alpine Skiing, Jogging 5x/week)",
				"Competitive Sports (eg. Tennis, Athletics (running), Handball, Basketball, Motorcross, Cross country track), Recreational Sports (eg. Soccer, Football, Hockey, Squash, Athletics (jumping), Cross country track)",
				"Competitive Sports (eg. Racquetball, Squash, Track and Field, Alpine Skiing)",
				"Competitive Sports (eg. Soccer, Football, Rugby (lower divisions), Hockey, Wrestling, Gymnastics)",
				"Competitive Sports (eg. Soccer, Football, Rugby (national elite))",
			],
			mechanismInjury: [
				"Contact (eg. another player/person involved at the time of injury)",
				"Non-contact (eg. twist, pivot, land without contact from another player)",
				"Other",
			],
			plannedManagement: [
				"Surgical (ACL reconstruction)",
				"Non-surgical (rehabilitation without surgery)",
			],
		};
	},
	methods: {
		...mapActions(useUserStore, [
			"getDoctorList",
			"onCreatePhase",
			"onEditPhase",
		]),
		onChangeSelect(key, value) {
			let array =
				key === "sport"
					? this.mainSport
					: key === "current_activity"
						? this.activityLevel
						: key === "mechanism_injury"
							? this.mechanismInjury
							: this.plannedManagement;

			const selectedData = array.filter((option) => option === value)[0];

			this.payload[key] = selectedData;
		},

		onRadioSelect(key, value) {
			let array = key === "gender" ? this.options : this.knee;

			const new_list = array.map((option) => {
				return { ...option, isChecked: option.name === value };
			});

			array = [...new_list];

			const selectedData = array.filter((option) => option.isChecked)[0]?.name;

			key === "gender"
				? (this.options = [...new_list])
				: (this.knee = [...new_list]);

			this.payload[key] = selectedData;
		},

		onSelectDoctor(key, value) {
			const selectedData = this.allDoctors.filter((obj) => {
				return value?.split(" ")[0] === obj?.first_name;
			})?.[0]?.email;

			this.payload[key] = selectedData;
		},

		onCancel() {
			this.$router.push(`/${this.role ?? this.Role}-portal`);
		},

		async onFinalize() {
			try {
				this.payload = {
					...this.payload,
					survey_date: new Date(),
					patient_email: this.details.email,
					percentage: 100,
					draft: false,
					other_injuries: this.other_injuries,
					phase: "Demographics",
				};
				const res = await this.onCreatePhase(this.payload);
				if (res?.status === 200) {
					this.$router.push("/patient-portal");
				}
			} catch (error) {
				throw new Error(error);
			}
		},

		async onSavetoDrafts() {
			try {
				this.payload = {
					...this.payload,
					survey_date: new Date(),
					patient_email: this.details.email,
					percentage: this.completionPercentage,
					draft: true,
					other_injuries: this.other_injuries,
					phase: "Demographics",
				};
				const res = this.fields
					? await this.onEditPhase(this.payload)
					: await this.onCreatePhase(this.payload);
				if (res?.status === 200) {
					this.$router.push("/patient-portal");
				}
			} catch (error) {
				throw new Error(error);
			}
		},
	},
	computed: {
		completionPercentage() {
			return this.fields?.percentage
				? this.fields.percentage
				: Math.trunc(
						(Object.values(this.payload).filter(
							(field) => field?.toString().length
						)?.length /
							16) *
							100
					);
		},
	},
	async mounted() {
		try {
			const { role } = JSON.parse(localStorage.getItem("userData"));
			this.Role = role;

			const inputElements = document.querySelectorAll(`input.form-control`);
			for (const input of inputElements) {
				input.disabled = this.isDisabled;
			}

			if (this.fields) {
				this.payload = { ...this.payload, ...this.fields };
				this.other_injuries = this.fields.other_injuries;
			}

			this.details = JSON.parse(localStorage.getItem("userData"));

			const res = await this.getDoctorList();
			if (res?.status === 200) {
				this.allDoctors = res?.data?.data;
				const mapDoctorName = this.allDoctors?.map((docObj) => {
					return docObj?.first_name + " " + docObj?.last_name;
				});
				this.doctorList = [...mapDoctorName];
			}
		} catch (error) {
			throw new Error(error);
		}
	},
};
</script>
