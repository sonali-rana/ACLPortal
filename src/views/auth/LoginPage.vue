<template>
	<div class="d-flex">
		<img src="/src/assets/bg.jpg" width="800" alt="acl_image" />
		<div class="px-2" style="margin-top: 200px; width: 400px">
			<h2 class="p-2">Login</h2>
			<div class="my-3 container">
				<div class="mb-3 row">
					<div class="col">
						<label class="form-label">E-Mail Address</label>
						<input type="email" class="form-control" v-model="payload.email" />
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col">
						<label class="form-label">Password</label>
						<input
							type="password"
							class="form-control"
							v-model="payload.password"
						/>
					</div>
				</div>
			</div>

			<div class="p-3 d-flex justify-content-between align-items-center">
				<p>
					<RouterLink to="/forgot-password" style="font-size: 14px"
						>Forgot Password?</RouterLink
					><br />Don't have an account?<RouterLink to="/">Register</RouterLink>
				</p>
				<button class="btn btn-primary" @click="onLogin">Login</button>
			</div>
			<p class="fs-7"></p>
		</div>
	</div>
</template>

<script>
import { useAuthStore } from "@/store/AuthStore";
import { mapActions } from "pinia";

export default {
	data() {
		return { payload: { email: "", password: "" } };
	},
	methods: {
		...mapActions(useAuthStore, ["login"]),
		async onLogin() {
			try {
				const res = await this.login(this.payload);
				if (res.status === 200) {
					this.$router.push("/patient-portal");
				}
			} catch (error) {
				throw new Error(error);
			}
		},
	},
};
</script>
