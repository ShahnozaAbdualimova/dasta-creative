<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">

import {useMainStore} from "~/store/main";

const mainStore = useMainStore()

mainStore.fetchContacts()


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
