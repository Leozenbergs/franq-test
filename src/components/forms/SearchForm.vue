<template>
  <div>
    <v-row align-content="center" justify="center">
      <v-text-field label="Search" v-model="search" />
  
  
    </v-row>
    <div id="chart"></div>
  </div>
</template>

<script>
import financeService from '@/services/api/financeService';
import ApexCharts from 'apexcharts'
import { flatten } from 'loadash'

export default {
  mixins: [financeService],
  data() {
    return {
      search: undefined,
      results: undefined,
    }
  },
  mounted() {
    this.test()
    this.renderChart()
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          type: 'line'
        },
        series: [...this.results],
        xaxis: {
          categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
        }
      }
    }
  },
  methods: {
    async test () {
      const { data } = await this.all()
      this.results = data.results.stocks
      this.headers = flatten(Object.keys(data.results.stocks))
    },

    renderChart() {
      let chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);

      chart.render();
    }
  }
}





</script>

<style>

</style>