<template>
	<div class="flex mt-10 items-center gap-2">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="emit('change-page', page)"
        class="w-11 h-11 hidden sm:flex items-center justify-center border rounded-xl"
        :class="{
          'bg-primary text-white border-primary': page === currentPage,
		  'bg-light border-light hover:bg-secondary': page !== currentPage
        }"
      >
        {{ page }}
      </button>
	  <button
          @click="emit('change-page', currentPage - 1)"
          :disabled="currentPage === 1"
          class="sm:hidden w-11 h-11 flex items-center justify-center border border-secondary rounded-xl hover:bg-secondary disabled:opacity-50"
        >
         	<img src="~/assets/next-arrow.svg" alt="next page" class="h-6 w-6 rotate-180" />
        </button>

	  <span class="sm:hidden text-sm font-medium text-primary">
		{{ currentPage }} / {{ totalPages }}
	  </span>

      <button
        class="w-11 h-11 flex items-center justify-center border border-secondary rounded-xl hover:bg-secondary disabled:opacity-50"
        :disabled="currentPage === totalPages"
        @click="emit('change-page', currentPage + 1)"
      >
        <img src="~/assets/next-arrow.svg" alt="next page" class="h-6 w-6" />
      </button>
    </div>
</template>

<script setup lang="ts">
	defineProps<{
		currentPage: number
		totalPages: number
	}>()

	const emit = defineEmits<{
		(e: 'change-page', page: number): void
	}>()
</script>