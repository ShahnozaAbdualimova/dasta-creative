<template>
<NuxtLink to="/project/1" class="text-white group cursor-pointer">
  <div class="relative w-full max-h-[378px] rounded-[20px] border border-[#ECECEC] overflow-hidden">
    <img :src="card?.image" alt="image" class="w-full h-full object-cover" />

    <div class="absolute bottom-6 left-5 flex-y-center gap-3 flex-wrap">
      <p v-for="tag in card?.tags" :key="tag.title" class="text-xs text-white bg-blue px-3 py-1.5 rounded-md leading-130 font-medium">
        #{{ tag.title }}
      </p>
    </div>
  </div>

  <div class="px-4 mt-5">
    <p class="text-xl leading-130 font-bold text-white transition-300 group-hover:text-blue">{{ card?.title }}</p>
    <p class="mt-2 text-[#8A8C8A] font-medium leading-130 text-sm">{{ card?.subtitle }}</p>
  </div>
</NuxtLink>
</template>

<script setup lang="ts">

interface Props {
  card: any
}

defineProps<Props>()
</script>

<style scoped>

</style>