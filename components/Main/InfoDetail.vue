<template>
  <main class="relative overflow-hidden">
    <div class="container">
      <div class="flex md:items-center justify-between gap-4 max-md:flex-col">
        <div class="md:w-[580px]">
          <h2 class="text-2xl lg:text-4xl text-white font-extrabold leading-130">
            {{ $t('info_detail_title') }}
          </h2>
          <p class="text-sm md:text-base text-white/60 mt-3 leading-140 font-medium">
            {{ $t('info_detail_text') }}
          </p>
        </div>
        <a :href="contacts?.telegram" target="_blank" class="inline-block">
          <BaseButton :text="$t('write_telegram')" class="max-sm:w-full">
            <template #suffix>
              <i-arrow-right class="text-white block !mb-0" />
            </template>
          </BaseButton>
        </a>
      </div>


      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 relative z-10">
        <div
          class="p-4 bg-white/10 rounded-[20px] border border-white/10 shadow-[0px_20px_40px_0px_rgba(19,22,18,0.10)] cursor-pointer">
          <div class="flex gap-3 items-center">
            <span class="p-2 bg-white/10 rounded-lg border border-white/10 inline-flex">
              <i-map-pin class="text-2xl text-white" />
            </span>
            <div>
              <p class="text-white text-base font-bold">
                {{ contacts?.location }}
              </p>
              <p class="text-white/60 text-xs font-medium">
                {{ $t('our_address') }}
              </p>
            </div>
          </div>
        </div>
        <a :href="`tel:${contacts?.phone}`"
          class="p-4 bg-white/10 rounded-[20px] border border-white/10 shadow-[0px_20px_40px_0px_rgba(19,22,18,0.10)]">
          <div class="flex gap-3 items-center">
            <span class="p-2 bg-white/10 rounded-lg border border-white/10 inline-flex">
              <i-phone class="text-2xl text-white" />
            </span>
            <div>
              <span class="text-white text-base font-bold">
                {{ formatPhoneNumber(contacts?.phone) }}
              </span>
              <p class="text-white/60 text-xs font-medium">
                {{ $t('phone_number') }}
              </p>
            </div>
          </div>
        </a>
        <a :href="`mailto:${contacts?.email}`"
          class="p-4 bg-white/10 rounded-[20px] border border-white/10 shadow-[0px_20px_40px_0px_rgba(19,22,18,0.10)]">
          <div class="flex gap-3 items-center">
            <span class="p-2 bg-white/10 rounded-lg border border-white/10 inline-flex">
              <i-mail class="text-2xl text-white" />
            </span>
            <div>
              <span class="text-white text-base font-bold">
                {{ contacts?.email }}
              </span>
              <p class="text-white/60 text-xs font-medium">
                {{ $t('email') }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

import {useMainStore} from "~/store/main";

const mainStore = useMainStore()

const contacts = computed(() => mainStore.contacts)

</script>

