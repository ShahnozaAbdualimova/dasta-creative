<template>
<div class="px-5 py-2.5 bg-blue-100 border border-white/10 rounded-[10px] flex-center-between max-sm:flex-col max-sm:items-start gap-4">
  <div class="flex-y-center gap-5">
    <div class="flex-center size-16 bg-[#2684FC1F] border border-white/[24%] rounded-full shrink-0">
      <i-file-filled class="text-[36px] text-white" />
    </div>
    <p class="text-xl leading-130 font-semibold text-white">{{ file?.title }}</p>
  </div>
  <a :href="file?.type === 'file' ? file?.file : file?.url" target="_blank">
    <BaseButton :text="file?.button_title" size="sm" />
  </a>
</div>
</template>

<script setup lang="ts">

interface Props {
  file: {
    "id": number
    "title": string
    "file": string
    "button_title": string
    "type": string
    "url": string
  }
}

defineProps<Props>()
</script>

