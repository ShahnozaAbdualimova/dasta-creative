<template>
  <div
    :style="{
      background: generateBackgroundColor(),
    }"
    class="flex items-center justify-center text-white h-full w-full text-base object-cover"
  >
    {{ getInitials() }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  fullName?: string
  isDefault?: boolean
}

const props = defineProps<Props>()

const colors = [
  'linear-gradient(180deg, #4489F7 0%, #004ECB 100%)',
  'linear-gradient(180deg, #FB8257 0%, #FE6A35 100%)',
  'linear-gradient(180deg, #FFC96C 0%, #FEB433 100%)',
  'linear-gradient(180deg, #81D575 0%, #62CD53 100%)',
  'linear-gradient(180deg, #00FBF4 0%, #00D3CD 100%)',
  'linear-gradient(180deg, #E898F9 0%, #DF5DFA 100%)',
]

const generateBackgroundColor = () => {
  // Combine the ASCII values of the characters in the user's name
  const charCodesSum = props.fullName
    ?.split(' ')
    .map((char) => char.charCodeAt(0))
    .reduce((acc, val) => acc + val, 0)

  // Use the sum to determine the index of the color in the colors array
  const colorIndex = charCodesSum % colors.length

  return colors[colorIndex]
}

const getInitials = () => {
  const nameParts = props.fullName
    ? props.fullName.split(' ')
    : 'Anonymous User'.split(' ')

  const initials = nameParts.map((part) => part[0]).join('')
  return initials.toUpperCase()
}
</script>
