<template>
  <header class="w-full fixed top-0 bg-dark-100 z-50">
    <div class="container flex-center-between py-6">
      <button class="sm:hidden" @click="isOpen = true">
        <i-burger class="text-white text-xl" />
      </button>
      <NuxtLinkLocale to="/">
        <img
          src="/images/logo.svg"
          alt="logo"
          class="max-w-[170px] w-full h-full"
        />
      </NuxtLinkLocale>
      <div class="flex-y-center gap-7">
        <div class="flex-y-center gap-9 max-sm:hidden">
          <NuxtLinkLocale v-for="item in menu" :key="item.name" :to="item.path">
            <span
              class="text-base leading-130 font-semibold transition-300 hover:text-blue"
              >{{ item.name }}</span
            >
          </NuxtLinkLocale>
        </div>
        <div class="w-px h-8 bg-white/30 max-sm:hidden" />
        <LayoutHeaderLanguageSwitcher />
        <BaseButton
          class="max-sm:hidden"
          variant="secondary"
          :text="$t('discuss_the_project')"
          size="sm"
          @click="$emit('open-modal')"
        />
      </div>
      <Transition name="from-left">
        <LayoutHeaderMobile
          v-if="isOpen"
          :menu
          @close="isOpen = false"
          @open-modal="$emit('open-modal')"
        />
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isOpen = ref(false)

const menu = computed(() => {
  return [
    {
      name: t('about'),
      path: '/about',
    },
    {
      name: t('cases'),
      path: '/projects',
    },
    {
      name: t('contact'),
      path: '/contact',
    },
  ]
})
</script>

<style scoped>
.from-left-enter-active {
  animation: from-left-animation 0.3s ease-out;
}

.from-left-leave-active {
  animation: from-left-animation 0.3s ease-in reverse;
}

@keyframes from-left-animation {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
