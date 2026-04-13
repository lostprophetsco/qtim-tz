<template>
  <div class="app-pagination">
    <button
      v-if="currentPage !== 1"
      class="app-pagination__button"
      @click="prevPage"
    >
      &lt;
    </button>

    <div class="app-pagination__pages">
      <button
        v-for="page in visiblePages"
        :key="page"
        class="app-pagination__page"
        :class="{ 'app-pagination__page--active': page === currentPage }"
        @click="setPage(page)"
      >
        {{ page }}
      </button>
    </div>

    <button
      v-if="currentPage !== totalPages"
      class="app-pagination__button"
      :disabled="currentPage === totalPages"
      @click="nextPage"
    >
      &gt;
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  currentPage: number
  totalPages: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  prev: []
  next: []
  setPage: [page: number]
}>()

const prevPage = () => {
  emit('prev')
}

const nextPage = () => {
  emit('next')
}

const setPage = (page: number) => {
  emit('setPage', page)
}

const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  const halfVisible = Math.floor(maxVisible / 2)

  let start = Math.max(1, props.currentPage - halfVisible)
  let end = Math.min(props.totalPages, start + maxVisible - 1)

  if (end - start < maxVisible - 1) {
    start = Math.max(1, end - maxVisible + 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})
</script>
