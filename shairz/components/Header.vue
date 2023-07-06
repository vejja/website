<template>
  <header class="header">
    <nav class="nav">
      <nuxt-link to="/" class="nav-link">Home</nuxt-link>
      <nuxt-link to="/about" class="nav-link">About</nuxt-link>
      <nuxt-link to="/services" class="nav-link">Services</nuxt-link>
      <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
      <nuxt-link to="/blog" class="nav-link">Blog</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  @apply bg-blue-500 text-white p-5;
}

.nav {
  @apply flex justify-around;
}

.nav-link {
  @apply text-lg no-underline text-white;
}
</style>