<template>
	<div class="d-flex flex-column">
		<NavBar />
		<!-- <div class="card" style="width: 100vw !important; height: 500px"> -->
		<!-- <img
        src="/src/assets/Home.jpg"
        class="card-img"
        alt="acl_image"
        style="width: 100vw; height: 500px; opacity: 0.8"
      /> -->
		<!-- <div class="card-img-overlay text-center" style="color: black !important; padding-top: 100px">
        <h1 class="card-title fs-1">Melbourne ACL Rehabilitation</h1>
        <p class="card-text" style="color: black !important">Welcome to Physio Medical Center</p>
        <p class="card-text" style="color: black !important">
          Providing quality care and exceptional patient experience.
        </p>
      </div>
    </div>
    <div class="my-3">
      <span>Already have an account?<button class="btn btn-primary">Login</button></span>
    </div> -->
		<div style="width: 100vw !important">
			<div
				class="d-flex justify-content-between mt-3 py-2"
				style="
					background-color: rgb(252, 207, 108);
					padding-left: 150px;
					padding-right: 10px;
				"
			>
				<div class="py-5" style="width: 800px">
					<h2>Welcome to Physio Medical Center Melbourne ACL Rehabilitation</h2>
					<!-- <h2>Melbourne ACL Rehabilitation</h2> -->
					<a href="#"
						>Providing quality care and exceptional patient experience.</a
					>
					<br /><br />
					<p>
						The anterior cruciate ligament (ACL) is one of the major stabilizing
						ligaments in the knee joint. It connects the femur (thigh bone) to
						the tibia (shin bone) and helps control the back-and-forth motion of
						the knee. The ACL plays a crucial role in providing rotational
						stability to the knee during activities that involve sudden stops,
						changes in direction, and pivoting movements.
					</p>

					<!-- <h5 class="mt-5">Our Services</h5> -->
					<!-- <div class="my-3">
          <span>Already have an account?<button class="btn btn-primary">Login</button></span>
        </div> -->
					<!-- <div class="d-flex mt-5">
            <div class="content-box px-5 py-1">
              <p>Primary Care</p>
            </div>
            <div class="content-box px-5 py-1">
              <p>Speciality Care</p>
            </div>
          </div> -->
				</div>
				<img
					src="/src/assets/img_bg4.jpeg"
					class="card-img"
					alt="acl_image"
					style="width: 30vw; height: 400px; opacity: 0.8"
				/>
			</div>
			<div class="py-5 px-5 d-flex justify-content-evenly" id="registration">
				<h3 class="pt-5">Register Here!</h3>
				<div class="box p-3" style="background-color: rgba(0, 119, 182, 0.1)">
					<h6>Create New Account-Patient</h6>
					<span
						>Complete if you are a participant with an ACL reconstruction</span
					>
					<br />
					<!-- <RouterLink
						to="/register"
						style="background-color: rgba(0, 119, 182, 0.01)"
					> -->
					<button
						class="btn btn-primary my-2"
						@click="this.$router.push('/register')"
						style="width: 100% !important"
					>
						Register
					</button>
					<!-- </RouterLink> -->
				</div>
				<div class="box p-3" style="background-color: rgba(0, 119, 182, 0.1)">
					<!-- <RouterLink
						to="/doc-registration"
						style="background-color: rgba(0, 119, 182, 0.01)"
					> -->
					<h6>Create New Account-Doctor</h6>
					<span
						>Complete if you are a participant with an ACL reconstruction</span
					>
					<br />
					<!-- </RouterLink> -->
					<button
						class="btn btn-primary my-2"
						style="width: 100% !important"
						@click="this.$router.push('/doc-registration')"
					>
						Register
					</button>
				</div>
			</div>
			<div class="d-flex" style="background-color: rgb(77, 172, 182)">
				<img
					src="/src/assets/img_bg5.jpeg"
					class="card-img"
					alt="acl_image"
					style="width: 30vw; height: 400px; opacity: 0.8"
				/>
				<div class="p-5" id="about">
					<h4>More About the Program</h4>
					<h6>
						Learn about the evidence-based treatment program for anterior
						cruciate ligament (ACL) injury rehabilitation.
					</h6>
					<span style="color: white"
						>You are invited to take part in this research project. The research
						project is collecting information about the evidence-based treatment
						program for anterior cruciate ligament (ACL) injury rehabilitation
						that you are completing with your health practitioner (The Melbourne
						ACL Rehabilitation Guide 2.0). <br /><br />
						We will ask you to enter data obtained from completing the outcome
						measures as described in the Melbourne ACL Rehabilitation Guide 2.0,
						as well as questions about your age, your general health, and your
						knee injury.We will ask you to enter this data at the completion of
						each of the 6 phases of the Melbourne ACL Rehabilitation Guide 2.0
						by logging back into the database.<br />
						<br />
						The questions will take you around 15 minutes to answer each time.
						Your health practitioner will also add the results of your physical
						tests (e.g., range of movement, strength, hopping, agility). 1, 2,
						and 3 years after completing your ACL rehabilitation, you will
						automatically receive an email asking you the same questionnaires.
						The information is securely stored in a database at La Trobe
						University. Only the researchers will have access to this
						information.<RouterLink
							to="#"
							style="color: rgba(0, 119, 182, 0.9) !important"
							>......more</RouterLink
						>
					</span>
				</div>
			</div>
			<!-- <div class="mt-5 d-flex justify-content-evenly" id="find-doc">
				<form class="p-5" style="width: 500px">
					<h3>Find Doctors Here</h3>
					<div class="my-3 container">
						<div class="mb-3 row">
							<div class="col">
								<label class="form-label">Check List of Doctors</label>
								<input type="email" class="form-control" placeholder="" />
							</div>
						</div>
						<div class="mb-3 row">
							<div class="col">
								<label class="form-label">Search Doctor by Name</label>
								<input type="email" class="form-control" placeholder="" />
							</div>
						</div>
					</div>
				</form>
				<img
					src="/src/assets/search.png"
					class="card-img"
					alt="acl_image"
					style="width: 20vw; height: 300px; opacity: 0.8"
				/>
			</div> -->
			<!-- <img
					src="/src/assets/contact.png"
					class="card-img"
					alt="acl_image"
					style="width: 30vw; height: 300px; opacity: 0.8"
				/> -->
			<div
				class="py-5 px-5 d-flex justify-content-evenly align-items-center"
				id="contact"
			>
				<h4>Ways to contact us</h4>
				<br />
				<div
					class="d-flex flex-column align-items-center gap-2 contact-container"
				>
					<i class="bi bi-envelope-fill fs-2 mx-3 icon mt-4"></i>
					<p class="p-font">Email us</p>
					<a
						href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kvsai0998@gmail.com"
						target="_blank"
					>
						kvsai0998@gmail.com
					</a>
				</div>
				<div
					class="d-flex flex-column align-items-center gap-2 contact-container"
				>
					<i class="bi bi-telephone-fill fs-2 mx-3 icon mt-4"></i>
					<p class="p-font">Call us</p>
					<a href="##">0424560458</a>
				</div>
			</div>
			<!-- <div class="pt-5 px-5" id="sponsers">
					<h4>Proudly supported by</h4>
					<br />
					<img src="/src/assets/latrobe-red.png" height="20" />
					<br /><br />
					<img src="/src/assets/premax-blue.png" height="20" />
				</div> -->
			<CopyRight />
		</div>
	</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CopyRight from "@/components/CopyRight.vue";

export default {
	components: { NavBar, CopyRight },
};
</script>

<style scoped>
.contact-container {
	height: 200px;
	width: 250px;
	border: 2px solid #f3f2f6;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 0 2px 10px -1px rgba(100, 116, 139, 0.2);
}

.icon {
	height: 50px;
	width: 50px;
	border: 2px solid rgba(0, 119, 182, 0.9) !important;
	color: rgba(0, 119, 182, 0.9) !important;
	border-radius: 25px;
	text-align: center;
}

.p-font {
	color: rgba(0, 119, 182, 0.9) !important;
	font-size: 18px;
	font-weight: 700;
}

#contact {
	height: 300px;
	width: 100%;
	background-color: #e8f1f8;
}

#contact a {
	color: rgba(0, 119, 182, 0.9) !important;
}
</style>
