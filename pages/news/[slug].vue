<template>
  <div class="pt-[96px] pb-16">
    <BaseBreadcrumb :breadcrumb="breadcrumbRoutes" />
    <div class="container pt-10">
      <h1 class="text-[36px] leading-130 font-bold">{{ data?.title }}</h1>

      <div
        class="aspect-video relative overflow-hidden w-full h-full rounded-[24px] mt-9"
      >
        <img
          :src="data?.image"
          :alt="data?.title"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="mt-10 mb-7 vhtml-text" v-html="data?.detail" />
      <div class="mt-10">
        <p class="leading-130 text-[40px] font-semibold">Другие новости</p>

        <div class="mt-11 grid md:grid-cols-3 gap-6">
          <NuxtLinkLocale
            v-for="(card, i) in news"
            :key="i"
            :to="`/news/${card?.slug}`"
            class="group"
            @click.stop
          >
            <MainProjectsCard
              class="pointer-events-none"
              :card="{
                ...card,
                main_image: card?.image,
                tags: [card?.category],
              }"
            />
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data, error } = (await useAsyncData('news', async () => {
  return await useApi().$get(`/general/news/${route?.params.slug}`)
})) as any

const news = ref([])

function fetchNews() {
  useApi()
    .$get(`/general/news/`)
    .then((res: any) => {
      news.value = res?.results
    })
}

fetchNews()

useSeoMeta({
  title: data.value?.title,
  ogTitle: data.value?.title,
  twitterTitle: data.value?.title,
  twitterCard: 'summary',
  twitterSite: '@dastacreative',
  ogImage: data.value?.image,
  twitterImage: data.value?.image,
})

const { t } = useI18n()

const breadcrumbRoutes = computed<any[]>(() => [
  {
    title: t('news'),
    link: '/news',
  },
  {
    title: data.value?.title,
    link: `#`,
  },
])
</script>

<style>
.vhtml-text p {
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #fff;
  word-break: break-word;
  margin-bottom: 24px;
}

.vhtml-text h2 {
  font-size: 24px;
}

.vhtml-text h3 {
  font-size: 20px;
}

.vhtml-text h4 {
  font-size: 18px;
}

.vhtml-text h5 {
  font-size: 16px;
}

.vhtml-text h6 {
  font-size: 14px;
}

.vhtml-text a {
  color: #1c92e0;
}

.vhtml-text iframe {
  width: 100% !important;
  max-height: 320px !important;
}
.vhtml-text a:hover {
  text-decoration: underline;
}
.vhtml-text img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  margin: 20px 0;
}

.vhtml-text blockquote {
  margin: 20px 0;
  padding: 20px;
  position: relative;
  overflow: hidden;
  background: rgba(246, 245, 247, 0.68);
  border-radius: 20px;
}
.vhtml-text blockquote p {
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 8px;
  margin-bottom: 0;
  position: relative;
  z-index: 1;
}
.vhtml-text blockquote p,
.vhtml-text blockquote {
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
  color: #fff;
}
.vhtml-text blockquote:after {
  content: '\e921';
  font-family: icomoon;
  position: absolute;
  right: 20px;
  bottom: 10px;
  color: rgba(209, 206, 215, 0.4);
  font-size: 78px;
  line-height: 20px;
}

.vhtml-text ol li,
.vhtml-text ul li {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #fff;
}
.vhtml-text ul,
.vhtml-text ol {
  padding-left: 20px;
  margin: 20px 0;
}
.vhtml-text ul {
  list-style: disc;
}
.vhtml-text ol {
  list-style: auto;
}

@media screen and (max-width: 768px) {
  .vhtml-text p,
  .vhtml-text blockquote {
    font-size: 16px;
    line-height: 140%;
  }
  .vhtml-text img,
  .vhtml-text blockquote,
  .vhtml-text ul,
  .vhtml-text ol {
    margin: 12px 0;
  }
}
@media (max-width: 640px) {
  .vhtml-text ol li,
  .vhtml-text blockquote,
  .vhtml-text ul li {
    font-size: 14px !important;
  }
}
</style>
