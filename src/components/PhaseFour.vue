<template>
	<h4>Phase 4</h4>
	<p>Please fill all the essential details to proceed.</p>
	<div
		class="progress my-3"
		role="progressbar"
		aria-label="Default striped example"
		aria-valuenow="completionPercentage"
		aria-valuemin="0"
		aria-valuemax="100"
	>
		<div
			class="progress-bar progress-bar-striped"
			:style="{ width: completionPercentage + '%' }"
		></div>
	</div>
	<div class="row">
		<div class="col-md-8">
			<div
				class="box p-5"
				style="width: 100% !important; background-color: rgba(0, 119, 182, 0.1)"
			>
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Date</label>
					</div>
					<div class="col-md-4">
						<input type="date" class="form-control" v-model="payload.date" />
					</div>
					<div class="col-md-2">
						<label class="form-label"
							>Which is your dominant leg (the leg you would normally jump
							off)?</label
						>
					</div>
					<div class="col-md-4">
						<SelectDropdown
							:dropdownOptions="dominant_leg"
							:defaultOption="``"
							:Key="`dominant_leg`"
							:isDisabled="isDisabled"
							@onChange="onChangeSelect"
						/>
					</div>
				</div>

				<h6>Part A: Stability, Swelling & Range</h6>
				<div class="my-3 row">
					<div class="col-md-2">
						<label class="form-label">Swelling/Effusion</label>
					</div>
					<div class="col-md-4">
						<SelectDropdown
							:dropdownOptions="swelling"
							:defaultOption="``"
							:Key="`swelling`"
							:isDisabled="isDisabled"
							@onChange="onChangeSelect"
						/>
					</div>
					<div class="col-md-2">
						<label class="form-label">Stability</label>
					</div>
					<div class="col-md-4">
						<SelectDropdown
							:dropdownOptions="stability"
							:defaultOption="``"
							:Key="`stability`"
							:isDisabled="isDisabled"
							@onChange="onChangeSelect"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Flexion</label>
					</div>
					<div class="col-md-4">
						<SelectDropdown
							:dropdownOptions="flexion"
							:defaultOption="``"
							:Key="`flexion`"
							:isDisabled="isDisabled"
							@onChange="onChangeSelect"
						/>
					</div>
					<div class="col-md-2">
						<label class="form-label">Extension</label>
					</div>
					<div class="col-md-4">
						<SelectDropdown
							:dropdownOptions="extension"
							:defaultOption="``"
							:Key="`extension`"
							:isDisabled="isDisabled"
							@onChange="onChangeSelect"
						/>
					</div>
				</div>

				<h6>Part B: IKDC Subjective Knee Evaluation Form & ACL-RSI</h6>
				<div class="my-3 row">
					<div class="col-md-2">
						<label class="form-label">ACL-RSI</label>
					</div>
					<div class="col-md-4">
						<button class="btn btn-primary" @click="onShowlModal('acl')">
							ACL-RSI
						</button>
						<!-- <input type="text" class="form-control" v-model="payload.date" /> -->
					</div>
					<div class="col-md-2">
						<label class="form-label">IKDC Score</label>
					</div>
					<div class="col-md-4">
						<button class="btn btn-primary" @click="onShowlModal('ikdc')">
							IKDC
						</button>
					</div>
				</div>

				<h6>Part C: Tampa Scale of Kinesiophobia (TSK-11)</h6>
				<div class="my-3 row">
					<div class="col-md-2">
						<label class="form-label">TSK-11</label>
					</div>
					<div class="col-md-4">
						<button class="btn btn-primary" @click="onShowlModal('tsk')">
							TSK-11
						</button>
					</div>
					<div class="col-md-2">
						<label class="form-label">Result</label>
					</div>
					<div class="col-md-4">
						<SelectDropdown
							:dropdownOptions="result"
							:defaultOption="``"
							:Key="`result`"
							:isDisabled="isDisabled"
							@onChange="onChangeSelect"
						/>
					</div>
				</div>
			</div>

			<h5>Part D: Functional Testing</h5>
			<div
				class="box p-5"
				style="width: 100% !important; background-color: rgba(0, 119, 182, 0.1)"
			>
				<h6>Star Excursion Balance Test</h6>
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
						<input
							type="number"
							class="form-control"
							v-model="payload.forward_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.forward_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Forward Limb Symmetry</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.forward_symmetry"
						/>
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
						<input
							type="number"
							class="form-control"
							v-model="payload.postereomedical_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.postereomedical_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Postereolateral</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.postereolateral_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.postereolateral_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Sum Total</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							:defaultValue="
								getSum(postereomedical_affected, postereolateral_affected)
							"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							:defaultValue="
								getSum(
									postereomedical_non_affected,
									postereolateral_non_affected
								)
							"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Limb Symmetry</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.postereo_symmetry"
						/>
					</div>
				</div>

				<h6>Cooper & Hughes Sports Vestibular Balance Test</h6>
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
						<label class="form-label">Side to Side</label>
					</div>
					<div class="col-md-4">
						<SelectDropdown
							:dropdownOptions="cooper_side_affected"
							:defaultOption="``"
							:Key="`cooper_side_affected`"
							:isDisabled="isDisabled"
							@onChange="onChangeSelect"
						/>
					</div>
					<div class="col-md-4">
						<SelectDropdown
							:dropdownOptions="cooper_side_non_affected"
							:defaultOption="``"
							:Key="`cooper_side_non_affected`"
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
							:dropdownOptions="cooper_up_affected"
							:defaultOption="``"
							:Key="`cooper_up_affected`"
							:isDisabled="isDisabled"
							@onChange="onChangeSelect"
						/>
					</div>
					<div class="col-md-4">
						<SelectDropdown
							:dropdownOptions="cooper_up_non_affected"
							:defaultOption="``"
							:Key="`cooper_up_non_affected`"
							:isDisabled="isDisabled"
							@onChange="onChangeSelect"
						/>
					</div>
				</div>

				<h6>Single Hop Test</h6>
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
						<input
							type="number"
							class="form-control"
							v-model="payload.hop_trial_1_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.hop_trial_1_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Trial 2</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.hop_trial_2_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.hop_trial_2_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Average</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							:defaultValue="
								getAverage(hop_trial_1_affected, hop_trial_2_affected)
							"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							:defaultValue="
								getAverage(hop_trial_1_non_affected, hop_trial_2_non_affected)
							"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Limb Symmetry Index</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.hop_symmetry"
						/>
					</div>
				</div>

				<h6>Triple Hop Test</h6>
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
						<input
							type="number"
							class="form-control"
							v-model="payload.triple_trial_1_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.triple_trial_1_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Trial 2</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.triple_trial_2_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.triple_trial_2_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Average</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							:defaultValue="
								getAverage(triple_trial_1_affected, triple_trial_2_affected)
							"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							:defaultValue="
								getAverage(
									triple_trial_1_non_affected,
									triple_trial_2_non_affected
								)
							"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Limb Symmetry Index</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.triple_symmetry"
						/>
					</div>
				</div>

				<h6>Triple Crossover Hop Test</h6>
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
						<input
							type="number"
							class="form-control"
							v-model="payload.crossover_trial_1_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.crossover_trial_1_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Trial 2</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.crossover_trial_2_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.crossover_trial_2_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Average</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							:defaultValue="
								getAverage(
									crossover_trial_1_affected,
									crossover_trial_2_affected
								)
							"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							:defaultValue="
								getAverage(
									crossover_trial_1_non_affected,
									crossover_trial_2_non_affected
								)
							"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Limb Symmetry Index</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.crossover_symmetry"
						/>
					</div>
				</div>

				<h6>Side Hop Test</h6>
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
						<input
							type="number"
							class="form-control"
							v-model="payload.side_trial_1_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.side_trial_1_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Limb Symmetry Index</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.side_symmetry"
						/>
					</div>
				</div>

				<h6>Single Leg Rise Test</h6>
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
						<input
							type="number"
							class="form-control"
							v-model="payload.repetitions_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.repetitions_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Limb Symmetry Index</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.repetition_symmetry"
						/>
					</div>
				</div>
			</div>

			<h5>Part E: General Fitness Testing</h5>
			<div
				class="box p-5"
				style="width: 100% !important; background-color: rgba(0, 119, 182, 0.1)"
			>
				<h6>Test 1</h6>
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Name</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.test_1_name"
						/>
					</div>
					<div class="col-md-2">
						<label class="form-label">Result</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.test_1_result"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Baseline Result (if available)</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.test_1_baseline"
						/>
					</div>
					<div class="col-md-2">
						<label class="form-label">Pass/Fail</label>
					</div>
					<div class="col-md-4">
						<SelectDropdown
							:dropdownOptions="test_1_pass"
							:defaultOption="``"
							:Key="`test_1_pass`"
							:isDisabled="isDisabled"
							@onChange="onChangeSelect"
						/>
					</div>
				</div>
				<h6>Test 2</h6>
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Name</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.test_2_name"
						/>
					</div>
					<div class="col-md-2">
						<label class="form-label">Result</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.test_2_result"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Baseline Result (if available)</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.test_2_baseline"
						/>
					</div>
					<div class="col-md-2">
						<label class="form-label">Pass/Fail</label>
					</div>
					<div class="col-md-4">
						<SelectDropdown
							:dropdownOptions="test_2_pass"
							:defaultOption="``"
							:Key="`test_2_pass`"
							:isDisabled="isDisabled"
							@onChange="onChangeSelect"
						/>
					</div>
				</div>
			</div>

			<h5>Part F: Fatigued State Testing</h5>
			<div
				class="box p-5"
				style="width: 100% !important; background-color: rgba(0, 119, 182, 0.1)"
			>
				<h6>Single Hop Test</h6>
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
						<input
							type="number"
							class="form-control"
							v-model="payload.fatigued_hop_trial_1_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.fatigued_hop_trial_1_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Trial 2</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.fatigued_hop_trial_2_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.fatigued_hop_trial_2_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Average</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							:defaultValue="
								getAverage(
									fatigued_hop_trial_1_affected,
									fatigued_hop_trial_2_affected
								)
							"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							:defaultValue="
								getAverage(
									fatigued_hop_trial_1_non_affected,
									fatigued_hop_trial_2_non_affected
								)
							"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Limb Symmetry Index</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.fatigued_hop_symmetry"
						/>
					</div>
				</div>

				<h6>Triple Hop Test</h6>
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
						<input
							type="number"
							class="form-control"
							v-model="payload.fatigued_triple_trial_1_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.fatigued_triple_trial_1_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Trial 2</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.fatigued_triple_trial_2_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.fatigued_triple_trial_2_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Average</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							:defaultValue="
								getAverage(
									fatigued_triple_trial_1_affected,
									fatigued_triple_trial_2_affected
								)
							"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							:defaultValue="
								getAverage(
									fatigued_triple_trial_1_non_affected,
									fatigued_triple_trial_2_non_affected
								)
							"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Limb Symmetry Index</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.fatigued_triple_symmetry"
						/>
					</div>
				</div>

				<h6>Triple Crossover Hop Test</h6>
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
						<input
							type="number"
							class="form-control"
							v-model="payload.fatigued_crossover_trial_1_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.fatigued_crossover_trial_1_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Trial 2</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.fatigued_crossover_trial_2_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.fatigued_crossover_trial_2_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Average</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							:defaultValue="
								getAverage(
									fatigued_crossover_trial_1_affected,
									fatigued_crossover_trial_2_affected
								)
							"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							:defaultValue="
								getAverage(
									fatigued_crossover_trial_1_non_affected,
									fatigued_crossover_trial_2_non_affected
								)
							"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Limb Symmetry Index</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.fatigued_crossover_symmetry"
						/>
					</div>
				</div>

				<h6>Side Hop Test</h6>
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
						<input
							type="number"
							class="form-control"
							v-model="payload.fatigued_side_trial_1_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.fatigued_side_trial_1_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Limb Symmetry Index</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.fatigued_side_symmetry"
						/>
					</div>
				</div>
			</div>

			<h5>Melbourne Return to Sport Score</h5>
			<div
				class="box p-5"
				style="width: 100% !important; background-color: rgba(0, 119, 182, 0.1)"
			>
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Return to Sport Score</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.sport_score"
						/>
					</div>
					<div class="col-md-2">
						<label class="form-label">Return to Sport Hurdle</label>
					</div>
					<div class="col-md-4">
						<input
							type="text"
							class="form-control"
							v-model="payload.sport_hurdle"
						/>
					</div>
				</div>
			</div>

			<div class="d-flex justify-content-between" style="margin-top: 20px">
				<button class="btn btn-outline-secondary" @click="onCancel">
					Cancel
				</button>
				<div>
					<button
						class="btn btn-outline-secondary"
						@click="onSavetoDrafts"
						:disabled="isDisabled"
					>
						Save
					</button>
					<button
						class="btn btn-primary ml2"
						@click="onFinalize"
						:disabled="isDisabled"
					>
						Finalize
					</button>
				</div>
			</div>
		</div>
		<div class="col-4 info-component">
			<h5 class="mt-3">Phase 4: Return to Sport</h5>
			<hr />
			<p>Related Documents</p>
			<p>
				<a
					href="/src/assets/ACL_Guide_Phase_4.pdf"
					target="_blank"
					class="fw-bold"
				>
					<i class="bi bi-file-earmark-fill"></i> ACL Guide Phase 4</a
				>
			</p>
			<p>
				<a
					href="/src/assets/ACL_Guide_Phase_5.pdf"
					target="_blank"
					class="fw-bold"
				>
					<i class="bi bi-file-earmark-fill"></i> ACL Guide Phase 5</a
				>
			</p>
			<!-- <p>
				<a href="/src/assets/ACL_Guide.pdf#page=23" target="_blank">
					<i class="bi bi-file-earmark-fill"></i> IKDC (pg. 23-25)</a
				>
			</p>
			<p>
				<a href="/src/assets/ACL_Guide.pdf#page=26" target="_blank">
					<i class="bi bi-file-earmark-fill"></i> TSK-11 (pg. 26-29)</a
				>
			</p> -->
			<!-- <p>More Information</p>
			<p>
				<b
					>So when are people ready to return to sport after an ACL
					reconstruction?</b
				>
			</p>
			<p>
				Current research suggest a minimum of 9 months. However, please be
				guided by your surgeon and sports medicine team.
			</p>
			<p>
				Our suggestion is to allow people back to sport if they have satisfied 3
				key criteria:
			</p>
			<ul>
				<li>
					<b
						>Successful completion of the Melbourne Return to Sport Score
						(>95)</b
					>
				</li>
				<li>
					<b
						>The athlete is comfortable, confident, and eager to return to
						sport, as measured by the ACL_RSI and IKDC</b
					>
				</li>
				<li>
					<b
						>An ACL injury prevention program is discussed, implemented, and
						continued whilst the athlete is participating in sport. To lower the
						risk of future injury, evidence supports that injury prevention
						programs are performed at least 15mins prior to each training
						session and game.</b
					>
				</li>
			</ul>
			<p>
				Phase 4 ACL rehab should be highly individualised, and exercises and
				training activities that are usual for the athlete when not injured
				should be integrated into the regime.
			</p>
			<p>
				Focus should not only be on getting the knee ready for sport, but the
				whole person. The knee needs to be stable and strong, with optimal
				neuromuscular patterning and biomechanics. But the athlete needs to be
				confident and mentally ready to return to sport, and this will come from
				repetition of successful training and match play situations.
			</p>
			<p>
				A background of strength, balance, landing, and agility work needs to be
				done during this phase (and continue on into Phase 5), but the emphasis
				of Phase 4 ACL rehab is on progressive training, from restricted to
				unrestricted, and an eventual return to competition when ready
			</p> -->
		</div>
	</div>
	<InputModal
		:showModal="showModal"
		:modalData="modalData"
		@closeModal="closeModal"
		@onSubmit="onSetModalData"
	/>
