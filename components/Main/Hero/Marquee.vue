<template>
  <div class="container -mt-4">
    <NuxtMarquee>
      <div v-for="(item, index) in items" :key="index" class="mr-9 flex-center">
        <img
          :src="item?.logo"
          :alt="item?.link"
          class="w-full h-full max-h-[56px] grayscale opacity-40"
        />
      </div>
    </NuxtMarquee>
  </div>
</template>

<script setup lang="ts">
interface Props {
  items?: any[]
  reverseDirection?: boolean
  direction?: 'left' | 'right'
  imgStyle?: string
  autoFill?: boolean
}
defineProps<Props>()
</script>

<style>
.swiper-wrapper {
  -webkit-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
}
</style>
