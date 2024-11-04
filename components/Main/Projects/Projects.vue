<template>
  <div class="pb-8 pt-16 md:py-16 container">
    <CommonSectionHeaderTitle :title="$t('cases_and_projects')" />

    <div class="flex-y-center flex-wrap gap-5 mt-6" data-aos="fade-right">
      <button
        v-for="(item, index) in categories"
        :key="index"
        class="py-2 px-6 rounded-lg border border-blue transition-300 text-sm leading-4 text-white font-bold hover:text-blue"
        :class="{
          '!text-dark-100 !bg-white !border-white': active === item.slug,
        }"
        @click="active = item.slug"
      >
        {{ item?.title }}
      </button>
      <NuxtLinkLocale to="/projects">
        <BaseButton :text="$t('all_projects')" size="sm" @click="active = ''">
          <template #suffix>
            <i-arrow-right class="text-white block !mb-0" />
          </template>
        </BaseButton>
      </NuxtLinkLocale>
    </div>
    <div class="mt-11 grid md:grid-cols-2 gap-10">
      <template v-if="!loading">
        <MainProjectsCard v-for="(card, i) in projects" :key="i" :card />
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
import { useProjectsStore } from '~/store/projects'

interface Props {
  defaultLimit: number
  showMore?: boolean
}

const props = defineProps<Props>()

const active = ref(null)
const offset = ref(0)
const loadingMore = ref(false)

const projectsStore = useProjectsStore()

projectsStore.fetchProjectCategories()
projectsStore.fetchProjects({
  limit: props.defaultLimit || 4,
  category: active.value || '',
})

const categories = computed(() => projectsStore.categories)
const projects = computed(() => projectsStore.projects)
const count = computed(() => projectsStore.count)
const loading = computed(() => projectsStore.loading)

function loadMore() {
  loadingMore.value = true
  offset.value += props.defaultLimit
  projectsStore
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
    projectsStore.fetchProjects({
      limit: props.defaultLimit || 4,
      category: active.value || '',
    })
  }
)
</script>
