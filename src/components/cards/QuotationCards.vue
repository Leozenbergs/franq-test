<template>
  <div>
    <h3 class="mb-6">{{ title }}</h3>

    <v-row no-gutters v-if="!!values" align-content="center" justify="center">
    
      <v-col :md="4" :cols="12" v-for="(item, index) in values" :key="index">
    
        <v-card class='ma-2' min-height="150">
          <v-card-title>
            {{ item.name }}
          </v-card-title>
    
          <v-card-text class="text-left">
            <div v-if="item.buy">
              <b>Buy:</b> R${{ parseFloat(item.buy).toFixed(2) }}
            </div>
            <div v-if="item.sell">
              <b>Sell:</b> R${{ parseFloat(item.sell).toFixed(2) }}
            </div>
            <div v-if="item.variation">
              <b>Variation:</b> {{ item.variation }}
            </div>
          </v-card-text>
    
        </v-card>
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
  }
}
</script>
