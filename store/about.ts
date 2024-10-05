import {defineStore} from "pinia";
import { useApi } from "~/composables/useApi";

export const useAboutStore = defineStore('aboutStore', {
    state: () => ({
        team: [],
    }),
    actions: {
        fetchTeam() {
            return new Promise((resolve, reject) => {
                useApi()
                    .$get('general/team/')
                    .then((res: any) => {
                        this.team = res?.results
                        resolve(res)
                    })
                    .catch((error: any) => {
                        reject(error)
                    })
            })
        },

    },
})
