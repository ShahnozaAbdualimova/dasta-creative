<template>
  <div v-if="showSection" class="relative">
    <section
      class="relative overflow-hidden h-auto bg-brand-black"
    >
      <div
        v-if="!loading"
        class="w-[360px] translate-x-1/2 right-0 -translate-y-1/2 absolute h-[360px] bg-danger-600/60 blur-[300px] rounded-full"
      />
      <div
        class="container py-10 md:py-16 grid gap-6 grid-cols-1 md:grid-cols-3"
      >
        <CommonSectionHeaderTitle
            data-aos="fade-up"
            class="flex flex-col gap-2 justify-between"
          :title="$t('Что мы умеем')"
          :subtitle="$t('Привлекательные видеоролики, инфографика, анимация и другие медиаматериалы помогут вам выделиться на фоне конкурентов, привлечь новых клиентов и повысить продажи.')"
        >
          <div
              data-aos="fade-up"
            class="flex-y-center  gap-5"
          >
              <BaseButton
                  variant="secondary"
                  class="w-full" text="Обсудить проект" />
            <BaseButton
                class="w-full"
              @click="navigateTo('/support-women')"
              text="Вес услуги"
            />
          </div>
        </CommonSectionHeaderTitle>
        <CommonCardSupport
          v-for="(item, key) in supports"
          :key
          :loading="false"
          v-bind="item"
        />
      </div>
      <MainSupportNumberOfProjects
        :projects="stats"
        class="hidden md:flex md:flex-wrap"
        :loading="loading"
        data-aos="fade-up"
        is-visible
      />
      <MainSupportNumberOfProjectsMobile
        :projects="stats"
        data-aos="fade-up"
        class="md:hidden mt-0 my-10 md:mt-16 md:mb-96"
        is-visible
      />

    </section>
<!--    <CommonCardNeedHelp-->
<!--      :loading="loading"-->
<!--      class="md:-mt-40 -mt-[16rem]"-->
<!--      :phone="contanctInfoData?.[0]?.phone"-->
<!--    />-->
  </div>
</template>

<script setup lang="ts">
import IconArrowRight from '~/assets/icons/arrow-right.svg'
const showSection = ref(true)
const loading = ref(false)

const supports = [
  {
    category: {
      id: 1,
      name: 'Творчества'
    },
    id: 1,
    name: 'Дизайн на все темы',
    description: 'string',
    image: '/images/fake/icon.svg',
  },
  {
    category: {
      id: 1,
      name: 'Творчества'
    },
    id: 1,
    name: 'Дизайн на все темы',
    description: 'string',
    image: '/images/fake/icon.svg',
  },
  {
    category: {
      id: 1,
      name: 'Творчества'
    },
    id: 1,
    name: 'Дизайн на все темы',
    description: 'string',
    image: '/images/fake/icon.svg',
  },
  {
    category: {
      id: 1,
      name: 'Творчества'
    },
    id: 1,
    name: 'Дизайн на все темы',
    description: 'string',
    image: '/images/fake/icon.svg',
  },
  {
    category: {
      id: 1,
      name: 'Творчества'
    },
    id: 1,
    name: 'Дизайн на все темы',
    description: 'string',
    image: '/images/fake/icon.svg',
  },

]

const stats = [
  {
    quantity: 20,
    title: 'Проектов на сайте',
  },
  {
    quantity: 12,
    title: 'Проектов на сайте',
  },
  {
    quantity: 50,
    title: 'Проектов на сайте',
  },
  {
    quantity: 50,
    title: 'Проектов на сайте',
  },
  {
    quantity: 150,
    title: 'Проектов на сайте',
  },
]
</script>

<style scoped></style>
