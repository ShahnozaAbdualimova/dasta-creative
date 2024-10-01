<template>
<div class="w-full h-screen inset-0 fixed bg-[#0E1222]">
  <div class="container flex-center-between py-6">
    <button class="sm:hidden" @click="$emit('close')">
      <i-close class="text-white text-xl" />
    </button>
    <NuxtLinkLocale to="/">
      <img src="/images/logo.svg" alt="logo" class="max-w-[170px] w-full h-full" />
    </NuxtLinkLocale>
  </div>
  <div class="container flex flex-col gap-6 mt-8" @click="$emit('close')">
    <NuxtLinkLocale v-for="item in menu" :key="item.name" :to="item.path">
      <span class="text-xl leading-130 font-semibold transition-300 hover:text-blue">{{ item.name }}</span>
    </NuxtLinkLocale>
  </div>
</div>
</template>

<script setup lang="ts">

interface Props {
  menu: any[]
}

defineProps<Props>()
</script>

<style scoped>

</style>