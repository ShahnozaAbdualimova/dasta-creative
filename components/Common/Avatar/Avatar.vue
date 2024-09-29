<template>
  <div
    class="relative overflow-hidden shrink-0 before:border before:border-solid before:border-white-100 before:opacity-20 before:absolute before:inset-0"
    :class="defineAvatarClass"
  >
    <div v-if="loading" class="w-full h-full shimmer" />
    <LazyCommonAvatarDefault
      v-else-if="!src && shape === 'circle' && fullName && !anonymous"
      :full-name="fullName"
      :class="{ '!text-xs': size === 'sm' }"
    />

    <img
      v-else
      :src="imageSrc"
      v-bind="{ alt }"
      :class="defineAvatarImageClass"
    />
  </div>
</template>

<script setup lang="ts">
import type { TClassName } from '~/types'

interface Props {
  src?: string | undefined
  alt?: string
  defaultSrc?: string
  anonymous?: boolean
  loading?: boolean
  size?: TAvatarSize
  fullName?: string
  avatarClass?: TClassName
  imageClass?: TClassName
  shape?: TShapes
  lazyLoad?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  alt: 'avatar-image',
  size: 'md',
  shape: 'circle',
  lazyLoad: true,
})

const imageSrc = computed(() => {
  if (props.anonymous) {
    return `/svg/avatar/anonymous.svg`
  }
  return props.src
})

const sizes: Record<TAvatarSize, string> = {
  '3xl': 'w-16 h-16',
  '2xl': 'w-14 h-14',
  xl: 'w-11 h-11',
  lg: 'w-10 h-10',
  md: 'w-9 h-9',
  sm: 'w-6 h-6',
}
const avatarSize = computed(
  () => sizes[props.size] ?? `w-[${props.size}px] h-[${props.size}px]`
)

const cSizes: Record<TAvatarSize, string> = {
  '3xl': '96x',
  '2xl': '81x',
  xl: '66x',
  lg: '60x',
  md: '54x',
  sm: '36x',
}
const avatarCompressedSize = cSizes[props.size] ?? `${props.size * 1.5}x`

const shapes: Record<TShapes, string> = {
  square: 'rounded-md before:rounded-md',
  circle: 'rounded-full before:rounded-full',
}
const avatarShape = shapes[props.shape]

const defineAvatarImageClass = computed(() => [
  'w-full h-full object-cover bg-white image-loading',
  props.imageClass,
])

const defineAvatarClass = [avatarSize.value, avatarShape]
</script>
