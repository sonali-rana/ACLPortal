<template>
	<div class="d-flex">
		<img
			src="/src/assets/bg2.jpg"
			width="750"
			alt="acl_image"
			style="margin-top: 50px"
		/>
		<div class="px-2" style="margin-top: 170px; width: 500px">
			<h4>Melbourne ACL Rehabilitation Doctor Registration</h4>
			<div>
				<span>Please complete the following information to register.</span>
			</div>
			<div class="my-3 container">
				<div class="mb-3 row">
					<div class="col">
						<label class="form-label">First Name</label>
						<input
							type="text"
							class="form-control"
							v-model="payload.firstname"
						/>
					</div>
					<div class="col">
						<label class="form-label">Last Name</label>
						<input
							type="text"
							class="form-control"
							v-model="payload.lastname"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col">
						<label class="form-label">Email Address</label>
						<input type="email" class="form-control" v-model="payload.email" />
					</div>
					<div class="col">
						<label class="form-label">Phone</label>
						<input type="tel" class="form-control" v-model="payload.phone" />
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
					<div class="col">
						<label class="form-label">Confirm Password</label>
						<span class="d-flex"
							><input
								:type="!isConfirmVisible ? 'password' : 'text'"
								class="form-control"
								v-model="confirmPassword"
							/>
							<span @click="toggleConfirmPassword" style="margin-left: -30px">
								<i v-if="!isConfirmVisible" class="bi bi-eye-slash fs-4"></i>
								<i v-else class="bi bi-eye fs-4"></i>
							</span>
						</span>
					</div>
				</div>

				<div class="mb-3 row">
					<div class="col">
						<label class="form-label">Experience (years)</label>
						<input
							type="number"
							class="form-control"
							v-model="payload.experience"
						/>
					</div>
					<div class="col">
						<label class="form-label">License Number</label>
						<input type="text" class="form-control" v-model="payload.license" />
					</div>
				</div>
			</div>
			<div class="p-3 d-flex justify-content-between align-items-baseline">
				<p>
					Already have an account?<RouterLink to="/login">Login</RouterLink>
				</p>
				<button class="btn btn-primary" @click="onRegister">Register</button>
			</div>
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
			confirmPassword: "",
			payload: {
				firstname: "",
				lastname: "",
				email: "",
				phone: "",
				password: "",
				experience: null,
				license: "",
				role: "doctor",
			},
			message: "",
			isVisible: false,
			isConfirmVisible: false,
		};
	},
	methods: {
		...mapActions(useAuthStore, ["register"]),
		async onRegister() {
			if (this.payload.password !== this.confirmPassword) {
				return;
			}
			try {
				const res = await this.register(this.payload);

				if (res?.status === 200) {
					this.payload = {
						firstname: "",
						lastname: "",
						email: "",
						phone: "",
						password: "",
						experience: null,
						role: "doctor",
					};
					this.confirmPassword = "";
					this.$router.push("/doctor-portal");
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
		toggleConfirmPassword() {
			this.isConfirmVisible = !this.isConfirmVisible;
		},
	},
	mounted() {
		//fix pinia not loading on first load
		const hash = "#hard-refresh"; // Unique hash value

		if (window.location.hash !== hash) {
			window.location.hash = hash;
			window.location.reload(true); // Force a hard reload
		}
	},
};
</script>
