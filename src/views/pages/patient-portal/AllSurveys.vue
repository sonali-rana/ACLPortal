<template>
  <div class="d-flex justify-content-between align-items-center">
    <h4>All Surveys</h4>
    <RouterLink to="patient-portal"
      ><button class="btn btn-primary">Start New ACL rehabilitation</button></RouterLink
    >
  </div>
  <div class="row">
    <div class="col-md-10">
      <SurveyDetails :surveyData="allData" />
    </div>
    <div class="col-md-2"></div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import SurveyDetails from '../../../components/SurveyDetails.vue'
import { useUserStore } from '@/store/UserStore'

export default {
  components: { SurveyDetails },
  data() {
    return { allData: [] }
  },
  methods: { ...mapActions(useUserStore, ['getCreatedDemographics']) },
  async mounted() {
    try {
      const { role, email } = JSON.parse(localStorage.getItem('userData'))

      const res = await this.getCreatedDemographics(role, email)
      if (res?.status === 200) {
        console.log('res_survey', res)
        this.allData = [...res.data.data]
      }
    } catch (error) {
      throw new error()
    }
  }
}
</script>
