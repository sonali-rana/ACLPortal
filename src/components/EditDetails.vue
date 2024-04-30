<template>
  <div class="my-3 row">
    {{ user }}
    <p class="col-4 fw-bold">Account Type</p>
    <p class="col-8">{{ user.role }}</p>
  </div>
  <div class="mb-3 row">
    <p class="col-4 fw-bold">First Name</p>
    <div class="col-8">
      <input type="text" class="form-control" v-model="user.first_name" />
    </div>
  </div>
  <div class="mb-3 row">
    <p class="col-4 fw-bold">Last Name</p>
    <div class="col-8">
      <input type="text" class="form-control" v-model="user.last_name" />
    </div>
  </div>
  <div class="mb-3 row">
    <p class="col-4 fw-bold">Email</p>
    <div class="col-8">
      <input type="text" class="form-control" v-model="user.email" disabled />
    </div>
  </div>
  <div class="mb-3 row">
    <p class="col-4 fw-bold">Phone</p>
    <div class="col-8">
      <input type="tel" class="form-control" v-model="user.phone" />
    </div>
  </div>
  <div class="my-3 d-flex justify-content-between px-2">
    <RouterLink :to="`/${user.role}-details`"
      ><button class="btn btn-outline-secondary">Cancel</button></RouterLink
    >
    <button class="btn btn-primary" @click="onSaveChanges">Save Changes</button>
  </div>
</template>

<script>
import { useUserStore } from '@/store/UserStore'
import { mapActions } from 'pinia'

export default {
  data() {
    return { user: {} }
  },
  methods: {
    ...mapActions(useUserStore, ['onEditUserDetails']),
    async onSaveChanges() {
      try {
        const res = await this.onEditUserDetails(this.user)
        if (res?.status === 200) {
          //    this.$router.push('/all-surveys')
        }
      } catch (error) {
        throw new error()
      }
    }
  },
  mounted() {
    const details = JSON.parse(localStorage.getItem('userData'))
    const { email, first_name, last_name, phone, role } = details
    this.user = { email, first_name, last_name, phone, role }
  }
}
</script>
