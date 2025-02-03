<template>
  <div class="container py-10">
    <div class="grid lg:grid-cols-2 gap-16">
      <div>
        <p class="text-[36px] leading-130 font-extrabold">Dasta Creative</p>

        <p class="mt-2 text-lg leading-130 mb-6">
          {{ $t('we_present_you_text_1') }}
        </p>
        <div class="flex flex-col gap-3">
          <AboutInfo
            v-for="(item, index) in items"
            :key="index"
            :title="item.title"
          />
        </div>
      </div>
      <div class="w-full rounded-[28px] relative overflow-hidden">
        <img
          src="/images/dasta-about.png"
          alt="video"
          class="w-full h-full object-cover"
        />

        <div
          class="w-full bottom-0 h-[70px] bg-[#2D5CFE] z-10 absolute flex-center gap-6 cursor-pointer"
        >
          <svg
            width="34"
            height="40"
            viewBox="0 0 34 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_10_11)">
              <path
                d="M30.1136 13.8248C34.8259 16.5992 34.8259 23.4026 30.1136 26.177L10.8047 37.5393C6.02273 40.3555 0 36.898 0 31.3632L0 8.6386C0 3.08988 6.02273 -0.353672 10.8047 2.46251L30.1136 13.8248Z"
                fill="white"
                fill-opacity="0.8"
              />
            </g>
            <defs>
              <clipPath id="clip0_10_11">
                <rect width="33.6478" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p
            class="text-[10px] leading-[144%] font-bold text-white tracking-[0.118px]"
          >
            {{ $t('more_on_video') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const items = [
  {
    title: t('we_do_text_1'),
  },
  {
    title: t('we_do_text_2'),
  },
  {
    title: t('we_do_text_3'),
  },
]
</script>

<style scoped></style>
