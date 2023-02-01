<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        color="#D32F2F"
        v-on="on"
        @click="$emit('click')"
      >
        <v-icon>mdi-power</v-icon>
      </v-btn>  
    </template>
    {{ $t('labels.signOut') }}
  </v-tooltip>
</template>

<script>
export default {

}
</script>

<style>

</style>