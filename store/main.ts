import {defineStore} from "pinia";
import {useApi} from "~/composables/useApi";

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    services: [],
    statistics: [],
    reviews: [],
    contacts: {},
      partners: [],
      news: [],
  }),
  actions: {
    fetchServices() {
      return new Promise((resolve, reject) => {
        useApi()
          .$get('general/services/', {
            params: {
              limit: 5,
            },
          })
          .then((res: any) => {
            this.services = res.results
            resolve(res)
          })
          .catch((error: any) => {
            reject(error)
          })
          .finally(() => {
          })
      })
    },
    fetchStatistics() {
      return new Promise((resolve, reject) => {
        useApi()
            .$get('general/statistics/')
            .then((res: any) => {
              this.statistics = res.results
              resolve(res)
            })
            .catch((error: any) => {
              reject(error)
            })
            .finally(() => {
            })
      })
    },
      fetchReviews() {
          return new Promise((resolve, reject) => {
              useApi()
                  .$get('general/reviews/')
                  .then((res: any) => {
                      this.reviews = res.results
                      resolve(res)
                  })
                  .catch((error: any) => {
                      reject(error)
                  })
                  .finally(() => {
                  })
          })
      },
      fetchPartners() {
          return new Promise((resolve, reject) => {
              useApi()
                  .$get('general/partners/', {
                      params: {
                          limit: 100
                      }
                  })
                  .then((res: any) => {
                      this.partners = res.results
                      resolve(res)
                  })
                  .catch((error: any) => {
                      reject(error)
                  })
                  .finally(() => {
                  })
          })
      },
      fetchNews() {
          return new Promise((resolve, reject) => {
              useApi()
                  .$get('general/news/', {
                      params: {
                          limit: 4
                      }
                  })
                  .then((res: any) => {
                      this.news = res.results
                      resolve(res)
                  })
                  .catch((error: any) => {
                      reject(error)
                  })
                  .finally(() => {
                  })
          })
      },
      fetchContacts() {
          return new Promise((resolve, reject) => {
              useApi()
                  .$get('general/contacts/')
                  .then((res: any) => {
                      this.contacts = res?.results?.[0]
                      resolve(res)
                  })
                  .catch((error: any) => {
                      reject(error)
                  })
                  .finally(() => {
                  })
          })
      },
  },
})
