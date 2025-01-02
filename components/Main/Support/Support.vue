<template>
  <div v-if="showSection" class="relative">
    <section class="relative overflow-hidden h-auto bg-brand-black">
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
          :title="$t('what_we_can_do')"
          :subtitle="$t('what_we_can_do_text')"
        >
          <div data-aos="fade-up" class="flex-y-center gap-5">
            <BaseButton
              variant="secondary"
              class="w-full"
              :text="$t('discuss_project')"
              @click="mainStore.showModal = true"
            />
            <NuxtLinkLocale v-if="!isAll" to="/services" class="w-full">
              <BaseButton class="w-full" :text="$t('all_services')" />
            </NuxtLinkLocale>
          </div>
        </CommonSectionHeaderTitle>
        <template v-if="!loading">
          <CommonCardSupport
            v-for="(item, key) in supports"
            :key
            :loading="false"
            v-bind="item"
          />
        </template>
        <template v-if="loading">
          <CommonCardSupport v-for="index in 8" :key="index" loading />
        </template>
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
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '~/store/main'

const mainStore = useMainStore()

interface Props {
  supports?: any[]
  stats?: any[]
  isAll?: boolean
  loading?: boolean
}

defineProps<Props>()

const showSection = ref(true)
</script>

<style scoped></style>
