import { type FetchOptions, type FetchRequest } from 'ofetch'

export const useApi = (apiUrl?: string) => {
  const { $i18n } = useNuxtApp()

  const baseURL = apiUrl || (import.meta.env.VITE_API_BASE_URL as string)
  const locale = $i18n?.locale ?? 'ru'
  const loading = ref(false)

  function $service(options?: FetchOptions) {
    return $fetch.create({
      ...options,
      baseURL,
      headers: {
        ...options?.headers,
        'Accept-Language': locale.value || 'uz',
      },
    })
  }

  function $get<T = never>(
    endpoint: FetchRequest,
    options?: FetchOptions
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      loading.value = true
      $service(options)(endpoint)
        .then((response: T | any) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error.response)
        })
        .finally(() => {
          loading.value = false
        })
    })
  }

  function $post<T = never>(
    endpoint: FetchRequest,
    options?: FetchOptions
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service({ ...options, method: 'POST' })(endpoint)
        .then((response: T | any) => {
          resolve(response)
        })
        .catch((error) => reject(error.response))
        .finally(() => {
          loading.value = false
        })
    })
  }

  function $put<T = never>(
    endpoint: FetchRequest,
    options?: FetchOptions
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service({ ...options, method: 'PUT' })(endpoint)
        .then((response: T | any) => {
          resolve(response)
        })
        .catch((error) => reject(error.response))
        .finally(() => {
          loading.value = false
        })
    })
  }

  function $patch<T = never>(
    endpoint: FetchRequest,
    options?: FetchOptions
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service({ ...options, method: 'PATCH' })(endpoint)
        .then((response: T | any) => {
          resolve(response)
        })
        .catch((error) => reject(error.response))
        .finally(() => {
          loading.value = false
        })
    })
  }

  function $delete<T = never>(
    endpoint: FetchRequest,
    options?: FetchOptions
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service({ ...options, method: 'DELETE' })(endpoint)
        .then((response: T | any) => {
          resolve(response)
        })
        .catch((error) => reject(error.response))
        .finally(() => {
          loading.value = false
        })
    })
  }

  return {
    loading,
    baseURL,
    $get,
    $post,
    $put,
    $patch,
    $delete,
  }
}
