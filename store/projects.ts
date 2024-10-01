import {defineStore} from "pinia";
import { useApi } from "~/composables/useApi";

export const useProjectsStore = defineStore('projectsStore', {
    state: () => ({
        categories: [],
        projects: [],
        count: 0,
        loading: true
    }),
    actions: {
        fetchProjectCategories() {
            return new Promise((resolve, reject) => {
                useApi()
                    .$get('projects/categories/')
                    .then((res: any) => {
                        this.categories = res?.results
                        resolve(res)
                    })
                    .catch((error: any) => {
                        reject(error)
                    })
                    .finally(() => {
                    })
            })
        },
        fetchProjects(params: any, merge= false) {
            this.loading = true
            return new Promise((resolve, reject) => {
                useApi()
                    .$get('projects/projects/', {
                        params: params
                    })
                    .then((res: any) => {
                        if (!merge) {
                            this.projects = res?.results
                        } else {
                            this.projects.push(...res?.results)
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
