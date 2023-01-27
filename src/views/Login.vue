<template>
  <v-container>
    <v-row class="text-center" justify="center" align="center">
      <amplify-authenticator>
        <div v-if="authState === 'signedin' && user">
          <div>Hello, {{user.username}}</div>
        </div>
        <amplify-sign-out></amplify-sign-out>
      </amplify-authenticator>
    </v-row>
  </v-container>
</template>

<script >
  import { onAuthUIStateChange } from '@aws-amplify/ui-components';
  import '@/plugins/LoginLabels'

export default {
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
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
:host {
  --container-height: 60vh !important;
}
</style>