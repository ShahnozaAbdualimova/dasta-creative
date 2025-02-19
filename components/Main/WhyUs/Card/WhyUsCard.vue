<template>
    <div :class="[
        'p-6 rounded shadow transition duration-300',
        isEven ? 'bg-blue-900 text-white' : 'bg-white text-gray-900'
    ]">
        <div class="text-3xl font-bold mb-4">
            {{ index + 1 }}
        </div>

        <h3 class="text-xl font-semibold mb-2">
            {{ title }}
        </h3>

        <p class="text-sm leading-relaxed">
            {{ description }}
        </p>
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
