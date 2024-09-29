<template>
    <div>
      <Transition name="fade" mode="out-in">
        <div :key="loading">
          <div
            v-if="!loading"
            id="section"
            class="flex-center text-primary flex-col space-y-1 w-40"
          >
            <p class="sm:text-[50px] text-4xl font-extrabold text-white leading-[65px]">
              {{ item.quantity }}
            </p>
<!--            <count-up-->
<!--              v-if="isVisible"-->
<!--              ref="counter"-->
<!--              :class="qualityStyle"-->
<!--              class="sm:text-[50px] text-4xl font-extrabold text-white leading-[65px]"-->
<!--              :start-val="0"-->
<!--              :end-val="item.quantity"-->
<!--              :duration="3"-->
<!--              suffix="+"-->
<!--              decimal-separator=""-->
<!--              :decimal-places="0"-->
<!--              :autoinit="true"-->
<!--              delay="500"-->
<!--            />-->
            <p
              :class="textStyle"
              class="text-white/40 w-36 text-center text-sm font-medium leading-tight"
            >
              {{ $t(item?.title ?? '') }}
            </p>
          </div>
          <div v-else class="flex-center flex-col gap-1 space-y-1 w-48">
            <div class="w-16 h-[50px] shimmer !bg-[#edeef1] rounded-lg mb-2" />
            <div class="w-36 h-3.5 shimmer !bg-[#edeef1] rounded" />
          </div>
        </div>
      </Transition>
    </div>
</template>

<script setup lang="ts">
import CountUp from 'vue-countup-v3'


interface Props {
  item?: any
  qualityStyle?: string
  textStyle?: string
  loading?: boolean
  isVisible?: boolean
}
const counter = ref(null)
const props = defineProps<Props>()
</script>

<style scoped></style>
