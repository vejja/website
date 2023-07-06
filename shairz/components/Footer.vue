<template>
  <footer class="bg-gray-800 text-white py-8 px-4">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-between">
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h5 class="uppercase mb-6 font-bold">Links</h5>
          <ul class="mb-4">
            <li class="mt-2">
              <nuxt-link to="/" class="hover:underline">Home</nuxt-link>
            </li>
            <li class="mt-2">
              <nuxt-link to="/about" class="hover:underline">About</nuxt-link>
            </li>
            <li class="mt-2">
              <nuxt-link to="/services" class="hover:underline">Services</nuxt-link>
            </li>
            <li class="mt-2">
              <nuxt-link to="/contact" class="hover:underline">Contact</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h5 class="uppercase mb-6 font-bold">Legal</h5>
          <p class="mb-4">All rights reserved by Shairz</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
</style>