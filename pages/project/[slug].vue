<template>
  <div class="pt-[96px] pb-16">
    <BaseBreadcrumb :breadcrumb="breadcrumbRoutes" />
    <div class="container pt-10">
      <div
        class="relative w-full max-md:aspect-video md:h-[482px] rounded-[20px] overflow-hidden"
        data-aos="fade-up"
      >
        <div class="size-full image-loading">
          <ClientOnly>
            <img
              v-lazy="{
                src: data?.cover_image,
              }"
              alt="image"
              class="w-full h-full object-cover"
            />
          </ClientOnly>
        </div>
        <div
          v-if="data?.video_link"
          class="bg-black/20 absolute inset-0 w-full h-full z-10 flex-center"
          @click="showModal = true"
        >
          <BaseButtonPlay />
        </div>

        <div class="absolute bottom-6 left-5 flex-y-center gap-3 flex-wrap">
          <p
            v-for="tag in data?.tags"
            :key="tag.title"
            class="text-xs text-white bg-blue px-3 py-1.5 rounded-md leading-130 font-medium"
          >
            {{ tag.title }}
          </p>
        </div>
      </div>

      <div class="mt-10 mb-7">
        <CommonSectionHeaderTitle
          heading-tag
          :title="data?.title"
          :subtitle="data?.subtitle"
          data-aos="fade-up"
        />
      </div>
      <div class="p-6 rounded-[26px] bg-blue-100 grid md:grid-cols-6 gap-5">
        <div
          v-for="(item, index) in data?.images"
          :key="index"
          class="md:col-span-2 relative overflow-hidden rounded-[20px]"
          :class="{ 'md:col-span-3': index === 0 || index === 1 }"
          @click="openModal(index)"
        >
          <div class="size-full image-loading">
            <ClientOnly>
              <img
                v-lazy="{
                  src: item?.image,
                }"
                alt="image"
                class="w-full h-full object-cover"
              />
            </ClientOnly>
          </div>
        </div>
      </div>

      <!-- <div v-if="data?.files?.length" class="mt-[50px]">
        <h4 class="text-[26px] leading-[160%] font-bold text-white">
          {{ $t('full_docs') }}
        </h4>
        <div class="mt-5 flex flex-col gap-5">
          <ProjectFile
            v-for="(item, index) in data?.files"
            :key="index"
            :file="item"
          />
        </div>
      </div> -->

      <div class="mt-16">
        <p class="text-[32px] leading-130 font-bold text-white">
          {{ data?.title }}
        </p>
        <div class="my-3 flex-y-center gap-3 flex-wrap">
          <p
            v-for="tag in data?.tags"
            :key="tag.title"
            class="text-xs text-white bg-blue px-3 py-1.5 rounded-md leading-130 font-medium"
          >
            {{ tag.title }}
          </p>
        </div>

        <div
          class="text-lg text-white leading-140 font-medium static-text"
          v-html="data?.about"
        />
      </div>
    </div>

    <div class="container py-16">
      <p class="text-[40px] leading-130 font-semibold text-white">
        {{ $t('other_projects') }}
      </p>

      <div class="mt-11 grid md:grid-cols-3 gap-6">
        <MainProjectsCard v-for="(card, i) in projects" :key="i" :card />
      </div>
    </div>

    <CommonCardNeedHelp data-aos="fade-up" />

    <CommonLightbox
      :show="showLightbox"
      :images="data?.images"
      :active-index="activeImage"
      @change="showLightbox = $event"
    />

    <BaseModal
      v-model="showModal"
      no-header
      has-close
      body-class="!bg-transparent !max-w-[1280px]"
    >
      <div class="aspect-video relative overflow-hidden w-full h-full">
        <iframe
          class="w-full h-full"
          :src="convertToEmbedUrl(data?.video_link)"
          frameborder="0"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const showLightbox = ref(false)
const activeImage = ref(0)

const showModal = ref(false)

function convertToEmbedUrl(youtubeUrl: string) {
  let embedUrl = ''
  const urlPattern =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)(\/(?:watch\?v=|embed\/|shorts\/|v\/|playlist\?list=)?)([^&?/]+)(.*)?/
  const match = youtubeUrl.match(urlPattern)

  if (match && match[2]) {
    const videoId = match[2]

    // Check if it's a playlist URL
    if (youtubeUrl.includes('playlist?list=')) {
      embedUrl = `https://www.youtube.com/embed/videoseries?list=${videoId}`
    }
    // Convert for video or shorts
    else {
      embedUrl = `https://www.youtube.com/embed/${videoId}`
    }
  }

  return embedUrl
}

const { data, error } = (await useAsyncData('product', async () => {
  return await useApi().$get(`/projects/projects/${route?.params.slug}`)
})) as any

const projects = ref([])
function fetchProjects() {
  useApi()
    .$get(`/projects/projects/?project_id=${data?.value?.id}`, {
      params: {
        limit: 3,
      },
    })
    .then((res: any) => {
      projects.value = res?.results
    })
}

fetchProjects()
function openModal(index: number) {
  activeImage.value = index
  showLightbox.value = true
}

useSeoMeta({
  title: data.value?.title,
  description: data.value?.og_description,
  ogDescription: data.value?.og_description,
  ogTitle: data.value?.og_title,
  twitterTitle: data.value?.title,
  twitterCard: 'summary',
  twitterSite: '@dastacreative',
  ogImage: data.value?.main_image,
  twitterImage: data.value?.main_image,
})

useHead({
  meta: [
    {
      hid: 'keywords',
      name: 'keywords',
      content: data.value?.meta_keywords,
    },
  ],
})

const { t } = useI18n()

const breadcrumbRoutes = computed<any[]>(() => [
  {
    title: t('cases'),
    link: '/projects',
  },
  {
    title: data.value?.title,
    link: `#`,
  },
])
</script>

<style>
.static-text p {
  margin: 20px 0;
}

.static-text ol {
  padding-left: 16px !important;
  list-style-type: numeric !important;
}
.static-text ul {
  list-style-type: disc !important;
  padding-left: 16px !important;
}
</style>
