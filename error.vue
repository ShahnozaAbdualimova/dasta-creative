<template>
  <section>
    <div class="h-screen flex-center gap-5 container w-full pt-[140px]">
      <LayoutHeader />
      <div class="flex-center-between w-full max-sm:flex-col max-md:pt-12">
        <div>
          <img src="./public/images/error.svg" class="max-md:hidden" alt="">
          <p class="text-[52px] font-semibold">
            {{ $t('page_not_found') }}
          </p>
          <p class="text-base leading-140">
            {{ $t('page_not_found_text') }}
          </p>
        </div>
        <div class="w-full">
          <Vue3Lottie :animation-data="AnimationJson" :height="200" :width="200" class="h-[470px]" />
        </div>
      </div>
    </div>
    <LayoutFooter />
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useMainStore } from '~/store/main';

const mainStore = useMainStore();
const contacts = ref({});
onMounted(async () => {
  if (!contacts.value || Object.keys(contacts.value).length === 0) {
    await mainStore.fetchContacts();
    contacts.value = mainStore.contacts;
  }
});



import { Vue3Lottie } from 'vue3-lottie'

import AnimationJson from '~/assets/animation.json'
</script>
