<template>
	<table class="table my-4">
		<thead>
			<tr class="fw-bold">
				<th scope="col"><b>Name</b></th>
				<th scope="col"><b>Email</b></th>
				<th scope="col"><b>Date Sent</b></th>
				<th scope="col"><b>Accepted</b></th>
				<th scope="col"></th>
				<th scope="col" v-if="role === 'doctor'"></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="data in surveyData" :key="data.id">
				<td>{{ data.patient_name }}</td>
				<td>{{ data.patient_email }}</td>
				<td>{{ formatDate(data.survey_date) }}</td>
				<td>No</td>
				<td scope="col" v-if="role === 'doctor'">
					<button class="btn btn-success" @click="onAccept(data.id)">
						Accept
					</button>
				</td>
				<td>
					<button class="btn btn-danger" @click="onDelete(data.id)">
						Delete
					</button>
				</td>
			</tr>
		</tbody>
	</table>
	<ShowAckErrorMsg />
</template>

<script>
import { mapActions } from "pinia";
import { useUserStore } from "@/store/UserStore";
import ShowAckErrorMsg from "./ShowAckErrorMsg.vue";

export default {
	props: ["surveyData", "role"],
	components: { ShowAckErrorMsg },
	methods: {
		...mapActions(useUserStore, ["onDeleteRequest", "onApproval"]),
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
		async onDelete(id) {
			try {
				const res = await this.onDeleteRequest(id);
				if (res.status === 200) {
					this.$emit("getAllSurveys");
				}
			} catch (err) {
				throw new Error(err);
			}
		},
		async onAccept(id) {
			try {
				const res = await this.onApproval({ accept: "accepted", id });
				if (res.status === 200) {
					setTimeout(() => this.$router.push("/doctor-portal"), 2000);
				}
			} catch (err) {
				throw new Error(err);
			}
		},
	},
};
</script>
