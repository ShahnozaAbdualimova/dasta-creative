<template>
  <div
    class="w-full h-[266px] bg-blue rounded-[20px] relative overflow-hidden p-6 flex flex-col justify-between gap-6"
  >
    <div>
      <p class="text-[36px] leading-130 font-bold text-white">Dasta Helper</p>
      <p class="text-sm leading-130 font-normal mt-2">
        {{ $t('helper_text') }}
      </p>
    </div>
    <a href="https://dasta.helper" target="_blank">
      <BaseButton
        :text="$t('enter_the_site')"
        variant="white"
        size="sm"
        class="!text-blue hover:!bg-transparent border hover:!border-white hover:!text-white group !font-bold"
      >
        <template #suffix>
          <i-arrow-right
            class="text-blue block !-mb-0.5 !-ml-1 group-hover:!text-white text-xl"
          />
        </template>
      </BaseButton>
    </a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
