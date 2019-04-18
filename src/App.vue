<template>
  <div id="app">
    <headerNav />
    <router-view/>
  </div>
</template>

<script>
  import headerNav from '@/components/headerNav.vue'
  import './assets/css/style.css'
  export default {
    components: {
      headerNav
    }
  }
</script>


<style lang="less">
</style>
