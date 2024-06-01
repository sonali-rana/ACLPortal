<template>
	<h4>Phase 2</h4>
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

				<div class="mb-3 row">
					<div class="col-md-2 d-flex">
						<label class="form-label">Prone Hang Test (cm)</label
						><i
							class="bi bi-info-square mx-2 fs-6"
							@click="$refs.infoPopup.showPopup = true"
						></i>
						<PopUp ref="infoPopup">
							<h5>Passive Knee Extension</h5>
							<br />
							<p>Prone hang test (Sachs et al, 1989)</p>
							<br />
							<p>
								Subjects lie prone on a treatment bed with the lower legs off
								the end allowing full passive knee extension. The heel height
								difference is measured (approx 1cm = 1°)
							</p>
							<br />
							<p class="fw-bold">Goal: Equal to the other side</p>
						</PopUp>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.prone_hang"
						/>
					</div>
					<div class="col-md-2 d-flex">
						<label class="form-label">Passive Knee Flexion (Degrees)</label
						><i
							class="bi bi-info-square mx-2 fs-6"
							@click="$refs.infoPopup1.showPopup = true"
						></i>
						<PopUp ref="infoPopup1">
							<h5>Passive Knee Flexion</h5>
							<br />
							<p>Supine with a long arm goniometer (Norkin & White, 1995).</p>
							<br />
							<p>
								Bony landmarks: greater trochanter, the lateral femoral condyle,
								and the lateral mallelous.
							</p>
							<br />
							<p class="fw-bold">Goal: 125+</p>
						</PopUp>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.passive_flexion"
						/>
					</div>
				</div>

				<div class="mb-3 row">
					<div class="col-md-2 d-flex">
						<label class="form-label">Swelling/ Effusion</label
						><i
							class="bi bi-info-square mx-2 fs-6"
							@click="$refs.infoPopup2.showPopup = true"
						></i>
						<PopUp ref="infoPopup2"
							><h5>Swelling/Effusion</h5>
							<br />
							<p>Stroke Test (Sturgill et al, 2009)</p>
							<br />
							<p>Zero: No wave produced on downstroke</p>
							<p>Trace: Small wave on medial side with downstroke</p>
							<p>1+: Large bulge on medial side with downstroke</p>
							<p>
								2+: Effusion spontaneously returns to medial side after upstroke
							</p>
							<p>
								3+: So much fluid that it is not possible to move the effusion
								out of the medial aspect of the knee
							</p>
							<br />
							<p class="fw-bold">Goal: Zero — 1+</p></PopUp
						>
					</div>
					<div class="col-md-4">
						<SelectDropdown
							:dropdownOptions="swelling"
							:defaultOption="payload.swelling || ``"
							:Key="`swelling`"
							:isDisabled="isDisabled"
							@onChange="onChangeSelect"
						/>
					</div>
					<div class="col-md-2 d-flex">
						<label class="form-label">Functional Alignment Test</label
						><i
							class="bi bi-info-square mx-2 fs-6"
							@click="$refs.infoPopup3.showPopup = true"
						></i>
						<PopUp ref="infoPopup3"
							><h5>Functional Alignment Test</h5>
							<br />
							<p>Single leg squat test (Crossley et al, 2011)</p>
							<br />
							<p>
								Subjects stand on one leg on a 20cm box with arms crossed. 5 x
								single leg squats are performed in a slow controlled manner (at
								a rate of 2 seconds per squat). The task is rated as “good”,
								“fair” or “poor”. For a subject to be rated “good”;
							</p>
							<ul>
								<li>Maintain balance</li>
								<li>Perform the movement smoothly</li>
								<li>Squat must be to at least 60 degrees</li>
								<li>
									No trunk movement (lateral deviation, rotation, lateral
									flexion, forward flexion)
								</li>
								<li>
									No pelvic movement (shunt or lateral deviation, rotation, or
									tilt)
								</li>
								<li>No hip adduction or internal rotation</li>
								<li>No knee valgus</li>
								<li>Centre of knee remains over centre of foot</li>
							</ul>
							<br />
							<p class="fw-bold">Goal: Good</p></PopUp
						>
					</div>
					<div class="col-md-4">
						<SelectDropdown
							:dropdownOptions="functionalAlignment"
							:defaultOption="payload.functional_alignment || ``"
							:Key="`functional_alignment`"
							:isDisabled="isDisabled"
							@onChange="onChangeSelect"
						/>
					</div>
				</div>

				<div>
					<h5>
						Single Leg Bridge Test
						<i
							class="bi bi-info-square mx-2 fs-6"
							@click="$refs.infoPopup4.showPopup = true"
						></i>
					</h5>
					<PopUp ref="infoPopup4"
						><h5>Single Leg Bridges</h5>
						<br />
						<p>Single leg bridge test *variation (Freckleton et al, 2013)</p>
						<br />
						<p>
							Subjects lie supine on the floor with one heel on a box or plinth
							at 60cm high. The knee of the test leg is slightly bent at 20° and
							opposite leg is bent to 90° hip and knee flexion with their arms
							crossed over chest. Subjects elevate the hips as high as possible
							and the assessor places a hand at this height. Repeat this action
							as many times as possible touching the assessors hand each time.
							The test concludes when the subject is unable to bridge to the
							original height (assessors hand).
						</p>
						<br />
						<p class="fw-bold">Goal: > 85% compared with other side</p>
						<p class="fw-bold">Hurdle requirement = >20 repetitions</p></PopUp
					>
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
							v-model="payload.bridge_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.bridge_non_affected"
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
							v-model="payload.bridge_symmetry"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Hurdle Requirement</label>
					</div>
					<div class="col-md-4">
						<RadioButton
							:options="bridge_hurdle"
							:Key="`bridge_hurdle`"
							:isDisabled="isDisabled"
							@onChange="onRadioSelect"
						/>
					</div>
				</div>

				<div>
					<h5>
						Single Leg Calf Raises Test
						<i
							class="bi bi-info-square mx-2 fs-6"
							@click="$refs.infoPopup5.showPopup = true"
						></i>
					</h5>
					<PopUp ref="infoPopup5"
						><h5>Calf Raises</h5>
						<br />
						<p>Single leg calf raises (Hebert et al, 2017)</p>
						<br />
						<p>
							Subjects stand on one foot on the edge of the step and perform a
							calf raise through full range of motion. Calf raises are performed
							at 1 repetition every 2 seconds. The test concludes when subjects
							are unable to move through full range or slow below the cadence
							outlined above.
						</p>
						<br />
						<p class="fw-bold">Goal: > 85% compared with other side</p>
						<p class="fw-bold">Hurdle requirement = >20 repetitions</p></PopUp
					>
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
							v-model="payload.calf_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.calf_non_affected"
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
							v-model="payload.calf_symmetry"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Hurdle Requirement</label>
					</div>
					<div class="col-md-4">
						<RadioButton
							:options="calf_hurdle"
							:Key="`calf_hurdle`"
							:isDisabled="isDisabled"
							@onChange="onRadioSelect"
						/>
					</div>
				</div>

				<div>
					<h5>
						Side Endurance Test<i
							class="bi bi-info-square mx-2 fs-6"
							@click="$refs.infoPopup6.showPopup = true"
						></i>
					</h5>
					<PopUp ref="infoPopup6"
						><h5>Side Bridge Endurance Test</h5>
						<br />
						<p>Side bridge test (McGill et al, 1999)</p>
						<br />
						<p>
							Subjects lie on an exercise mat on their side with legs extended.
							The top foot is placed in front on the lower foot, then subjects
							lift their hips off the mat to maintain a straight line over their
							full body length for as long as able. The test (time) ends when
							the hips return to the mat.
						</p>
						<br />
						<p class="fw-bold">Goal: > 85% compared with other side</p>
						<p class="fw-bold">Hurdle requirement 30 seconds</p></PopUp
					>
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
						<label class="form-label">Seconds</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.endurance_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.endurance_non_affected"
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
							v-model="payload.endurance_symmetry"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Hurdle Requirement</label>
					</div>
					<div class="col-md-4">
						<RadioButton
							:options="endurance_hurdle"
							:Key="`endurance_hurdle`"
							:isDisabled="isDisabled"
							@onChange="onRadioSelect"
						/>
					</div>
				</div>

				<div>
					<h5>
						Single Leg Rise Test<i
							class="bi bi-info-square mx-2 fs-6"
							@click="$refs.infoPopup7.showPopup = true"
						></i>
					</h5>
					<PopUp ref="infoPopup7"
						><h5>Single Leg Squat</h5>
						<br />
						<p>
							Single Leg Rise Test (Culvenor et al., 2016 & Thorstensson et al.,
							2004)
						</p>
						<br />
						<p>
							Subjects sit on a chair (or a plinth) with test leg bent to 90deg,
							and 10cm from edge of chair. With hands folded across the chest,
							the subject aims to stand up from the sitting position, and sit
							down as many times as possible.
						</p>
						<br />
						<p class="fw-bold">Goal: > 85% compared with other side</p>
						<p class="fw-bold">
							Hurdle requirement >10 repetitions each leg
						</p></PopUp
					>
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
							v-model="payload.leg_rise_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.leg_rise_non_affected"
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
							v-model="payload.leg_rise_symmetry"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<label class="form-label">Hurdle Requirement</label>
					</div>
					<div class="col-md-4">
						<RadioButton
							:options="leg_rise_hurdle"
							:Key="`leg_rise_hurdle`"
							:isDisabled="isDisabled"
							@onChange="onRadioSelect"
						/>
					</div>
				</div>

				<div>
					<h5>
						Unipedal Stance Test<i
							class="bi bi-info-square mx-2 fs-6"
							@click="$refs.infoPopup8.showPopup = true"
						></i>
					</h5>
					<PopUp ref="infoPopup8"
						><h5>Balance</h5>
						<br />
						<p>Unipedal stance test (Springer et al, 2007)</p>
						<br />
						<p>
							Subjects stand on one leg with other leg raised and arms crossed
							over the chest. The assessor uses a stopwatch to time how long
							stance is maintained on one leg with a) eyes open, and b) eyes
							closed. Time ends when;
						</p>
						<ul>
							<li>Arms are used (uncrossed)</li>
							<li>Use of the raised foot (touches down or other leg)</li>
							<li>Movement of the stance foot</li>
							<li>45 secs has elapsed (maximum time)</li>
							<li>Eyes opened on eyes closed trials</li>
						</ul>
						<br />
						<p class="fw-bold">Goal: A. (eyes open) 43 seconds</p>
						<p class="fw-bold">
							B. (eyes closed) 9 seconds (Normative data for 18-39 year olds)
						</p></PopUp
					>
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
						<label class="form-label">Eyes Open (seconds)</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.unipedal_open_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.unipedal_open_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Eyes Closed (seconds)</label>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.unipedal_closed_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.unipedal_closed_non_affected"
						/>
					</div>
				</div>
				<div class="mb-3 row">
					<div class="col-md-4">
						<label class="form-label">Hurdle Requirement</label>
					</div>
					<div class="col-md-4">
						<RadioButton
							:options="unipedal_affected_hurdel"
							:Key="`unipedal_affected_hurdel`"
							:isDisabled="isDisabled"
							@onChange="onRadioSelect"
						/>
					</div>
					<div class="col-md-4">
						<RadioButton
							:options="unipedal_affected_non_hurdel"
							:Key="`unipedal_affected_non_hurdel`"
							:isDisabled="isDisabled"
							@onChange="onRadioSelect"
						/>
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
							@click="$refs.infoPopup9.showPopup = true"
						></i>
					</h6>
					<PopUp ref="infoPopup9"
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
							v-model="payload.leg_press_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.leg_press_affected_weight"
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
							v-model="payload.leg_press_non_affected"
						/>
					</div>
					<div class="col-md-4">
						<input
							type="number"
							class="form-control"
							v-model="payload.leg_press_non_affected_weight"
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
						<p class="fw-bold">Goal: 1.5 x Body Weight (sled + weight)</p>
					</PopUp>
				</div>
				<div class="mt-3 row">
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
						<input type="number" class="form-control" v-model="payload.squat" />
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
			<h5 class="mt-3">Phase 2: Strength and neuromuscular control</h5>
			<hr />
			<p>Related Documents</p>
			<p>
				<a
					href="/src/assets/ACL_Guide_Phase_2.pdf"
					target="_blank"
					class="fw-bold"
				>
					<i class="bi bi-file-earmark-fill"></i> ACL Guide Phase 2</a
				>
			</p>
			<!-- <p>Most important goals</p>
			<ul>
				<li>
					<b>Regain most of your single leg balance</b>
				</li>
				<li>
					<b>Regain most of your muscle strength</b>
				</li>
				<li><b>Single leg squat with good technique and alignment</b></li>
			</ul>
			<p>More Information</p>
			<p>
				Regaining muscle strength, balance, and basic co-ordination are the
				goals of Phase 2. This phase usually commences with easy body weight
				type exercises and progresses into a gym-based regime with a mixture of
				resistance, balance, and co-ordination exercises.
			</p>
			<p>
				It’s important for clinicians and patients to ‘listen to the knee’
				during this phase and only progress as quickly as the knee will allow.
				Increase in pain and/or swelling are the two main symptoms that indicate
				that the knee is not tolerating the workload.
			</p>
			<p>
				Typical exercises and management activities during this phase include
				lunges, step-ups, squats, bridging, calf raises, hip abduction
				strengthening, core exercises, balance, gait re-education drills, and
				non-impact aerobic condition such as cycling, swimming, and walking.
				Some clinicians may start some introductory impact type activities such
				as walk-jogging or mini jumps during this phase, but the bulk of this
				type of training should be reserved for Phase 3.
			</p> -->
		</div>
	</div>
