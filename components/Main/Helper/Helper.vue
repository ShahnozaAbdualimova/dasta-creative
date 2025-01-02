<template>
  <div class="relative flex items-stretch">
    <div
      class="bg-gradient-to-l from-dark-100 to-transparent w-full z-10 flex-center mt-[90px] rotate-180"
    />
    <div class="container pt-8 pb-16 md:py-16">
      <CommonSectionHeaderTitle
        data-aos="fade-up"
        :title="$t('dasta_helper_title')"
        :subtitle="$t('dasta_helper_text')"
      />

      <div class="mt-10">
        <Swiper
          :space-between="26"
          :slides-per-view="'auto'"
          class="!overflow-visible"
        >
          <SwiperSlide class="!w-[407px] relative">
            <div class="w-full">
              <MainHelperCardMain />
              <div
                class="absolute w-[177px] h-[266px] swiper-shadow-helper top-0 right-[-177px] z-10 rotate-180"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide v-for="(item, index) in 6" :key="i" class="!w-[300px]">
            <MainHelperCard :index="index" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div
      class="bg-gradient-to-l from-dark-100 to-transparent w-full z-10 flex-center mt-[90px]"
    />
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/vue'

interface Props {
  reviews: any[]
}

defineProps<Props>()
</script>

<style scoped>
.swiper-shadow-helper {
  background: linear-gradient(90deg, rgba(13, 18, 35, 0) 0%, #0d1223 100%);
}
</style>
