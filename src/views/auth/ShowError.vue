<template>
	<div
		class="alert alert-danger"
		role="alert"
		v-if="message"
		style="position: absolute; top: 20px;left:40%; width: 50vw !important,z-index:5"
	>
		{{ message }}
	</div>
</template>

<script>
export default {
	props: ["message"],
};
</script>
