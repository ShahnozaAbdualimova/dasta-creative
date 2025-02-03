<template>
  <div>
    <NuxtLoadingIndicator color="#2C5CFF" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <BaseModalDiscuss />
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '~/store/main'

const mainStore = useMainStore()

mainStore.fetchContacts()
mainStore.fetchSlides()

// ToDo: Change this seo data with real data

// useSeoMeta({
//   title: 'Og Title',
//   description: 'Og Description',
//   OgDescription: 'Og Description',
//   ogTitle: `Og Title`,
//   twitterTitle: `Og Title`,
//   twitterCard: 'summary',
//   twitterSite: '@commeta_sharh',
//   ogImage: 'Og Image',
//   twitterImage: 'Og Image',
// })
</script>
