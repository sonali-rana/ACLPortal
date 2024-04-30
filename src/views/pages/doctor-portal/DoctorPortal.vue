<template>
  <div class="d-flex">
    <SideBar :menu="menu" />
    <div class="d-flex flex-column">
      <PatientMenu />
      <main class="p-5">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script>
import PatientMenu from '@/components/MainMenu.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  components: {
    PatientMenu,
    SideBar
  },
  data() {
    return {
      menu: [
        { path: '/doctor-portal', menuItem: 'Patient ACL Rehab' },
        { path: '/my-patient-requests', menuItem: 'My Invitations' },
        { path: '/doctor-details', menuItem: 'My Account' }
      ]
    }
  }
}
</script>
