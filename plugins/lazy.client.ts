import VueLazyLoad from 'vue3-lazyload'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(VueLazyLoad, {
    // options...
  })
})
