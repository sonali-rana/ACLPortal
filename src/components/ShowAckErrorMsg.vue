<template>
	<div
		class="alert alert-primary"
		role="alert"
		v-if="status"
		style="position: absolute; top: 5px; width: 50vw !important"
	>
		{{ msg }}
	</div>
	<div
		class="alert alert-danger"
		role="alert"
		v-if="!status && status !== null"
		style="position: absolute; top: 5px; width: 50vw !important"
	>
		{{ msg }}
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useUserStore } from "@/store/UserStore";
export default {
	computed: {
		...mapState(useUserStore, ["status", "msg"]),
	},
};
</script>
