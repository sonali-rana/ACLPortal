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
	min-width: 65%;
	padding-left: 50px;
	padding-right: 50px;
	background-color: white;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;
}
p {
	color: black;
}
</style>

<template>
	<div v-if="showModal" class="bg-popUp">
		<div class="popUp py-5">
			<div v-for="obj in modalData" :key="obj.id" class="mb-5">
				<p>{{ obj.question }}</p>
				<div class="d-flex">
					<RadioButton
						:options="getOptions(obj.id)"
						:Key="obj.id"
						:isDisabled="isDisabled"
						@onChange="onRadioSelect"
					/>
				</div>
			</div>
			<div class="d-flex justify-content-between">
				<button class="btn btn-outline-secondary" @click="$emit('closeModal')">
					Cancel</button
				><button class="btn btn-primary" @click="onSave">Save</button>
			</div>
		</div>
	</div>
</template>

<script>
import RadioButton from "./RadioButton.vue";

export default {
	props: ["modalData", "showModal"],
	emits: ["closeModal"],
	components: { RadioButton },
	data() {
		return {
			key: "",
			arr: [null, null, null],
			showPopup: false,
			options1: [
				{ name: "0", isChecked: false },
				{ name: "10", isChecked: false },
				{ name: "20", isChecked: false },
				{ name: "30", isChecked: false },
				{ name: "40", isChecked: false },
				{ name: "50", isChecked: false },
				{ name: "60", isChecked: false },
				{ name: "70", isChecked: false },
				{ name: "80", isChecked: false },
				{ name: "90", isChecked: false },
				{ name: "100", isChecked: false },
			],
			options2: [
				{ name: "0", isChecked: false },
				{ name: "10", isChecked: false },
				{ name: "20", isChecked: false },
				{ name: "30", isChecked: false },
				{ name: "40", isChecked: false },
				{ name: "50", isChecked: false },
				{ name: "60", isChecked: false },
				{ name: "70", isChecked: false },
				{ name: "80", isChecked: false },
				{ name: "90", isChecked: false },
				{ name: "100", isChecked: false },
			],
			options3: [
				{ name: "0", isChecked: false },
				{ name: "10", isChecked: false },
				{ name: "20", isChecked: false },
				{ name: "30", isChecked: false },
				{ name: "40", isChecked: false },
				{ name: "50", isChecked: false },
				{ name: "60", isChecked: false },
				{ name: "70", isChecked: false },
				{ name: "80", isChecked: false },
				{ name: "90", isChecked: false },
				{ name: "100", isChecked: false },
			],
			options4: [
				{ name: "Yes", isChecked: false },
				{ name: "No", isChecked: false },
			],
		};
	},
	methods: {
		onRadioSelect(id, value) {
			const option =
				id === "ikdc_q3"
					? this.options4
					: id?.includes(1)
						? this.options1
						: id?.includes(2)
							? this.options2
							: this.options3;

			const new_arr = option.map((obj) => {
				if (obj?.name === value) return { ...obj, isChecked: true };
				else return { ...obj, isChecked: false };
			});

			this.key = id.split("_")[0];

			if (id === "ikdc_q3") {
				this.options4 = [...new_arr];
				this.arr[2] = value;
			} else if (id?.includes(1)) {
				this.options1 = [...new_arr];
				this.arr[0] = value;
			} else if (id?.includes(2)) {
				this.options2 = [...new_arr];
				this.arr[1] = value;
			} else {
				{
					this.options3 = [...new_arr];
					this.arr[2] = value;
				}
			}
		},

		getOptions(id) {
			if (id === "ikdc_q3") return this.options4;
			else if (id?.includes(1)) return this.options1;
			else if (id?.includes(2)) return this.options2;
			else return this.options3;
		},
		onSave() {
			// if (arr?.includes(0)) return;
			this.$emit("onSubmit", this.key, this.arr);
		},
	},
};
</script>
