<template>
  <div class="d-flex">
    <img src="/src/assets/bg2.jpg" width="750" alt="acl_image" style="margin-top: 50px" />
    <div class="px-2" style="margin-top: 170px; width: 500px">
      <h4>Melbourne ACL Rehabilitation Patient Registration</h4>
      <div>
        <span>Please complete the following information to register.</span>
      </div>
      <div class="my-3 container">
        <div class="mb-3 row">
          <div class="col">
            <label h5 class="form-label">First Name</label>
            <input type="text" class="form-control" v-model="payload.firstname" />
          </div>
          <div class="col">
            <label h5 class="form-label">Last Name</label>
            <input type="text" class="form-control" v-model="payload.lastname" />
          </div>
        </div>
        <div class="mb-3 row">
          <div class="col">
            <label h5 class="form-label">Email Address</label>
            <input type="email" class="form-control" v-model="payload.email" />
          </div>
          <div class="col">
            <label h5 class="form-label">Phone</label>
            <input type="tel" class="form-control" v-model="payload.phone" />
          </div>
        </div>
        <div class="mb-3 row">
          <div class="col">
            <label h5 class="form-label">Password</label>
            <input type="password" class="form-control" v-model="payload.password" />
          </div>
          <div class="col">
            <label h5 class="form-label">Confirm Password</label>
            <input type="password" class="form-control" v-model="confirmPassword" />
          </div>
        </div>
      </div>
      <div class="p-3 d-flex justify-content-between align-items-baseline">
        <p>Already have an account?<RouterLink to="/login">Login</RouterLink></p>
        <button class="btn btn-primary" @click="onRegister">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/store/AuthStore'
import { mapActions } from 'pinia'

export default {
  data() {
    return {
      confirmPassword: '',
      payload: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        role: 'patient'
      }
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['register']),
    async onRegister() {
      if (this.payload.password !== this.confirmPassword) {
        return
      }
      try {
        const res = await this.register(this.payload)
        console.log('res_register', res)
        if (res?.status === 200) {
          this.payload = {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            password: '',
            role: 'patient'
          }
          this.confirmPassword = ''
          this.$router.push('/patient-portal')
        }
      } catch (error) {
        throw new error()
      }
    }
  }
}
</script>
