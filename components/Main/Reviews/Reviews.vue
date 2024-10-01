<template>
<div class="relative overflow-hidden">
  <div class="container pt-8 pb-16 md:py-16">
    <CommonSectionHeaderTitle  data-aos="fade-up" :title="$t('reviews')" :subtitle="$t('reviews_text')" wrapper-class="flex-center-between" >
      <BaseButton variant="white" size="sm" :text="$t('write_telegram')" >
        <template #suffix>
          <i-arrow-right class="text-lg !mb-0" />
        </template>
      </BaseButton>
    </CommonSectionHeaderTitle>

    <div class="mt-10">
      <Swiper loop :space-between="36" class="!overflow-visible">
        <SwiperSlide v-for="(card, i) in reviews" :key="i">
          <MainReviewsCard :card="card"  data-aos="fade-up" />
        </SwiperSlide>
      </Swiper>
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
