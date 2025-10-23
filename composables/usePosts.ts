export interface Post {
  id: string
  title: string
  description: string
  image: string
  preview: string
}

const API_URL = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts'

export const usePosts = () => {
  const getPosts = async (): Promise<Post[]> => {
    try {
      const data = await $fetch<Post[]>(API_URL)
      console.log('Posts loaded:', data)
      return data
    } catch (error) {
      console.error('Ошибка при загрузке постов:', error)
      return []
    }
  }

  const getPostById = async (id: string): Promise<Post | null> => {
    try {
      const data = await $fetch<Post>(`${API_URL}/${id}`)
      console.log('Post loaded:', data)
      return data
    } catch (error) {
      console.error('Ошибка при загрузке поста:', error)
      return null
    }
  }

  return { getPosts, getPostById }
}
