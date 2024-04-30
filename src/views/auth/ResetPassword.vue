<template>
  <div class="d-flex">
    <img src="/src/assets/bg.jpg" width="800" alt="acl_image" />
    <div class="px-2" style="margin-top: 200px; width: 400px">
      <h2 class="p-2 my-2">Reset Password</h2>
      <p class="fs-6 px-2">Please enter new password here.</p>
      <div class="my-3 container">
        <div class="mb-3 row">
          <div class="col">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" v-model="payload.password" />
          </div>
        </div>
        <div class="mb-3 row">
          <div class="col">
            <label class="form-label"> Confirm Password</label>
            <input type="password" class="form-control" v-model="payload.confirmPassword" />
          </div>
        </div>
      </div>

      <div class="p-3 d-flex justify-content-between">
        <p></p>
        <button class="btn btn-primary" @click="onReset">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/store/AuthStore'
import { mapActions } from 'pinia'

export default {
  data() {
    return { payload: { password: '', confirmPassword: '' } }
  },
  methods: {
    methods: {
      ...mapActions(useAuthStore, ['forgotPassword']),
      onVerifyingEmail() {
        if (this.payload.password !== this.payload.confirmPassword) {
          return
        }
        delete this.payload.confirmPassword
        this.forgotPassword(this.payload)
      }
    }
  }
}
</script>
