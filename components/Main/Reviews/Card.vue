<template>
<div class="h-[500px] w-full relative overflow-hidden rounded-[20px] pt-10 pl-11">
  <div class="relative z-10">
    <div class="size-[68px] rounded-lg relative overflow-hidden">
      <img :src="card?.user.avatar" alt="user" class="w-full h-full object-cover" />
    </div>

    <div class="bg-white px-3 py-4 rounded-2xl w-max mt-3">
      <p class="text-blue text-base leading-130 font-bold mb-1.5">{{ card?.user.title }}</p>
      <p class="text-xs font-medium text-[#131612] max-w-[225px]">{{ card?.review }}</p>
    </div>
  </div>
  <img :src="card?.image" alt="image" class="w-full h-full object-cover absolute inset-0" />
</div>
</template>

<script setup lang="ts">

interface Props {
  card: any
}

defineProps<Props>()
</script>

<style scoped>

</style>