<template>
	<select
		class="form-select"
		aria-label="Default select example"
		@change="emitChange"
		:disabled="isDisabled"
	>
		<option selected>{{ defaultOption }}</option>
		<option v-for="option in dropdownOptions" :value="option" :key="option">
			{{ option }}
		</option>
	</select>
</template>

<script>
export default {
	props: ["Key", "defaultOption", "dropdownOptions", "isDisabled"],
	methods: {
		emitChange(event) {
			this.$emit("onChange", this.Key, event.target.value);
		},
	},
};
</script>
