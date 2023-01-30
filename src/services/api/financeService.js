import Vue from 'vue'

export default {
  methods: {
    async quotations() {
      return await Vue.axios.get(``)
    },
    async taxes() {
      await Vue.axios.get(``)
    },
    async all() {
      return await Vue.axios.get(``)
    },
  }
}
