<template>
<header class="w-full fixed top-0 bg-dark-100 z-50">
  <div class="container flex-center-between py-6">
    <NuxtLink to="/">
      <img src="/images/logo.svg" alt="logo" />
    </NuxtLink>
    <div class="flex-y-center gap-7">
      <div class="flex-y-center gap-9">
        <NuxtLink v-for="item in menu" :key="item.name" :to="item.path">
          <span class="text-base leading-130 font-semibold transition-300 hover:text-blue">{{ item.name }}</span>
        </NuxtLink>
      </div>
      <div class="w-px h-8 bg-white/30" />
      <BaseButton variant="secondary" :text="$t('discuss_the_project')" />
    </div>
  </div>
</header>
</template>

<script setup lang="ts">

import {useI18n} from "vue-i18n";

const {t} = useI18n()



const menu = computed(() => {
  return [
    {
      name: t('about'),
      path: '/about'
    },
    {
      name: t('cases'),
      path: '/project'
    },
    {
      name: t('contact'),
      path: '/contact'
    }
  ]
})
</script>
