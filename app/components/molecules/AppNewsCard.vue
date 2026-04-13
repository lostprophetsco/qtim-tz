<template>
  <article class="app-news-card">
    <div class="app-news-card__image-wrapper">
      <img
        :src="post.image"
        :alt="post.title"
        class="app-news-card__image"
        loading="lazy"
      />
    </div>
    <div class="app-news-card__content">
      {{ post.preview }}
    </div>
    <AppButton
      v-if="post.id"
      :to="`/posts/${post.id}`"
      class="app-news-card__link"
    >
      Read more
    </AppButton>
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

defineProps<Props>()
</script>
