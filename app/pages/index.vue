<template>
  <div class="home-page">
    <h1 class="hero-section__title">Articles</h1>

    <section class="news-section">
      <AppLoader v-if="postsStore.isLoading" />

      <div v-else class="news-section__grid">
        <AppNewsCard
          v-for="post in postsStore.paginatedPosts"
          :key="post.id"
          :post="post"
        />
      </div>

      <AppPagination
        v-if="!postsStore.isLoading && postsStore.totalPages > 1"
        :current-page="postsStore.currentPage"
        :total-pages="postsStore.totalPages"
        @prev="postsStore.prevPage"
        @next="postsStore.nextPage"
        @set-page="postsStore.setPage"
        class="news-section__pagination"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { AppNewsCard, AppPagination } from '~/components/molecules'
import { AppLoader } from '~/components/atoms'
import { usePostsStore } from '~/stores/posts'

const postsStore = usePostsStore()

onMounted(() => {
  postsStore.fetchPosts()
})
</script>
