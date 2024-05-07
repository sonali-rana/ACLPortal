import { defineStore } from "pinia";
import API from "@/API/api";

export const useAuthStore = defineStore("authStore", {
	state: () => ({}),

	actions: {
		async register(payload) {
			try {
				const res = await API.post("/register/", payload);
				localStorage.setItem("userData", JSON.stringify(res.data));
				return res;
			} catch (error) {
				throw new Error(error);
			}
		},
		async login(payload) {
			try {
				const res = await API.post("/login/", payload);
				if (res?.status === 200) {
					localStorage.setItem("userData", JSON.stringify(res.data));
				}

				return res;
			} catch (error) {
				throw new Error(error);
			}
		},
		async forgotPassword(payload) {
			try {
				const res = await API.post("/forgot_password/", payload);
				return res;
			} catch (error) {
				throw new Error(error);
			}
		},
	},
});
