<template>
  <div class="flex flex-col gap-2">
    <div class="flex-center-between">
      <p class="text-base leading-130 font-medium" :class="labelClass">
        {{ label }}
      </p>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  labelClass?: string
  error?: boolean
  errorLabel?: string
}

withDefaults(defineProps<Props>(), {
  label: 'Label',
  labelClass: '',
  errorLabel: '',
})
</script>
