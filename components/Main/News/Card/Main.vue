<template>
<NuxtLinkLocale :to="`/news/${card?.slug}`" class="rounded-[20px] w-full p-8 relative overflow-hidden">
  <div class="absolute inset-0 w-full h-full z-20 flex flex-col justify-between gap-4 h-full p-8">
    <div class="flex-center-between">
      <p class="text-base !leading-normal">{{dayjs(card?.publish_date).format("DD.MM.YYYY")}}</p>

      <p class="px-3 py-1 text-xs text-white bg-white/20 rounded-[10px]">{{card?.category?.title}}</p>
    </div>

    <div>
      <p class="text-2xl leading-130 font-semibold mb-5">{{card?.title}}</p>

      <NuxtLinkLocale :to="`/news/${card?.slug}`" class="text-base leading-[136%] font-semibold text-white bg-white/10 py-3 px-10 rounded-[10px] transition-300 hover:bg-white/40">
        {{ $t('read') }}
      </NuxtLinkLocale>
    </div>
  </div>
  <div class="linear-black-news-main absolute w-full h-full absolute inset-0 z-10" />
  <img :src="card?.image" :alt="card?.title" class="w-full h-full object-cover absolute inset-0" />
</NuxtLinkLocale>
</template>

<script setup lang="ts">

import dayjs from "dayjs";

interface Props {
  card: {
    "id": number
    "title": string
    "slug": string
    "detail": string
    "category": {
      "id": number
      "title": string
      "slug": string
      "order": number
    },
    "image": string
    "publish_date": string
  }
}

defineProps<Props>()
</script>

<style scoped>
.linear-black-news-main {
  background: linear-gradient(180deg, rgba(34, 35, 44, 0.50) 2%, rgba(34, 35, 44, 0.00) 37.6%, #22232C 102.29%);
}
</style>