import { defineStore } from "pinia";
import API from "@/API/api";

export const useUserStore = defineStore("authStore", {
	state: () => ({ doctorList: [], allDoctors: [], status: null, msg: "" }),

	actions: {
		async getDoctorList() {
			try {
				const res = await API.get("/doctor_list/");
				if (res?.status === 200) {
					this.allDoctors.push(...res?.data?.data);
					const mapDoctorName = this.allDoctors?.map((docObj) => {
						return docObj?.first_name + " " + docObj?.last_name;
					});
					this.doctorList.push(...mapDoctorName);
				}
				return res;
			} catch (error) {
				throw new Error(error);
			}
		},
		async onEditUserDetails(payload) {
			try {
				const res = await API.put("/edit_user/", payload);
				if (res.status === 200) {
					this.status = true;
					this.msg =
						res.data.message ?? res.message ?? "Details edited successfully!!!";
				} else {
					this.status = false;
					this.msg =
						res.data.message ??
						res.message ??
						"Something went wrong while updating. Try Again!!!";
				}
				return res;
			} catch (error) {
				throw new Error(error);
			} finally {
				setTimeout(() => (this.status = null), 2000);
			}
		},

		async onSubmitDemographics(payload) {
			try {
				const res = await API.post("/create_demographics/", payload);

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

				return res;
			} catch (error) {
				throw new Error(error);
			}
		},
		async getLatestPhase(role, email) {
			try {
				const res = await API.get(
					`/get_current_phase/?role=${role}&email=${email}`
				);

				return res;
			} catch (error) {
				throw new Error(error);
			}
		},
		async getAllPhases(role, id) {
			try {
				const res = await API.get(
					`/get_phases/?role=${role}&demographics_id=${id}`
				);

				return res;
			} catch (error) {
				throw new Error(error);
			}
		},
		async onCreatePhase(payload) {
			try {
				const res = await API.post("/create_phases/", payload);

				return res;
			} catch (error) {
				throw new Error(error);
			}
		},
		async onDeleteRequest(id) {
			try {
				const res = await API.delete(`/delete_survey/?id=${id}`);

				if (res.status === 200) {
					this.status = true;
					this.msg = res.data.message ?? res.message;
				} else {
					this.status = false;
					this.msg = res.data.message ?? res.message;
				}
				return res;
			} catch (error) {
				throw new Error(error);
			} finally {
				setTimeout(() => (this.status = null), 2000);
			}
		},

		async onApproval(payload) {
			try {
				const res = await API.put(`/doctor_approve/`, payload);

				if (res.status === 200) {
					this.status = true;
					this.msg = res.data.message ?? res.message;
				} else {
					this.status = false;
					this.msg = res.data.message ?? res.message;
				}
				return res;
			} catch (error) {
				throw new Error(error);
			} finally {
				setTimeout(() => (this.status = null), 2000);
			}
		},
	},
});
