<template>
	<div class="d-flex justify-content-between align-items-center">
		<h4>All Surveys</h4>
		<RouterLink to="/demographics"
			><button class="btn btn-primary">
				Start New ACL rehabilitation
			</button></RouterLink
		>
	</div>
	<SurveyDetails :surveyData="allData" :role="Role" />
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
