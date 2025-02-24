<template>
    <div class="pb-8 pt-8 md:py-8 container">
        <h1 class="text-4xl leading-[46px] font-extrabold">{{ $t("why_us") }}</h1>
        <p class="text-base font-medium leading-5 text-grey-100">{{ $t("why_us_text") }}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <MainWhyUsCard v-for="(item, index) in whyUsData"
                           :key="index"
                           :index="index"
                           :title="item.title"
                           :description="item.description"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const whyUsData = [
  {
    title: 'Tezkor Xizmat',
    description: 'Bizning xizmatlarimiz tezkor va sifatli. Siz uchun eng yaxshi echimlarni taqdim etamiz.',
  },
  {
    title: 'Ishonchli Hamkor',
    description: 'Mijozlarimiz bizga ishonishadi, chunki biz har doim sifatli xizmat ko‘rsatamiz.',
  },
  {
    title: 'Innovatsion Yondashuv',
    description: 'Biz har doim zamonaviy texnologiyalar va innovatsion yondashuvlardan foydalanamiz.',
  },
  {
    title: '24/7 Qo‘llab-quvvatlash',
    description: 'Sizga doim yordam berishga tayyormiz. Bizning qo‘llab-quvvatlash jamoamiz 24/7 ishlaydi.',
  },
];
</script>