</template>

<script>
import PopUp from "./PopUp.vue";
import SelectDropdown from "./SelectDropdown.vue";
import { useUserStore } from "@/store/UserStore";
import { mapActions } from "pinia";
import RadioButton from "./RadioButton.vue";

export default {
	props: ["isDisabled", "fields", "role"],
	components: { SelectDropdown, RadioButton, PopUp },
	data() {
		return {
			swelling: ["Zero", "Trace", "1+", "2+", "3+"],
			functionalAlignment: ["Poor", "Fair", "Good"],
			bridge_hurdle: [
				{ name: "Pass", isChecked: false },
				{ name: "Fail", isChecked: false },
			],
			calf_hurdle: [
				{ name: "Pass", isChecked: false },
				{ name: "Fail", isChecked: false },
			],
			endurance_hurdle: [
				{ name: "Pass", isChecked: false },
				{ name: "Fail", isChecked: false },
			],
			leg_rise_hurdle: [
				{ name: "Pass", isChecked: false },
				{ name: "Fail", isChecked: false },
			],
			unipedal_affected_hurdel: [
				{ name: "Pass", isChecked: false },
				{ name: "Fail", isChecked: false },
			],
			unipedal_affected_non_hurdel: [
				{ name: "Pass", isChecked: false },
				{ name: "Fail", isChecked: false },
			],
			payload: {
				date: "",
				prone_hang: "",
				passive_flexion: "",
				swelling: "",
				functional_alignment: "",
				bridge_affected: "",
				bridge_non_affected: "",
				bridge_hurdle: "",
				bridge_symmetry: "",
				calf_affected: "",
				calf_non_affected: "",
				calf_hurdle: "",
				calf_symmetry: "",
				endurance_affected: "",
				endurance_non_affected: "",
				endurance_hurdle: "",
				endurance_symmetry: "",
				leg_rise_affected: "",
				leg_rise_non_affected: "",
				leg_rise_hurdle: "",
				leg_rise_symmetry: "",
				unipedal_open_affected: "",
				unipedal_closed_affected: "",
				unipedal_open_non_affected: "",
				unipedal_closed_non_affected: "",
				unipedal_affected_hurdel: "",
				unipedal_affected_non_hurdel: "",
				weight: "",
				leg_press_affected: "",
				leg_press_affected_weight: "",
				leg_press_non_affected: "",
				leg_press_non_affected_weight: "",
				squat: "",
				squat_weight: "",
			},
		};
	},
	setup() {},
	methods: {
		...mapActions(useUserStore, ["onCreatePhase", "onEditPhase"]),
		onChangeSelect(key, value) {
			let array =
				key === "functional_alignment"
					? this.functionalAlignment
					: this.swelling;

			const selectedData = array.filter((option) => option === value)[0];

			this.payload[key] = selectedData;
		},
		onCancel() {
			this.$router.push(`/${this.role}-portal`);
		},

		onRadioSelect(key, value) {
			let array =
				key === "bridge_hurdle"
					? this.bridge_hurdle
					: key === "calf_hurdle"
						? this.calf_hurdle
						: key === "endurance_hurdle"
							? this.endurance_hurdle
							: key === "leg_rise_hurdle"
								? this.leg_rise_hurdle
								: key === "unipedal_affected_hurdel"
									? this.unipedal_affected_hurdel
									: this.unipedal_affected_non_hurdel;

			const new_list = array.map((option) => {
				return { ...option, isChecked: option.name === value };
			});

			array = [...new_list];

			const selectedData = array.filter((option) => option.isChecked)[0]?.name;

			key === "bridge_hurdle"
				? (this.bridge_hurdle = [...new_list])
				: key === "calf_hurdle"
					? (this.calf_hurdle = [...new_list])
					: key === "endurance_hurdle"
						? (this.endurance_hurdle = [...new_list])
						: key === "leg_rise_hurdle"
							? (this.leg_rise_hurdle = [...new_list])
							: key === "unipedal_affected_hurdel"
								? (this.unipedal_affected_hurdel = [...new_list])
								: (this.unipedal_affected_non_hurdel = [...new_list]);

			this.payload[key] = selectedData;
		},

		async onFinalize() {
			try {
				this.payload = {
					...this.payload,
					demographics_id: this.$route?.query?.id,
					percentage: 100,
					draft: false,
					phase: "Phase 2",
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
					phase: "Phase 2",
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
					33) *
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
			this.payload = { ...this.fields };
			this.other_injuries = this.fields.other_injuries;
		}
	},
};
</script>
