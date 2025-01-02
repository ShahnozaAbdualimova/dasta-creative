<template>
  <div class="container -mt-4 relative">
    <NuxtMarquee>
      <div v-for="(item, index) in items" :key="index" class="mr-9 flex-center">
        <img
          :src="item?.logo"
          :alt="item?.link"
          class="w-full h-full max-h-[56px] grayscale opacity-40"
        />
      </div>
    </NuxtMarquee>
    <div
      class="bg-gradient-to-l from-[#181f32] to-transparent absolute w-[40px] h-[68px] z-10 right-4 -top-1"
    />
    <div
      class="bg-gradient-to-l from-[#181f32] to-transparent absolute w-[40px] h-[68px] z-10 left-4 -top-1 rotate-180"
    />
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

.background-partner-slider {
  background: linear-gradient(90deg, rgba(13, 18, 35, 0) 0%, #181f32 100%);
}
</style>
