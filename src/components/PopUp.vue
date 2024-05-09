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
</style>

<template>
	<div v-if="showPopup" class="bg-popUp" @click="closePopup">
		<div class="popUp p-3"><slot /></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showPopup: false,
		};
	},
	methods: {
		closePopup() {
			this.showPopup = false;
		},
	},
};
</script>
