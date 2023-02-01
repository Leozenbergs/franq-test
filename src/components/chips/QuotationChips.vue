<template>
  <div>
    <h3 class="my-6 text-center mx-2">{{ title }}:</h3>

    <v-row no-gutters v-if="!!values" align-content="center" justify="start">
    
      <v-col :md="4" :cols="12" v-for="(item, index) in values" :key="index" class="my-4 text-center">
    
        <v-chip :color="item.value > 0 ? 'green' : 'red'" class='ma-2 pointer white--text'>
            <b class="text-uppercase">{{ item.name }}</b>
            : <span>
              {{ parseFloat(item.value).toFixed(2) }}%
            </span>
        </v-chip>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    values: {
      type: [],
      required: true
    },
    title: {
      type: String,
      default: () => ''
    }
  },
}
</script>

<style>
.pointer {
  cursor: pointer;
}
.rounded {
  border-radius: 10px;
}
</style>