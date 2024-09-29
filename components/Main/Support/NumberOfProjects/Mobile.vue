<template>
  <div class="container mx-auto">
    <div class="flex-x-center justify-between">
      <div
        v-for="(project, key) in projects?.slice(0, 2)"
        :key
        class="flex-y-center space-x-5"
      >
        <div
          v-if="key !== 0"
          :class="cardStyle"
          class="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent"
        />
        <MainSupportCardProjectNumber
          :quality-style="qualityStyle"
          :text-style="textStyle"
          v-bind="{ isVisible }"
          :item="project"
        />
      </div>
    </div>
    <div class="flex-x-center w-full my-4">
      <div
        v-for="(project, key) in projects?.slice(2, 3)"
        :key
        class="flex-y-center space-x-5"
      >
        <div
          :class="cardStyle"
          class="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent"
        />
        <MainSupportCardProjectNumber
          :quality-style="qualityStyle"
          :text-style="textStyle"
          v-bind="{ isVisible }"
          :item="project"
        />
        <div
          :class="cardStyle"
          class="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent"
        />
      </div>
    </div>
    <div class="flex-x-center justify-between">
      <div
        v-for="(project, key) in projects?.slice(3, 5)"
        :key
        class="flex-y-center space-x-5"
      >
        <div
          v-if="key !== 0"
          :class="cardStyle"
          class="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent"
        />
        <MainSupportCardProjectNumber
          :quality-style="qualityStyle"
          :text-style="textStyle"
          v-bind="{ isVisible }"
          :item="project"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  projects?: any[]
  isVisible?: boolean
  qualityStyle?: string
  textStyle?: string
  cardStyle?: string
}

defineProps<Props>()
</script>

<style scoped></style>
