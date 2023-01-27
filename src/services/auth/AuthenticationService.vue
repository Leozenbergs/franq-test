<template>
  <span></span>
</template>

<script>
import { Auth } from 'aws-amplify';

export default {
  methods: {
    executeSignUp: async ({ username, password }) => {
      try {
        const { user } = await Auth.signUp({
          username,
          password,
        });
        console.log(user);
      } catch (error) {
        console.log('error signing up:', error);
      }
    },
  
    executeSignIn: async ({ username, password }) => {
      try {
        const user = await Auth.signIn(username, password);
        console.log(user);
      } catch (error) {
          console.log('error signing in', error);
      }
    },
  
    executeSignOut: async () => {
      try {
        await Auth.signOut();
      } catch (error) {
          console.log('error signing out: ', error);
      }
    },
  
    async resendConfirmationCode ({ username }) {
      try {
          await Auth.resendSignUp(username);
          console.log('code resent successfully');
      } catch (err) {
          console.log('error resending code: ', err);
      }
    },
  
    async confirmSignUp ({ username, code }) {
      try {
        await Auth.confirmSignUp(username, code);
      } catch (error) {
          console.log('error confirming sign up', error);
      }
    }
  }
}
</script>