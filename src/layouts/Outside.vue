<template>
  <v-app>
    <v-app-bar
      app
      elevation="3"
      dense
      fixed
    >
      <v-app-bar-title>Franq-test</v-app-bar-title>
      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-white-balance-sunny</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="bg-color">
      <Login />

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
import Login from '@/views/Login';

export default {

  components: {
    Login,
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
</style>