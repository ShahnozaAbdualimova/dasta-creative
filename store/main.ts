import {defineStore} from "pinia";
import {useApi} from "#build/composables/useApi.js";

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    services: [],
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
