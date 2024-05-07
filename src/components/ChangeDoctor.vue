<template>
	<div class="modal fade" id="exampleModal">
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
						<button type="button" class="btn btn-primary">Save changes</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SelectDropdown from "./SelectDropdown.vue";
export default {
	props: ["allDoctors", "doctorList"],
	components: { SelectDropdown },
};
</script>
