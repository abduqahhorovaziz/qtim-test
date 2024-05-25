import { useApi } from '~/composables/useApi'
import type { IArticle } from '~/types/articles'

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    loading: true,
    articles: [] as IArticle[],
    currentPage: 1,
    articlesPerPage: 8,
  }),
  getters: {
    paginatedArticles: (state) => {
      const start = (state.currentPage - 1) * state.articlesPerPage
      const end = start + state.articlesPerPage
      return state.articles.slice(start, end)
    },
    totalPages: (state) => {
      return Math.ceil(state.articles.length / state.articlesPerPage)
    },
  },
  actions: {
    async fetchArticles() {
      const data = await useApi().$get<IArticle[]>('/posts/')
      this.articles = data
      return data
    },
    setPage(page: any) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page
      }
    },
  },
})
