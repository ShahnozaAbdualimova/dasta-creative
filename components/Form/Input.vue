<template>
  <div
    :id="id"
    class="bg-white/10 border border-transparent transition-300 focus-within:border-white/40 flex items-center rounded-lg h-12"
    :class="{
      '!border-red': error,
      '!bg-transparent border-white-100': isTransparent,

    }"
  >
    <slot name="prefix" />
    <input
      v-bind="{
        type,
        minlength,
        maxlength,
        max,
        min,
        disabled,
        placeholder,
        readonly,
        autocomplete,
      }"
      :id="inputId"
      ref="Input"
      class="w-full h-full text-base p-3 text-white bg-transparent outline-none placeholder:text-gray"
      :value="modelValue"
      :class="[inputClass, {
        '!cursor-not-allowed': disabled,
      }]"
      @keyup.enter="handleEnter"
      @input="handleInput"
      @blur="$emit('blur')"
      @focusout="$emit('focusout')"
      @focus="handleFocus"
    />
    <slot name="suffix" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import type { TClassName } from '~/types'

interface Props {
  type?: string
  placeholder?: string
  modelValue: number | string | undefined
  disabled?: boolean
  error?: boolean
  focus?: boolean
  maxlength?: number
  minlength?: number
  max?: number
  isTransparent?: boolean
  min?: number
  inputClass?: TClassName
  prefixClass?: string
  suffixClass?: string
  autocomplete?: string
  inputId?: string
  readonly?: boolean
  id?: string
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  maxlength: 99,
  minlength: undefined,
  max: undefined,
  min: undefined,
  inputClass: undefined,
  autocomplete: 'new-password',
  placeholder: undefined,
  prefixClass: undefined,
  suffixClass: undefined,
  inputId: 'input',
  id: undefined,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'blur'): void
  (e: 'focusout'): void
  (e: 'focus'): void
  (e: 'enter'): void
}>()

const handleInput = (e: { target: HTMLInputElement }) => {
  emit('update:modelValue', e.target.value)
}
const handleEnter = () => {
  emit('enter')
}
const Input = ref()
defineExpose({ Input })

const handleFocus = () => {
  emit('focus')
}
watch(
  () => props?.focus,
  (value) => {
    if (value) {
      Input?.value?.focus()
    }
  },
  { deep: true, immediate: true }
)
</script>
