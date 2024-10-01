<template>
  <div :class="wrapperClass">
    <div class="space-y-3">
      <p
          v-if="!headingTag"
          :class="titleClass"
          class="text-2xl md:text-4xl font-extrabold leading-12"
      >
        {{ title }}
      </p>
      <h1 :class="titleClass"
          class="text-2xl md:text-4xl font-extrabold leading-12">
        {{ title }}
      </h1>
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
  headingTag?: boolean
}

defineProps<Props>()
</script>

<style scoped></style>
