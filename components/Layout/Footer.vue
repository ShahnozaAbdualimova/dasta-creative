<template>
  <footer>
    <div class="pt-11 pb-[60px] bg-blue-100">
      <div class="container flex-center-between max-sm:flex-col gap-6">
        <div class="flex-y-center gap-6 max-sm:flex-col">
          <NuxtLinkLocale to="/">
            <img
              src="/images/logo.svg"
              alt="logo"
              class="max-w-[140px] w-full h-full"
            />
          </NuxtLinkLocale>
          <div class="w-px h-8 bg-white/30 max-sm:hidden" />
          <div class="flex-y-center gap-6">
            <template v-for="(item, index) in socials" :key="index">
              <a v-if="item?.path" :href="item?.path" target="_blank">
                <component
                  :is="item.icon"
                  v-if="item.icon"
                  class="text-[28px] text-white hover:text-blue transition-300"
                />
                <p
                  v-else
                  class="text-sm leading-120 text-white hover:text-blue transition-300"
                >
                  {{ item.name }}
                </p>
              </a>
            </template>
          </div>
        </div>

        <BaseButton
          class="max-sm:w-full"
          :text="$t('discuss_project')"
          @click="mainStore.showModal = true"
        />
      </div>
    </div>
    <div class="bg-blue">
      <div class="container py-5">
        <p class="text-sm leading-140 font-medium text-white">
          {{ $t('copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconInstagram from '~/assets/icons/instagram.svg'
import IconTelegram from '~/assets/icons/telegram.svg'
import IconYoutube from '~/assets/icons/youtube.svg'
import { useMainStore } from '~/store/main'

const mainStore = useMainStore()

const contacts = computed(() => mainStore.contacts) as any
const socials = computed(() => {
  return [
    {
      name: 'Behance',
      path: contacts.value?.behance,
      icon: false,
    },
    {
      name: 'Vimeo',
      path: contacts.value?.vimeo,
      icon: false,
    },
    {
      name: 'Dribbble',
      path: contacts.value?.dribbble,
      icon: false,
    },
    {
      name: 'Telegram',
      path: contacts.value?.telegram,
      icon: IconTelegram,
    },
    {
      name: 'Instagram',
      path: contacts.value?.instagram,
      icon: IconInstagram,
    },
    {
      name: 'Telegram',
      path: contacts.value?.youtube,
      icon: IconYoutube,
    },
  ]
})
</script>
