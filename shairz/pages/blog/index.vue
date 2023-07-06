<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-4">Blog</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <nuxt-link v-for="post in posts" :key="post.slug" :to="`/blog/${post.slug}`">
        <div class="p-6 bg-white rounded shadow">
          <h2 class="text-2xl font-bold mb-2">{{ post.title }}</h2>
          <p>{{ post.description }}</p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useNuxtApp } from '#app'

const posts = ref([])

onMounted(async () => {
  const nuxtApp = useNuxtApp()
  const content = nuxtApp.$content
  posts.value = await content('blog').fetch()
})
</script>

<style scoped>
@import '~/assets/css/tailwind.css';
</style>