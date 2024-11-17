<template>
  <div class="py-[96px]">
    <BaseBreadcrumb :breadcrumb="breadcrumbRoutes" />
    <MainNewsSection :default-limit="9" show-more />
    <CommonCardNeedHelp />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const breadcrumbRoutes = computed<any[]>(() => [
  {
    title: t('news'),
    link: '#',
  },
])
</script>
