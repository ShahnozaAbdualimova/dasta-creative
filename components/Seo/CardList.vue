<template>
  <div class="container mx-auto px-4">
    <h2
      class="justify-start text-white text-4xl font-extrabold font-['Vela_Sans'] leading-10"
    >
      {{ t('how_to_build_website_title') }}
    </h2>
    <p
      class="justify-start text-zinc-500 text-base font-medium font-['Vela_Sans'] leading-tight"
    >
      {{ t('how_to_build_website_text') }}
    </p>
    <div class="flex flex-wrap gap-6 mt-[37px]">
      <div
        v-for="(item, index) in finalItems"
        :key="index"
        class="flex gap-4 w-full md:w-[48%] items-center"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full md:w-52 h-48 object-cover rounded-2xl"
        />
        <div
          class="w-full md:w-96 h-48 relative bg-slate-900 rounded-2xl p-6 flex flex-col justify-between border border-gray-500 text-white overflow-hidden"
        >
          <h3 class="text-white text-xl font-semibold leading-relaxed">
            {{ item.title }}
          </h3>
          <p
            class="text-white text-opacity-60 text-sm font-normal leading-tight"
          >
            {{ item.text }}
          </p>
          <span class="text-7xl font-black text-slate-700 self-end -mr-8 -mb-9">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{
  items?: { image: string; title: string; text: string }[]
}>()

const staticItems = ref([
  {
    title: 'CVIP Inspection',
    text: 'aaaaaFor over a decade, we here at Cincinnati Truck Repair have prioritized the safety of our customers and their vehicles above all else.',
    image:
      'http://api.dastacreative.uz/media/features/Social_project_Card.webp',
  },
])

const finalItems = computed(() =>
  props.items?.length ? props.items : staticItems.value
)

watchEffect(() => {
  console.log('API Data:', props.items)
})
</script>
