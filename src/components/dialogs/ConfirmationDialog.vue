<template>
  <v-dialog
    v-model="dialog"
    max-width="290"
  >
    <v-card>
      <v-card-title class="text-h5">
        {{ $t('dialogs.confirmationDialog.header') }}
      </v-card-title>

      <v-card-text>
        {{ $t('dialogs.confirmationDialog.body') }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="grey darken-1"
          text
          @click="dialog = false"
        >
        {{ $t('dialogs.confirmationDialog.cancel') }}
        </v-btn>

        <v-btn
          color="red darken-1"
          text
          @click="confirm()"
        >
        {{ $t('dialogs.confirmationDialog.confirm') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      dialog: this.value
    }
  },
  watch: {
    value() {
      this.dialog = this.value
    },
    dialog: {
      immediate: true,
      handler() {
        this.$emit('input', this.dialog)
      }
    }
  },
  methods: {
    confirm() {
      this.$emit('confirm')
      this.dialog = false
    }
  }
}
</script>

<style>

</style>