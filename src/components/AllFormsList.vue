<template>
	<div class="d-flex flex-wrap" v-if="!currentForm" style="cursor: pointer">
		<div
			class="card m-3"
			v-for="form in allForms"
			:key="form.title"
			@click="onClick(form)"
		>
			<div class="card-body p-3">
				<h5 class="card-title mb-3 generic">{{ form.icon }}</h5>
				<h6 class="card-subtitle text-body-secondary mb-3">
					{{ form.title }}
				</h6>
				<div class="card-text">
					<div
						class="progress"
						role="progressbar"
						aria-label="Animated striped example"
						aria-valuenow="form.progress"
						aria-valuemin="0"
						aria-valuemax="100"
					>
						<div
							class="progress-bar progress-bar-striped bg-info progress-bar-animated"
							:style="{ width: form.progress + '%' }"
						></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div v-if="currentForm === 'Demographics'">
		<DemographicsForm :isDisabled="isDisabled" :fields="fields" :role="role" />
	</div>
	<div v-if="currentForm === 'Pre-Op'">
		<PreOpForm :isDisabled="isDisabled" :fields="fields" :role="role" />
	</div>
	<div v-if="currentForm === 'Phase 1'">
		<PhaseOne :isDisabled="isDisabled" :fields="fields" :role="role" />
	</div>
	<div v-if="currentForm === 'Phase 2'">
		<PhaseTwo :isDisabled="isDisabled" :fields="fields" :role="role" />
	</div>
	<div v-if="currentForm === 'Phase 3'">
		<PhaseThree :isDisabled="isDisabled" :fields="fields" :role="role" />
	</div>
	<div v-if="currentForm === 'Phase 4'">
		<PhaseFour :isDisabled="isDisabled" :fields="fields" :role="role" />
	</div>
</template>

<script>
import DemographicsForm from "@/components/DemographicsForm.vue";
import PreOpForm from "@/components/PreOpForm.vue";
import PhaseOne from "@/components/PhaseOne.vue";
import PhaseTwo from "@/components/PhaseTwo.vue";
import PhaseThree from "@/components/PhaseThree.vue";
import PhaseFour from "@/components/PhaseFour.vue";
import { mapActions } from "pinia";
import { useUserStore } from "@/store/UserStore";

export default {
	components: {
		DemographicsForm,
		PreOpForm,
		PhaseOne,
		PhaseTwo,
		PhaseThree,
		PhaseFour,
	},
	data() {
		return {
			currentForm: null,
			isDisabled: false,
			fields: {},
			allPhasesData: [],
			role: "",
			progressPerecent: [],
			allForms: [],
		};
	},
	methods: {
		...mapActions(useUserStore, ["getAllPhases"]),
		onClick(form) {
			const formTitle = form.title;

			const formFields = this.allPhasesData?.filter(
				(obj) => Object?.keys(obj)?.[0] === form.title
			)[0];

			this.fields = formFields?.[formTitle];

			if (
				this.$route.query.role === "patient" &&
				form.title !== "Demographics" &&
				form.progress !== 100
			) {
				console.log("abc");
				return;
			}

			if (form.progress === 100) this.isDisabled = true;
			this.currentForm = form.title;
		},
	},
	async mounted() {
		try {
			const { id, role } = this.$route.query;
			this.role = role;
			const res = await this.getAllPhases(role, id);
			this.progressPerecent = [...res?.data?.data[1]?.progress];
			this.allPhasesData = res?.data?.data[0];
			this.allForms = [
				{
					icon: "D0",
					title: "Demographics",
					progress: this.progressPerecent?.[0],
				},
				{ icon: "P0", title: "Pre-Op", progress: this.progressPerecent?.[1] },
				{ icon: "P1", title: "Phase 1", progress: this.progressPerecent?.[2] },
				{ icon: "P2", title: "Phase 2", progress: this.progressPerecent?.[3] },
				{ icon: "P3", title: "Phase 3", progress: this.progressPerecent?.[4] },
				{ icon: "P4", title: "Phase 4", progress: this.progressPerecent?.[5] },
			];
		} catch (err) {
			throw new Error(err);
		}
	},
};
</script>

<style scoped>
.card {
	width: 18rem;
	background-color: rgba(0, 119, 182, 0.1) !important;
}
</style>
