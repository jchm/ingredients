<template>
  <div class="container p-4">
    <article class="bg-white shadow overflow-hidden rounded-sm">
      <header class="px-4 py-5 border-b border-gray-200">
        <h1 class="text-lg leading-6 font-medium text-gray-900">
          Ingrediënten voor {{ title.toLowerCase() }}
        </h1>
        <p v-if="description" class="text-gray-700 mb-0" v-text="description" />
      </header>
      <div class="px-4 py-5">
        <ListIngriedent
          v-for="(ingriedent, index) in recipeData"
          :key="index"
          :amount="calculate(ingriedent.amount)"
          :measurement="ingriedent.measurement"
          :ingriedent="ingriedent.ingriedent"
        />
      </div>
      <footer class="px-4 py-5 border-t border-gray-200">
        <p class="mb-2">
          Ingrediënten voor <strong>{{ persons }}</strong>
          {{ persons == 1 ? 'persoon' : 'personen' }}
        </p>

        <button class="counter bg-gray-500" @click.prevent="persons++">
          +
        </button>
        <button
          :disabled="persons <= 1"
          class="counter bg-gray-400"
          @click.prevent="persons--"
        >
          -
        </button>
      </footer>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ListIngriedent from '../../components/ListIngriedent.vue'

export default Vue.extend({
  components: {
    ListIngriedent
  },
  data() {
    return {
      title: null,
      description: null,
      recipeData: null,
      persons: 1,
      recipePersons: 1
    }
  },
  created() {
    const recipeName: string = this.$route.params.name

    const {
      ingriedents,
      meta: { name, description, persons }
    } = require(`~/data/${recipeName}.json`)

    this.recipeData = ingriedents
    this.title = name
    this.description = description
    this.recipePersons = persons
  },
  methods: {
    calculate(amount: number): void | number {
      if (!amount) {
        return
      }

      return (amount / this.recipePersons) * this.persons
    }
  }
})
</script>

<style scoped>
.counter {
  @apply w-8 h-8 rounded-sm text-gray-900;

  &:hover {
      @apply bg-primary border-primary text-white;
  }
}
</style>
