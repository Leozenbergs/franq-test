<template>
  <div>
    <h3 class="my-6 text-left mx-2">{{ title }}:</h3>

    <v-row no-gutters v-if="!!values" align-content="center" justify="center">
    
      <v-col :md="4" :cols="12" v-for="(item, index) in values" :key="index">
    
        <v-card class='ma-2 pointer' min-height="150">
          <v-card-title>
            {{ item.name }}
          </v-card-title>
    
          <v-card-text class="text-left">
            <div>
              <b>{{ $t('labels.buy') }}:</b> {{ buildLabel(item.buy, item.format) }}
            </div>
            <div>
              <b>{{ $t('labels.sell') }}:</b> {{ buildLabel(item.sell, item.format) }}
            </div>
            <div v-if="item.variation">
              <b>{{ $t('labels.variation') }}:</b> 
              <span :class="item.variation > 0 ? 'green white--text pa-1 rounded': 'red white--text pa-1 rounded'">
                {{ item.variation }}%
              </span>
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
  },
  methods: {
    buildLabel(attr, format) {
      return attr ?
        `${ !!format && format.includes('USD') ? '$' : 'R$' } ${parseFloat(attr).toFixed(2)}` : this.$t('labels.uninformed')
    }
  }
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