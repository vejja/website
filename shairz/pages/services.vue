<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-4">Our Services</h1>
    <div v-for="service in services" :key="service.title" class="mb-8">
      <h2 class="text-2xl font-semibold mb-2">{{ service.title }}</h2>
      <p>{{ service.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'

const nuxtApp = useNuxtApp()
const services = ref([])

onMounted(async () => {
  const { $content } = nuxtApp.nuxt.plugins
  services.value = await $content('services').fetch()
})
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>