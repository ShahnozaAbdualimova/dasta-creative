<template>
  <div class="pb-16">
    <MainHero :partners />
    <MainOffer />
    <MainSupport :supports :stats :loading="supportsLoading" />
    <CommonCardNeedHelp data-aos="fade-up" />
    <MainProjects :categories />
    <MainReviews :reviews />
    <MainHelper />
    <MainNews :news />
    <MainInfoDetail data-aos="fade-up" />
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

mainStore.fetchServices()
mainStore.fetchStatistics()
mainStore.fetchReviews()
mainStore.fetchPartners()
mainStore.fetchNews()
</script>
