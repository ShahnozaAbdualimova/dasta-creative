<template>
  <div
    class="h-[500px] w-full relative overflow-hidden rounded-[20px] pt-10 pl-11 group cursor-pointer"
  >
    <div class="relative z-10">
      <div class="size-[68px] rounded-lg relative overflow-hidden">
        <img
          :src="card?.profile_pic"
          alt="user"
          class="w-full h-full object-cover"
        />
      </div>

      <div
        class="bg-white px-3 py-4 rounded-2xl w-max mt-3 opacity-0 transition-all duration-[0.7s] group-hover:opacity-100"
      >
        <p class="text-blue text-base leading-130 font-bold mb-1.5">
          {{ card?.full_name }}
        </p>
        <p class="text-xs font-medium text-[#131612] max-w-[225px]">
          {{ card?.text }}
        </p>
      </div>
    </div>
    <img
      :src="card?.image"
      alt="image"
      class="w-full h-full object-cover absolute inset-0"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  card: {
    id: number
    full_name: string
    text: string
    profile_pic: string
    image: string
    order: number
  }
}

defineProps<Props>()
</script>

<style scoped></style>
