<template>
  <div class="container mx-auto px-4">
    <Header />
    <main class="my-10">
      <h1 class="text-4xl font-bold mb-4">Welcome to Shairz</h1>
      <nuxt-content :document="page" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { useNuxtContent } from '@nuxt/content'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

const { data: page } = useNuxtContent('pages', 'index')
</script>

<style scoped>
@import '~/assets/css/tailwind.css';
</style>