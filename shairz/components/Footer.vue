<template>
  <footer class="bg-gray-800 text-white py-8 px-4">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-between">
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h5 class="uppercase mb-6 font-bold">Shairz</h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="/" class="hover:underline text-gray-400 hover:text-white">Home</a>
            </li>
            <li class="mt-2">
              <a href="/about" class="hover:underline text-gray-400 hover:text-white">About</a>
            </li>
            <li class="mt-2">
              <a href="/services" class="hover:underline text-gray-400 hover:text-white">Services</a>
            </li>
            <li class="mt-2">
              <a href="/contact" class="hover:underline text-gray-400 hover:text-white">Contact</a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h5 class="uppercase mb-6 font-bold">Legal</h5>
          <p class="mb-4 text-sm">All rights reserved by Shairz 2022</p>
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