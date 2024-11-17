import { defineStore } from 'pinia'

import { useApi } from '~/composables/useApi'

export const useNewsStore = defineStore('newsStore', {
  state: () => ({
    news: [],
    count: 0,
    loading: true,
  }),
  actions: {
    fetchProjects(params: any, merge = false) {
      this.loading = true
      return new Promise((resolve, reject) => {
        useApi()
          .$get('general/news/', {
            params,
          })
          .then((res: any) => {
            if (!merge) {
              this.news = res?.results
            } else {
              this.news.push(...res?.results)
            }
            this.count = res?.count
            resolve(res)
          })
          .catch((error: any) => {
            reject(error)
          })
          .finally(() => {
            this.loading = false
          })
      })
    },
  },
})
