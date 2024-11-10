<template>
  <BaseModal
    v-model="showModal"
    title="Lightbox"
    no-header
    body-class="!bg-transparent !max-w-[1200px]"
  >
    <div class="relative w-full h-full">
      <button
        class="flex-center bg-white w-9 h-9 rounded-[10px] group absolute top-0 -right-12"
        @click="showModal = false"
      >
        <i-close
          class="text-blue text-xl transition-300 group-hover:text-red"
        />
      </button>
      <button
        class="w-9 h-9 rounded bg-[#F0EDED] flex-center hover:bg-blue-100/80 transition-300 absolute-y right-4 z-10 swiper-button-next"
      >
        <i-arrow-right class="text-blue text-xl" />
      </button>
      <button
        class="w-9 h-9 rounded bg-[#F0EDED] flex-center hover:bg-blue-100/80 transition-300 absolute-y left-4 z-10 swiper-button-prev rotate-180"
      >
        <i-arrow-right class="text-blue text-xl" />
      </button>
      <Swiper
        :initial-slide="activeIndex"
        loop
        :modules="[Navigation]"
        :space-between="36"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
      >
        <SwiperSlide v-for="(item, index) in images" :key="index">
          <img
            :src="item?.image"
            alt="image"
            class="w-full h-full aspect-video object-contain rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import 'swiper/css'

import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

interface Props {
  show: boolean
  images: string
  activeIndex: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'change', value: boolean): void
}>()

const showModal = ref(false)

watch(
  () => props.show,
  () => {
    showModal.value = props.show
  }
)

watch(
  () => showModal.value,
  () => {
    emit('change', showModal.value)
  }
)
</script>

<style scoped></style>
