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
						<span class="d-flex"
							><input
								:type="!isVisible ? 'password' : 'text'"
								class="form-control"
								v-model="payload.password"
							/>
							<span
								@click="togglePasswordVisibility"
								style="margin-left: -30px"
							>
								<i v-if="!isVisible" class="bi bi-eye-slash fs-4"></i>
								<i v-else class="bi bi-eye fs-4"></i>
							</span>
						</span>
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
	<ShowError :message="message" />
</template>

<script>
import { useAuthStore } from "@/store/AuthStore";
import { mapActions } from "pinia";
import ShowError from "./ShowError.vue";

export default {
	components: { ShowError },
	data() {
		return {
			payload: { email: "", password: "" },
			message: "",
			isVisible: false,
		};
	},
	methods: {
		...mapActions(useAuthStore, ["login"]), // Maps actions to methods
		async onLogin() {
			try {
				const res = await this.login(this.payload); // Access action using property syntax
				if (res.status === 200) {
					const role = res.data.role;
					this.$router.push(`/${role}-portal`);
				}
			} catch (error) {
				this.message = error?.message ?? error;
				throw new Error(error);
			} finally {
				setTimeout(() => (this.message = ""), 9000);
			}
		},
		togglePasswordVisibility() {
			this.isVisible = !this.isVisible;
		},
	},
};
</script>
