<template>
	<div class="d-flex flex-wrap" v-if="!currentForm" style="cursor: pointer">
		<div
			class="card m-3"
			style="width: 18rem"
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
		<DemographicsForm :isDisabled="isDisabled" />
	</div>
	<div v-if="currentForm === 'Pre-Op'">
		<PreOpForm :isDisabled="isDisabled" />
	</div>
	<div v-if="currentForm === 'Phase 1'">
		<PhaseOne :isDisabled="isDisabled" />
	</div>
	<div v-if="currentForm === 'Phase 2'">
		<PhaseTwo :isDisabled="isDisabled" />
	</div>
	<div v-if="currentForm === 'Phase 3'">
		<PhaseThree :isDisabled="isDisabled" />
	</div>
	<div v-if="currentForm === 'Phase 4'">
		<PhaseFour :isDisabled="isDisabled" />
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
			allForms: [
				{ icon: "D0", title: "Demographics", progress: 100 },
				{ icon: "P0", title: "Pre-Op", progress: 60 },
				{ icon: "P1", title: "Phase 1", progress: 0 },
				{ icon: "P2", title: "Phase 2", progress: 0 },
				{ icon: "P3", title: "Phase 3", progress: 0 },
				{ icon: "P4", title: "Phase 4", progress: 0 },
			],
		};
	},
	methods: {
		...mapActions(useUserStore, ["getAllPhases"]),
		onClick(form) {
			this.currentForm = form.title;
			if (form.progress === 100) this.isDisabled = true;
		},
	},
	async mounted() {
		try {
			const { id, role } = this.$route.query;
			const res = await this.getAllPhases(role, id);
		} catch (err) {
			throw new Error(err);
		}
	},
};
</script>
