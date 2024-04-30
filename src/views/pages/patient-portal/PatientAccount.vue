<template>
  <div>
    <div class="d-flex align-items-center">
      <h4>User Details</h4>
      <RouterLink to="/edit-details"
        ><h6 class="ml30">Edit<i class="bi bi-pencil-square mx-1"></i></h6
      ></RouterLink>
    </div>
    <UserDetails />
  </div>
  <div class="mt-5">
    <h4>New ACL Rehabilitation</h4>
    <div class="my-3 box form-box py-3 px-4" style="width: 500px">
      <p>
        To start a fresh new survey use the button below. Please be aware that you will have to
        start from the beginning. You will need to invite a health practitioner to this new survey
        even if you already have someone helping your with another.
      </p>
      <RouterLink to="patient-portal" class="my-3"
        ><button class="btn btn-primary">Start New ACL rehabilitation</button></RouterLink
      >
    </div>
  </div>
</template>

<script>
import UserDetails from '../../../components/UserDetails.vue'

export default {
  components: { UserDetails }
}
</script>
