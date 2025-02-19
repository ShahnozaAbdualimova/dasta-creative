<template>
  <div class="pb-8 pt-8 md:py-8 container">
    <CommonSectionHeaderTitle ref="sectionTitle" :title="$t('cases_and_projects')" />

    <div class="flex-y-center flex-wrap gap-5 mt-6">
      <button v-for="(item, index) in categories" :key="index"
        class="py-2 px-6 rounded-lg border border-blue transition-300 text-sm leading-4 text-white font-bold hover:text-blue"
        :class="{
          '!text-dark-100 !bg-white !border-white': active === item.slug,
        }" @click="active = item.slug">
        {{ item?.title }}
      </button>
      <NuxtLinkLocale to="/projects" class="w-full md:w-auto">
        <BaseButton :text="$t('all_projects')" size="sm" @click="active = ''">
          <template #suffix>
            <i-arrow-right class="text-white block !mb-0" />
          </template>
        </BaseButton>
      </NuxtLinkLocale>
    </div>
    <Transition name="fade" mode="out-in">
      <div :key="loading" class="mt-11 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <template v-if="!loading">
          <MainProjectsCard v-for="(card, i) in projects" :key="i" ref="projectCards" :card="card" />
        </template>
        <template v-if="loading">
          <MainProjectsCardLoading v-for="i in 9" :key="i" />
        </template>
      </div>
    </Transition>
    <BaseButton v-if="showMore && showMoreButtonVisible" :text="$t('show_more')" class="w-full mt-4"
      :loading="loadingMore" @click="handleShowMore" />
  </div>
</template>

<script setup lang="ts">
import { useProjectsStore } from '~/store/projects'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute() 
function handleShowMore() {
  if (route.path === '/') {
    router.push('/projects')
  } else {
    loadMore()
  }
}

interface Props {
  defaultLimit: number
  showMore?: boolean
}

const showMoreButtonVisible = computed(() => projects.value.length >= 9 && projects.value.length < count.value)


const props = withDefaults(defineProps<Props>(), {
  defaultLimit: 9,
  showMore: false,
})

const active = ref(null)
const offset = ref(0)
const loadingMore = ref(false)

const projectsStore = useProjectsStore()

projectsStore.fetchProjectCategories()
projectsStore.fetchProjects({
  limit: props.defaultLimit || 9,
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
      limit: props.defaultLimit || 6, 
      category: active.value || '',
    })
  }
)
</script>
