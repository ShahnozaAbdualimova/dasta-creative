<template>
  <div
    class="w-full h-screen flex flex-col justify-between inset-0 fixed bg-[#0E1222]"
  >
    <div>
      <div class="px-7 flex-center-between py-6">
        <button class="sm:hidden" @click="$emit('close')">
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.5 9.09082C2.5 5.63904 5.29822 2.84082 8.75 2.84082H21.25C24.7018 2.84082 27.5 5.63904 27.5 9.09082V21.5908C27.5 25.0426 24.7018 27.8408 21.25 27.8408H8.75C5.29822 27.8408 2.5 25.0426 2.5 21.5908V9.09082ZM8.75 5.34082C6.67893 5.34082 5 7.01975 5 9.09082V21.5908C5 23.6619 6.67893 25.3408 8.75 25.3408H21.25C23.3211 25.3408 25 23.6619 25 21.5908V9.09082C25 7.01975 23.3211 5.34082 21.25 5.34082H8.75Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.3661 10.7069C10.8543 10.2188 11.6457 10.2188 12.1339 10.7069L15 13.5731L17.8661 10.7069C18.3543 10.2188 19.1457 10.2188 19.6339 10.7069C20.122 11.1951 20.122 11.9865 19.6339 12.4747L16.7678 15.3408L19.6339 18.2069C20.122 18.6951 20.122 19.4865 19.6339 19.9747C19.1457 20.4629 18.3543 20.4629 17.8661 19.9747L15 17.1086L12.1339 19.9747C11.6457 20.4629 10.8543 20.4629 10.3661 19.9747C9.87796 19.4865 9.87796 18.6951 10.3661 18.2069L13.2322 15.3408L10.3661 12.4747C9.87796 11.9865 9.87796 11.1951 10.3661 10.7069Z"
              fill="white"
            />
          </svg>
        </button>
        <NuxtLinkLocale to="/">
          <img
            src="/images/logo.svg"
            alt="logo"
            class="max-w-[170px] w-full h-full"
          />
        </NuxtLinkLocale>
      </div>
      <div class="flex flex-col gap-1 mt-10" @click="$emit('close')">
        <NuxtLinkLocale
          v-for="item in menu"
          :key="item.name"
          :to="item.path"
          class="pt-2 pb-3 px-4"
          exact-active-class="bg-white/[5%]"
        >
          <span
            class="text-[26px] leading-130 font-semibold transition-300 hover:text-blue"
            >{{ item.name }}</span
          >
        </NuxtLinkLocale>
      </div>
    </div>

    <div class="text-center px-7 pb-8">
      <a
        :href="`tel:${contacts?.phone}}`"
        class="text-white text-[28px] font-medium leading-120"
      >
        <span class="text-[25px] text-white/40">{{
          contacts?.phone?.slice(0, 4)
        }}</span>
        {{ formatPhoneNumberContact(contacts?.phone?.slice(4)) }}</a
      >

      <BaseButton
        class="w-full block mt-3 mb-5"
        variant="secondary"
        :text="$t('discuss_project')"
        @click="$emit('open-modal')"
      />

      <div class="flex-center gap-6 opacity-50">
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
  </div>
</template>

<script setup lang="ts">
import IconInstagram from '~/assets/icons/instagram.svg'
import IconTelegram from '~/assets/icons/telegram.svg'
import IconYoutube from '~/assets/icons/youtube.svg'
import { useMainStore } from '~/store/main'

interface Props {
  menu: any[]
}

defineProps<Props>()

const mainStore = useMainStore()

const contacts = computed(() => mainStore.contacts)

function formatPhoneNumberContact(number: string) {
  const format = number
    ?.replace(/\D/g, '')
    .match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,2})/)
  return `${format && format[1] ? format[1] : ''}
          ${format && format[2] ? format[2] : ''}
          ${format && format[3] ? format[3] : ''}
          ${format && format[4] ? format[4] : ''}
          ${format && format[5] ? format[5] : ''}`
}

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
