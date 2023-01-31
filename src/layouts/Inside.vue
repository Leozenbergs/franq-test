<template>
  <v-app>
    <v-app-bar
      app
      elevation="3"
      dense
    >
      <v-app-bar-title>Franq-test</v-app-bar-title>
      <v-spacer />

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            color="#D32F2F"
            v-on="on"
            @click="handleSignOut()"
          >
            <v-icon>mdi-power</v-icon>
          </v-btn>  
        </template>
        Sign out
      </v-tooltip>
    </v-app-bar>

    <v-main>
      <Home />

      <main-footer />
    </v-main>
  </v-app>
</template>

<script >
import Home from '@/views/Home';
import MainFooter from '@/components/footer/MainFooter';

import AuthenticationService from '@/services/auth/AuthenticationService';

export default {
  components: {
    Home,
    MainFooter,
  },
  mixins: [AuthenticationService],
  data() {
    return {
      authState: undefined,
    }
  },
  methods: {
    async handleSignOut() {
      await this.executeSignOut()
      localStorage.removeItem('userSession')
      this.$router.push({ name: 'Login' })
    }
  }
};
</script>
