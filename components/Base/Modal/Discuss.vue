<template>
  <Teleport to="body">
    <Transition name="fade" mode="out-in">
      <div
        v-if="show"
        class="fixed bg-black/40 w-full bg-dark-100 min-h-screen inset-0 z-[999]"
      >
        <div class="w-full h-full relative flex-center">
          <img
            src="/images/line.svg"
            alt="line"
            class="absolute top-0 -left-[5%] pointer-events-none"
          />
          <img
            src="/images/line-1.svg"
            alt="line"
            class="absolute top-0 right-[5%] pointer-events-none"
          />

          <div
            class="grid xl:grid-cols-2 gap-16 w-full px-4 md:px-16 py-8 md:py-16 relative z-10"
          >
            <div class="max-xl:hidden shrink-0">
              <p
                class="text-[56px] xl:text-[124px] font-semibold leading-[100%]"
              >
                {{ $t('discuss_project') }}
              </p>
              <p
                class="text-2xl xl:text-[30px] leading-[140%] mt-6 md:mt-10 text-white/60"
              >
                {{ $t('discuss_project_text') }}
              </p>
              <a
                :href="contacts?.telegram"
                target="_blank"
                class="inline-block mt-11"
              >
                <BaseButton :text="$t('write_telegram')">
                  <template #suffix>
                    <i-arrow-right class="text-white block !mb-0" />
                  </template>
                </BaseButton>
              </a>
            </div>

            <div class="w-full xl:max-w-[584px] relative max-xl:pt-6">
              <svg
                class="absolute -top-10 xl:top-0 right-0 xl:-right-16 cursor-pointer group"
                width="57"
                height="57"
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="mainStore.showModal = false"
              >
                <rect width="57" height="57" rx="11" fill="#191E2E" />
                <path
                  class="transition-300 group-hover:fill-red"
                  d="M18.0476 36.4535L25.1801 28.406L17.1326 21.2735L20.8981 17.025L28.9456 24.1575L36.0582 16.1325L40.3067 19.898L33.1941 27.923L41.1966 35.0157L37.4311 39.2642L29.4286 32.1715L22.2961 40.219L18.0476 36.4535Z"
                  fill="#303442"
                />
              </svg>

              <FormContact
                class="w-full"
                @close="mainStore.showModal = false"
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useMainStore } from '~/store/main'

const mainStore = useMainStore()

const contacts = computed(() => mainStore.contacts)
const show = computed(() => mainStore.showModal)

watch(
  () => show.value,
  () => {
    if (show.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }
)
</script>
