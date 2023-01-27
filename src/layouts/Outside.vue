<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      elevation="3"
      dense
      fixed
    >
      <v-app-bar-title>Franq-test</v-app-bar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-earth</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-white-balance-sunny</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="bg-color">
      <v-container>
        <v-row class="text-center full-bg" justify="center" align="center">
          <SessionTabs/>
        </v-row>
      </v-container>

      <v-footer padless absolute>
        <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Leonardo Rodrigues</strong>
        </v-col>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import SessionTabs from '@/components/tabs/sessionTabs';

export default {

  components: {
    SessionTabs,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.bg-color {
  background: #efefef
}
.full-bg {
  height: 80vh !important;
}
</style>