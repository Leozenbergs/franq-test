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

    </v-app-bar>
    <v-main class="bg-color">
      <Login />

      <main-footer />
    </v-main>
  </v-app>
</template>

<script>
import Login from '@/views/Login';
import MainFooter from '@/components/footer/MainFooter';

export default {

  components: {
    Login,
    MainFooter
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