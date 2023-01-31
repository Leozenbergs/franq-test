<template>
  <div class="mb-6">
    <h2 class="mb-6">{{ $t('labels.quotations') }}</h2>

    <v-row align-content="center" justify="center" no-gutters>
      <v-text-field
        v-model="search"
        :label="$t('labels.search')"
        filled
        prepend-inner-icon="mdi-magnify"
        hide-details
        class="mx-2"
      />
    </v-row>

    <div v-if="!loading" >
      <quotation-cards :values="currencies" :title="$t('labels.currencies')" />
      <quotation-cards :values="bitcoins" :title="$t('labels.bitcoins')" />
    </div>
    <div v-else>
      <loader />
    </div>
  </div>
</template>

<script>
import QuotationCards from '@/components/cards/QuotationCards';
import Loader from '@/components/loaders/Loader'

import financeService from '@/services/api/financeService';

export default {
  components: {
    QuotationCards,
    Loader
  },
  mixins: [financeService],
  data() {
    return {
      search: undefined,
      currencies: [],
      bitcoins: [],
      loading: true,
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

      this.loading = false
    },
  }
}
</script>
