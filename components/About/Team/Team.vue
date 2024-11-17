<template>
  <div>
    <p
      data-aos="fade-right"
      class="text-xl md:text-[36px] font-extrabold leading-12"
    >
      {{ $t('our_family') }}
    </p>
    <div class="mt-5 grid md:grid-cols-3 lg:grid-cols-5 gap-5">
      <AboutTeamCard v-for="(card, index) in team" :key="index" :card />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  team: any
}

defineProps<Props>()
</script>

<style scoped></style>
