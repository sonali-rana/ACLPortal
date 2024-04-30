import { defineStore } from "pinia";
import API from "@/API/api";

export const useUserStore = defineStore("authStore", {
	state: () => ({ count: 0, name: "Eduardo" }),

	actions: {
		async getDoctorList() {
			try {
				const res = await API.get("/doctor_list/");
				console.log("res", res);

				return res;
			} catch (error) {
				throw new Error(error);
			}
		},
		async onEditUserDetails(payload) {
			try {
				const res = await API.put("/edit_user/", payload);
				console.log("res", res);

				return res;
			} catch (error) {
				throw new Error(error);
			}
		},
		async onSubmitDemographics(payload) {
			try {
				const res = await API.post("/create_demographics/", payload);
				console.log("res", res);

				return res;
			} catch (error) {
				throw new Error(error);
			}
		},
		async getCreatedDemographics(role, email) {
			try {
				const res = await API.get(
					`/get_demographics/?role=${role}&email=${email}`
				);
				console.log("res", res);

				return res;
			} catch (error) {
				throw new Error(error);
			}
		},
	},
});
