<template>
  <div class="container p-4 text-center">
    <h1 class="text-lg leading-6 font-medium text-gray-900 mb-4">Kies recept</h1>
    <nuxt-link class="btn" v-for="recipe in recipes" :to="`/recipe/${recipe.file}`" :key="recipe">{{ recipe.name }}</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      recipes: []
    };
  },
  created() {
    let recipes:Array<Object> = [];
    var context = require.context("../data/", true, /\.json$/);

    context.keys().forEach(function (key) {
        let recipe = context(key);

        recipes.push({
          name: recipe.meta.name,
          file: key.replace('.json', '').replace('./','')
        });
    });

   this.recipes = recipes;
  }
})  
</script>

<style scoped>
.btn {
  @apply py-1 px-3 rounded-full border-gray-500 border mx-1 ;
}

.btn:hover {
 @apply bg-teal-500 border-teal-500 text-white;
}
</style>