<template>
  <article class="app-news-card">
    <div class="app-news-card__image-wrapper">
      <img :src="post.image" :alt="post.title" class="app-news-card__image" />
    </div>
    <div class="app-news-card__content">
      <p class="app-news-card__description">{{ post.preview }}</p>
      <AppButton :to="`/posts/${post.id}`" class="app-news-card__link"
        >Read more</AppButton
      >
    </div>
  </article>
</template>

<script setup lang="ts">
import { AppButton } from '~/components/atoms'

interface Post {
  id: string
  createdAt: string
  title: string
  preview: string
  image: string
  description: string
}

interface Props {
  post: Post
}

const props = defineProps<Props>()
</script>
