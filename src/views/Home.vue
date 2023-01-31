<template>
  <v-container class="pt-2 pb-8">
    <search-form />
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