<template>
  <section class="container mx-auto">
    <div class="w-full rounded-[30px] relative flex overflow-hidden">
      <img
        src="/images/support.png"
        alt="support"
        class="w-full h-full absolute inset-0"
      />
      <div
        class="border-2 border-white/5 w-full rounded-[30px] p-0 md:p-10 flex flex-col-reverse relative z-10"
      >
        <div
          class="flex-center-between p-4 pt-0 md:gap-16 space-y-4 md:space-y-0 md:justify-between"
        >
          <div class="space-y-4">
            <h1
              class="text-white text-2xl md:text-[40px] font-extrabold md:font-bold leading-130"
            >
              {{ $t('you_need_help') }}
            </h1>
            <p
              class="text-white/60 max-w-[332px] text-base font-normal leading-snug"
            >
              {{ $t('you_need_help_text') }}
            </p>
          </div>

          <div class="max-w-[400px]">
            <FormInput
              class="!bg-white text-center"
              input-class="!text-black placeholder:!text-[#97979C] text-center"
              placeholder="+998 91 234 56 78"
            >
              <template #suffix>
                <BaseButton :text="$t('send')" @click="submit" />
              </template>
            </FormInput>
            <div
              class="justify-start flex-col min-[960px]:flex-row min-[960px]:items-center md:gap-7 gap-4 flex mt-5"
            >
              <div
                class="justify-start md:border-r border-white/10 pr-7 items-center gap-2.5 flex"
              >
                <div
                  class="w-[30px] h-[30px] bg-white/5 rounded-full shadow border border-white/10 flex-center"
                >
                  <i-phone class="text-base text-white" />
                </div>
                <div class="flex-col justify-start">
                  <div
                    class="self-stretch text-white/60 text-[9px] font-normal leading-130 -mb-1.5"
                  >
                    {{ $t('voice_will_help') }}
                  </div>
                  <a
                    :href="`tel:${contacts?.phone}`"
                    class="text-white text-[10px] font-semibold leading-tight"
                  >
                    {{ contacts?.phone }}
                  </a>
                </div>
              </div>
              <a
                :href="contacts?.telegram"
                target="_blank"
                class="inline-block"
              >
                <BaseButton
                  class="!text-blue"
                  :text="$t('write_telegram')"
                  size="sm"
                  variant="white"
                >
                  <template #suffix>
                    <i-arrow-right class="text-blue block !mb-0" />
                  </template>
                </BaseButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { required } from '@vuelidate/validators'

import { useMainStore } from '~/store/main'

interface Props {
  type?: 'red' | 'green'
  phone?: string
  loading: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'red',
  phone: '',
})

const mainStore = useMainStore()

const contacts = computed(() => mainStore.contacts)

const form = useForm(
  {
    phone: '',
  },
  {
    phone: {
      required,
    },
  }
)

const { showToast } = useCustomToast()
const { t } = useI18n()

const buttonLoading = ref(false)

function submit() {
  form.$v.value.$touch()
  if (!form.$v.value.$invalid) {
    buttonLoading.value = true
    useApi().$post('/general/messages', {
      body: {},
    })
  }
}
</script>
