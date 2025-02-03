<template>
  <div class="py-[96px]">
    <BaseBreadcrumb :breadcrumb="breadcrumbRoutes" />
    <MainProjects show-more :default-limit="9" />
    <CommonCardNeedHelp />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const breadcrumbRoutes = computed<any[]>(() => [
  {
    title: t('cases'),
    link: '#',
  },
])
</script>

<style scoped></style>
