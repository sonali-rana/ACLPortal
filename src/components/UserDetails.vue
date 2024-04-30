<template>
  <div class="my-2 box p-3" style="width: 500px">
    <div class="mb-3 row">
      <p class="col-4 fw-bold">Account Type</p>
      <p class="col-8">{{ user.role }}</p>
    </div>
    <div class="mb-3 row">
      <p class="col-4 fw-bold">First Name</p>
      <p class="col-8">{{ user.first_name }}</p>
    </div>
    <div class="mb-3 row">
      <p class="col-4 fw-bold">Last Name</p>
      <p class="col-8">{{ user.last_name }}</p>
    </div>
    <div class="mb-3 row">
      <p class="col-4 fw-bold">Email</p>
      <p class="col-8">{{ user.email }}</p>
    </div>
    <div class="mb-3 row">
      <p class="col-4 fw-bold">Phone</p>
      <p class="col-8">{{ user.phone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { user: {} }
  },
  mounted() {
    const details = JSON.parse(localStorage.getItem('userData'))
    this.user = { ...details }
  }
}
</script>
