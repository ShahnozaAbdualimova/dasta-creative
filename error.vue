<template>
  <div class="h-screen flex-center gap-5 container w-full pt-[140px]">
    <LayoutHeader />
    <div class="flex-center-between w-full max-sm:flex-col">
      <div>
        <p class="text-[80px] md:text-[200px] text-blue font-[800]">404</p>
        <p class="text-[52px] font-semibold -mt-10">{{$t('page_not_found')}}</p>
        <p class="text-base leading-140">{{$t('Ushbu sahifa topilmadi iltimos havola to‘g‘ri kiritilganiga e’tibor bering va qaytadan urunib ko‘ring')}}</p>
      </div>
      <div class="w-full">
          <Vue3Lottie :animationData="AnimationJson" :height="200" :width="200" class="h-[470px]" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
import AnimationJson from '~/assets/animation.json'

</script>
