<template>
  <v-container>
    Home, welcome {{ user?.username }}
    <SearchForm />
  </v-container>
</template>

<script >
  import SearchForm from '@/components/forms/SearchForm';
  export default {
    components: {SearchForm},
    data() {
      return {
        user: undefined,
      }
    },

    mounted() {
      this.user = JSON.parse(localStorage.getItem('userSession'));
    },
  }
</script>

<style>
</style>