<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
    <div v-html="post.body" class="prose"></div>
  </div>
</template>

<script>
import { useNuxtContent } from '@nuxt/content'

export default {
  async asyncData({ params }) {
    const { fetch } = useNuxtContent()
    const post = await fetch(`/blog/${params.slug}`)
    return { post }
  }
}
</script>

<style scoped>
@import '~/assets/css/tailwind.css';
</style>