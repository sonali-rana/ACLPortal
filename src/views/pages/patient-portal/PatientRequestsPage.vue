<template>
  <h4>Requests you've sent</h4>
  <AllPatients :surveyData="allData" :role="Role" />
</template>

<script>
import { mapActions } from 'pinia'
import AllPatients from '../../../components/AllPatients.vue'
import { useUserStore } from '@/store/UserStore'

export default {
  components: { AllPatients },
  data() {
    return { allData: {}, Role: '' }
  },

  methods: { ...mapActions(useUserStore, ['getCreatedDemographics']) },

  async mounted() {
    try {
      const { role, email } = JSON.parse(localStorage.getItem('userData'))

      this.Role = role

      const res = await this.getCreatedDemographics(role, email)
      if (res?.status === 200) {
        console.log('res_survey_1', res)
        this.allData = [...res.data.data]
      }
    } catch (error) {
      throw new error()
    }
  }
}
</script>
