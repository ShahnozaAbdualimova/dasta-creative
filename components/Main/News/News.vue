<template>
  <div class="container mb-16">
    <div class="mb-6 md:mb-11 flex-center-between gap-4 max-sm:flex-col w-full">
      <p class="text-xl md:text-[36px] leading-130 font-bold text-white">
        {{ $t('news_creative') }}
      </p>

      <NuxtLinkLocale to="/news">
        <BaseButton :text="$t('all_news')" size="sm">
          <template #suffix>
            <i-arrow-right class="text-white block !mb-0" />
          </template>
        </BaseButton>
      </NuxtLinkLocale>
    </div>

    <div class="grid lg:grid-cols-2 gap-5">
      <div class="w-full">
        <MainNewsCardMain
          :card="news?.[0]"
          class="aspect-video lg:min-h-[524px] w-full block"
        />
      </div>
      <div class="grid gap-5 h-auto">
        <div>
          <MainNewsCardMiddle
            :card="news?.[1]"
            class="w-full aspect-video lg:h-[252px]"
          />
        </div>
        <div class="flex max-sm:flex-col gap-5 sm:h-[252px]">
          <MainNewsCard :card="news?.[2]" />
          <MainNewsCard :card="news?.[3]" />
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
