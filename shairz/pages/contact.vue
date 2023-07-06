<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-4">{{ contact.title }}</h1>
    <div v-html="contact.description" class="prose"></div>
  </div>
</template>

<script>
import { useNuxtContent } from '@nuxt/content'

export default {
  async asyncData() {
    const contact = await useNuxtContent().fetch('pages/contact')
    return { contact }
  }
}
</script>

<style scoped>
@import '~/assets/css/tailwind.css';
</style>