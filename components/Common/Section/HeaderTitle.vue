<template>
  <div :class="wrapperClass">
    <div class="space-y-3">
      <p
          :class="titleClass"
          class="text-2xl md:text-4xl font-extrabold leading-12"
      >
        {{ title }}
      </p>
      <p
          v-if="isSubtitleHtml"
          class="text-sm font-medium leading-130 text-gray-700"
          :class="subtitleClass"
          v-html="subtitle"
      ></p>
      <p
          v-else
          class="text-sm font-medium leading-130 text-white/60"
          :class="subtitleClass"
      >
        {{ subtitle }}
      </p>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { TClassName } from '~/types'

interface Props {
  wrapperClass?: TClassName
  titleClass?: TClassName
  subtitleClass?: TClassName
  isSubtitleHtml?: boolean
  title?: string
  subtitle?: string
}

defineProps<Props>()
</script>

<style scoped></style>
