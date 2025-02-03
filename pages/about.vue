<template>
  <div class="pt-[96px] pb-16">
    <BaseBreadcrumb :breadcrumb="breadcrumbRoutes" />

    <div class="container pt-10">
      <div
        data-aos="fade-up"
        class="aspect-video rounded-[20px] border border-[#ECECEC] w-full h-full relative overflow-hidden"
      >
        <div
          class="bg-black/20 absolute inset-0 w-full h-full z-10 flex-center"
        >
          <BaseButtonPlay @click="showModal = true" />
        </div>
        <video class="w-full h-full">
          <source :src="data?.video_file" type="video/mp4" />
        </video>
      </div>

      <div data-aos="fade-up" class="my-8">
        <h1 class="font-bold text-[40px] leading-130">{{ data?.title }}</h1>
        <div
          class="whitespace-pre-line mt-1 text-xl !leading-140 !font-normal"
          v-html="data?.about"
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

      <AboutTeam :team />
      <AboutPartners :partners class="my-16" />

      <CommonCardNeedHelp data-aos="fade-up" class="mb-[50px] !px-0" />

      <MainInfoDetail data-aos="fade-up" />
    </div>

    <BaseModal
      v-model="showModal"
      no-header
      has-close
      body-class="!bg-transparent !max-w-[1280px]"
    >
      <div class="aspect-video relative overflow-hidden w-full h-full">
        <video class="w-full h-full" controls>
          <source :src="data?.video_file" type="video/mp4" />
        </video>
      </div>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import { useAboutStore } from '~/store/about'
import { useMainStore } from '~/store/main'

const mainStore = useMainStore()
const aboutStore = useAboutStore()

const showModal = ref(false)
const team = computed(() => aboutStore.team) as any
const partners = computed(() => mainStore.partners)

const { data, error } = (await useAsyncData('about', async () => {
  return await useApi().$get(`/general/about-us`)
})) as any

const loading = ref(true)

aboutStore.fetchTeam()
mainStore.fetchPartners()
mainStore.fetchStatistics().finally(() => {
  loading.value = false
})

const stats = computed(() => mainStore.statistics)

useSeoMeta({
  title: data.value?.title,
  description: data.value?.about,
  ogDescription: data.value?.about,
  ogTitle: data.value?.title,
  twitterTitle: data.value?.title,
})

const { t } = useI18n()

const breadcrumbRoutes = computed<any[]>(() => [
  {
    title: t('about'),
    link: '#',
  },
])
</script>

<style scoped></style>
