<template>
  <header class="bg-white py-6 sm:py-8 lg:py-9 lg:px-10">
    <div class="mx-auto px-4 flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center">
        <img
          src="~/assets/logo.svg"
          alt="Logo"
          class="h-[25px] w-auto"
        />
      </NuxtLink>

      <div class="hidden lg:flex items-center gap-24">
        <nav class="flex items-center gap-8 text-xl">
          <NuxtLink to="/" class="hover:text-light transition">Works</NuxtLink>
          <NuxtLink to="/" class="hover:text-light transition">About</NuxtLink>
        </nav>

        <div class="flex items-center gap-4">
          <button class="rounded-full border-2 border-light size-[52px] flex items-center justify-center hover:border-primary transition">
            <img src="~/assets/uk.svg" alt="EN" class="h-8 w-auto" />
          </button>
          <button class="rounded-full bg-primary text-white px-8 h-[52px] font-medium hover:bg-light hover:text-primary transition">
            Let’s work
          </button>
        </div>
      </div>

      <button
        class="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 focus:outline-none"
        @click="menuOpen = !menuOpen"
      >
        <span
          class="block h-0.5 bg-primary transition-transform"
          :class="{ 'rotate-45 translate-y-[6px]': menuOpen }"
        ></span>
        <span
          class="block h-0.5 bg-primary transition-opacity"
          :class="{ 'opacity-0': menuOpen }"
        ></span>
        <span
          class="block h-0.5 bg-primary transition-transform"
          :class="{ '-rotate-45 -translate-y-[6px]': menuOpen }"
        ></span>
      </button>
    </div>

    <transition name="fade">
      <div
        v-if="menuOpen"
        class="lg:hidden mt-6 bg-white border-t border-gray-100 shadow-sm"
      >
        <nav class="flex flex-col items-center py-6 gap-4 text-lg font-medium">
          <NuxtLink
            to="/"
            class="hover:text-light transition"
            @click="menuOpen = false"
          >
            Works
          </NuxtLink>
          <NuxtLink
            to="/"
            class="hover:text-light transition"
            @click="menuOpen = false"
          >
            About
          </NuxtLink>
          <button
            class="rounded-full bg-primary text-white px-6 py-3 font-medium hover:bg-light hover:text-primary transition"
          >
            Let’s work
          </button>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const menuOpen = ref(false)
</script>

<style scoped>
	.fade-enter-active,
	.fade-leave-active {
	transition: opacity 0.3s ease;
	}
	.fade-enter-from,
	.fade-leave-to {
	opacity: 0;
	}
</style>
