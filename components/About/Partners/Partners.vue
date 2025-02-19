<template>
  <div>
    <p data-aos="fade-right" class="text-xl md:text-[36px] font-extrabold leading-12">
      {{ $t('partners_text') }}
    </p>

    <div class="mt-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
      <AboutPartnersCard v-for="(card, index) in visiblePartners" :key="index" :card="card" />
    </div>

    <BaseButton v-if="partners.length > 18 && visibleCount < partners.length" class="mt-6" :text="$t('show_more')"
      @click="loadMore" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  partners: any[]
}

const props = defineProps<Props>()

// Boshlang‘ich 6 ta karta ko‘rinadi
const visibleCount = ref(18)

const loadMore = () => {
  visibleCount.value += 6  
}

const visiblePartners = computed(() => props.partners.slice(0, visibleCount.value))
</script>
