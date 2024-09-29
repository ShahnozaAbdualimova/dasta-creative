<template>
  <Transition name="fade" mode="out-in">
    <CommonCardSupportLoading v-if="loading" />
    <div v-else>
      <div
        class="flex flex-col gap-4 transition-300 bg-blue-100 border border-white/10 rounded-[20px] p-4"
        data-aos="fade-up"
        :class="[
          { 'shadow-primary-hover': isHover },
          ...[{ '!bg-white !border-gray-500': whiteMode }],
        ]"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
      >
        <div class="flex justify-between">
          <div
            class="w-16 inline-flex h-16 p-4 bg-white/10 rounded-full justify-center items-center border border-white/20"
            :class="{ '!bg-primary': whiteMode }"
          >
            <img
              class="w-full h-full object-contain object-center aspect-square"
              :src="image"
              :alt="name"
            />
          </div>
          <div
            class="h-6 px-1.5 py-1 bg-blue rounded-md border border-white/10 justify-center items-center gap-1 inline-flex"
          >
            <div
              class="text-right text-white text-xs font-semibold leading-none"
            >
              {{ category?.name }}
            </div>
          </div>
        </div>

        <h1
          class="w-full text-white mt-auto text-xl font-extrabold leading-130"
          :class="{ '!text-brand-black': whiteMode }"
        >
          {{ name }}
        </h1>


        <CommonCardUsers
            :users="users"
            is-tooltip
        />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">


interface ISupportCard {
  category: {
    id: number
    name: string
  }
  id: number
  name: string
  description: string
  image: string
}

interface Props extends ISupportCard {
  whiteMode?: boolean
  loading?: boolean
}

withDefaults(defineProps<Props>(), {
  title: 'Материальная помощь',
  badge: 'Финансы',
  icon: 'hands',
  description:
    'Мы окажем вам финансовую поддержку и консультации, помогая вам воплотить Вашу идею в жизнь.',
})

const isHover = ref(false)



const users = [
  {
    user: {
      id: 1,
      full_name: 'Dasta',
      avatar: '/images/fake/sharh.png',
      link: `/residents/1`,
    }
  },
  {
    user: {
      id: 1,
      full_name: 'Dasta',
      avatar: '/images/fake/sharh.png',
      link: `/residents/1`,
    }
  },
]
</script>
<style scoped>
.shadow-primary-hover {
  box-shadow: 0 4px 16px 0 #ffffff1f;
}
</style>
