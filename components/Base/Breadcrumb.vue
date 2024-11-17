<template>
  <div class="bg-[#191E2E] py-3 hidden-on-print overflow-x-hidden">
    <div class="container flex items-center gap-2 md:overflow-hidden">
      <NuxtLinkLocale
        to="/"
        class="flex items-center gap-1 text-[#FFFCF9] leading-130 text-sm transition-300 hover:!text-blue group"
      >
        <p>{{ $t('main') }}</p>
      </NuxtLinkLocale>
      <div
        v-for="(item, index) in breadcrumb"
        :key="index"
        class="flex items-center gap-2 last:max-w-[150px] sm:last:max-w-[300px] overflow-hidden group shrink-0"
      >
        <span class="text-[#FFFCF9] text-sm">/</span>

        <NuxtLinkLocale
          :to="item?.link"
          rel="noindex nofollow"
          :class="{
            'pointer-events-none !text-[#8e9ba8] ':
              index === breadcrumb?.length - 1,
          }"
          class="transition-300 flex cursor-pointer items-center text-white leading-130 text-sm min-w-max group-last:min-w-[100px] sm:group-last:min-w-[200px] breadcrumb-menu !line-clamp-1 hover:text-blue"
        >
          {{ item?.title }}
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  breadcrumb: any[]
}

defineProps<Props>()
</script>
