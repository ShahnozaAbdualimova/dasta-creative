<template>
  <div class="pb-16 relative overflow-hidden">
    <MainHero :slides />
    <div class="py-5 w-full bg-[#181F32] h-[68px]">
      <MainHeroMarquee :items="partners" auto-fill />
    </div>
    <MainOffer />
    <MainSupport :supports :stats :loading="supportsLoading" />
    <CommonCardNeedHelp />
    <MainProjects show-more :categories :show-more="true" />
    <MainWhyUs />
    <MainReviews :reviews />
    <MainHelper />
    <MainNews :news />
    <MainInfoDetail />
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '~/store/main'

const mainStore = useMainStore()

const supports = computed(() => mainStore.services)
const supportsLoading = computed(() => mainStore.servicesLoading)
const stats = computed(() => mainStore.statistics)
const reviews = computed(() => mainStore.reviews)
const partners = computed(() => mainStore.partners)
const news = computed(() => mainStore.news)
const slides = computed(() => mainStore.slides)

mainStore.fetchSlides()
mainStore.fetchServices()
mainStore.fetchStatistics()
mainStore.fetchReviews()
mainStore.fetchPartners()
mainStore.fetchNews()
</script>
