<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useNuxtContent } from '@nuxt/content'

export default {
  async setup() {
    const { fetch } = useNuxtContent()
    const post = ref(null)

    const getPost = async (slug) => {
      post.value = await fetch(`/blog/${slug}`)
    }

    await getPost('post1')

    return { post }
  }
}
</script>

<style scoped>
</style>