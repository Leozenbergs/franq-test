<template>
  <v-app>
    <v-app-bar
      app
      elevation="1"
      dense
    >
      <v-app-bar-title>Franq</v-app-bar-title>
      <v-spacer />

      <logout-button @click="showConfirmationDialog()" />
    </v-app-bar>

    <v-main>
      <Home />
      <main-footer />
    </v-main>

    <confirmation-dialog v-model="confirmationDialog" @confirm="handleSignOut()" />
  </v-app>
</template>

<script >
import Home from '@/views/Home';
import MainFooter from '@/components/footer/MainFooter';
import LogoutButton from '@/components/buttons/LogoutButton';
import ConfirmationDialog from '@/components/dialogs/ConfirmationDialog';

import AuthenticationService from '@/services/auth/AuthenticationService';

export default {
  components: {
    Home,
    MainFooter,
    LogoutButton,
    ConfirmationDialog
  },
  mixins: [AuthenticationService],
  data() {
    return {
      confirmationDialog: false,
      authState: undefined,
    }
  },
  methods: {
    showConfirmationDialog() {
      this.confirmationDialog = true
    },
    async handleSignOut() {
      await this.executeSignOut()
      localStorage.removeItem('userSession')
      this.$router.push({ name: 'Login' })
    }
  }
};
</script>
