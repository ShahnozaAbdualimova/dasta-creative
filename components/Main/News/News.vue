<template>
<div class="container mb-16">
  <p class="text-xl md:text-[36px] leading-130 font-bold text-white mb-6 md:mb-11">{{ $t('news_creative') }}</p>

  <div class="grid lg:grid-cols-2 gap-5">
<div class="w-full">
  <MainNewsCardMain :card="news?.[0]" class="aspect-video lg:min-h-[524px] w-full block" />
</div>
    <div class="grid gap-5 h-auto">
      <div>
        <MainNewsCardMiddle :card="news?.[0]" class="w-full aspect-video lg:h-[252px]" />
      </div>
      <div class="flex max-sm:flex-col gap-5">
        <MainNewsCard :card="news?.[0]" />
        <MainNewsCard :card="news?.[0]" />
      </div>

    </div>
  </div>
</div>
</template>

<script setup lang="ts">

interface Props {
  news: any
}

defineProps<Props>()
</script>

