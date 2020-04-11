<template>
  <article>
    {{ am }}
    {{ ingriedent }}
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    amount: {
      type: Number,
      default: null
    },
    measurement: {
      type: String,
      default: null
    },
    ingriedent: {
      type: String,
      required: true
    }
  },
  computed: {
    am(): void | string {
      if (!this.amount) {
        return
      }

      if (this.measurement && this.measurement === 'gr') {
        if (this.amount > 1000) {
          return `${this.amount / 1000}kg`
        }
      }

      if (this.measurement && this.measurement === 'ml') {
        if (this.amount > 1000) {
          return `${this.amount / 1000}l`
        }
      }

      if (this.measurement && this.measurement === 'stuk') {
        if (this.amount === 0.5) {
          return `half`
        }

        if (this.amount >= 1) {
          return this.amount.toString()
        }
      }

      return `${this.amount} ${this.measurement ? this.measurement : ''}`
    }
  }
})
</script>
