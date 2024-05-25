<template>
	<div class="d-flex flex-wrap" v-if="!currentForm" style="cursor: pointer">
		<div class="m-3" v-for="data in surveyData" :key="data.id">
			<h5 style="display: inline-block">{{ formatDate(data?.survey_date) }}</h5>
			<span v-if="role === 'patient'">
				<button
					@click="onChangeDoctor(data)"
					style="display: inline-block; margin-left: 120px; color: #fff"
					class="btn btn-info"
				>
					Change Doctor
				</button>
			</span>
			<div class="card my-3" @click="onSelectSurvey(data.id)">
				<div class="card-body py-3">
					<div class="card-title mb-3 d-flex align-items-center">
						<h4 class="generic">
							{{
								data.phase === "Demographics"
									? "D0"
									: data.phase === "Pre-Op"
										? "P0"
										: data.phase === "Phase 1"
											? "P1"
											: data.phase === "Phase 2"
												? "P2"
												: data.phase === "Phase 3"
													? "P3"
													: "P4"
							}}
						</h4>
						<h4 class="card-title mx-3">
							{{ data.phase }}
						</h4>
					</div>

					<div class="card-text my-1">
						<div class="row" v-if="role === 'patient'">
							<div class="col-4"><h6>Doctor</h6></div>
							<div class="col-8">
								<p>{{ data.doctor_name || " N/A" }}</p>
							</div>
						</div>
						<div class="row" v-if="role === 'doctor'">
							<div class="col-4"><h6>Patient</h6></div>
							<div class="col-8">
								<p>{{ data.patient_name || " N/A" }}</p>
							</div>
						</div>
						<div class="row">
							<div class="col-4"><h6>DOB</h6></div>
							<div class="col-8">
								<p>{{ data.dob || " N/A" }}</p>
							</div>
						</div>
						<div class="row">
							<div class="col-4"><h6>Main Sport</h6></div>
							<div class="col-8">
								<p>{{ data.sport || " N/A" }}</p>
							</div>
						</div>
						<div class="row">
							<div class="col-4"><h6>Injury Date</h6></div>
							<div class="col-8">
								<p>{{ data.date_of_injury || " N/A" }}</p>
							</div>
						</div>
						<div class="row">
							<div class="col-4"><h6>Knee</h6></div>
							<div class="col-8">
								<p>{{ data.knee || " N/A" }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div v-if="surveyData?.length === 0" class="my-2">
		<p>Surveys not present at the moment</p>
	</div>
	<ChangeDoctor
		:allDoctors="allDoctors"
		:doctorList="doctorList"
		:id="id"
		:selectedDoctor="doctor"
		:showModal="showModal"
		@onCloseModal="onCloseModal"
	/>
</template>

<script>
import { mapActions } from "pinia";
import { useUserStore } from "@/store/UserStore";
import ChangeDoctor from "./ChangeDoctor.vue";

export default {
	components: { ChangeDoctor },
	props: ["surveyData", "role"],
	data() {
		return {
			showModal: false,
			allDoctors: [],
			doctorList: [],
			id: "",
			doctor: "",
		};
	},
	methods: {
		...mapActions(useUserStore, ["getDoctorList"]),
		formatDate(date) {
			if (typeof date !== "string") return "";
			else {
				const timezoneOffset = new Date(date).getTimezoneOffset();

				// Adjust the date by the offset to get local time
				const localDate = new Date(
					new Date(date).getTime() + timezoneOffset * 60 * 1000
				);

				const formattedDate =
					localDate.toLocaleDateString("en-GB", {
						day: "2-digit",
						month: "2-digit",
						year: "numeric",
						separator: "/",
					}) +
					" , " +
					localDate.toLocaleTimeString("en-US", {
						// Use en-US for 12-hour format
						hour: "2-digit",
						minute: "2-digit",
						hour12: true, // Include AM/PM for 12-hour format
					});

				return formattedDate;
			}
		},
		onCloseModal() {
			this.showModal = false;
		},
		async onChangeDoctor(data) {
			try {
				const res = await this.getDoctorList();
				if (res?.status === 200) {
					this.allDoctors = res?.data?.data;
					const mapDoctorName = this.allDoctors?.map((docObj) => {
						return docObj?.first_name + " " + docObj?.last_name;
					});
					this.doctorList = [...mapDoctorName];
					this.id = data.id;
					this.doctor = data.doctor;
					this.showModal = true;
				}
			} catch (error) {
				throw new Error(error);
			}
		},
		onSelectSurvey(id) {
			this.$router.push({
				path: `/all-${this.role}-forms`,
				query: { role: this.role, id },
			});
		},
	},
};
</script>

<style scoped>
.card {
	min-width: 340px;
	background-color: rgba(0, 119, 182, 0.1) !important;
	box-shadow: 0 2px 10px -1px rgba(100, 116, 139, 0.2);
}
</style>
