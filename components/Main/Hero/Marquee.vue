<template>
  <div class="container">
      <NuxtMarquee>
        <div v-for="(item, index) in items" :key="index" class="mr-9">
          <img :src="item?.image_url" alt="" />
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
