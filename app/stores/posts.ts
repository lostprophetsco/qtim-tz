import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export interface Post {
  id: string
  createdAt: string
  title: string
  preview: string
  image: string
  description: string
}

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Post[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const currentPage = ref(1)
  const itemsPerPage = ref(8)

  const totalPages = computed(() =>
    Math.ceil(posts.value.length / itemsPerPage.value)
  )

  const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    return posts.value.slice(start, end)
  })

  const fetchPosts = async () => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(
        'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/'
      )
      posts.value = await response.json()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch posts'
      console.error('Failed to fetch posts:', err)
    } finally {
      isLoading.value = false
    }
  }

  const fetchPostById = async (id: string) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(
        `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`
      )
      return await response.json()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch post'
      console.error('Failed to fetch post:', err)
      return null
    } finally {
      isLoading.value = false
    }
  }

  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  return {
    posts,
    paginatedPosts,
    isLoading,
    error,
    currentPage,
    totalPages,
    itemsPerPage,
    fetchPosts,
    fetchPostById,
    setPage,
    nextPage,
    prevPage
  }
})
