<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-4">{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
import { useNuxtContent } from '@nuxt/content'

export default {
  async asyncData() {
    const content = useNuxtContent()
    const page = await content.fetch('pages/services')
    return { page }
  }
}
</script>

<style scoped>
@import '~/assets/css/tailwind.css';
</style>