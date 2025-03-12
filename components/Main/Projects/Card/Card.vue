<template>
  <NuxtLinkLocale
    :to="`/project/${card?.slug}`"
    class="text-white group cursor-pointer"
  >
    <div class="relative w-full h-[258px] rounded-[20px] overflow-hidden">
      <div class="image-loading size-full">
        <img
          v-lazy="{
            src: card?.main_image_thumbnail?.small,
          }"
          class="w-full h-full object-cover"
          :alt="card?.title"
        />
      </div>

      <div class="absolute bottom-6 left-5 flex-y-center gap-3 flex-wrap">
        <p
          v-for="tag in card?.tags"
          :key="tag.title"
          class="text-xs text-white bg-blue px-3 py-1.5 rounded-md leading-130 font-medium"
        >
          {{ tag.title }}
        </p>
      </div>
    </div>

    <div class="px-4 mt-5">
      <p
        class="text-xl leading-130 font-extrabold text-white transition-300 group-hover:text-blue"
      >
        {{ card?.title }}
      </p>
      <p class="mt-2 text-[#8A8C8A] font-medium leading-130 text-sm">
        {{ card?.subtitle }}
      </p>
    </div>
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
interface Props {
  card: {
    id: number
    title: string
    subtitle: string
    slug: string
    main_image: string
    main_image_thumbnail: {
      large: string
      medium: string
      small: string
    }
    tags: {
      id: number
      title: string
      order: number
    }[]
  }
}

defineProps<Props>()
</script>

<style scoped></style>
