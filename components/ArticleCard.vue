<template>
  <NuxtLink
    :to="link"
    class="group relative block w-[280px] h-[378px] bg-white overflow-hidden"
  >
    <div class="w-[280px] h-[280px] overflow-hidden">
      <img
        :src="image"
        alt="cover"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
		@error="onImageError"
      />
    </div>

    <div class="py-3 flex flex-col justify-between h-[98px] relative">
      
      <p class="text-gray-600 text-sm line-clamp-2">
        {{ description }}
      </p>
	<span class="absolute bottom-0 left-0 text-violet text-xl opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      Read more
    </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
	defineProps<{
		title: string
		description: string
		image: string
		link: string
	}>()

	const onImageError = (event: Event) => {
	const target = event.target as HTMLImageElement
	target.src = '/placeholder.jpg'
	}

</script>
