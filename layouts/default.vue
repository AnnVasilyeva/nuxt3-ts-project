<template>
  <div class="flex flex-col min-h-screen bg-white text-primary font-sans">
    <Header />

    <main class="flex-1 container mx-auto px-4 sm:px-6 lg:px-0 py-8 sm:py-16 lg:py-32">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>
