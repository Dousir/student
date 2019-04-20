<template>
  <div id="app">
    <headerNav />
    <router-view/>
    <footerbox/>
  </div>
</template>

<script>
  import headerNav from '@/components/headerNav.vue'
  import footerbox from '@/components/footerPage.vue'
  import './assets/css/style.css'
  export default {
    components: {
      headerNav,
      footerbox
    }
  }
</script>


<style>
</style>
