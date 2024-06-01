<template>
	<div
		class="alert alert-danger pt-3 pb-5"
		role="alert"
		v-if="message"
		style="position: absolute; top: 40%;left:40%; width: 50vw !important,z-index:5"
	>
		{{ message }}
	</div>
</template>

<script>
export default {
	props: ["message"],
};
</script>
