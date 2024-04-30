<template>
  <div class="row my-4">
    <div class="col-md-4 my-3" v-for="data in surveyData" :key="data.id" style="height: 200px">
      <div class="card">
        <div class="card-header">
          <h5>Demographics</h5>
          <p>{{ formatDate(data?.survey_date) }}</p>
        </div>
        <div class="card-body">
          <b> DOB</b> : {{ data.dob }}<br />
          <b>Main Sport</b> : {{ data.sport }}<br />
          <b>Injury Date</b> : {{ data.date_of_injury }}<br />
          <b>Knee</b> : {{ data.date_of_injury }}<br />
        </div>
      </div>
    </div>
    <div v-if="surveyData?.length === 0" class="my-2">
      <p>Surveys not present at the moment</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['surveyData'],
  methods: {
    formatDate(date) {
      if (typeof date !== 'string') return ''
      else {
        return date.split('T')[0]
      }
    }
  }
}
</script>
