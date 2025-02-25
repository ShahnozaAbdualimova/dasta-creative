import { useI18n } from 'vue-i18n'

export const useLanguageSwitcher = () => {
  const { locale, setLocale } = useI18n()

  const languagesList = [
    {
      name: "O'Z",
      nameFull: "O'zbek",
      code: 'uz',
    },
    {
      name: 'EN',
      nameFull: 'English',
      code: 'en',
    },
    {
      name: 'РУ',
      nameFull: 'Русский',
      code: 'ru',
    },
  ]

  const currentLanguage = computed(() =>
    languagesList.find((lang) => lang.code === locale.value)
  )

  async function changeLocale(_locale: string) {
    await setLocale(_locale)
    locale.value = _locale
  }

  return { currentLanguage, languagesList, changeLocale }
}
