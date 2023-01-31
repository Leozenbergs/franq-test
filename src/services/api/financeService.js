import Vue from 'vue'

export default {
  methods: {
    async all() {
      try {
        return await Vue.axios.get(``)
      } catch (e) {
        console.log(e);
      }
    },
  }
}
