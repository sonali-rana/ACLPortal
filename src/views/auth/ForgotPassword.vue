<template>
  <div class="d-flex">
    <img src="/src/assets/bg.jpg" width="800" alt="acl_image" />
    <div class="px-2" style="margin-top: 200px; width: 400px">
      <h2 class="p-2 my-2">Verify Email</h2>
      <p class="fs-6 px-2">Please enter your email address to reset password.</p>
      <div class="my-3 container">
        <div class="mb-3 row">
          <div class="col">
            <label class="form-label">E-Mail Address</label>
            <input type="email" class="form-control" v-model="payload.email" />
          </div>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-baseline">
          <p class="fs-6">Go Back to <RouterLink to="/login">Login</RouterLink></p>
          <button class="btn btn-primary" @click="onVerifyingEmail">Verify Email</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/store/AuthStore'
import { mapActions } from 'pinia'

export default {
  data() {
    return { payload: { email: '' } }
  },
  methods: {
    ...mapActions(useAuthStore, ['forgotPassword']),
    onVerifyingEmail() {
      this.forgotPassword(this.payload)
    }
  }
}
</script>
