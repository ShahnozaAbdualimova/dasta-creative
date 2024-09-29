<template>
  <div class="flex ml-6">
    <template v-if="!loading || sixUsers?.length">
      <div
          v-for="(item, index) in sixUsers"
          :key="index"
          class="relative group"
          @click.stop="navigate(item?.link)"
      >
        <LazyCommonAvatar
            class="before:hidden border-2 border-white/20 !-ml-6 first:ml-0 hover:z-20 cursor-pointer transition-300"
            :class="avatarClass"
            :src="item?.image || item?.user?.avatar"
            size="xl"
        />
        <BaseTooltip
            v-if="isTooltip"
            class="!-bottom-16 bg-white !text-black group-hover:visible group-hover:opacity-100"
        >
          {{ item?.full_name || item?.user?.full_name }}
        </BaseTooltip>
      </div>
      <div
          v-if="otherUsersCount"
          class="h-11 w-11 z-10 flex-center bg-white/50 backdrop-blur rounded-full -ml-6 first:ml-0"
      >
        <p class="text-white text-base font-bold leading-snug">
          +{{ otherUsersCount }}
        </p>
      </div>
    </template>
    <template v-else>
      <div
          v-for="i in 7"
          :key="i"
          class="!w-6 !h-6 shimmer before:hidden border border-white -ml-2 first:ml-0"
      />
    </template>
  </div>
</template>
<script setup lang="ts">
import type { TClassName } from '~/types'

interface Props {
  users?: {
    id?: string | number
    full_name?: string
    image?: string
    link?: string
  }[]
  loading?: boolean
  isTooltip?: boolean
  avatarClass?: TClassName
}
const props = defineProps<Props>()
const router = useRouter()

const sixUsers = computed(() => {
  return props.users?.length && props.users?.length > 6
      ? props.users?.slice(0, 6)
      : props.users
})

const navigate = (link?: string) => {
  if (link) {
    router.push(link)
  }
}

const otherUsersCount = computed(() => {
  if (props.users?.length && sixUsers.value?.length) {
    return props.users?.length - sixUsers.value?.length
  }
})
</script>
