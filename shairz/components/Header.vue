<template>
  <nav class="flex items-center justify-between p-6 bg-blue-500">
    <div>
      <nuxt-link to="/" class="text-white text-lg font-bold">Shairz</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/about" class="text-white mx-3">About</nuxt-link>
      <nuxt-link to="/services" class="text-white mx-3">Services</nuxt-link>
      <nuxt-link to="/blog" class="text-white mx-3">Blog</nuxt-link>
      <nuxt-link to="/contact" class="text-white mx-3">Contact</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
</style>