<template>
<div class="relative overflow-hidden">
  <div class="container py-16">
    <CommonSectionHeaderTitle  data-aos="fade-up" title="Отзывы " subtitle="Вы можете посмотреть отзывы о нас" wrapper-class="flex-center-between" >
      <BaseButton variant="white" size="sm" text="Написать в Telegram" >
        <template #suffix>
          <i-arrow-right class="text-lg !mb-0" />
        </template>
      </BaseButton>
    </CommonSectionHeaderTitle>

    <div class="mt-10">
      <Swiper loop :space-between="36" class="!overflow-visible">
        <SwiperSlide v-for="i in 6" :key="i">
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


const card = {
  user: {
    title: 'Abbos Alimov',
    avatar: 'https://avatars.githubusercontent.com/u/10198965?v=4',
  },
  review: 'Студия Dasta – это место, где креативность и профессионализм сочетаются на высшем уровне. Работать с этой командой – одно удовольствие.',
  image: '/images/fake/car.png'
}
</script>
