<template>
  <div
    class="h-full w-full"
    @dragover.prevent="handleDragOver"
    @drop.prevent="handleDrop"
    @dragenter.prevent="handleDragEnter"
    @dragleave.prevent="handleDragLeave"
  >
    <input
      id="file"
      accept=".pdf, .doc, .docx, .rtf, .xls, .xlsx, .ppt, .pptx, .txt, .csv, .zip, .rar, .webp, .png, .jpg, .jpeg"
      class="w-0 h-0 absolute"
      name="file"
      type="file"
      @change="handleFile"
    />
    <Transition mode="out-in" name="fade">
      <div
        v-if="!files.length"
        :class="[
          {
            '!border-red': error,
          },
        ]"
        class="w-full h-12 flex items-center justify-center flex-col rounded-lg transition-300 cursor-pointer hover:border-primary bg-[#303543] hover:bg-white/30"
        @click="getFile('create')"
      >
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.17 13.98V8.61H0.8V5.775H6.17V0.419999H9.005V5.775H14.345V8.61H9.005V13.98H6.17Z"
            fill="white"
          />
        </svg>
      </div>

      <div v-else class="flex flex-col gap-3">
        <div
          v-for="(item, index) in files"
          :key="index"
          class="w-full h-12 flex items-center justify-between gap-2 rounded-lg transition-300 bg-[#303543] px-4"
        >
          <div class="flex-y-center gap-2">
            <div>
              <p class="text-xs leading-130 text-dark font-medium">
                {{ item?.name }}
              </p>
              <p class="text-xs leading-130 font-normal text-gray">
                {{ convertBytes(item?.size) }}
              </p>
            </div>
          </div>
          <i-close
            class="icon-close text-xl text-white hover:text-red transition-300 cursor-pointer"
            @click="removeImage(index)"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, onMounted, reactive, ref } from 'vue'

import { convertBytes } from '~/utils'

const emit = defineEmits(['change'])

interface Props {
  error?: boolean
  defaultImages?: string[]
  icon?: string
}

type image = {
  id: string
  url: string
  name: string
  file: File
  size: number
  type: string
}
const props = defineProps<Props>()
const files = reactive<image[]>([])
const uploadType = ref('')
const currentTarget = ref(null)
const loading = ref(false)

onMounted(() => {
  if (props.defaultImages) {
    props.defaultImages?.forEach((item: any) => {
      files.push({
        id: item?.id,
        url: item,
        name: item?.name,
        file: item,
        type: 'image',
        size: item?.size,
      })
    })
  }
})

const handleFile = async (event: Event) => {
  loading.value = true
  const target = event?.target as HTMLInputElement | null
  if (target?.files === null) {
    return
  }
  if (target?.files?.length) {
    for (const key in target?.files) {
      handleUploader(key, target)
    }
  }
  send()
}
const handleUploader = (el: string | number, target) => {
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.readAsDataURL(target?.files[el])
    reader.onerror = (error) => reject(error)
  })
    .then((res) => {
      const formData = new FormData()
      formData.append('file', target?.files[el])
      formData.append('file_type', 'doc')

      // Do not touch this, or else You will find yourself DEAD!!!
      if (uploadType.value === 'create') {
        emit('change', target?.files[el])
        files.push({
          url: res,
          name: target?.files[el]?.name,
          file: target?.files[el],
          type: 'image',
          size: target?.files[el]?.size,
        })
      }
    })
    .catch(() => {
      // Todo: Toast show
    })
    .finally(() => (loading.value = false))
}
const getFile = (type: string) => {
  uploadType.value = type
  const input = document.getElementById('file')
  input?.click()
}
const removeImage = (index: number) => {
  files.splice(index, 1)
  send()
}

function send() {
  emit('change', files)
}

const dragging = ref(false)

const handleDragOver = (event: Event) => {
  event.preventDefault()
}

const handleDragEnter = (e) => {
  dragging.value = true
  currentTarget.value = e?.target
}

const handleDragLeave = (e) => {
  if (e?.target === currentTarget.value) {
    currentTarget.value = null
    dragging.value = false
  }
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  dragging.value = false
  uploadType.value = 'create'
  const filesDragged = event.dataTransfer?.items
  if (event.dataTransfer?.items) {
    // Handle multiple items being dropped
    for (let i = 0; i < event.dataTransfer.items.length; i++) {
      if (event.dataTransfer.items[i].kind === 'file') {
        const file = event.dataTransfer.items[i]?.getAsFile()

        files.push({
          url: '',
          name: file?.name,
          file,
          size: file?.size,
          type: 'image',
        })
        // Handle the local file object normally
        // store
        //   .createMedia(event.dataTransfer.items[i]?.getAsFile())
        //   .then((data) => {
        //     images.value.push({
        //       url: data?.image,
        //       name: file?.name,
        //       file: file,
        //       type: "image",
        //       id: data?.id,
        //     });
        //   });
      } else if (event.dataTransfer.items[i].kind === 'string') {
        const url = event.dataTransfer.items[i].getData('text/plain')
        // Handle the URL instead of the file object
      }
    }
  }
}
</script>
