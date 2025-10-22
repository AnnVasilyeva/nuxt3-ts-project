

<template>
  <div class="container mx-auto py-10">
    <!-- Загрузка -->
    <div v-if="loading" class="text-center text-gray-500">Загрузка...</div>

    <!-- Ошибка -->
    <div v-else-if="errorMsg" class="text-center text-red-500">{{ errorMsg }}</div>

    <!-- Статья -->
    <div v-else-if="post" class="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <img
        :src="post.image"
        alt="cover"
        class="w-full h-64 object-cover"
      />
      <div class="p-6">
        <p class="text-gray-700 leading-relaxed">{{ post.description }}</p>
      </div>
    </div>

    <!-- Если статья не найдена -->
    <div v-else class="text-center text-gray-500">Статья не найдена</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePosts } from '~/composables/usePosts'

const route = useRoute()
const { getPostById } = usePosts()

// ref с типом Post | null
interface Post {
  id: string
  title: string
  description: string
  image: string
}

const post = ref<Post | null>(null)
const loading = ref(true)
const errorMsg = ref('')

onMounted(async () => {
  try {
    post.value = await getPostById(route.params.slug as string)
  } catch (err) {
    console.error(err)
    errorMsg.value = 'Ошибка при загрузке статьи'
  } finally {
    loading.value = false
  }
})
</script>
