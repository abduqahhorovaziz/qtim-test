<template>
  <div>
    <h1 class="text-[44px] md:text-[84px] leading-[84px] mb-8 md:mb-[60px]">
      Articles
    </h1>
    <div
      class="w-full grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] items-start gap-x-8 gap-y-5 md:gap-y-10 mb-[50px]"
    >
      <UICardArticle
        v-for="article in paginatedArticles"
        :key="article.id"
        :article="article"
      />
    </div>
    <div class="flex justify-center md:justify-start items-center gap-2">
      <button
        v-if="!(currentPage === 1)"
        class="w-11 h-11 border border-[#E8E8E8] rounded-xl flex items-center justify-center transition-all hover:bg-gray-200"
        @click="prevPage"
      >
        <img src="/images/arrow.svg" alt="arrow" class="rotate-180" />
      </button>
      <button
        v-for="page in pageNumbers"
        :key="page"
        class="w-11 h-11 rounded-xl bg-gray-200 flex items-center justify-center text-dark-100 transition-all"
        :class="{ '!bg-dark-100 text-white': currentPage === page }"
        @click="setPage(page)"
      >
        {{ page }}
      </button>
      <button
        v-if="!(currentPage === totalPages)"
        class="w-11 h-11 border border-[#E8E8E8] rounded-xl flex items-center justify-center transition-all hover:bg-gray-200"
        @click="nextPage"
      >
        <img src="/images/arrow.svg" alt="arrow" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

import { useArticlesStore } from '~/store/articles'

const articleStore = useArticlesStore()

onMounted(() => {
  articleStore.fetchArticles()
})

const paginatedArticles = computed(() => articleStore.paginatedArticles)
const currentPage = computed(() => articleStore.currentPage)
const totalPages = computed(() => articleStore.totalPages)

const setPage = (page: any) => {
  articleStore.setPage(page)
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    articleStore.setPage(currentPage.value + 1)
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    articleStore.setPage(currentPage.value - 1)
  }
}

const pageNumbers = computed(() => {
  const pages = []
  const maxPagesToShow = 5
  let startPage = Math.max(
    currentPage.value - Math.floor(maxPagesToShow / 2),
    1,
  )
  let endPage = startPage + maxPagesToShow - 1

  if (endPage > totalPages.value) {
    endPage = totalPages.value
    startPage = Math.max(endPage - maxPagesToShow + 1, 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return pages
})
</script>
