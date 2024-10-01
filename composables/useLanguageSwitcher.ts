import { defineStore, getActivePinia } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useLanguageSwitcher = () => {
  const { locale, setLocale } = useI18n()
  const cookieLocale = useCookie('locale')

  const languagesList = [
    {
      name: "O'z",
      nameFull: "O'zbek",
      code: 'uz',
    },
    {
      name: 'En',
      nameFull: 'English',
      code: 'en',
    },
    {
      name: 'Ру',
      nameFull: 'Русский',
      code: 'ru',
    },
  ]

  const currentLanguage = computed(() =>
    languagesList.find((lang) => lang.code === locale.value)
  )

  function resetAllStores() {
    const activepinia = getActivePinia()
    if (activepinia) {
      Object.entries(activepinia.state.value).forEach(([storeName, state]) => {
        const storeDefinition = defineStore(storeName, state)
        const store = storeDefinition(activepinia)
        if (
          store.$id === 'categories' ||
          store.$id === 'mainStore' ||
          store.$id === 'cartStore'
        ) {
          store.$reset()
        }
      })
    }
  }

  async function changeLocale(_locale: string) {
    await resetAllStores()
    await setLocale(_locale)
    cookieLocale.value = _locale
    locale.value = _locale
  }

  return { currentLanguage, languagesList, changeLocale }
}
