import { createWebHistory, createRouter } from "vue-router";

const routes = [
	{
		path: "/register",
		component: () => import("@/views/auth/AuthPage.vue"),
		children: [
			{
				path: "",
				component: () => import("@/views/auth/PatientRegistration.vue"),
			},
			{ path: "/login", component: () => import("@/views/auth/LoginPage.vue") },
			{
				path: "/doc-registration",
				component: () => import("@/views/auth/DoctorRegistration.vue"),
			},
			{
				path: "/forgot-password",
				component: () => import("@/views/auth/ForgotPassword.vue"),
			},
			{
				path: "/reset-password",
				component: () => import("@/views/auth/ResetPassword.vue"),
			},
		],
	},
	{ path: "/", component: () => import("@/views/pages/HomePage.vue") },
	{
		path: "/patient-portal",
		component: () => import("@/views/pages/patient-portal/PatientPortal.vue"),
		children: [
			{
				path: "",
				component: () =>
					import("@/views/pages/patient-portal/DemographicsForm.vue"),
			},
			{
				path: "/all-surveys",
				component: () => import("@/views/pages/patient-portal/AllSurveys.vue"),
			},
			{
				path: "/patient-details",
				component: () =>
					import("@/views/pages/patient-portal/PatientAccount.vue"),
			},
			{
				path: "/patient-requests",
				component: () =>
					import("@/views/pages/patient-portal/PatientRequestsPage.vue"),
			},
			{
				path: "/edit-details",
				component: () =>
					import("@/views/pages/patient-portal/EditUserDetails.vue"),
			},
			{
				path: "/all-patient-forms",
				component: () =>
					import("@/views/pages/patient-portal/AllPatientForms.vue"),
			},
		],
	},
	{
		path: "/doctor-portal",
		component: () => import("@/views/pages/doctor-portal/DoctorPortal.vue"),
		children: [
			{
				path: "",
				component: () =>
					import("@/views/pages/doctor-portal/PatientACLRehab.vue"),
			},
			{
				path: "/my-patient-requests",
				component: () =>
					import("@/views/pages/doctor-portal/MyInvitations.vue"),
			},
			{
				path: "/doctor-details",
				component: () =>
					import("@/views/pages/doctor-portal/DoctorAccount.vue"),
			},
			{
				path: "/edit-doctor-details",
				component: () =>
					import("@/views/pages/doctor-portal/EditDoctorDetails.vue"),
			},
			{
				path: "/all-doctor-forms",
				component: () =>
					import("@/views/pages/doctor-portal/AllSurveyForms.vue"),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
