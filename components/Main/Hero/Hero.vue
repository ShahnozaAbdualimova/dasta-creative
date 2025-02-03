<template>
  <div>
    <div class="h-[calc(100vh-70px)] relative overflow-hidden pt-[98px]">
      <Swiper class="h-[calc(100vh-70px)]">
        <SwiperSlide
          v-for="(item, index) in slides"
          :key="index"
          class="relative"
        >
          <img
            :src="item?.video"
            alt="hero-logo"
            class="h-full w-full object-cover absolute top-0 left-0"
          />
          <div class="linear-hero absolute top-0 left-0" />
          <div class="flex-center relative container h-full z-10">
            <div class="absolute left-0 bottom-[162px] px-4">
              <p class="text-[40px] leading-130 font-extrabold">
                {{ item?.title }}
              </p>
              <p class="mt-1 text-xl leading-130">
                {{ item?.subtitle }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/vue'

interface Props {
  partners?: any[]
  slides?: any[]
}

defineProps<Props>()
</script>

<style scoped>
.linear-hero {
  background: linear-gradient(180deg, rgba(13, 18, 35, 0) 0%, #0d1223 100%);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
}
</style>
