<template>
  <section class="text-white py-10 px-6">
    <div class="container mx-auto">
      <h2 class="text-4xl font-extrabold">{{ t('services.title') }}</h2>
      <p class="text-zinc-500 text-base font-medium">
        {{ t('services.subtitle') }}
      </p>

      <div class="grid grid-cols-4 gap-4 mt-8">
        <div
          v-for="unit in finalItems"
          :key="unit.id"
          class="w-72 h-20 flex items-center px-4 gap-3 bg-slate-900 rounded-2xl outline outline-white outline-opacity-5
                 transition-all duration-300 opacity-100  hover:opacity-70"
        >
          <div class="border border-white rounded-full p-3 mr-2 group-hover:border-black transition-all duration-300">
            <img :src="unit.icon" alt="unit icon" class="w-6 h-6 " />
          </div>
          <span class="text-center text-lg font-extrabold font-['Vela_Sans'] leading-normal">{{ unit.title }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  items?: { id: number; icon: string; title: string }[]
}>()

const { t } = useI18n()

const finalItems = computed(() =>
  props.items?.length ? props.items : []
)
</script>
