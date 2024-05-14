<template>
	<header
		class="d-flex justify-content-between align-items-center main-nav py-3 px-2"
	>
		<div class="d-flex">
			<h4>{{ name }}</h4>
			<p class="pt-1 px-2">{{ `(${role})` }}</p>
		</div>

		<RouterLink to="/" class="fs-6 fw-bold"
			>Logout<i class="bi bi-box-arrow-right mx-2"></i
		></RouterLink>
	</header>
</template>

<script>
export default {
	data() {
		return { name: "", role: "" };
	},
	mounted() {
		const { first_name, last_name, role } = JSON.parse(
			localStorage.getItem("userData")
		);

		this.role = role.charAt(0).toUpperCase() + role.slice(1);

		this.name = first_name + " " + last_name;
	},
};
</script>

<style scoped>
header {
	background-color: rgb(252, 207, 108, 0.6);
}
h4,
p,
a {
	color: hsla(160, 100%, 37%, 1) !important;
}

a:hover {
	scale: 1.08;
}
</style>
