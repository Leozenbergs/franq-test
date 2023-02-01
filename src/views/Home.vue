<template>
  <v-container class="pt-2 pb-8">
    <quotation-tabs />
  </v-container>
</template>

<script >
  import QuotationTabs from '@/components/tabs/QuotationTabs';
  export default {
    components: {QuotationTabs},
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