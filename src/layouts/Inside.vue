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
    </v-main>
    <MainDrawer v-model="drawer"/>
  </v-app>
</template>

<script >
import Home from '@/views/Home';
import MainDrawer from '@/components/drawers/MainDrawer';

export default {
  components: {
    Home,
    MainDrawer
  },

  data() {
    return {
      drawer: false
    }
  },
};
</script>
