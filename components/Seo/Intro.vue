<template>
  <section class="container flex items-center justify-between">
    <div class="!w-1/2">
      <h1 class="text-white mb-4 text-5xl font-extrabold font-['Vela_Sans'] leading-[60.24px]">
        {{ titleText }}
      </h1>
      <p class="text-white mb-6 text-xl font-normal font-['Vela_Sans'] leading-relaxed">
        {{ descriptionText }}
      </p>
      <BaseButton
        :text="buttonTextComputed"
        :variant="buttonVariant"
        :size="buttonSize"
        :icon="buttonIcon"
        :loading="buttonLoading"
        @click="handleClick"
      />
    </div>
    <img :src="imageSrc" :alt="altText" class="w-1/2" />
  </section>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  buttonText: { type: String, default: '' },
  buttonVariant: { type: String, default: 'primary' },
  buttonSize: { type: String, default: 'md' },
  buttonIcon: { type: String, default: '' },
  buttonLoading: { type: Boolean, default: false },
  image: { type: String, default: '' },
  alt: { type: String, default: 'Intro section image' },
})

const titleText = computed(() => props.title || t('seo_title'))
const descriptionText = computed(() => props.description || t('seo_description'))
const buttonTextComputed = computed(() => props.buttonText || t('discuss_the_project'))

const defaultImage = '/images/seo-default.png'
const imageSrc = computed(() => props.image || defaultImage)
const altText = computed(() => props.alt)

const emit = defineEmits(['button-click'])
const handleClick = () => emit('button-click')
</script>
