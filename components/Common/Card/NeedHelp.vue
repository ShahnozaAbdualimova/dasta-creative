<template>
  <section class="container mx-auto">
    <div
      :style="cardStyle"
      class="backdrop-blur-[30px] w-full rounded-[30px] relative flex"
    >
      <div
        class="border-2 border-white/5 w-full rounded-[30px] p-0 md:p-10 flex flex-col-reverse"
      >
        <div
          class="flex flex-col p-4 pt-0 md:gap-16 space-y-4 md:space-y-0 md:justify-between"
        >
          <div class="space-y-4">
            <h1
              class="text-white text-2xl md:text-[40px] font-extrabold md:font-bold leading-130"
            >
              Вам нужна помощь?
            </h1>
            <p
              class="text-white/60 max-w-[332px] text-base font-normal leading-snug"
            >
              Обращайтесь к нам с любым вопросом или предложением. Ответим на ваши вопросы и организует встречу
            </p>
          </div>

          <div
            class="justify-start flex-col min-[960px]:flex-row min-[960px]:items-center md:gap-7 gap-4 flex"
          >
            <div
              class="justify-start md:border-r border-white/10 pr-7 items-center gap-4 flex"
            >
              <div
                class="w-12 h-12 p-2.5 bg-white/5 rounded-full shadow border border-white/10 flex-center"
              >
                <i-phone class="text-[28px] text-white" />
              </div>
              <div class="flex-col justify-start">
                <div
                  class="self-stretch text-white/60 text-sm font-normal leading-130"
                >
                  Голос, который поможет
                </div>
                <a
                  :href="`tel:+998996753211`"
                  class="text-white text-base font-semibold leading-tight"
                >
                  +998996753211
                </a>
              </div>
            </div>
            <a :href="'tel:' + '+998996753211'" class="max-md:w-full">
              <BaseButton class="max-md:w-full" variant="white" text="Написать в Telegram" />
            </a>
          </div>
        </div>
        <div class="hidden md:block">
          <img
            class="absolute min-[1120px]:w-[400px] w-[300px] bottom-0 right-[90px]"
            src="/images/feruzbek.png"
            alt="author"
          />
<!--          <NuxtImg-->
<!--            src="/svg/wings.svg"-->
<!--            class="absolute bottom-0 -right-1 z-20 min-[1120px]:w-[620px] md:w-[500px]"-->
<!--            alt="wings"-->
<!--          />-->
        </div>
        <div class="md:hidden block relative -top-8 flex-center">
          <img
            class="w-[232px] mx-auto"
            src="/images/feruzbek.png"
            alt="author"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

interface Props {
  type?: 'red' | 'green'
  phone?: string
  loading: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'red',
  phone: '',
})


const cardStyle = computed(() => {
  if (props.type === 'red') {
    return {
      background: '#2C5CFF',
    }
  } else {
    return {
      background: 'linear-gradient(103deg, #62AD5A -151.37%, #040E03 87.73%)',
    }
  }
})
</script>
