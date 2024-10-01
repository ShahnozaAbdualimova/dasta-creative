<template>
<div class="p-5 rounded-xl bg-[#191E2E] flex-y-center gap-4">
  <div class="flex-center size-16 bg-[#1B2443] rounded-full">
    <component :is="card?.icon" class="text-[32px] text-blue" />
  </div>
  <div>
    <p class="text-base leading-130 text-white">{{ card?.title }}</p>
    <a :href="card?.path" class="text-base leading-130 text-white/60 mt-1 transition-300 inline-block" :class="{'hover:text-blue': card?.path}">{{ card?.value }}</a>
  </div>
</div>
</template>

<script setup lang="ts">

interface Props {
  card?: boolean
}

defineProps<Props>()
</script>
