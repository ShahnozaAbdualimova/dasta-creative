<template>
  <main class="relative overflow-hidden">
    <div class="container">
      <div class="md:flex items-center justify-between">
        <div class="md:w-[580px]">
          <h2
            class="text-2xl lg:text-4xl text-white font-extrabold leading-130"
          >
            {{ $t('info_detail_title') }}
          </h2>
          <p
            class="text-sm md:text-base text-white/60 mt-3 leading-140 font-medium"
          >
            {{ $t('info_detail_text') }}
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 relative z-10"
      >
        <div
          class="p-4 bg-white/10 rounded-[20px] border border-white/10 shadow-[0px_20px_40px_0px_rgba(19,22,18,0.10)] cursor-pointer"
        >
          <div class="flex gap-3 items-center">
            <span
              class="p-2 bg-white/10 rounded-lg border border-white/10 inline-flex"
            >
              <i-map-pin class="text-2xl text-white" />
            </span>
            <div>
              <p class="text-white text-base font-bold">
                {{ contanctInfoData[0]?.address }}
              </p>
              <p class="text-white/60 text-xs font-medium">
                {{ $t('contact.our_address') }}
              </p>
            </div>
          </div>
        </div>
        <a
          :href="`tel:${contanctInfoData[0]?.phone}`"
          class="p-4 bg-white/10 rounded-[20px] border border-white/10 shadow-[0px_20px_40px_0px_rgba(19,22,18,0.10)]"
        >
          <div class="flex gap-3 items-center">
            <span
              class="p-2 bg-white/10 rounded-lg border border-white/10 inline-flex"
            >
              <i-phone class="text-2xl text-white" />
            </span>
            <div>
              <span class="text-white text-base font-bold">
                {{ formatPhoneNumber(contanctInfoData[0]?.phone) }}
              </span>
              <p class="text-white/60 text-xs font-medium">
                {{ $t('contact.phone_number') }}
              </p>
            </div>
          </div>
        </a>
        <a
          :href="`mailto: ${contanctInfoData[0]?.email}`"
          class="p-4 bg-white/10 rounded-[20px] border border-white/10 shadow-[0px_20px_40px_0px_rgba(19,22,18,0.10)]"
        >
          <div class="flex gap-3 items-center">
            <span
              class="p-2 bg-white/10 rounded-lg border border-white/10 inline-flex"
            >
              <i-mail class="text-2xl text-white" />
            </span>
            <div>
              <span class="text-white text-base font-bold">
                {{ contanctInfoData[0]?.email }}
              </span>
              <p class="text-white/60 text-xs font-medium">
                {{ $t('contact.email') }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// import { useContactStore } from '~/store/contact'
//
// const { t } = useI18n()
//
// const useContact = useContactStore()
//
// useContact.fetchContacts()
const contanctInfoData = computed(() => {
  return [
    {
      address: 'Ленина, ул. Ленина, д. 10, кв. 1, г. Москва',
      phone: '+7 (495) 392-39-39',
      email: 'info@example.com',
    },
  ]
})
</script>

