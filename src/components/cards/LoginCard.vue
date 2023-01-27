<template>
  <v-card 
    rounded
    min-width="344"
    elevation="1"
  >
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="user"
          type="email"
          name="username"
          placeholder="email"
        />
        <v-text-field
          v-model="password"
          type="password"
          name="password"
          placeholder="password"
          />
        </v-form>
    </v-card-text>
    
    <v-card-actions >
      <v-spacer />
      <v-btn 
        depressed
        color="primary"
        @click="() => handleSignIn()"
      >
        {{ $t('login.signIn') }}
      </v-btn>

    </v-card-actions>

  </v-card>
</template>

<script>
import AuthenticationService from '@/services/auth/AuthenticationService'

export default {
  mixins: [AuthenticationService],
  data: () => ({
    user: '',
    password: '',
  }),

  methods: {
    async handleSignIn () {
      debugger
      await this.executeSignIn({ username: this.user, password: this.password })
    },

    async handleSignUp () {
      debugger
      await this.executeSignUp({ username: this.user, password: this.password })
    }
  }
}
</script>