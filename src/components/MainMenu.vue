<template>
	<header
		class="d-flex justify-content-between align-items-center main-nav py-3 px-2"
	>
		<h4>{{ name }}</h4>
		<RouterLink
			to="/"
			class="fs-6 fw-bold"
			style="color: rgba(0, 119, 182, 0.6) !important"
			>Logout<i class="bi bi-box-arrow-right mx-2"></i
		></RouterLink>
	</header>
</template>

<script>
export default {
	data() {
		return { name: "" };
	},
	mounted() {
		const { first_name, last_name } = JSON.parse(
			localStorage.getItem("userData")
		);

		this.name = first_name + " " + last_name;
	},
};
</script>
