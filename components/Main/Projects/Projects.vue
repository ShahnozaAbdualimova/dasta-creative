<template>
<div class="py-16 container">
  <CommonSectionHeaderTitle title="Кейси - проекты" />

  <div class="flex-y-center flex-wrap gap-5 mt-6"  data-aos="fade-right">
    <button class="py-2 px-6 rounded-lg border border-blue transition-300 text-sm leading-4 text-white font-bold hover:text-blue" v-for="i in 7" :key="i">
      Брендинг
    </button>
    <BaseButton text="Все проекты" size="sm" >
      <template #suffix>
        <i-arrow-right class="text-white block !mb-0" />
      </template>
    </BaseButton>
  </div>

  <div class="mt-11 grid md:grid-cols-2 gap-10">
    <MainProjectsCard :card v-for="i in 4" :key="i"  data-aos="fade-up" />
  </div>
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
