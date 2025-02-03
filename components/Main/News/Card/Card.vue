<template>
  <NuxtLinkLocale
    :to="`/news/${card?.slug}`"
    class="rounded-xl w-full p-6 flex flex-col justify-between gap-4 relative overflow-hidden block"
  >
    <div class="w-full h-full object-cover !absolute inset-0 image-loading">
      <img
        v-lazy="{ src: card?.image }"
        :alt="card?.title"
        class="w-full h-full object-cover inset-0"
      />
    </div>

    <div class="absolute inset-0 size-full bg-[#1D3385]/80" />
    <div class="flex-center-between relative z-10">
      <p class="text-base !leading-normal">
        {{ dayjs(card?.publish_date).format('DD.MM.YYYY') }}
      </p>

      <p class="px-3 py-1 text-xs text-blue bg-white rounded-[10px]">
        {{ card?.category?.title }}
      </p>
    </div>

    <div class="relative z-10">
      <p class="text-base leading-130 font-semibold mb-7">{{ card?.title }}</p>

      <NuxtLinkLocale
        :to="`/news/${card?.slug}`"
        class="text-base leading-[136%] font-semibold text-white bg-[#1C274C]/40 py-3 px-10 rounded-[10px] transition-300 hover:bg-[#1C274C]/60 inline-block"
      >
        {{ $t('read') }}
      </NuxtLinkLocale>
    </div>
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

interface Props {
  card: {
    id: number
    title: string
    slug: string
    detail: string
    category: {
      id: number
      title: string
      slug: string
      order: number
    }
    image: string
    publish_date: string
  }
}

defineProps<Props>()
</script>

<style scoped></style>
