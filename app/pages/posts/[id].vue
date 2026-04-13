<template>
  <div class="post-page">
    <AppLoader v-if="postsStore.isLoading" />

    <div v-else-if="postsStore.error" class="error">
      <p>Error loading post: {{ postsStore.error }}</p>
    </div>

    <div v-else-if="post" class="post-page__content">
      <h1 class="hero-section__title">{{ post.title }}</h1>
      <img :src="post.image" :alt="post.title" class="post-page__image" />
      <div>About</div>
      <p class="post-page__description">{{ post.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { AppLoader } from '~/components/atoms'
import { usePostsStore } from '~/stores/posts'
import type { Post } from '~/stores/posts'

definePageMeta({
  layout: 'article'
})

const route = useRoute()
const postsStore = usePostsStore()
const post = ref<Post | null>(null)

onMounted(async () => {
  const postId = route.params.id as string
  post.value = await postsStore.fetchPostById(postId)
})
</script>
