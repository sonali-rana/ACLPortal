<template>
	<h4>Phase 3</h4>
	<p>Please fill all the essential details to proceed.</p>
	<div
		class="progress my-3"
		role="progressbar"
		aria-label="Default striped example"
		aria-valuenow="25"
		aria-valuemin="0"
		aria-valuemax="100"
	>
		<div class="progress-bar progress-bar-striped" style="width: 25%"></div>
	</div>
	<div class="row">
		<div class="col-8">
			<div class="box p-5" style="width: 100% !important">
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Date</label>
					</div>
					<div class="col-md-4">
						<input type="date" class="form-control" />
					</div>
				</div>

				<h5>Single Hop Test</h5>
				<div class="my-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Affected Limb</label>
					</div>
					<div class="col-md-4">
						<label class="form-label">Non-affected Limb</label>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Trial 1</label>
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" />
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" />
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Trial 2</label>
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" />
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" />
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Average</label>
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" />
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" />
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Limb Symmetry Index</label>
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" />
					</div>
				</div>

				<h5>Single Hop Test Comparison to Baseline</h5>
				<div class="my-3 row">
					<div class="col-md-2">
						<label class="form-label">Best Baseline Result</label>
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" />
					</div>
					<div class="col-md-2">
						<label class="form-label">Affected Limb</label>
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" />
					</div>
				</div>
				<div class="my-3 row">
					<div class="col-md-2">
						<label class="form-label">Equal To or Greater Than Baseline</label>
					</div>
					<div class="col-md-4">
						<RadioButton
							:options="options"
							:Key="`gender`"
							:isDisabled="isDisabled"
							@onChange="onRadioSelect"
						/>
					</div>

					<h5>Triple Hop Test</h5>
					<div class="my-3 row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<label class="form-label">Affected Limb</label>
						</div>
						<div class="col-md-4">
							<label class="form-label">Non-affected Limb</label>
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4">
							<label class="form-label">Trial 1</label>
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4">
							<label class="form-label">Trial 2</label>
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4">
							<label class="form-label">Average</label>
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<label class="form-label">Limb Symmetry Index</label>
						</div>
						<div class="col-md-4">
							<input type="text" class="form-control" />
						</div>
					</div>

					<h5>Triple Crossover Hop Test</h5>
					<div class="my-3 row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<label class="form-label">Affected Limb</label>
						</div>
						<div class="col-md-4">
							<label class="form-label">Non-affected Limb</label>
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4">
							<label class="form-label">Trial 1</label>
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4">
							<label class="form-label">Trial 2</label>
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4">
							<label class="form-label">Average</label>
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<label class="form-label">Limb Symmetry Index</label>
						</div>
						<div class="col-md-4">
							<input type="text" class="form-control" />
						</div>
					</div>

					<h5>Side Hop Test</h5>
					<div class="my-3 row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<label class="form-label">Affected Limb</label>
						</div>
						<div class="col-md-4">
							<label class="form-label">Non-affected Limb</label>
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4">
							<label class="form-label">Trial 1</label>
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<label class="form-label">Limb Symmetry Index</label>
						</div>
						<div class="col-md-4">
							<input type="text" class="form-control" />
						</div>
					</div>

					<h5>Single Leg Rise Test</h5>
					<div class="mt-3 row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<label class="form-label">Affected Limb</label>
						</div>
						<div class="col-md-4">
							<label class="form-label">Non-affected Limb</label>
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4">
							<label class="form-label">Repetitions</label>
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<label class="form-label">Limb Symmetry Index</label>
						</div>
						<div class="col-md-4">
							<input type="text" class="form-control" />
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<label class="form-label">Hurdle Requirement</label>
						</div>
						<div class="col-md-4">
							<SelectDropdown
								:dropdownOptions="mainSport"
								:defaultOption="`Please select a sport`"
								:Key="`sport`"
								:isDisabled="isDisabled"
								@onChange="onChangeSelect"
							/>
						</div>
					</div>

					<h5>Star Excursion Balance Test</h5>
					<div class="my-3 row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<label class="form-label">Affected Limb</label>
						</div>
						<div class="col-md-4">
							<label class="form-label">Non-affected Limb</label>
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4">
							<label class="form-label">Forward</label>
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<label class="form-label">Forward Limb Symmetry</label>
						</div>
						<div class="col-md-4">
							<input type="text" class="form-control" />
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<label class="form-label">Affected Limb</label>
						</div>
						<div class="col-md-4">
							<label class="form-label">Non-affected Limb</label>
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4">
							<label class="form-label">Postereomedial</label>
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4">
							<label class="form-label">Postereolateral</label>
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4">
							<label class="form-label">Sum Total</label>
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
						<div class="col-md-4">
							<input type="number" class="form-control" />
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<label class="form-label">Limb Symmetry</label>
						</div>
						<div class="col-md-4">
							<input type="text" class="form-control" />
						</div>
					</div>

					<h5>Cooper & Hughes Sports Vestibular Balance Test</h5>
					<div class="my-3 row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<label class="form-label">Affected Limb</label>
						</div>
						<div class="col-md-4">
							<label class="form-label">Non-affected Limb</label>
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4">
							<label class="form-label">Side to Side</label>
						</div>
						<div class="col-md-4">
							<SelectDropdown
								:dropdownOptions="mainSport"
								:defaultOption="`Please select a sport`"
								:Key="`sport`"
								:isDisabled="isDisabled"
								@onChange="onChangeSelect"
							/>
						</div>
						<div class="col-md-4">
							<SelectDropdown
								:dropdownOptions="mainSport"
								:defaultOption="`Please select a sport`"
								:Key="`sport`"
								:isDisabled="isDisabled"
								@onChange="onChangeSelect"
							/>
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4">
							<label class="form-label">Up and Down</label>
						</div>
						<div class="col-md-4">
							<SelectDropdown
								:dropdownOptions="mainSport"
								:defaultOption="`Please select a sport`"
								:Key="`sport`"
								:isDisabled="isDisabled"
								@onChange="onChangeSelect"
							/>
						</div>
						<div class="col-md-4">
							<SelectDropdown
								:dropdownOptions="mainSport"
								:defaultOption="`Please select a sport`"
								:Key="`sport`"
								:isDisabled="isDisabled"
								@onChange="onChangeSelect"
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="box p-5" style="width: 100% !important">
				<h5>Supplementary Goals</h5>
				<div class="my-3 row">
					<div class="col-md-4">
						<label class="form-label">Bodyweight (Kgs)</label>
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" />
					</div>
				</div>
				<h6>Single Leg Press 1RM</h6>
				<div class="mt-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">1RM (sled = weight) Kgs</label>
					</div>
					<div class="col-md-4">
						<label class="form-label">Percent of Bodyweight</label>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Affected Limb</label>
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" />
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" />
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Non-affected Limb</label>
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" />
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" />
					</div>
				</div>
				<h6>Squat 1RM</h6>
				<div class="my-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">1RM Kgs</label>
					</div>
					<div class="col-md-4">
						<label class="form-label">Percent of Bodyweight</label>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Squat</label>
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" />
					</div>
					<div class="col-md-4">
						<input type="number" class="form-control" />
					</div>
				</div>
			</div>

			<div class="d-flex justify-content-between" style="margin-top: 20px">
				<button class="btn btn-outline-secondary" @click="onCancel">
					Cancel
				</button>
				<div>
					<button class="btn btn-outline-secondary" @click="onSavetoDrafts">
						Save
					</button>
					<button class="btn btn-primary ml2" @click="onFinalize">
						Finalize
					</button>
				</div>
			</div>
		</div>
		<div class="col-3" style="font-size: 12px">
			<h5>Phase 3: Running, Agility and Landings</h5>
			<hr />
			<p>Related Documents</p>
			<p>
				<a href="/src/assets/ACL_Guide.pdf#page=13" target="_blank">
					<i class="bi bi-file-earmark-fill"></i> ACL Guide (pg. 13-16)</a
				>
			</p>
			<p>
				<a href="/src/assets/ACL-RSI.pdf" target="_blank">
					<i class="bi bi-file-earmark-fill"></i> ACL-RSI</a
				>
			</p>
			<p>
				<a href="/src/assets/Tegner.pdf" target="_blank">
					<i class="bi bi-file-earmark-fill"></i> Tegner</a
				>
			</p>
			<p>Most important goals</p>
			<ul>
				<li>
					<b
						>Attain excellent hopping performance (technique, distances, &
						endurance)</b
					>
				</li>
				<li>
					<b
						>Progress successfully through and agility program and modified game
						play</b
					>
				</li>
				<li><b>Regain full strength and balance</b></li>
			</ul>
			<p>More Information</p>
			<p>
				Phase 3 of this ACL rehabilitation protocol sees a return to running,
				agility, jumping and hopping, as well as the continuation of a gym based
				strength and neuromuscular program.
			</p>
			<p>
				Change of direction training and modified game play can also commence
				and progress during this phase, although supervision by the clinician is
				recommended.
			</p>
			<p>
				The knee should be swelling and pain free during this phase, and an
				emphasis is placed on correct technique particularly for deceleration
				tasks such as landing from a jump. It’s important to perfect landing and
				pivoting biomechanics before progressing fully back to sport (Phase 4).
			</p>
			<p>
				Exercises and activities in Phase 3 typically include agility drills
				such as slalom running, shuttle runs, and ladder drills. Jumping and
				hopping exercises usually start with drills such as scissor jumps and
				single hops and progress to box jumps and single leg landings with
				perturbations.
			</p>
			<p>
				It’s important that there is some rest and recovery time during this
				phase as many of the exercises and activities require eccentric muscle
				activity. Clinicians should watch for signs of overload of the
				patellofemoral complex in particular.
			</p>
		</div>
		<div class="col-1"></div>
	</div>
</template>

<script>
import RadioButton from "./RadioButton.vue";
import SelectDropdown from "./SelectDropdown.vue";

export default {
	props: ["isDisabled"],
	components: { SelectDropdown, RadioButton },
	data() {
		return {
			mainSport: [],
			options: [
				{ name: "Male", isChecked: false },
				{ name: "Female", isChecked: false },
			],
		};
	},
	setup() {},
	methods: {
		onChangeSelect() {},
	},
	mounted() {
		const inputElements = document.querySelectorAll(`input.form-control`);
		for (const input of inputElements) {
			input.disabled = this.isDisabled;
		}
	},
};
</script>
