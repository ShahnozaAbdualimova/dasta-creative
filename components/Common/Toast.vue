<template>
  <div
    class="relative flex items-center justify-between bg-white/10 overflow-hidden p-4 rounded-xl"
  >
    <span
      class="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 h-7 w-1.5 rounded-full"
      :class="
        type === 'error'
          ? 'bg-red'
          : type === 'warning'
          ? 'bg-yellow'
          : 'bg-green'
      "
    />
    <div class="flex items-center">
      <img :src="images[type]" alt="icon" />
      <div class="ml-2">
        <h2 class="text-dark font-semibold text-sm leading-140 pr-7">
          {{ title }}
        </h2>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  type: 'success' | 'error' | 'warning'
  title: string
}
defineProps<Props>()
const images = computed(() => {
  return {
    success: '/images/toast/success.svg',
    error: '/images/toast/error.svg',
    warning: '/images/toast/warning.svg',
  }
})
</script>
<style>
.toast {
  box-shadow: 0 8px 20px rgba(18, 28, 37, 0.16);
}
</style>
