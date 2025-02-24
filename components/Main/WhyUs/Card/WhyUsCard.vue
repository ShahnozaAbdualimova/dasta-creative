<template>
    <div :class="[
        'p-6 rounded shadow bg-dark-200 transition duration-300 flex flex-col even:flex-col-reverse',
    ]">
        <div class="text-5xl font-extrabold mb-4 text-blue leading-[61.26px]">
            {{ index + 1 }}
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">
            {{ title }}
          </h3>

          <p class="text-sm leading-relaxed">
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
        required: true
    },
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    }
})

const isEven = computed(() => props.index % 2 === 0)
</script>
