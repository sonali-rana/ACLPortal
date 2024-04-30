<template>
  <div>
    <div class="d-flex align-items-center">
      <h4>User Details</h4>
      <RouterLink to="/edit-doctor-details"
        ><h6 class="ml30">Edit<i class="bi bi-pencil-square mx-1"></i></h6
      ></RouterLink>
    </div>
    <UserDetails />
  </div>
</template>

<script>
import UserDetails from '../../../components/UserDetails.vue'

export default {
  components: { UserDetails }
}
</script>
