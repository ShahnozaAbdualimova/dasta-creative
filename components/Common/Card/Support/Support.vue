<template>
  <Transition name="fade" mode="out-in">
    <CommonCardSupportLoading v-if="loading" />
    <div v-else>
      <div
        class="h-full flex flex-col gap-4 transition-300 bg-blue-100 border border-white/10 rounded-[20px] p-4"
        data-aos="fade-up"
        :class="[...[{ '!bg-white !border-gray-500': whiteMode }]]"
      >
        <div class="flex flex-col gap-4">
          <div class="flex justify-between">
            <div
              class="w-16 inline-flex h-16 p-4 bg-white/10 rounded-full justify-center items-center border border-white/20"
              :class="{ '!bg-primary': whiteMode }"
            >
              <img
                class="w-full h-full object-contain object-center aspect-square"
                :src="icon"
                :alt="name"
              />
            </div>
            <div
              class="h-6 px-1.5 py-1 bg-blue rounded-md border border-white/10 justify-center items-center gap-1 inline-flex"
            >
              <div
                class="text-right text-white text-xs font-semibold leading-none"
              >
                {{ label }}
              </div>
            </div>
          </div>

          <h1
            class="w-full text-white mt-auto text-xl font-extrabold leading-130"
            :class="{ '!text-brand-black': whiteMode }"
          >
            {{ title }}
          </h1>
        </div>

        <CommonCardUsers :users="logos" is-tooltip />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
interface ISupportCard {
  id: number
  title: string
  label: string
  icon: string
  logos: {
    id: number
    logo: string
    service: number
  }[]
}

interface Props extends ISupportCard {
  whiteMode?: boolean
  loading?: boolean
}

withDefaults(defineProps<Props>(), {
  title: '',
  badge: '',
  icon: '',
  description: '',
})
</script>
<style scoped>
.shadow-primary-hover {
  box-shadow: 0 4px 16px 0 #ffffff1f;
}
</style>
