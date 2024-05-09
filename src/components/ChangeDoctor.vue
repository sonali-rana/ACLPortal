<template>
	<div class="modal fade" id="Modal" ref="my_modal">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-body d-flex flex-column justify-content-evenly p-3">
					<h5 class="modal-title my-3">Change Doctor</h5>
					<SelectDropdown
						:dropdownOptions="doctorList"
						:defaultOption="`Please select a doctor`"
						:Key="`doctor`"
						:isDisabled="isDisabled"
						@onChange="onChangeSelect"
					/>
					<div class="d-flex justify-content-between mb-3 mt-5">
						<button
							type="button"
							class="btn btn-outline-secondary"
							data-bs-dismiss="modal"
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
	</div>
</template>

<script>
import { mapActions } from "pinia";
import SelectDropdown from "./SelectDropdown.vue";
import { useUserStore } from "@/store/UserStore";
export default {
	props: ["allDoctors", "doctorList", "id", "selectedDoctor"],
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
			if (!this.doctor) {
				// Handle case where no doctor is selected
				return;
			}
			try {
				console.log("called", this.doctor);
				const res = await this.onChangeDoctor({
					id: this.id,
					doctor: this.doctor,
				});
				if (res.status === 200) {
					this.$refs.my_modal.hidden = true;
				}
			} catch (err) {
				throw new Error(err);
			}
		},
	},
};
</script>
