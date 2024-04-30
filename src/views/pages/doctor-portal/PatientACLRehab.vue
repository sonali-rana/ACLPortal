<template>
  <h4>Your Patients</h4>
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
