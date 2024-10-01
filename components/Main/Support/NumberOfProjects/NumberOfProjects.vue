<template>
  <div class="container mx-auto p-4 text-white mb-16">
    <div
      :class="sectionStyle"
      class="flex-center w-full space-x-5 flex-wrap gap-4"
    >
      <template v-for="(project, key) in projects" :key="key">
        <div :class="cardStyle" class="flex-y-center space-x-5">
          <MainSupportCardProjectNumber
            :quality-style="qualityStyle"
            :text-style="textStyle"
            :item="project"
            :loading="loading"
            v-bind="{ isVisible }"
          />
          <div
            v-if="key !== projects.length - 1"
            class="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  projects?: any[]
  qualityStyle?: string
  textStyle?: string
  cardStyle?: string
  loading?: boolean
  isVisible?: boolean
  sectionStyle?: string
}

defineProps<Props>()
</script>

<style scoped></style>
