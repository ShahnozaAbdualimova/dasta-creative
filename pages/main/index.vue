<template>
  <div class="pt-[96px] pb-16">
    <SeoIntro/>
    <MainOffer />
    <MainSupportNumberOfProjects
        :projects="stats"
        class="hidden md:flex md:flex-wrap"
        :loading="loading"
        data-aos="fade-up"
        is-visible />
    <MainWhyUs />
    <SeoCardList/>
    <MainProjects show-more :categories :show-more="true" />
    <ServicesSection/>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from '~/store/main'
import ServicesSection from '~/components/Common/Section/ServicesSection.vue'
const mainStore = useMainStore()
const stats = computed(() => mainStore.statistics)
mainStore.fetchStatistics()

const loading = computed(()=> stats.lengt > 0)
</script>
