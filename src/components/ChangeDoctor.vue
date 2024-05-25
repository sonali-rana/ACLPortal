<style scoped>
.bg-popUp {
	background-color: rgb(0, 0, 0, 0.5) !important;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 2;
}
.popUp {
	min-height: 30%;
	width: 35%;
	background-color: white;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;
}
p {
	color: black;
}
</style>

<template>
	<div v-if="showModal" class="bg-popUp">
		<div class="popUp pt-4 px-3">
			<div class="d-flex flex-column justify-content-evenly">
				<h5 class="py-2">Change Doctor</h5>
				<SelectDropdown
					:dropdownOptions="doctorList"
					:defaultOption="`Please select a doctor`"
					:Key="`doctor`"
					:isDisabled="isDisabled"
					@onChange="onSelectDoctor"
				/>
				<div class="d-flex justify-content-between mt-5">
					<button
						type="button"
						class="btn btn-outline-secondary"
						@click="this.$emit('onCloseModal')"
					>
						Close
					</button>
					<button type="button" class="btn btn-primary" @click="onSave">
						Save changes
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from "pinia";
import SelectDropdown from "./SelectDropdown.vue";
import { useUserStore } from "@/store/UserStore";
export default {
	props: ["allDoctors", "doctorList", "id", "selectedDoctor", "showModal"],
	emits: ["onCloseModal"],
	components: { SelectDropdown },
	data() {
		return { doctor: "" };
	},
	methods: {
		...mapActions(useUserStore, ["onChangeDoctor"]),
		onSelectDoctor(key, value) {
			const selectedData = this.allDoctors.filter((obj) => {
				return value?.split(" ")[0] === obj?.first_name;
			})?.[0]?.email;

			this.doctor = selectedData;
		},
		async onSave() {
			if (!this.doctor.length) {
				// Handle case where no doctor is selected
				return;
			}
			try {
				const res = await this.onChangeDoctor({
					id: this.id,
					doctor: this.doctor,
				});
				if (res.status === 200) {
					this.$emit("onCloseModal");
				}
			} catch (err) {
				throw new Error(err);
			}
		},
	},
};
</script>
