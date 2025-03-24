<template>
  <section class="text-white py-10 px-6">
    <div class="container mx-auto">
      <h2 class="justify-start text-white text-4xl font-extrabold font-['Vela_Sans'] leading-10">{{ t('services.title') }}</h2>
      <p class="justify-start text-zinc-500 text-base font-medium font-['Vela_Sans'] leading-tight">{{ t('services.subtitle') }}</p>
      <div class="grid grid-cols-4 gap-4 mt-8">
        <div
          v-for="service in services"
          :key="service.id"
          class="w-72 h-20 flex items-center justify-center bg-slate-900 rounded-2xl outline outline-[0.74px] outline-offset-[-0.74px] outline-white outline-opacity-5 overflow-hidden"
          :class="{'border-white bg-white text-black': service.id === selectedService }"
        >
<!--          <component :is="service.icon" class="text-3xl mr-3" />-->
          <span>{{ service.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
// import { IconBrush, IconCode, IconPackage, IconVideo, IconDesign, IconChart } from '@/components/icons';

const { t } = useI18n();
const selectedService = ref<number | null>(3);
const services = ref([
  { id: 1, name: t('services.branding')},
  { id: 2, name: t('services.animation')},
  { id: 3, name: t('services.webDevelopment')},
  { id: 4, name: t('services.videoSupport')},
  { id: 5, name: t('services.designSupport')},
  { id: 6, name: t('services.mediaStrategy') },
  { id: 7, name: t('services.designSupport')},
  { id: 8, name: t('services.mediaStrategy') },
]);
</script>
