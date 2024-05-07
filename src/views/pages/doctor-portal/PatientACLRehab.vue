<template>
	<h4>Your Patients</h4>
	<div class="row">
		<div class="col-md-10">
			<SurveyDetails :surveyData="allData" :role="Role" />
		</div>
		<div class="col-md-2"></div>
	</div>
</template>

<script>
import { mapActions } from "pinia";
import SurveyDetails from "../../../components/SurveyDetails.vue";
import { useUserStore } from "@/store/UserStore";

export default {
	components: { SurveyDetails },
	data() {
		return { allData: [], Role: "" };
	},
	methods: { ...mapActions(useUserStore, ["getLatestPhase"]) },
	async mounted() {
		try {
			const { role, email } = JSON.parse(localStorage.getItem("userData"));

			this.Role = role;

			const res = await this.getLatestPhase(role, email);
			if (res?.status === 200) {
				this.allData = [...res.data.data];
			}
		} catch (error) {
			throw new Error(error);
		}
	},
};
</script>
