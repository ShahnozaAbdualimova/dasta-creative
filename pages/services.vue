<template>
  <div class="py-[96px]">
    <BaseBreadcrumb :breadcrumb="breadcrumbRoutes" />
    <MainSupport :supports :stats is-all />
    <MainProjects />
    <CommonCardNeedHelp />
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '~/store/main'

const mainStore = useMainStore()

mainStore.fetchServices(100)
mainStore.fetchStatistics()

const supports = computed(() => mainStore.services)
const stats = computed(() => mainStore.statistics)

const { t } = useI18n()

const breadcrumbRoutes = computed<any[]>(() => [
  {
    title: t('what_we_can_do'),
    link: '#',
  },
])
</script>

<style scoped></style>
