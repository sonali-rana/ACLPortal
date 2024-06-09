<template>
	<nav class="d-flex justify-content-between align-items-center">
		<h4>
			<i class="bi bi-h-square fs-2" style="margin-right: 20px"></i>Healthwise
			Medical Center
		</h4>
		<div class="d-flex">
			<a aria-current="page" href="#home">Home</a>
			<a href="#find-doc">Find a Doctor</a>
			<a href="#about">About Us</a>
			<a href="#contact">Contact Us</a>
		</div>
		<form class="d-flex">
			<span
				>Already registered?<RouterLink to="/login"
					><button class="btn btn-success mx-2">Login</button></RouterLink
				></span
			>
			<!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-light" type="submit">Search</button> -->
		</form>
	</nav>
</template>
