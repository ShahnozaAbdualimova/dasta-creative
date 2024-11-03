<template>
  <div
    class="w-full h-[266px] rounded-[20px] bg-white flex flex-col justify-between gap-4 p-6"
    :class="{ 'flex-col-reverse': index % 2 !== 0 }"
  >
    <p class="text-[47px] leading-130 font-bold text-[#6A4C93]">
      {{ index + 1 }}
    </p>
    <div>
      <p class="text-lg leading-130 font-bold text-[#131612]">
        Поддержка социальных проектов
      </p>
      <p class="mt-3 leading-[140%] font-medium text-[#8A8C8A] text-sm">
        Мы окажем вам квалифицированную поддержку и консультации, помогая вам
        воплотить Вашу идею в жизнь.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  index?: number
}

defineProps<Props>()
</script>
