<template>
<div class="py-[96px]">
  <MainSupport :supports :stats />
  <MainProjects />
  <CommonCardNeedHelp />
</div>
</template>

<script setup lang="ts">

import { useMainStore } from "~/store/main";

const mainStore = useMainStore()

mainStore.fetchServices()
mainStore.fetchStatistics()

const supports = computed(() => mainStore.services)
const stats = computed(() => mainStore.statistics)

</script>

<style scoped>

</style>