<template>
  <div class="container p-4 text-center">
    <h1 class="text-lg leading-6 font-medium text-gray-900 mb-4">
      Kies recept
    </h1>
    <nuxt-link
      v-for="recipe in recipes"
      :key="recipe.file"
      class="btn"
      :to="`/recipe/${recipe.file}`"
      >{{ recipe.name }}</nuxt-link
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    recipes() {
      const recipes: Array<Object> = []

      const context = require.context('../data/', true, /\.json$/)

      context.keys().forEach(function(key) {
        const recipe = context(key)

        recipes.push({
          name: recipe.meta.name,
          file: key.replace('.json', '').replace('./', '')
        })
      })

      return recipes
    }
  }
})
</script>

<style scoped>
.btn {
  @apply py-1 px-3 rounded-full border-gray-500 border mx-1;
}

.btn:hover {
  @apply bg-teal-500 border-teal-500 text-white;
}
</style>
