<template>
  <div class="relative flex items-stretch">
    <div
      class="bg-gradient-to-l from-dark-100 to-transparent w-full z-10 flex-center mt-[90px] rotate-180"
    ></div>
    <div class="container pt-8 pb-16 md:py-16">
      <CommonSectionHeaderTitle
        data-aos="fade-up"
        :title="$t('dasta_helper_title')"
        :subtitle="$t('dasta_helper_text')"
      />

      <div class="mt-10 flex items-start">
        <!-- 1-Card (Fixed) -->
        <div class="w-[407px] flex-shrink-0">
          <MainHelperCardMain/>
        </div>

        <!-- Swiper - Moving Cards -->
        <div class="w-full !ml-5 overflow-hidden swiper-shadow-helper">
          <Swiper
            :space-between="26"
            :slides-per-view="'auto'"
            class="!overflow-visible"
          >
            <SwiperSlide
              v-for="(item, index) in 6"
              :key="index"
              class="!w-[300px]"
            >
              <MainHelperCard :index="index" />
            </SwiperSlide>
          </Swiper>
        </div>
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
