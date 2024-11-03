<template>
  <div
    class="w-full h-[266px] bg-[#6A4C93] rounded-[20px] relative overflow-hidden p-6 flex flex-col justify-between gap-6"
  >
    <img
      src="/images/map.png"
      alt="map"
      class="absolute -left-[100px] -top-5"
    />
    <img
      src="/images/images.png"
      alt="images"
      class="absolute bottom-0 right-0 max-w-[158px]"
    />
    <div>
      <p class="text-[36px] leading-130 font-bold text-white">Dasta Helper</p>
      <p class="text-sm leading-130 font-normal mt-2">
        {{ $t('helper_text') }}
      </p>
    </div>
    <a href="https://dastahelper.uz" target="_blank">
      <BaseButton
        :text="$t('write_telegram')"
        class="w-max !text-[#6A4C93]"
        variant="white"
        size="sm"
      >
        <template #suffix>
          <i-arrow-right class="text-[#6A4C93] block !mb-0" />
        </template>
      </BaseButton>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style scoped></style>
