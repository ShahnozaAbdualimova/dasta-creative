<template>
  <div>
    <LayoutHeader @open-modal="mainStore.showModal = true" />
    <slot />
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '~/store/main'

const mainStore = useMainStore()
</script>
