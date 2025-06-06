<template>
  <teleport to="body">
    <div
      :class="{ '!opacity-100 !visible': modelValue }"
      class="fixed top-0 left-0 w-full h-full bg-black/[64%] z-[99] flex items-center justify-center invisible opacity-0 transition-300 p-5 !m-0"
    >
      <Transition name="modal">
        <div
          v-if="modelValue"
          id="ModalBg"
          ref="wrapper"
          class="fixed top-0 left-0 w-full h-full z-[51] flex items-center justify-center transition-300 p-5"
          @click="handleOuterClick"
        >
          <div
            id="Modal"
            :class="[bodyClass, { animated: animationIn }]"
            class="relative bg-white rounded-xl w-full max-w-[484px] transition-300"
          >
            <slot v-if="!noHeader" name="header">
              <div
                :class="headerClass"
                class="px-5 py-2 md:py-4 flex justify-between items-center border-b border-gray-300"
              >
                <div class="flex-y-center">
                  <h3
                    class="text-dark text-lg md:text-xl font-extrabold leading-7"
                  >
                    {{ title }}
                  </h3>
                </div>
                <button
                  :class="buttonClass"
                  class="text-xl text-dark transition-300 hover:text-red"
                  @click="close"
                >
                  <IconClose />
                </button>
              </div>
            </slot>
            <div
              :class="wrapperClass"
              class="p-5 max-md:max-h-[85vh] max-md:overflow-y-scroll"
            >
              <slot></slot>
            </div>
            <button
              v-if="hasClose"
              class="absolute -top-[18px] right-5"
              @click="close"
            >
              <i-close
                class="text-2xl leading-6 text-white hover:text-red transition-300"
              />
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </teleport>
</template>
<script lang="ts" setup>
import { useEventListener } from '@vueuse/core'
import { onMounted, ref, watch } from 'vue'

interface Props {
  title?: string
  modelValue?: boolean
  disableOuterClose?: boolean
  bodyClass?: string
  headerClass?: string
  buttonClass?: string
  wrapperClass?: string
  noHeader?: boolean
  hasClose?: boolean
  hasBack?: boolean
}

const animationIn = ref(false)
const wrapper = ref()
const props = withDefaults(defineProps<Props>(), {
  title: 'Modal',
  disableOuterClose: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'back'): void
}>()

function handleOuterClick(e: Event) {
  const target = e.target as HTMLElement
  if (target === wrapper.value) {
    if (!props.disableOuterClose) {
      emit('update:modelValue', false)
    } else {
      animationIn.value = true
      setTimeout(() => {
        animationIn.value = false
      }, 500)
    }
  }
}

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '3px'
    } else {
      document.body.style.overflow = 'auto'
      document.body.style.paddingRight = '0'
    }
  }
)

onMounted(() => {
  useEventListener(document, 'keydown', (e) => {
    if (e.key === 'Escape' && !props.disableOuterClose) {
      close()
    }
  })
})

function close() {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.modal-enter-active {
  animation: modal 200ms ease-out forwards;
}

.modal-leave-active {
  animation: modal 200ms ease-in reverse forwards;
}

@keyframes modal {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.animated {
  animation: animatedIn 0.4s ease-in-out;
}

@keyframes animatedIn {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
  70% {
    transform: scale(0.95);
  }
}
</style>
2
