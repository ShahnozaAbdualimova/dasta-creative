<template>
  <div class="container mx-auto px-4">
    <h2
      class="justify-start text-white text-4xl font-extrabold font-['Vela_Sans'] leading-10"
    >
      Как происходит разработка cайта
    </h2>
    <p
      class="justify-start text-zinc-500 text-base font-medium font-['Vela_Sans'] leading-tight"
    >
      Мы разрабатываем сайты любой сложности от сайта визитки до
      интернет-магазина и портала
    </p>
    <div class="flex flex-wrap gap-6 mt-[37px]">
      <div
        v-for="(item, index) in finalItems"
        :key="index"
        class="flex gap-4 w-full md:w-[48%] items-center"
      >
        <img
          :src="item.image"
          alt="Project Image"
          class="w-full md:w-52 h-48 object-cover rounded-2xl"
        />
        <div
          class="w-full md:w-96 h-48 relative bg-slate-900 rounded-2xl p-6 flex flex-col justify-between border border-gray-500 text-white overflow-hidden"
        >
          <h3
            class="justify-start text-white text-xl font-semibold font-['Inter'] leading-relaxed"
          >
            {{ 'CVIP Inspection' }}
          </h3>
          <p
            class="justify-start text-white text-opacity-60 text-sm font-normal font-['Inter'] leading-tight"
          >
            {{
              'For over a decade, we here at Cincinnati Truck Repair have prioritized the safety of our customers and their vehicles above all else.'
            }}
          </p>
          <span
            class="text-7xl font-black text-slate-700 self-end -mr-8 -mb-9"
            >{{ String(index + 1).padStart(2, '0') }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{ items?: { image: string }[] }>()

const staticItems = ref([
  { image: '/images/fake/social-project-1.png' },
  { image: '/images/fake/social-project-2.png' },
  { image: '/images/fake/social-project-3.png' },
  { image: '/images/fake/social-project-4.png' },
  { image: '/images/fake/social-project-5.png' },
  { image: '/images/fake/social-project-6.png' },
])

const finalItems = computed(() =>
  props.items?.length ? props.items : staticItems.value
)
</script>
