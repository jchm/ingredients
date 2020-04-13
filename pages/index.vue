<template>
  <div class="container p-4 text-center">
    <h1 class="text-lg leading-6 font-medium text-gray-900 mb-4">
      Kies recept
    </h1>
    <div class="flex justify-center flex-wrap">
      <nuxt-link
        v-for="recipe in recipes"
        :key="recipe.file"
        class="btn mb-4"
        :to="{ name: 'recipe-name', params: { name: recipe.file } }"
        v-text="recipe.name"
      />
    </div>
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
  @apply py-1 px-3 rounded-full border-gray-500 border mx-1 whitespace-no-wrap;
}

.btn:hover {
  @apply bg-primary border-primary text-white;
}
</style>
