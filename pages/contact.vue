<template>
<div class="pt-[120px] pb-16">
  <div class="container">
    <p class="text-sm leading-140 text-white/60">{{$t('contact_text')}}</p>
    <h1 class="mt-2 text-[32px] font-semibold leading-130">{{$t('contact')}}</h1>
    <div class="mt-8 grid md:grid-cols-2 gap-6">
      <div class="flex flex-col justify-between gap-6">
        <ContactCard v-for="(card, index) in contactsList" :key="index" :card />
      </div>

      <div class="p-8 rounded-xl bg-[#191E2E] ">
        <div class="flex flex-col gap-5">
          <FormGroup :label="$t('name')" >
            <FormInput :error="form.$v.value.name.$error" v-model="form.values.name" />
          </FormGroup>
          <FormGroup :label="$t('phone')" >
            <FormInput :error="form.$v.value.phone.$error" v-model="form.values.phone" />
          </FormGroup>
          <FormGroup :label="$t('write_review')" >
            <FormTextarea maxlength="500" :error="form.$v.value.message.$error" v-model="form.values.message" />
          </FormGroup>
        </div>
        <BaseButton class="w-full mt-7" :text="$t('send')" @click="submit" :loading />

        <p class="mt-4 text-sm leading-130 text-[#676767]">{{$t('send_text')}}</p>
      </div>
    </div>

    <div class="mt-16 h-[378px] rounded-xl realtive overflow-hidden">

      <iframe src="https://yandex.ru/map-widget/v1/-/CDTrEE8v" class="w-full h-full" />

    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import IconMapPin from '~/assets/icons/map-pin.svg'
import IconPhone from '~/assets/icons/phone.svg'
import IconEmail from '~/assets/icons/mail.svg'
import { useMainStore } from "~/store/main";
import {useForm} from "~/composables/useForm.js";
import {required} from "@vuelidate/validators";


const {t} = useI18n()
const {showToast} = useCustomToast()
const mainStore = useMainStore()
const loading = ref(false)

const contacts = computed(() => mainStore.contacts) as any


const form = useForm({
  name: '',
  phone: '',
  message: '',
}, {
  name: {
    required
  },
  phone: { required },
  message: { required }
})


function submit() {
  form.$v.value.$touch()
  if (form.$v.value.$invalid) {
    return
  }
  const data = {
    full_name: form.values.name,
    phone: form.values.phone,
    text: form.values.message
  }
  loading.value = true
  useApi().$post('/general/messages/', {
    body: data
  }).then(res => {
    showToast(t('successfully_sent'), 'success')
    form.values.name = ''
    form.values.phone = ''
    form.values.message = ''
    form.$v.value.$reset()
  }).catch(err => {
    showToast(t('error'), 'error')
  }).finally(() => {
    loading.value = false
  })
}


const contactsList = computed(() => [
  {
    title: t('address'),
    icon: IconMapPin,
    value: contacts.value?.address,
    path: ``
  },
  {
    title: t('phone'),
    icon: IconPhone,
    value: contacts.value?.phone,
    path: `tel:${contacts.value?.phone}`
  },
  {
    title: t('WhatsApp'),
    icon: IconPhone,
    value: contacts.value?.whatsapp,
    path: `tel:${contacts.value?.whatsapp}`
  },
  {
    title: t('E-mail'),
    icon: IconEmail,
    value: contacts.value?.email,
    path: `mailto:${contacts.value?.email}`
  },
])
</script>

<style scoped>

</style>