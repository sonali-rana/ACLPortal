<template>
	<div
		class="alert alert-danger"
		role="alert"
		v-if="message"
		style="position: absolute; top: 20px;right:2%; width: 50vw !important,z-index:5"
	>
		{{ message }}
	</div>
</template>

<script>
export default {
	props: ["message"],
};
</script>
