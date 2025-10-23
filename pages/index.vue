<template>
  <div class="bg-white flex flex-col items-center lg:block">
    <h1 class="text-[84px] lg:mb-[60px]">Articles</h1>
    <div class="grid justify-center lg:gap-8
		grid-cols-1
		sm:grid-cols-2
		lg:grid-cols-3
		xl:grid-cols-4"
    >
		<ArticleCard
			v-for="post in paginatedPosts"
			:key="post.id"
			:title="post.title"
			:description="post.preview"
			:image="post.image"
			:link="`/post/${post.id}`"
		/>
    </div>
	<Pagination 
		v-if="paginatedPosts"
		:currentPage="currentPage"
		:totalPages="totalPages"
		@change-page="changePage"
	/>
  </div>
</template>

<script setup lang="ts">
	import { usePosts } from '~/composables/usePosts'

	const { getPosts } = usePosts()
	const posts = ref<Post[]>([])

	const currentPage = ref(1)
	const postsPerPage = 8

	onMounted(async () => {
	posts.value = await getPosts()
	})

	const paginatedPosts = computed(() => {
	const start = (currentPage.value - 1) * postsPerPage
	const end = start + postsPerPage
	return posts.value.slice(start, end)
	})

	const totalPages = computed(() =>
	Math.ceil(posts.value.length / postsPerPage)
	)

	const changePage = (page: number) => {
	if (page >= 1 && page <= totalPages.value) {
		currentPage.value = page
	}
	}
</script>



