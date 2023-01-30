<template>
  <div class="mb-6">
    <h2 class="mb-6">Quotations</h2>

    <v-row align-content="center" justify="center" no-gutters>
      <v-text-field label="Search" filled v-model="search" prepend-inner-icon="mdi-magnify" />
    </v-row>

    <quotation-cards :values="currencies" title="Currencies" />
    <quotation-cards :values="bitcoins" title="Bitcoins" />
  </div>
</template>

<script>
import financeService from '@/services/api/financeService';
import QuotationCards from '@/components/cards/QuotationCards';

export default {
  components: {
    QuotationCards
  },
  mixins: [financeService],
  data() {
    return {
      search: undefined,
      currencies: [],
      bitcoins: [],
    }
  },
  mounted() {
    this.test()
  },
  methods: {
    async test () {
      const { data } = await this.all()

      Object.values(data.results.currencies).forEach(item => {
        if(item != 'BRL') return this.currencies.push(item)
      })

      Object.values(data.results.bitcoin).forEach(item => {
        return this.bitcoins.push(item)
      })
    },
  }
}
</script>
