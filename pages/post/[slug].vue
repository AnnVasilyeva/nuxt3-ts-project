<template>
  <div class="container text-primary px-4 sm:px-6 lg:px-0">
  <div v-if="loading" class="text-center text-gray">Loading...</div>

  <div v-else-if="errorMsg" class="text-center text-red-500">{{ errorMsg }}</div>

  <div v-else-if="post" class="mx-auto">
    <h1 class="text-[36px] sm:text-[54px] lg:text-[84px] mb-6 sm:mb-10 lg:mb-[60px] text-center sm:text-left">
      {{ post.title }}
    </h1>

    <img
      :src="post.image"
      alt="cover"
      class="w-full h-auto object-cover"
      @error="onImageError"
    />

    <div class="max-w-full sm:max-w-[80%] lg:max-w-[60%] mt-10 sm:mt-16 lg:mt-20 mx-auto sm:mx-0">
      <p class="text-sm sm:text-base mb-4 sm:mb-8 text-center sm:text-left">About</p>
      <p class="leading-relaxed lg:leading-[3.5rem] text-lg sm:text-2xl lg:text-4xl text-center sm:text-left">
        {{ post.description }}
      </p>
    </div>
  </div>

  <div v-else class="text-center text-gray">Article not found</div>
</div>

</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { usePosts } from '~/composables/usePosts'

  const route = useRoute()
  const { getPostById } = usePosts()

  const post = ref<Post | null>(null)
  const loading = ref(true)
  const errorMsg = ref('')

  onMounted(async () => {
    try {
      post.value = await getPostById(route.params.slug as string)
    } catch (err) {
      console.error(err)
      errorMsg.value = 'Error loading article'
    } finally {
      loading.value = false
    }
  })

  const onImageError = (event: Event) => {
    const target = event.target as HTMLImageElement
    target.src = '/placeholder-id.jpg'
  }
</script>
