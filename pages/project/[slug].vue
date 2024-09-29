<template>
<div class="pt-[120px]">
  <p>Breadcrumbs</p>
  <div class="container">
    <div class="relative w-full max-h-[482px] rounded-[20px] border border-[#ECECEC] overflow-hidden" data-aos="fade-up">
      <img :src="card?.image" alt="image" class="w-full h-full object-cover" />

      <div class="absolute bottom-6 left-5 flex-y-center gap-3 flex-wrap">
        <p v-for="tag in card?.tags" :key="tag.title" class="text-xs text-white bg-blue px-3 py-1.5 rounded-md leading-130 font-medium">
          #{{ tag.title }}
        </p>
      </div>
    </div>

    <div class="mt-10 mb-7">
      <CommonSectionHeaderTitle :title="card?.title" :subtitle="card?.subtitle" data-aos="fade-up" />
    </div>

    <div class="p-6 rounded-[26px] bg-blue-100 grid md:grid-cols-6 gap-5">
      <div v-for="(i, index) in 8" :key="index" class="md:col-span-2 relative overflow-hidden rounded-[20px]" :class="{'md:col-span-3': index === 0 || index === 1}">
        <img :src="card?.image" alt="image" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>

    <MainInfoDetail  data-aos="fade-up" class="pt-10" />

</div>
</template>

<script setup lang="ts">


const card = {
  title: 'Aman Residence',
  subtitle: 'Жилой комплекс премиум-класса',
  tags: [
    {
      title: 'каталог',
    },
    {
      title: 'наружная реклама',
    }
  ],
  image: '/images/fake/ad.png'
}

</script>

<style scoped>

</style>