</template>

<script>
import { mapActions } from "pinia";
import InputModal from "./InputModal.vue";
import SelectDropdown from "./SelectDropdown.vue";
import { useUserStore } from "@/store/UserStore";

export default {
	props: ["isDisabled", "role"],
	components: { SelectDropdown, InputModal },
	data() {
		return {
			showModal: false,
			modalData: [],
			dominant_leg: ["Left", "Right"],
			swelling: ["Absent", "Present"],
			stability: ["Nil", "Grade I", "Grade II", "Grade III-IV"],
			flexion: [
				"0-5 degrees deficit",
				"5-20 degrees deficit",
				"20+ degrees deficit",
			],
			extension: [
				"0-1cm deficit",
				"1-5cm degrees deficit",
				"5cm+ degrees deficit",
			],
			cooper_side_affected: ["Pass", "Fail"],
			cooper_side_non_affected: ["Pass", "Fail"],
			cooper_up_affected: ["Pass", "Fail"],
			cooper_up_non_affected: ["Pass", "Fail"],
			result: ["Pass", "Fail"],
			test_1_pass: ["Pass", "Fail"],
			test_2_pass: ["Pass", "Fail"],
			aclrsi: [
				{
					question:
						"1. Are you confident that you can perform at your previous level of sport participation?",
					id: "aclrsi_q1",
				},
				{
					question:
						"2. Do you think you are likely to re-injure your knee by participating in your sport?",
					id: "aclrsi_q2",
				},
				{
					question: "3. Are you nervous about playing your sport?",
					id: "aclrsi_q3",
				},
			],
			ikdc: [
				{
					question:
						"1. During the past 4 weeks, or since your injury, how often have you had pain?",
					id: "ikdc_q1",
				},
				{
					question: "2.  How severe is your knee pain?",
					id: "ikdc_q2",
				},
				{
					question:
						"3. During the past 4 weeks, or since your injury, did your knee lock or catch?",
					id: "ikdc_q3",
				},
			],
			tsk: [
				{
					question: "1. I'm afraid that I might injure myself if I exercise.",
					id: "tsk_q1",
				},
				{
					question:
						"2. If I were to try to overcome it, my pain would increase.",
					id: "tsk_q2",
				},
				{
					question:
						"3. My body is telling me I have something dangerously wrong.",
					id: "tsk_q3",
				},
			],
			payload: {
				date: "",
				dominant_leg: "",
				swelling: "",
				stability: "",
				flexion: "",
				extension: "",
				aclrsi_q1: "",
				aclrsi_q2: "",
				aclrsi_q3: "",
				ikdc_q1: "",
				ikdc_q2: "",
				ikdc_q3: "",
				tsk_q1: "",
				tsk_q2: "",
				tsk_q3: "",
				result: "",
				forward_affected: "",
				forward_non_affected: "",
				forward_symmetry: "",
				postereomedical_affected: "",
				postereomedical_non_affected: "",
				postereolateral_affected: "",
				postereolateral_non_affected: "",
				postereo_symmetry: "",
				cooper_side_affected: "",
				cooper_side_non_affected: "",
				cooper_up_affected: "",
				cooper_up_non_affected: "",
				hop_trial_1_affected: "",
				hop_trial_1_non_affected: "",
				hop_trial_2_affected: "",
				hop_trial_2_non_affected: "",
				hop_symmetry: "",
				triple_trial_1_affected: "",
				triple_trial_1_non_affected: "",
				triple_trial_2_affected: "",
				triple_trial_2_non_affected: "",
				triple_symmetry: "",
				crossover_trial_1_affected: "",
				crossover_trial_1_non_affected: "",
				crossover_trial_2_affected: "",
				crossover_trial_2_non_affected: "",
				crossover_symmetry: "",
				side_trial_1_affected: "",
				side_trial_1_non_affected: "",
				side_symmetry: "",
				repetitions_affected: "",
				repetitions_non_affected: "",
				repetition_symmetry: "",
				test_1_name: "",
				test_1_result: "",
				test_1_baseline: "",
				test_1_pass: "",
				test_2_name: "",
				test_2_result: "",
				test_2_baseline: "",
				test_2_pass: "",
				fatigued_hop_trial_1_affected: "",
				fatigued_hop_trial_1_non_affected: "",
				fatigued_hop_trial_2_affected: "",
				fatigued_hop_trial_2_non_affected: "",
				fatigued_hop_symmetry: "",
				fatigued_triple_trial_1_affected: "",
				fatigued_triple_trial_1_non_affected: "",
				fatigued_triple_trial_2_affected: "",
				fatigued_triple_trial_2_non_affected: "",
				fatigued_triple_symmetry: "",
				fatigued_crossover_trial_1_affected: "",
				fatigued_crossover_trial_1_non_affected: "",
				fatigued_crossover_trial_2_affected: "",
				fatigued_crossover_trial_2_non_affected: "",
				fatigued_crossover_symmetry: "",
				fatigued_side_trial_1_affected: "",
				fatigued_side_trial_1_non_affected: "",
				fatigued_side_symmetry: "",
				sport_score: "",
				sport_hurdle: "",
			},
		};
	},
	setup() {},
	methods: {
		...mapActions(useUserStore, ["onCreatePhase", "onEditPhase"]),
		onChangeSelect(key, value) {
			let array =
				key === "dominant_leg"
					? this.dominant_leg
					: key === "swelling"
						? this.swelling
						: key === "stability"
							? this.stability
							: key === "flexion"
								? this.flexion
								: key === "extension"
									? this.extension
									: key === "cooper_side_affected"
										? this.cooper_side_affected
										: key === "cooper_side_non_affected"
											? this.cooper_side_non_affected
											: key === "cooper_up_affected"
												? this.cooper_up_affected
												: key === "cooper_up_non_affected"
													? this.cooper_up_non_affected
													: key === "result"
														? this.result
														: key === "test_1_pass"
															? this.test_1_pass
															: this.test_2_pass;

			const selectedData = array.filter((option) => option === value)[0];

			this.payload[key] = selectedData;
		},
		getAverage(val1, val2) {
			return val1?.toString().length && val2?.toString().length
				? (val1 + val2) / 2
				: "";
		},
		getSum(val1, val2) {
			return val1?.toString().length && val2?.toString().length
				? val1 + val2
				: "";
		},
		onCancel() {
			this.$router.push(`/${this.role}-portal`);
		},
		onShowlModal(key) {
			key === "acl"
				? (this.modalData = this.aclrsi)
				: key === "ikdc"
					? (this.modalData = this.ikdc)
					: (this.modalData = this.tsk);
			this.showModal = true;
		},
		closeModal() {
			this.modalData = [];
			this.showModal = false;
		},
		onSetModalData(key, arr) {
			if (key === "aclrsi") {
				this.payload.aclrsi_q1 = arr[0];
				this.payload.aclrsi_q2 = arr[1];
				this.payload.aclrsi_q3 = arr[2];
			} else if (key === "ikdc") {
				this.payload.ikdc_q1 = arr[0];
				this.payload.ikdc_q2 = arr[1];
				this.payload.ikdc_q3 = arr[2];
			} else {
				this.payload.tsk_q1 = arr[0];
				this.payload.tsk_q2 = arr[1];
				this.payload.tsk_q3 = arr[2];
			}
			this.showModal = false;
		},
		async onFinalize() {
			try {
				this.payload = {
					...this.payload,
					demographics_id: this.$route?.query?.id,
					percentage: 100,
					draft: false,
					phase: "Phase 4",
				};
				const res = await this.onCreatePhase(this.payload);
				if (res?.status === 200) {
					this.$router.push("/doctor-portal");
				}
			} catch (error) {
				throw new Error(error);
			}
		},
		async onSavetoDrafts() {
			try {
				this.payload = {
					...this.payload,
					demographics_id: this.$route?.query?.id,
					percentage: this.completionPercentage,
					draft: true,
					phase: "Phase 4",
				};
				const res = this.fields
					? await this.onEditPhase(this.payload)
					: await this.onCreatePhase(this.payload);
				if (res?.status === 200) {
					this.$router.push("/doctor-portal");
				}
			} catch (error) {
				throw new Error(error);
			}
		},
	},
	computed: {
		completionPercentage() {
			return Math.trunc(
				(Object.values(this.payload).filter((field) => field.toString().length)
					?.length /
					76) *
					100
			);
		},
	},
	mounted() {
		const inputElements = document.querySelectorAll(`input.form-control`);
		for (const input of inputElements) {
			input.disabled = this.isDisabled;
		}
	},
};
</script>
