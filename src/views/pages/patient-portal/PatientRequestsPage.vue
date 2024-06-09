<template>
	<h4>Requests you've sent</h4>
	<AllPatients
		:surveyData="allData"
		:role="Role"
		@getAllSurveys="getAllSurveys"
	/>
</template>

<script>
import { mapActions } from "pinia";
import AllPatients from "../../../components/AllPatients.vue";
import { useUserStore } from "@/store/UserStore";

export default {
	components: { AllPatients },
	data() {
		return { allData: {}, Role: "" };
	},

	methods: {
		...mapActions(useUserStore, ["getCreatedDemographics"]),
		async getAllSurveys() {
			try {
				const { role, email } = JSON.parse(localStorage.getItem("userData"));

				this.Role = role;

				const res = await this.getCreatedDemographics(role, email);
				if (res?.status === 200) {
					this.allData = [...res.data.data];
				}
			} catch (error) {
				throw new Error(error);
			}
		},
	},

	mounted() {
		//fix pinia not loading on first load
		const hash = "#1"; // Unique hash value

		if (window.location.hash !== hash) {
			window.location.hash = hash;
			window.location.reload(true); // Force a hard reload
		}

		this.getAllSurveys();
	},
};
</script>
