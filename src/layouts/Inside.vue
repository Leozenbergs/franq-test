<template>
  <v-app>
    <v-app-bar
      app
      elevation="3"
      dense
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-app-bar-title>Franq-test</v-app-bar-title>
      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-white-balance-sunny</v-icon>
      </v-btn>  
    </v-app-bar>

    <v-main>
      <Home />

      <main-footer />
    </v-main>
    <main-drawer v-model="drawer"/>
  </v-app>
</template>

<script >
import Home from '@/views/Home';
import MainDrawer from '@/components/drawers/MainDrawer';
import MainFooter from '@/components/footer/MainFooter';

export default {
  components: {
    Home,
    MainFooter,
    MainDrawer
  },

  data() {
    return {
      drawer: false
    }
  },
};
</script>
