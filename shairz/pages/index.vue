<template>
  <div class="container mx-auto px-4">
    <Header />
    <nuxt-content :document="page" />
    <Footer />
  </div>
</template>

<script setup>
import { useNuxtContent } from '@nuxt/content'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

const page = useNuxtContent('pages/home')
</script>

<style scoped>
@import '~/assets/css/tailwind.css';
</style>