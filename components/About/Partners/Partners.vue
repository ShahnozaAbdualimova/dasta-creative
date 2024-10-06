<template>
  <div>
    <p
        data-aos="fade-right"
        class="text-xl md:text-[36px] font-extrabold leading-12"
    >
      {{ $t('partners_text') }}
    </p>
    <div class="mt-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
      <AboutPartnersCard v-for="(card, index) in partners" :key="index" :card />
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  partners: any
}

defineProps<Props>()

</script>

<style scoped>

</style>