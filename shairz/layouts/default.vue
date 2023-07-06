<template>
  <div class="container mx-auto px-4">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>