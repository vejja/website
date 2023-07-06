<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-4">About Us</h1>
    <div v-html="aboutContent" class="prose"></div>
  </div>
</template>

<script>
import { useNuxtContent } from '@nuxt/content'

export default {
  async setup() {
    const { data: aboutContent } = await useNuxtContent('about')

    return {
      aboutContent
    }
  }
}
</script>

<style scoped>
</style>