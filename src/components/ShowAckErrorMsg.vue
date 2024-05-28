<template>
	<div
		class="alert alert-primary"
		role="alert"
		v-if="status && msg?.length"
		style="position: absolute; top: 5px; width: 50vw !important"
	>
		{{ msg }}
	</div>
	<div
		class="alert alert-danger"
		role="alert"
		v-if="!status && msg?.length"
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
