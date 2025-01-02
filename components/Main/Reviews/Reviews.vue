<template>
  <div class="relative flex items-stretch">
    <div
      class="bg-gradient-to-l from-dark-100 to-transparent w-full z-10 flex-center mt-[90px] rotate-180"
    />
    <div class="container pt-8 pb-16 md:py-16">
      <CommonSectionHeaderTitle
        data-aos="fade-up"
        :title="$t('reviews')"
        :subtitle="$t('reviews_text')"
        wrapper-class="flex-center-between"
      >
        <a :href="contacts.telegram" target="_blank">
          <BaseButton size="sm" :text="$t('write_telegram')">
            <template #suffix>
              <i-arrow-right class="text-lg !mb-0" />
            </template>
          </BaseButton>
        </a>
      </CommonSectionHeaderTitle>

      <div class="mt-10">
        <Swiper loop :space-between="36" class="!overflow-visible">
          <SwiperSlide v-for="(card, i) in reviews" :key="i">
            <MainReviewsCard :card="card" data-aos="fade-up" />
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

import { useMainStore } from '~/store/main'

interface Props {
  reviews: any[]
}

defineProps<Props>()

const mainStore = useMainStore()

const contacts = computed(() => mainStore.contacts)
</script>
