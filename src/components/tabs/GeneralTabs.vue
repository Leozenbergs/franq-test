<template>
  <div>
    <v-tabs
      v-model="tab"
      color="primary"
      centered
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab v-for="(name, index) in tabNames" :key="index">
        {{ name }}
      </v-tab>
    </v-tabs>
    
    <slot name="items" :tab="tab"></slot>
  </div>
</template>

<script>

export default {
  props: {
    tabNames: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tab: null
    }
  }

}
</script>

<style>

</style>