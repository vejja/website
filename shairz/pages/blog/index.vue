<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-4">Blog</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <nuxt-link
        v-for="post in posts"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
        class="block p-4 border rounded hover:shadow-lg"
      >
        <h1 class="text-2xl font-bold mb-2">{{ post.title }}</h1>
        <p class="text-gray-700">{{ post.description }}</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'

const nuxtApp = useNuxtApp()
const posts = ref([])

onMounted(async () => {
  const { $content } = nuxtApp.nuxt.plugins
  posts.value = await $content('blog').fetch()
})
</script>

<style scoped>
.nuxt-link {
  transition: all 0.3s ease;
}
.nuxt-link:hover {
  transform: translateY(-1px);
}
</style>