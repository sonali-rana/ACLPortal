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
        { path: '/all-surveys', menuItem: 'My ACL Rehab' },
        { path: '/patient-requests', menuItem: 'My Requests' },
        { path: '/patient-details', menuItem: 'My Account' }
      ]
    }
  }
}
</script>
