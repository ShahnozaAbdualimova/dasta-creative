<template>
<BaseModal v-model="showModal" title="Lightbox" no-header has-close body-class="!bg-transparent !max-w-[1000px]">
  <img :src="image" class="w-full h-full object-contain" alt="image" />
</BaseModal>
</template>

<script setup lang="ts">

interface Props {
  show: boolean
  image: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'change', value: boolean): void
}>()


const showModal = ref(false)


watch(() => props.show, () => {
  showModal.value = props.show
})

watch(() => showModal.value, () => {
  emit('change', showModal.value)
})
</script>

<style scoped>

</style>