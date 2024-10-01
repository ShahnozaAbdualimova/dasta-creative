<template>
<div class="container py-10">
  <div class="p-8 bg-blue-100 border border-white/10 rounded-2xl flex-center-between gap-12 max-sm:flex-col">
    <div  data-aos="fade-up">
      <div class="flex-y-center gap-5">
        <div class="size-[55px] shrink-0 rounded-lg bg-blue" />
        <div>
          <p class="text-sm leading-130 font-bold">Dasta Creative</p>
          <p class="text-2xl sm:text-[32px] leading-130 font-bold">{{$t('we_present_you')}}</p>
        </div>
      </div>

      <p class="mt-9 text-base leading-140">
        {{$t('we_present_you_text_1')}}
      </p>
      <p class="mt-5 text-base leading-140 text-blue">
        {{$t('we_present_you_text_2')}}
      </p>
    </div>
    <div  data-aos="fade-up" class="aspect-video sm:max-w-[450px] w-full rounded-xl relative overflow-hidden">
      <img src="/images/fake/fake.png" alt="video" class="w-full h-full object-cover" />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Offer"
}
</script>

<style scoped>

</style>