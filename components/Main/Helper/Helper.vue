<template>
  <div class="relative flex items-stretch">
    <div class="container pt-8 pb-16 md:py-16">
      <CommonSectionHeaderTitle
        data-aos="fade-up"
        :title="$t('dasta_helper_title')"
        :subtitle="$t('dasta_helper_text')"
      />

      <div class="mt-10">
        <div class="relative flex">
          <div class="relative w-[407px] max-md:w-full shrink-0">
            <MainHelperCardMain />
          </div>
          <div class="ml-[12px] w-full -mr-32 overflow-hidden relative">
            <div
              class="absolute left-0 top-0 h-full w-[100px] bg-gradient-to-r from-dark-100 to-transparent z-10"
            />
            <Swiper
              :space-between="26"
              :slides-per-view="'auto'"
              class="!overflow-visible"
            >
              <SwiperSlide v-for="(item, index) in 6" :key="index" class="!w-[300px]">
                <MainHelperCard :index="index" />
              </SwiperSlide>
            </Swiper>
            <div
              class="absolute right-0 top-0 h-full w-[100px] bg-gradient-to-l from-dark-100 to-transparent z-10"
            />
          </div>
        </div>
      </div>
    </div>
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
