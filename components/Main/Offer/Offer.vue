<template>
  <div class="container py-10">
    <div class="grid lg:grid-cols-2 gap-16">
      <div>
        <p class="text-[36px] leading-130 font-extrabold">Dasta Creative</p>

        <p class="mt-2 text-lg leading-130 mb-6">
          {{ $t('we_present_you_text_1') }}
        </p>
        <div class="flex flex-col gap-3">
          <AboutInfo
            v-for="(item, index) in items"
            :key="index"
            :title="item.title"
          />
        </div>
      </div>
      <div class="w-full rounded-[28px] relative overflow-hidden">
        <img
          src="/images/dasta-about.png"
          alt="video"
          class="w-full h-full object-cover"
        />

        <div
          class="w-full bottom-0 h-[70px] bg-[#2D5CFE] z-10 absolute flex-center gap-6 cursor-pointer"
        >
          <svg
            v-if="data?.video_file || data?.video_link"
            width="34"
            height="40"
            viewBox="0 0 34 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="showModal = true"
          >
            <g clip-path="url(#clip0_10_11)">
              <path
                d="M30.1136 13.8248C34.8259 16.5992 34.8259 23.4026 30.1136 26.177L10.8047 37.5393C6.02273 40.3555 0 36.898 0 31.3632L0 8.6386C0 3.08988 6.02273 -0.353672 10.8047 2.46251L30.1136 13.8248Z"
                fill="white"
                fill-opacity="0.8"
              />
            </g>
            <defs>
              <clipPath id="clip0_10_11">
                <rect width="33.6478" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p
            class="text-[10px] leading-[144%] font-bold text-white tracking-[0.118px]"
          >
            {{ $t('more_on_video') }}
          </p>
        </div>
      </div>
    </div>
    <BaseModal
      v-model="showModal"
      no-header
      has-close
      body-class="!bg-transparent !max-w-[1280px]"
    >
      <div class="aspect-video relative overflow-hidden w-full h-full">
        <video v-if="data?.video_file" class="w-full h-full" controls>
          <source :src="data?.video_file" type="video/mp4" />
        </video>
        <iframe
          v-else
          class="w-full h-full"
          :src="getYouTubeEmbedUrl(data?.video_link)"
          frameborder="0"
          referrerpolicy="strict-origin-when-cross-origin"
        />
      </div>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const showModal = ref(false)

const items = [
  {
    title: t('we_do_text_1'),
  },
  {
    title: t('we_do_text_2'),
  },
  {
    title: t('we_do_text_3'),
  },
]

const { data } = (await useAsyncData('about', async () => {
  return await useApi().$get(`/general/about-us`)
})) as any

function getYouTubeEmbedUrl(url: string) {
  const videoId = url.split('v=')[1]?.split('&')[0]
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null
}
</script>

<style scoped></style>
