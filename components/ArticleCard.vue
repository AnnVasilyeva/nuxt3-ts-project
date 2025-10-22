<template>
  <NuxtLink
    :to="link"
    class="block w-[280px] h-[378px] bg-white overflow-hidden"
  >
    <!-- Изображение -->
    <div class="w-[280px] h-[280px]">
      <img
        :src="image"
        alt="cover"
        class="w-full h-full object-cover"
		@error="onImageError"
      />
    </div>

    <!-- Текст -->
    <div class="py-3 flex flex-col justify-between h-[98px]">
      
      <p class="text-gray-600 text-sm line-clamp-2">
        {{ description }}
      </p>
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
