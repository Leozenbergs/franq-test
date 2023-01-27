<template>
  <v-container>
    <v-row class="text-center full-bg" justify="center" align="center">
      <v-card 
        rounded
        outlined
        min-width="344"
        elevation="1"
      >
        <v-card-title>
          Login
        </v-card-title>

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
            SignIn
          </v-btn>
          <v-btn
            text
            mr-2
            @click="() => handleSignUp()"
          >
            SignUp
          </v-btn>

        </v-card-actions>

      </v-card>
    </v-row>
  </v-container>
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

<style scoped>
.full-bg {
  height: 80vh !important;
}

</style>