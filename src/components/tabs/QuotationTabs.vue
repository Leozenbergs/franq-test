<template>
  <div class="mb-6">
    <h2 class="mb-6">{{ $t('labels.quotations') }}</h2>

    <div v-if="!loading" >
      <general-tabs :tab-names="tabNames">
        <template v-slot:items="{tab}">
          <v-tabs-items :value="tab">
            <v-tab-item>
              <quotation-cards :values="currencies" :title="$t('labels.currencies')" />
            </v-tab-item>
            <v-tab-item>
              <quotation-cards :values="bitcoins" :title="$t('labels.bitcoins')" />
            </v-tab-item>
            <v-tab-item>
              <quotation-chips :values="taxes" :title="$t('labels.taxes')" />
            </v-tab-item>
          </v-tabs-items>
        </template>
      </general-tabs>
    </div>
    <div v-else>
      <loader />
    </div>
  </div>
</template>

<script>
import GeneralTabs from '@/components/tabs/GeneralTabs';
import QuotationCards from '@/components/cards/QuotationCards';
import QuotationChips from '@/components/chips/QuotationChips';
import Loader from '@/components/loaders/Loader'

import financeService from '@/services/api/financeService';

export default {
  components: {
    GeneralTabs,
    QuotationCards,
    QuotationChips,
    Loader
  },
  mixins: [financeService],
  data() {
    return {
      taxes: [],
      currencies: [],
      bitcoins: [],
      loading: true,
    }
  },
  mounted() {
    this.test()
  },
  computed: {
    tabNames() {
      return [this.$t('labels.currencies'), this.$t('labels.bitcoins'), this.$t('labels.taxes')]
    },
  },
  methods: {
    async test () {
      try {
        const { data } = await this.all()

        this.setCurrencies(data.results.currencies)
        this.setBitcoins(data.results.bitcoin)
        this.setTaxes(data.results.taxes[0])

        this.loading = false
      } catch (e) {
        console.log(e);
        this.loading = false
      }

    },
    setCurrencies(currencies) {
      Object.values(currencies).forEach(item => {
        if(item != 'BRL') return this.currencies.push(item)
      })
    },
    setBitcoins(bitcoins) {
      Object.values(bitcoins).forEach(item => {
        return this.bitcoins.push(item)
      })
    },
    setTaxes(taxes) {
      this.taxes = Object.entries(taxes).map(item => {
        if(item[0] == 'date') return
        return { 'name': item[0], 'value': item[1] } 
      }).filter(item => item != undefined)
    },
  }
}
</script>
