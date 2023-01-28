<template>
  <div>
    Home, welcome {{ user?.username }}
  </div>
</template>

<script >
  export default {
    data() {
      return {
        user: undefined,
      }
    },
    
    mounted() {
      this.user = JSON.parse(localStorage.getItem('userSession'));
    }
  }
</script>

<style>
</style>