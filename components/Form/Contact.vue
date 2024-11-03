<template>
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
      <FormGroup :label="$t('choose_file')">
        <FormImageUploader @change="form.values.file = $event" />
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
</template>

<script setup lang="ts">
import { required } from '@vuelidate/validators'

const { t } = useI18n()
const { showToast } = useCustomToast()

const emit = defineEmits(['close'])

const loading = ref(false)

const form = useForm(
  {
    name: '',
    phone: '',
    message: '',
    file: '',
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
  data.append('file', form.values.file)

  loading.value = true
  useApi()
    .$post('/general/messages/', {
      body: data,
    })
    .then(() => {
      showToast(t('successfully_sent'), 'success')
      form.values.name = ''
      form.values.phone = ''
      form.values.message = ''
      form.$v.value.$reset()
      emit('close')
    })
    .catch(() => {
      showToast(t('error'), 'error')
    })
    .finally(() => {
      loading.value = false
    })
}
</script>
