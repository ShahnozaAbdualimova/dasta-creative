<template>
  <div class="pb-16">
    <MainHero :partners />
    <MainOffer />
    <MainSupport :supports :stats />
    <CommonCardNeedHelp  data-aos="fade-up" />
    <MainProjects :categories />
    <MainReviews :reviews />
    <MainInfoDetail  data-aos="fade-up" />
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "~/store/main";

const mainStore = useMainStore()

mainStore.fetchServices()
mainStore.fetchStatistics()
mainStore.fetchReviews()
mainStore.fetchPartners()

const supports = computed(() => mainStore.services)
const stats = computed(() => mainStore.statistics)
const reviews = computed(() => mainStore.reviews)
const partners = computed(() => mainStore.partners)

</script>

