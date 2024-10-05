<template>
<a data-aos="fade-up" :href="card?.link" target="_blank" class="h-[150px] h-full flex-center p-4 flex-center bg-[#191E2E] rounded-xl group">
  <img :src="card?.logo" :alt="card?.link" class="w-full h-full object-contain grayscale transition-300 group-hover:grayscale-0 max-w-[170px]" />
</a>
</template>

<script setup lang="ts">

interface Props {
  card: {
    "id": number,
    "logo": string
    "link": string
  }
}

defineProps<Props>()
</script>
