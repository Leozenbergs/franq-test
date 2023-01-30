!<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    absolute
    temporary
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    
    <v-row class="text-center" justify="center" align="center">
      <amplify-sign-out :style="{'--amplify-primary-color': '#b71c1c', 'position': 'absolute', 'bottom': '15px'}" />
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components';

export default {
  props: {
    value: {
      type: Boolean,
      default: () => false,
    }
  },
  data() {
    return {
      drawer: this.value,
      group: null,
      authState: undefined,
    }
  },
  mounted() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState
    });
  },
  watch: {
    authState() {
      localStorage.removeItem('userSession')
      if (this.authState === 'signedout') this.$router.push({ name: 'Login' })
    },
    value: {
      immediate: true,
      handler() {
        this.drawer = this.value
      }
    },
    drawer() {
      this.$emit('input', this.drawer)
    }
  }
}
</script>

<style>

</style>