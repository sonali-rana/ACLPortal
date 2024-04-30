<template>
  <table class="table my-4">
    <thead>
      <tr class="fw-bold">
        <th scope="col"><b>Name</b></th>
        <th scope="col"><b>Email</b></th>
        <th scope="col"><b>Date Sent</b></th>
        <th scope="col"><b>Accepted</b></th>
        <th scope="col"></th>
        <th scope="col" v-if="role === 'doctor'"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in surveyData" :key="data.id">
        <td>{{ data.patient_name }}</td>
        <td>{{ data.patient }}</td>
        <td>{{ formatDate(data.survey_date) }}</td>
        <td>No</td>
        <td scope="col" v-if="role === 'doctor'">
          <button class="btn btn-success">Accept</button>
        </td>
        <td><button class="btn btn-danger">Delete</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['surveyData', 'role'],
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
