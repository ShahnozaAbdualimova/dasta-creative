<template>
  <div
    class="py-3 px-6 bg-[#181F32] border border-white/10 rounded-xl relative"
  >
    <div class="h-11 w-0.5 rounded-r bg-white absolute-y left-0" />
    <p>
      {{ title }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

defineProps<Props>()
</script>
