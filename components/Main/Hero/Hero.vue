<template>
  <div class="h-screen relative">
    <div class="flex-center relative container h-full">
      <img
        src="/images/hero-logo.svg"
        alt="hero-logo"
        class="mt-[-100px]"
        data-aos="fade-up"
      />
      <div class="absolute left-0 bottom-[162px] px-4" data-aos="fade-up">
        <p class="text-[40px] leading-130 font-bold">{{ $t('hero_title') }}</p>
        <p class="mt-1 text-xl leading-130">
          {{ $t('creative_business_solution') }}
        </p>
      </div>
    </div>
    <div
      class="absolute bottom-12 py-5 w-full bg-[#181F32] h-[68px]"
      data-aos="fade-up"
    >
      <MainHeroMarquee :items="partners" auto-fill />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  partners?: any[]
}

defineProps<Props>()

const images = [
  {
    image_url: '/images/fake/logos/mehr.svg',
  },
  {
    image_url: '/images/fake/logos/mahalla.svg',
  },
  {
    image_url: '/images/fake/logos/ona.svg',
  },
  {
    image_url: '/images/fake/logos/uic.svg',
  },
  {
    image_url: '/images/fake/logos/mehr.svg',
  },
  {
    image_url: '/images/fake/logos/mahalla.svg',
  },
  {
    image_url: '/images/fake/logos/ona.svg',
  },
  {
    image_url: '/images/fake/logos/uic.svg',
  },
  {
    image_url: '/images/fake/logos/mehr.svg',
  },
  {
    image_url: '/images/fake/logos/mahalla.svg',
  },
  {
    image_url: '/images/fake/logos/ona.svg',
  },
  {
    image_url: '/images/fake/logos/uic.svg',
  },
  {
    image_url: '/images/fake/logos/mehr.svg',
  },
  {
    image_url: '/images/fake/logos/mahalla.svg',
  },
  {
    image_url: '/images/fake/logos/ona.svg',
  },
  {
    image_url: '/images/fake/logos/uic.svg',
  },
  {
    image_url: '/images/fake/logos/mehr.svg',
  },
  {
    image_url: '/images/fake/logos/mahalla.svg',
  },
  {
    image_url: '/images/fake/logos/ona.svg',
  },
  {
    image_url: '/images/fake/logos/uic.svg',
  },
]
</script>
