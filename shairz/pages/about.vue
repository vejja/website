<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-4">{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useNuxtContent } from '@nuxt/content'

export default {
  async setup() {
    const { fetch } = useNuxtContent()
    const page = ref(null)

    page.value = await fetch('/pages/about')

    return { page }
  }
}
</script>

<style scoped>
@import '~/assets/css/tailwind.css';
</style>