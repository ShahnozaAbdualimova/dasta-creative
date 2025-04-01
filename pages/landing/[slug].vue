<template>
  <div class="pt-[96px] pb-16">
    <SeoIntro
      :title="landingData?.title"
      :description="landingData?.text"
      :image="landingData?.cover_file"
    />
    <MainOffer />
    <MainSupportNumberOfProjects
      :projects="stats"
      class="hidden md:flex md:flex-wrap"
      :loading="loading"
      data-aos="fade-up"
      is-visible
    />
    <MainWhyUs />
    <CardList v-if="landingData?.features?.length" :items="landingData.features" />
    <MainProjects show-more :categories :show-more="true" />
    <ServicesSection v-if="landingData?.units?.length" :items="landingData.units"/>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '~/store/main'
import { ref, computed, watchEffect, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import ServicesSection from '~/components/Common/Section/ServicesSection.vue'
import CardList from "~/components/Seo/CardList.vue"

const route = useRoute()
const slug = computed(() => route.params.slug) // ✅ Nuxt3 da to'g'ri olish
const landingData = ref(null)
const mainStore = useMainStore()

const stats = computed(() => mainStore.statistics)
mainStore.fetchStatistics()

watchEffect(async () => {
  if (!slug.value) {
    console.error("Slug topilmadi!")
    return
  }

  console.log(`✅ Fetching data for slug: ${slug.value}`)

  try {
    const response = await axios.get(
      `https://api.dastacreative.uz/api/projects/landing-page/${slug.value}`
    )
    landingData.value = response.data
  } catch (error) {
    console.error("❌ API dan ma'lumot olishda xatolik:", error)
  }
})

const loading = computed(()=> stats.length > 0)
</script>
