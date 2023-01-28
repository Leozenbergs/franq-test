<template>
  <v-container>
    <v-row class="text-center" justify="center" align="center">
      <amplify-authenticator :style="{'--container-height': '80vh'}">
      </amplify-authenticator>
    </v-row>
  </v-container>
</template>

<script >
  import { onAuthUIStateChange } from '@aws-amplify/ui-components';
  import '@/plugins/LoginLabels'

export default {
  mounted() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
      localStorage.setItem('userSession', JSON.stringify(authData))
      if (authState === 'signedin') this.$router.push({name: 'Home'})
    });
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
    };
  },
  beforeDestroy() {
    this.unsubscribeAuth();
  },
};
</script>

<style>
:root {
  --amplify-primary-color: #3f51b5;
}
</style>