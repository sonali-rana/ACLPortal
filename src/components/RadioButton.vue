<template>
	<div
		class="form-check d-flex align-items-start"
		v-for="option in options"
		:key="option"
	>
		<input
			class="form-check-input mx-2"
			type="radio"
			:name="option.name"
			:checked="
				option.isChecked || (isDisabled && selectedOption === option.name)
			"
			@change="emitChange"
			:disabled="isDisabled"
		/>
		<label class="form-check-label"> {{ option.name }} </label>
	</div>
</template>
<script>
export default {
	props: ["options", "Key", "isDisabled", "selectedOption"],
	methods: {
		emitChange(event) {
			this.$emit("onChange", this.Key, event.target.name);
		},
	},
};
</script>
