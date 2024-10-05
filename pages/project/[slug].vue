<template>
<div class="pt-[120px] pb-16">
  <div class="container">
    <div class="relative w-full h-[482px] rounded-[20px] border border-[#ECECEC] overflow-hidden" data-aos="fade-up">
      <img :src="data?.cover_image" alt="image" class="w-full h-full object-cover" />

      <div class="absolute bottom-6 left-5 flex-y-center gap-3 flex-wrap">
        <p v-for="tag in data?.tags" :key="tag.title" class="text-xs text-white bg-blue px-3 py-1.5 rounded-md leading-130 font-medium">
          #{{ tag.title }}
        </p>
      </div>
    </div>

    <div class="mt-10 mb-7">
      <CommonSectionHeaderTitle heading-tag :title="data?.title" :subtitle="data?.subtitle" data-aos="fade-up" />
    </div>

    <div class="p-6 rounded-[26px] bg-blue-100 grid md:grid-cols-6 gap-5">
      <div v-for="(item, index) in data?.images" :key="index" class="md:col-span-2 relative overflow-hidden rounded-[20px]" :class="{'md:col-span-3': index === 0 || index === 1}" @click="openModal(item?.image)">
        <img :src="item?.image" alt="image" class="w-full h-full object-cover" />
      </div>
    </div>

    <div class="mt-[50px]">
      <h4 class="text-[26px] leading-[160%] font-bold text-white">{{$t('full_docs')}}</h4>
      <div class="mt-5 flex flex-col gap-5">
        <ProjectFile v-for="(item, index) in data?.files" :key="index" :file="item" />
      </div>
    </div>

    <div class="mt-16 rounded-[26px] bg-blue-100 border border-white/10 p-6">
      <p class="text-[32px] leading-130 font-bold text-white">{{data?.title}}</p>
      <div class="my-3 flex-y-center gap-3 flex-wrap">
        <p v-for="tag in data?.tags" :key="tag.title" class="text-xs text-white bg-blue px-3 py-1.5 rounded-md leading-130 font-medium">
          #{{ tag.title }}
        </p>
      </div>

      <p class="text-lg text-white leading-140 font-medium whitespace-pre-line">{{data?.about}}</p>
    </div>
  </div>

    <MainInfoDetail  data-aos="fade-up" class="pt-16" />


  <CommonLightbox :show="showLightbox" :image="selectedImage" @change="showLightbox = $event" />
</div>
</template>

<script setup lang="ts">

const route = useRoute()
const showLightbox = ref(false)
const selectedImage = ref('')

const { data, error } = (await useAsyncData('product', async () => {
  return await useApi().$get(`/projects/projects/${route?.params.slug}`)
})) as any


function openModal(image: string) {
  selectedImage.value = image
  showLightbox.value = true
}



useSeoMeta({
  title: data.value?.title,
  description: data.value?.subtitle,
  ogDescription: data.value?.subtitle,
  ogTitle: data.value?.title,
  twitterTitle: data.value?.title,
  twitterCard: 'summary',
  twitterSite: '@dastacreative',
  ogImage: data.value?.main_image,
  twitterImage: data.value?.main_image,
})

</script>
