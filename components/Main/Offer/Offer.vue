<template>
  <div class="container py-10">
    <div
      class="p-8 bg-blue-100 border border-white/10 rounded-2xl flex-center-between gap-12 max-sm:flex-col"
    >
      <div data-aos="fade-up">
        <div class="flex-y-center gap-5">
          <svg
            width="83"
            height="83"
            viewBox="0 0 83 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M82.5241 41.1491C68.6834 42.0642 59.6334 43.4991 53.6113 47.2163C50.99 48.8207 48.945 50.8657 47.3293 53.487C43.6234 59.4978 42.1772 68.5253 41.262 82.2981C40.3469 68.5027 38.912 59.4865 35.1948 53.487C33.5904 50.877 31.5454 48.832 28.9241 47.2163C22.902 43.5104 13.8519 42.0642 0 41.1491C13.8406 40.2339 22.902 38.7877 28.9241 35.0818C31.5454 33.4661 33.5904 31.4211 35.2061 28.7998C38.9007 22.789 40.3469 13.7615 41.262 0C42.1659 13.7841 43.6121 22.8003 47.318 28.7998C48.9337 31.4211 50.9787 33.4661 53.6113 35.0818C59.6334 38.7877 68.6834 40.2339 82.5241 41.1491Z"
              fill="white"
            />
            <path
              d="M32.0659 23.5001C29.9223 26.977 27.2165 29.6827 23.7266 31.8395V23.5001H32.0659Z"
              fill="white"
            />
            <path
              d="M58.7524 23.5001V31.8395C55.2679 29.6958 52.5534 26.9901 50.4131 23.5001H58.7524Z"
              fill="white"
            />
            <path
              d="M32.0659 58.5256H23.7266V50.1863C27.2089 52.3333 29.9189 55.0433 32.0659 58.5256Z"
              fill="white"
            />
            <path
              d="M58.7524 50.1863V58.5256H50.4131C52.5567 55.0433 55.2625 52.3333 58.7524 50.1863Z"
              fill="white"
            />
          </svg>

          <div>
            <p class="text-sm leading-130 font-bold text-blue">
              Dasta Creative
            </p>
            <p class="text-2xl sm:text-[32px] leading-130 font-bold">
              {{ $t('we_present_you') }}
            </p>
          </div>
        </div>

        <p class="mt-4 text-base leading-140">
          {{ $t('we_present_you_text_1') }}
        </p>
        <p class="mt-5 text-base leading-140 text-blue">
          {{ $t('we_present_you_text_2') }}
        </p>
      </div>
      <div
        data-aos="fade-up"
        class="aspect-video sm:max-w-[450px] w-full rounded-xl relative overflow-hidden"
      >
        <img
          src="/images/fake/fake.png"
          alt="video"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Offer',
}
</script>

<style scoped></style>
