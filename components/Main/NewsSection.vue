<template>
  <div class="pb-8 pt-16 md:py-16 container">
    <CommonSectionHeaderTitle :title="$t('news')" />

    <div class="mt-11 grid md:grid-cols-3 gap-6">
      <template v-if="!loading">
        <NuxtLinkLocale
          v-for="(card, i) in projects"
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
      </template>
    </div>

    <Transition name="fade">
      <div
        v-if="count > projects?.length && showMore"
        class="flex-center mt-8"
        @click="loadMore"
      >
        <BaseButton :text="$t('show_more')" size="sm" :loading="loadingMore" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useNewsStore } from '~/store/news'

interface Props {
  defaultLimit: number
  showMore?: boolean
}

const props = defineProps<Props>()

const active = ref(null)
const offset = ref(0)
const loadingMore = ref(false)

const newsStore = useNewsStore()

newsStore.fetchProjects({
  limit: props.defaultLimit || 4,
  category: active.value || '',
})

const projects = computed(() => newsStore.news)
const count = computed(() => newsStore.count)
const loading = computed(() => newsStore.loading)

function loadMore() {
  loadingMore.value = true
  offset.value += props.defaultLimit
  newsStore
    .fetchProjects(
      {
        limit: props.defaultLimit,
        offset: offset.value,
        category: active.value || '',
      },
      true
    )
    .finally(() => {
      loadingMore.value = false
    })
}

watch(
  () => active.value,
  () => {
    newsStore.fetchProjects({
      limit: props.defaultLimit || 4,
      category: active.value || '',
    })
  }
)
</script>
