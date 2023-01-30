<template>
  <amplify-authenticator :style="{'--container-height': '80vh'}">
  </amplify-authenticator>
</template>

<script >
  import Inside from '@/layouts/Inside'
  import { onAuthUIStateChange } from '@aws-amplify/ui-components';
  import { mapState, mapMutations } from 'vuex'
  import '@/plugins/LoginLabels'

export default {
  components: {Inside},

  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
    };
  },

  mounted() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
      !!this.user ? this.setUserSession(authData) : undefined
    });
  },

  watch: {
    userSession() {
      if (!this.user) return
      localStorage.setItem('userSession', JSON.stringify(this.user))
      this.$router.push({name: 'Home'})
    }
  },

  computed: {
    ...mapState(['userSession'])
  },

  beforeDestroy() {
    this.unsubscribeAuth();
  },

  methods: {
    ...mapMutations(['setUserSession'])
  }
};
</script>

<style>
:root {
  --amplify-primary-color: #3f51b5;
}
</style>