<template>
  <div>
    <v-tabs v-model="tab" align-with-title>
      <v-tab
        v-for="item in items"
        :key="item"
      > {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <LoginCard />
      </v-tab-item>

      <v-tab-item>
        <RegisterCard />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import LoginCard from '@/components/cards/LoginCard'
import RegisterCard from '@/components/cards/RegisterCard'

export default {
  components: {
    LoginCard,
    RegisterCard,
  },
  data() {
    return {
      tab: null,
      items: ['Login', 'Register']
    }
  }
}
</script>