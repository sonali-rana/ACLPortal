<template>
	<h4>Phase 3</h4>
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
		<div class="col-8">
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
				</div>

				<div>
					<h5>
						Single Hop Test<i
							class="bi bi-info-square mx-2 fs-5"
							@click="$refs.infoPopup.showPopup = true"
						></i>
					</h5>
					<PopUp ref="infoPopup">
						<h5>Single Hop Test</h5>
						<br />
						<p>Single leg hop test (Noyes et al, 1991)</p>
						<br />
						<p>
							Subjects stand on one leg and hop as far forward as possible and
							land on the same leg. The average (mean) distance of 2 valid hops
							is recorded with a tape measure which is fixed to the ground.
							Measure from toe at take-off to heel at landing. Arms are free to
							swing. A limb symmetry index is calculated by dividing the mean
							distance (in cms) of the involved limb by the mean distance of the
							noninvolved limb then multiplying by 100.
						</p>
						<br />
						<p class="fw-bold">Goal: 1. >95% compared with other side</p>
						<p class="fw-bold">
							2. Equal to or greater than pre-operative data (best result –
							affected or non-affected)
						</p>
					</PopUp>
				</div>
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
								getAverage(
									payload.hop_trial_1_affected,
									payload.hop_trial_2_affected
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
									payload.hop_trial_1_non_affected,
									payload.hop_trial_2_non_affected
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
							type="number"
							class="form-control"
							:defaultValue="
								calculateLimbSymmetry(
									'hop_symmetry',
									getSum(
										payload.hop_trial_1_affected,
										payload.hop_trial_2_affected
									),
									getSum(
										payload.hop_trial_1_non_affected,
										payload.hop_trial_2_non_affected
									)
								)
							"
						/>
					</div>
				</div>

				<h5>Single Hop Test Comparison to Baseline</h5>
				<div class="my-3 row">
					<div class="col-md-2">
						<label class="form-label">Best Baseline Result</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.baseline_result"
						/>
					</div>
					<div class="col-md-2">
						<label class="form-label">Affected Limb</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.affected_limb"
						/>
					</div>
				</div>
				<div class="my-3 row">
					<div class="col-md-2">
						<label class="form-label">Equal To or Greater Than Baseline</label>
					</div>
					<div class="col-md-4 d-flex">
						<RadioButton
							:options="equalOrGreater"
							:Key="`baseline_eq`"
							:isDisabled="isDisabled"
							:selectedOption="payload.baseline_eq"
							@onChange="onRadioSelect"
						/>
					</div>

					<div>
						<h5>
							Triple Hop Test<i
								class="bi bi-info-square mx-2 fs-5"
								@click="$refs.infoPopup2.showPopup = true"
							></i>
						</h5>
						<PopUp ref="infoPopup2">
							<h5>Triple Hop</h5>
							<br />
							<p>Triple Hop Test (Noyes et al., 1991)</p>
							<br />
							<p>
								Subjects are required to hop forwards three consecutive times on
								one foot. The total distance is measured, and the average (mean)
								of 2 valid tests is recorded. Measure from toe at take off to
								heel at landing. Arms are free to swing.
							</p>
							<p>
								A limb symmetry index is calculated by dividing the mean
								distance (in cms) of the involved limb by the mean distance of
								the noninvolved limb then multiplying by 100.
							</p>
							<br />
							<p class="fw-bold">Goal: >95% compared with other side</p>
						</PopUp>
					</div>
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
									getAverage(
										payload.triple_trial_1_affected,
										payload.triple_trial_2_affected
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
										payload.triple_trial_1_non_affected,
										payload.triple_trial_2_non_affected
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
								type="number"
								class="form-control"
								:defaultValue="
									calculateLimbSymmetry(
										'triple_symmetry',
										getSum(
											payload.triple_trial_1_affected,
											payload.triple_trial_2_affected
										),
										getSum(
											payload.triple_trial_1_non_affected,
											payload.triple_trial_2_non_affected
										)
									)
								"
							/>
						</div>
					</div>

					<div>
						<h5>
							Triple Crossover Hop Test<i
								class="bi bi-info-square mx-2 fs-5"
								@click="$refs.infoPopup3.showPopup = true"
							></i>
						</h5>
						<PopUp ref="infoPopup3">
							<h5>Triple Cross Over Hop Test</h5>
							<br />
							<p>Triple Cross Over Hop Test (Noyes et al, 1991)</p>
							<br />
							<p>
								This test is performed on a course consisting of a 15cm marking
								strip on the floor which is 6m long. Subjects are required to
								hop three consecutive times on one foot going in a medial to
								lateral to medial direction, crossing the strip on each hop. The
								total distance is measured, and the average (mean) of 2 valid
								hop tests is recorded. Measure from toe at take-off to heel at
								landing. Arms are free to swing.
							</p>
							<p>
								A limb symmetry index is calculated by dividing the mean
								distance (in cms) of the involved limb by the mean distance of
								the noninvolved limb then multiplying by 100.
							</p>
							<br />
							<p class="fw-bold">Goal: >95% compared with other side</p>
						</PopUp>
					</div>
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
										payload.crossover_trial_1_affected,
										payload.crossover_trial_2_affected
									)
								"
							/>
						</div>
						<div class="col-md-4">
							<input
								type="number"
								class="form-control"
								:defaultValue="
									+payload.crossover_trial_1_non_affected &&
									+payload.crossover_trial_2_non_affected
										? (payload.crossover_trial_1_non_affected +
												payload.crossover_trial_2_non_affected) /
											2
										: ''
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
								type="number"
								class="form-control"
								:defaultValue="
									calculateLimbSymmetry(
										'crossover_symmetry',
										getSum(
											payload.crossover_trial_1_affected,
											payload.crossover_trial_2_affected
										),
										getSum(
											payload.crossover_trial_1_non_affected,
											payload.crossover_trial_2_non_affected
										)
									)
								"
							/>
						</div>
					</div>

					<div>
						<h5>
							Side Hop Test<i
								class="bi bi-info-square mx-2 fs-5"
								@click="$refs.infoPopup4.showPopup = true"
							></i>
						</h5>
						<PopUp ref="infoPopup4">
							<h5>Side Hop Test</h5>
							<br />
							<p>Side Hop Test (Gustavsson et al., 2006)</p>
							<br />
							<p>
								Subjects stands on test leg with hands behind the back and jumps
								from side to side between two parallel strips of tape, placed 40
								cm apart on the floor.
							</p>
							<p>
								Subject jumps as many times as possible during 30sec. The number
								of successful jumps performed, without touching the tape is
								recorded.
							</p>
							<br />
							<p class="fw-bold">Goal: >95% compared with other side</p>
						</PopUp>
					</div>
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
								type="number"
								class="form-control"
								:defaultValue="
									calculateLimbSymmetry(
										'side_symmetry',
										payload.side_trial_1_affected,
										payload.side_trial_1_non_affected
									)
								"
							/>
						</div>
					</div>

					<div>
						<h5>
							Single Leg Rise Test<i
								class="bi bi-info-square mx-2 fs-5"
								@click="$refs.infoPopup5.showPopup = true"
							></i>
						</h5>
						<PopUp ref="infoPopup5">
							<h5>Single Leg Squat</h5>
							<br />
							<p>
								Single Leg Rise Test (Culvenor et al., 2016 & Thorstensson et
								al., 2004)
							</p>
							<br />
							<p>
								Subjects sit on a chair (or a plinth) with test leg bent to 90°,
								and 10cm from edge of chair.
							</p>
							<p>
								With hands behind the back, the subject aims to stand up from
								the sitting position, and sit down as many times as possible.
							</p>
							<br />
							<p class="fw-bold">
								Goal: Hurdle requirement = >22 repetitions both limbs
							</p>
						</PopUp>
					</div>
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
								v-model="payload.repetitions_affetced"
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
								type="number"
								class="form-control"
								:defaultValue="
									calculateLimbSymmetry(
										'repetition_symmetry',
										+payload.repetitions_affetced,
										+payload.repetitions_non_affected
									)
								"
							/>
						</div>
					</div>
					<div class="mb-3 row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<label class="form-label">Hurdle Requirement</label>
						</div>
						<div class="col-md-4 d-flex">
							<RadioButton
								:options="hurdle"
								:Key="`repetition_hurdle`"
								:isDisabled="isDisabled"
								:selectedOption="payload.repetition_hurdle"
								@onChange="onRadioSelect"
							/>
						</div>
					</div>

					<div>
						<h5>
							Star Excursion Balance Test<i
								class="bi bi-info-square mx-2 fs-5"
								@click="$refs.infoPopup6.showPopup = true"
							></i>
						</h5>
						<PopUp ref="infoPopup6">
							<h5>Balance (Dynamic)</h5>
							<br />
							<p>Star Excursion Balance Test (Gribble et al, 2012)</p>
							<br />
							<p>
								The star excursion balance test (SEBT) is performed in the
								anterior, posterolateral, and posteromedial directions.
							</p>
							<p>
								A composite score for all 3 directions is obtained for each leg.
								A limb symmetry index is then calculated by dividing the mean
								distance (in cms) of the involved limb by the mean distance of
								the noninvolved limb then multiplying by 100.
							</p>
							<br />
							<p class="fw-bold">Goal: xxx</p>
						</PopUp>
					</div>
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
								v-model="payload.star_forward_affected"
							/>
						</div>
						<div class="col-md-4">
							<input
								type="number"
								class="form-control"
								v-model="payload.star_forward_non_affected"
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
								type="number"
								class="form-control"
								:defaultValue="
									calculateLimbSymmetry(
										'star_forward_symmetry',
										+payload.star_forward_affected,
										+payload.star_forward_non_affected
									)
								"
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
									+payload.postereolateral_affected &&
									+payload.postereomedical_affected
										? payload.postereomedical_affected +
											payload.postereolateral_affected
										: ''
								"
							/>
						</div>
						<div class="col-md-4">
							<input
								type="number"
								class="form-control"
								:defaultValue="
									+payload.postereolateral_non_affected &&
									+payload.postereomedical_non_affected
										? payload.postereomedical_non_affected +
											payload.postereolateral_non_affected
										: ''
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
								type="number"
								class="form-control"
								:defaultValue="
									calculateLimbSymmetry(
										'postereo_symmetry',
										+payload.postereomedical_affected +
											+payload.postereolateral_affected,
										+payload.postereomedical_non_affected +
											+payload.postereolateral_non_affected
									)
								"
							/>
						</div>
					</div>

					<div>
						<h5>
							Cooper & Hughes Sports Vestibular Balance Test<i
								class="bi bi-info-square mx-2 fs-5"
								@click="$refs.infoPopup7.showPopup = true"
							></i>
						</h5>
						<PopUp ref="infoPopup7">
							<h5>Cooper & Hughes Sports Vestibular Balance Test</h5>
							<br />
							<p>
								Subjects stand on one leg with a small amount of flexion in the
								hip, knee and ankle, and place their hands on their waist. In
								this position, two assessments are performed;
							</p>
							<ol type="number">
								<li>
									Side to side.
									<p>
										At a rate of 60 beats per minute, subjects repeatedly turn
										their head from side to side (70-90 degree turn) for a
										period of 15 seconds. Vision needs to be inline with head
										position (no visual fixing).
									</p>
								</li>
								<li>
									Up and down.
									<p>
										At a rate of 60 beats per minute, subjects repeatedly tilt
										their head up and down (looking floor to ceiling) for a
										period of 15 seconds. Vision needs to be inline with head
										position (no visual fixing).
									</p>
								</li>
							</ol>
							<p>
								The test is passed if subjects can maintain single leg stance
								and do not take their hands off their waist for both assessments
							</p>
							<br />
							<p class="fw-bold">Goal: Pass both limbs</p>
						</PopUp>
					</div>
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
								:dropdownOptions="side_affected"
								:defaultOption="payload.cooper_side_affected || ``"
								:Key="`cooper_side_affected`"
								:isDisabled="isDisabled"
								@onChange="onChangeSelect"
							/>
						</div>
						<div class="col-md-4">
							<SelectDropdown
								:dropdownOptions="side_non_affected"
								:defaultOption="payload.cooper_side_non_affected || ``"
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
								:dropdownOptions="up_affected"
								:defaultOption="payload.cooper_up_affected || ``"
								:Key="`cooper_up_affected`"
								:isDisabled="isDisabled"
								@onChange="onChangeSelect"
							/>
						</div>
						<div class="col-md-4">
							<SelectDropdown
								:dropdownOptions="up_non_affected"
								:defaultOption="payload.cooper_up_non_affected || ``"
								:Key="`cooper_up_non_affected`"
								:isDisabled="isDisabled"
								@onChange="onChangeSelect"
							/>
						</div>
					</div>
				</div>
			</div>

			<div
				class="box p-5"
				style="width: 100% !important; background-color: rgba(0, 119, 182, 0.1)"
			>
				<h5>Supplementary Goals</h5>
				<div class="my-3 row">
					<div class="col-md-4">
						<label class="form-label">Bodyweight (Kgs)</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.weight"
						/>
					</div>
				</div>
				<div>
					<h6>
						Single Leg Press 1RM<i
							class="bi bi-info-square mx-2 fs-6"
							@click="$refs.infoPopup8.showPopup = true"
						></i>
					</h6>
					<PopUp ref="infoPopup8"
						><h5>Single Leg Press</h5>
						<br />
						<p>1RM Single Leg Press (Campanholi Neto, José, et al, 2015)</p>
						<br />
						<p>
							This test can be performed in most commercial gymnasiums that have
							a 45 degree incline leg press. Please ensure an appropriate warm
							up.
						</p>
						<p>
							Seat position is at 90 degrees to the slide, and the foot should
							be placed so that the hip is flexed to 90 degrees. A valid
							repetition is where the weight is lowered to a depth of 90 degrees
							knee flexion and then extended back to full knee extension.
						</p>
						<br />
						<p class="fw-bold">Goal: 1.5 x Body Weight (sled + weight)</p>
					</PopUp>
				</div>
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
						<input
							type="number"
							class="form-control"
							v-model="payload.leg_rm_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.leg_weight_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Non-affected Limb</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.leg_rm_non_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.leg_weight_non_affected"
						/>
					</div>
				</div>
				<div>
					<h6>
						Squat 1RM<i
							class="bi bi-info-square mx-2 fs-6"
							@click="$refs.infoPopup10.showPopup = true"
						></i>
					</h6>
					<PopUp ref="infoPopup10"
						><h5>Squat 1RM Squat</h5>
						<br />
						<p>
							This test can be performed in most commercial gymnasiums that have
							a squat rack. Please ensure an appropriate warm up and
							supervision/spotter whilst performing this test.
						</p>
						<p>
							There are many ways to perform the squat exercise ie. Front Squat,
							Back Squat, Trap Bar Squat; whichever way you choose to do it, we
							advise that the person attempts to squat down to 90 degrees knee
							flexion, and rises up into full knee and hip extension
						</p>
						<br />
						<p class="fw-bold">Goal: 1.8 x Body Weight</p>
					</PopUp>
				</div>
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
						<input
							type="number"
							class="form-control"
							v-model="payload.squat_rm"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.squat_weight"
						/>
					</div>
				</div>
			</div>

			<div class="d-flex justify-content-between" style="margin-top: 20px">
				<button
					class="btn btn-outline-secondary"
					@click="$router.push('/doctor-portal')"
				>
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
			<h5 class="mt-3">Phase 3: Running, Agility and Landings</h5>
			<hr />
			<p>Related Documents</p>
			<p>
				<a
					href="/src/assets/ACL_Guide_Phase_3.pdf"
					target="_blank"
					class="fw-bold"
				>
					<i class="bi bi-file-earmark-fill"></i> ACL Guide Phase 3</a
				>
			</p>
			<p>
				<a href="/src/assets/ACL-RSI.pdf" target="_blank" class="fw-bold">
					<i class="bi bi-file-earmark-fill"></i> ACL-RSI</a
				>
			</p>
			<p>
				<a href="/src/assets/Tegner.pdf" target="_blank" class="fw-bold">
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
	</div>
</template>

<script>
import { mapActions } from "pinia";
import RadioButton from "./RadioButton.vue";
import SelectDropdown from "./SelectDropdown.vue";
import { useUserStore } from "@/store/UserStore";
import PopUp from "./PopUp.vue";

export default {
	props: ["isDisabled", "fields", "role"],
	components: { SelectDropdown, RadioButton, PopUp },
	data() {
		return {
			equalOrGreater: [
				{ name: "Pass", isChecked: false },
				{ name: "Fail", isChecked: false },
			],
			hurdle: [
				{ name: "Pass", isChecked: false },
				{ name: "Fail", isChecked: false },
			],
			side_affected: ["Pass", "Fail"],
			side_non_affected: ["Pass", "Fail"],
			up_affected: ["Pass", "Fail"],
			up_non_affected: ["Pass", "Fail"],
			payload: {
				date: "",
				hop_trial_1_affected: "",
				hop_trial_1_non_affected: "",
				hop_trial_2_affected: "",
				hop_trial_2_non_affected: "",
				hop_symmetry: "",
				baseline_result: "",
				affected_limb: "",
				baseline_eq: "",
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
				repetitions_affetced: "",
				repetitions_non_affected: "",
				repetition_symmetry: "",
				repetition_hurdle: "",
				star_forward_affected: "",
				star_forward_non_affected: "",
				star_forward_symmetry: "",
				postereomedical_affected: "",
				postereomedical_non_affected: "",
				postereolateral_affected: "",
				postereolateral_non_affected: "",
				postereo_symmetry: "",
				cooper_side_affected: "",
				cooper_side_non_affected: "",
				cooper_up_affected: "",
				cooper_up_non_affected: "",
				weight: "",
				leg_affected: "",
				leg_non_affected: "",
				squat_rm: "",
				squat_weight: "",
				leg_rm_affected: "",
				leg_weight_affected: "",
				leg_rm_non_affected: "",
				leg_weight_non_affected: "",
			},
		};
	},
	setup() {},

	methods: {
		...mapActions(useUserStore, ["onCreatePhase", "onEditPhase"]),

		getAverage(val1, val2) {
			return val1.toString().length && val2.toString.length
				? (val1 + val2) / 2
				: "";
		},

		getSum(val1, val2) {
			return val1?.toString().length && val2?.toString().length
				? val1 + val2
				: "";
		},

		calculateLimbSymmetry(key, val1, val2) {
			let lmbSymmtry = "";

			if (val1?.toString().length && val2?.toString().length) {
				if (val1 === 0 && val2 === 0) lmbSymmtry = 0;
				else lmbSymmtry = (val1 / val2) * 100;
			}

			this.payload[key] = lmbSymmtry;

			return lmbSymmtry;
		},

		onChangeSelect(key, value) {
			let array =
				key === "cooper_side_affected"
					? this.side_affected
					: key === "cooper_side_non_affected"
						? this.side_non_affected
						: key === "cooper_up_affected"
							? this.up_affected
							: this.up_non_affected;

			const selectedData = array.filter((option) => option === value)[0];

			this.payload[key] = selectedData;
		},

		onCancel() {
			this.$router.push(`/${this.role}-portal`);
		},

		onRadioSelect(key, value) {
			let array = key === "baseline_eq" ? this.equalOrGreater : this.hurdle;

			const new_list = array.map((option) => {
				return { ...option, isChecked: option.name === value };
			});

			array = [...new_list];

			const selectedData = array.filter((option) => option.isChecked)[0]?.name;

			key === "baseline_eq"
				? (this.equalOrGreater = [...new_list])
				: (this.hurdle = [...new_list]);

			this.payload[key] = selectedData;
		},

		async onFinalize() {
			try {
				this.payload = {
					...this.payload,
					demographics_id: this.$route?.query?.id,
					percentage: 100,
					draft: false,
					phase: "Phase 3",
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
					phase: "Phase 3",
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
				(Object.values(this.payload).filter((field) => field?.toString().length)
					?.length /
					47) *
					100
			);
		},
	},
	mounted() {
		const inputElements = document.querySelectorAll(`input.form-control`);
		for (const input of inputElements) {
			input.disabled = this.isDisabled;
		}
		if (this.fields) {
			this.payload = { ...this.payload, ...this.fields };
		}
	},
};
</script>
