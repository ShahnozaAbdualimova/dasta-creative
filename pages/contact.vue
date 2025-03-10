<template>
  <div class="pt-[97px] pb-16">
    <BaseBreadcrumb :breadcrumb="breadcrumbRoutes" />
    <div class="container pt-10">
      <p class="text-sm leading-140 text-white/60">{{ $t('contact_text') }}</p>
      <h1 class="mt-2 text-[32px] font-semibold leading-130">
        {{ $t('contact') }}
      </h1>
      <div class="mt-8 grid md:grid-cols-2 gap-6">
        <div class="flex flex-col justify-between gap-6">
          <ContactCard
            v-for="(card, index) in contactsList"
            :key="index"
            :card
          />
        </div>

        <div class="p-8 rounded-xl bg-[#191E2E]">
          <div class="flex flex-col gap-5">
            <FormGroup :label="$t('name')">
              <FormInput
                v-model="form.values.name"
                :error="form.$v.value.name.$error"
              />
            </FormGroup>
            <FormGroup :label="$t('phone')">
              <FormInput
                v-model="form.values.phone"
                :error="form.$v.value.phone.$error"
              />
            </FormGroup>
            <FormGroup :label="$t('write_review')">
              <FormTextarea
                v-model="form.values.message"
                maxlength="500"
                :error="form.$v.value.message.$error"
              />
            </FormGroup>
          </div>
          <BaseButton
            class="w-full mt-7"
            :text="$t('send')"
            :loading
            @click="submit"
          />

          <p class="mt-4 text-sm leading-130 text-[#676767]">
            {{ $t('send_text') }}
          </p>
        </div>
      </div>

      <div class="mt-16 h-[378px] rounded-xl realtive overflow-hidden">
        <iframe
          :src="`https://yandex.com/map-widget/v1/?ll=${contacts.longitude},${contacts.latitude}&z=15&pt=${contacts.longitude},${contacts.latitude},pm2rdl`"
          width="600"
          height="400"
          frameborder="0"
          allowfullscreen="true"
          class="w-full h-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { required } from '@vuelidate/validators'

import IconEmail from '~/assets/icons/mail.svg'
import IconMapPin from '~/assets/icons/map-pin.svg'
import IconPhone from '~/assets/icons/phone-call.svg'
import { useForm } from '~/composables/useForm.js'
import { useMainStore } from '~/store/main'

const { t } = useI18n()
const { showToast } = useCustomToast()
const mainStore = useMainStore()
const loading = ref(false)

const contacts = computed(() => mainStore.contacts) as any

const form = useForm(
  {
    name: '',
    phone: '',
    message: '',
  },
  {
    name: {
      required,
    },
    phone: { required },
    message: { required },
  }
)

function submit() {
  form.$v.value.$touch()
  if (form.$v.value.$invalid) {
    return
  }
  const data = new FormData()

  data.append('full_name', form.values.name)
  data.append('phone', form.values.phone)
  data.append('text', form.values.message)
  // {
  //   full_name: form.values.name,
  //   phone: form.values.phone,
  //   text: form.values.message,
  // }
  loading.value = true
  useApi()
    .$post('/general/messages/', {
      body: data,
    })
    .then((res) => {
      showToast(t('successfully_sent'), 'success')
      form.values.name = ''
      form.values.phone = ''
      form.values.message = ''
      form.$v.value.$reset()
    })
    .catch((err: any) => {
      showToast(t('error'), 'error')
    })
    .finally(() => {
      loading.value = false
    })
}

const breadcrumbRoutes = computed<any[]>(() => [
  {
    title: t('contact'),
    link: '#',
  },
])

const contactsList = computed(() => [
  {
    title: t('address'),
    icon: IconMapPin,
    value: contacts.value?.location,
    path: ``,
  },
  {
    title: t('phone'),
    icon: IconPhone,
    value: contacts.value?.phone,
    path: `tel:${contacts.value?.phone}`,
  },
  {
    title: t('WhatsApp'),
    icon: IconPhone,
    value: contacts.value?.whatsapp,
    path: `tel:${contacts.value?.whatsapp}`,
  },
  {
    title: t('E-mail'),
    icon: IconEmail,
    value: contacts.value?.email,
    path: `mailto:${contacts.value?.email}`,
  },
])
</script>

<style scoped></style>
