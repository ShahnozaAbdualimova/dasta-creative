<template>
  <div>
    <p
        data-aos="fade-right"
        class="text-xl md:text-[36px] font-extrabold leading-12"
    >
      {{ $t('partners_text') }}
    </p>
    <div class="mt-5 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
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