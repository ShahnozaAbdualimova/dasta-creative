<template>
  <div data-aos="fade-up">
    <div
      class="max-h-[290px] w-full h-full rounded-2xl relative overflow-hidden"
    >
      <img
        :src="card?.image"
        :alt="card?.full_name"
        class="w-full h-full object-cover"
      />

      <p
        class="absolute bottom-4 left-5 py-1 px-3 min-w-[90px] text-center bg-blue text-white rounded-md text-[10px] font-medium leading-130"
      >
        {{ card?.profession }}
      </p>
    </div>

    <div class="px-4 mt-6">
      <h2 class="text-base font-bold leading-130 text-white">
        {{ card?.full_name }}
      </h2>
      <p class="text-xs leading-140 font-medium text-[#8A8C8A] mt-1">
        {{ card?.label }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  card: {
    id: number
    full_name: string
    label: string
    profession: string
    image: string
    order: number
  }
}

defineProps<Props>()
</script>

<style scoped></style>
