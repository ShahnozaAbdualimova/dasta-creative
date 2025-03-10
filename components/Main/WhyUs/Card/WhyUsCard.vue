<template>
  <div
    class="p-6 rounded-[22px] shadow border gap-4 border-white/40 bg-dark-200 transition duration-300 flex flex-col md:even:flex-col-reverse"
  >
    <div class="text-[47px] font-extrabold text-blue leading-[61.26px]">
      {{ index + 1 }}
    </div>
    <div>
      <h3 class="text-lg font-extrabold mb-3">
        {{ title }}
      </h3>

      <p class="text-[13px] leading-140 font-medium">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})

const isEven = computed(() => props.index % 2 === 0)
</script>
