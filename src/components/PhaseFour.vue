<template>
	<h4>Phase 4</h4>
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
		<div class="col-md-8">
			<div class="box p-5" style="width: 100% !important">
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Date</label>
					</div>
					<div class="col-md-4">
						<input type="date" class="form-control" />
					</div>
					<div class="col-md-2">
						<label class="form-label"
							>Which is your dominant leg (the leg you would normally jump
							off)?</label
						>
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

				<h6>Part A: Stability, Swelling & Range</h6>
				<div class="my-3 row">
					<div class="col-md-2">
						<label class="form-label">Swelling/Effusion</label>
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
					<div class="col-md-2">
						<label class="form-label">Stability</label>
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
					<div class="col-md-2">
						<label class="form-label">Flexion</label>
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
					<div class="col-md-2">
						<label class="form-label">Extension</label>
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

				<h6>Part B: IKDC Subjective Knee Evaluation Form & ACL-RSI</h6>
				<div class="my-3 row">
					<div class="col-md-2">
						<label class="form-label">ACL-RSI</label>
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" />
					</div>
					<div class="col-md-2">
						<label class="form-label">IKDC Score</label>
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" />
					</div>
				</div>

				<h6>Part C: Tampa Scale of Kinesiophobia (TSK-11)</h6>
				<div class="my-3 row">
					<div class="col-md-2">
						<label class="form-label">TSK-11</label>
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" />
					</div>
					<div class="col-md-2">
						<label class="form-label">Result</label>
					</div>
					<div class="col-md-4">
						<RadioButton
							:options="options"
							:Key="`gender`"
							:isDisabled="isDisabled"
							@onChange="onRadioSelect"
						/>
					</div>
				</div>
			</div>

			<h5>Part D: Functional Testing</h5>
			<div class="box p-5" style="width: 100% !important">
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
			</div>

			<h5>Part E: General Fitness Testing</h5>
			<div class="box p-5" style="width: 100% !important">
				<h6>Test 1</h6>
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Name</label>
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" />
					</div>
					<div class="col-md-2">
						<label class="form-label">Result</label>
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" />
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Baseline Result (if available)</label>
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" />
					</div>
					<div class="col-md-2">
						<label class="form-label">Pass/Fail</label>
					</div>
					<div class="col-md-4">
						<RadioButton
							:options="options"
							:Key="`gender`"
							:isDisabled="isDisabled"
							@onChange="onRadioSelect"
						/>
					</div>
				</div>
				<h6>Test 2</h6>
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Name</label>
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" />
					</div>
					<div class="col-md-2">
						<label class="form-label">Result</label>
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" />
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Baseline Result (if available)</label>
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" />
					</div>
					<div class="col-md-2">
						<label class="form-label">Pass/Fail</label>
					</div>
					<div class="col-md-4">
						<RadioButton
							:options="options"
							:Key="`gender`"
							:isDisabled="isDisabled"
							@onChange="onRadioSelect"
						/>
					</div>
				</div>
			</div>

			<h5>Part F: Fatigued State Testing</h5>
			<div class="box p-5" style="width: 100% !important">
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
			</div>

			<h5>Melbourne Return to Sport Score</h5>
			<div class="box p-5" style="width: 100% !important">
				<div class="mb-3 row">
					<div class="col-md-2">
						<label class="form-label">Return to Sport Score</label>
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" />
					</div>
					<div class="col-md-2">
						<label class="form-label">Return to Sport Hurdle</label>
					</div>
					<div class="col-md-4">
						<input type="text" class="form-control" />
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
			<h5>Phase 4: Return to Sport</h5>
			<hr />
			<p>Related Documents</p>
			<p>
				<a href="/src/assets/ACL_Guide.pdf#page=17" target="_blank">
					<i class="bi bi-file-earmark-fill"></i> ACL Guide (pg. 17-31)</a
				>
			</p>
			<p>
				<a href="/src/assets/ACL_Guide.pdf#page=21" target="_blank">
					<i class="bi bi-file-earmark-fill"></i> ACL-RSI (pg. 21-22)</a
				>
			</p>
			<p>
				<a href="/src/assets/ACL_Guide.pdf#page=23" target="_blank">
					<i class="bi bi-file-earmark-fill"></i> IKDC (pg. 23-25)</a
				>
			</p>
			<p>
				<a href="/src/assets/ACL_Guide.pdf#page=26" target="_blank">
					<i class="bi bi-file-earmark-fill"></i> TSK-11 (pg. 26-29)</a
				>
			</p>
			<p>More Information</p>
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
