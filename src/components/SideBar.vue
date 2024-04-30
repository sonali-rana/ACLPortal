<template>
  <div class="sidebar">
    <h4 class="mt-5 px-4" style="color: #fff !important; margin-bottom: 150px">
      <i class="bi bi-h-square fs-2" style="margin-right: 5px"></i>Healthwise Medical Center
    </h4>
    <!-- <img src="/src/assets/acl_bands2.png" alt="" width="250" class="mt-5" /> -->
    <div v-for="menuObj in menu" :key="menuObj.menuItem">
      {{ console.log(menuObj.path, window?.location?.href.includes(menuObj.path)) }}
      <div
        class="menu-list py-2 {{ window && window.location.href.includes(menuObj.path) ? 'active' : '' }}"
      >
        <RouterLink :to="menuObj.path">{{ menuObj.menuItem }}</RouterLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['menu'],
  mounted() {}
}
</script>
