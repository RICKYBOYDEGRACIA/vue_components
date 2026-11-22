<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick, useAttrs, useId } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseModalProps {
  title?: string
  description?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closeOnBackdrop?: boolean
  closeOnEsc?: boolean
  persistent?: boolean
}

const props = withDefaults(defineProps<BaseModalProps>(), {
  size: 'md',
  closeOnBackdrop: true,
  closeOnEsc: true,
  persistent: false,
})

const open = defineModel<boolean>('open', { default: false })
const $attrs = useAttrs()

const modalRef = ref<HTMLDivElement | null>(null)
const triggerEl = ref<Element | null>(null)
const shaking = ref(false)
let shakeTimer: ReturnType<typeof setTimeout> | null = null
let lockedBody = false

const uid = useId()
const titleId = `modal-title-${uid}`
const descId = `modal-desc-${uid}`

const sizeClasses: Record<NonNullable<BaseModalProps['size']>, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-2xl',
  full: 'max-w-full mx-4',
}

function triggerShake() {
  if (shakeTimer) clearTimeout(shakeTimer)
  shaking.value = false
  nextTick(() => {
    shaking.value = true
    shakeTimer = setTimeout(() => {
      shaking.value = false
      shakeTimer = null
    }, 450)
  })
}

function attemptClose() {
  if (props.persistent) {
    triggerShake()
    return
  }
  open.value = false
}

function handleEsc(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value && props.closeOnEsc) {
    attemptClose()
  }
}

function trapFocus(e: KeyboardEvent) {
  if (!modalRef.value || !open.value || e.key !== 'Tab') return
  const focusableEls = modalRef.value.querySelectorAll<HTMLElement>(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
  )
  if (!focusableEls.length) return
  const first = focusableEls[0]
  const last = focusableEls[focusableEls.length - 1]
  if (e.shiftKey) {
    if (document.activeElement === first || !modalRef.value.contains(document.activeElement)) {
      e.preventDefault()
      last?.focus()
    }
  } else {
    if (document.activeElement === last || !modalRef.value.contains(document.activeElement)) {
      e.preventDefault()
      first?.focus()
    }
  }
}

watch(open, async (val) => {
  if (val) {
    triggerEl.value = document.activeElement
    document.body.style.overflow = 'hidden'
    lockedBody = true
    await nextTick()
    const firstFocusable = modalRef.value?.querySelector<HTMLElement>(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    firstFocusable?.focus()
  } else {
    if (lockedBody) {
      document.body.style.overflow = ''
      lockedBody = false
    }
    if (triggerEl.value instanceof HTMLElement) {
      triggerEl.value.focus()
    }
    triggerEl.value = null
  }
})

onMounted(() => {
  document.addEventListener('keydown', handleEsc)
  document.addEventListener('keydown', trapFocus)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEsc)
  document.removeEventListener('keydown', trapFocus)
  if (shakeTimer) clearTimeout(shakeTimer)
  if (lockedBody) {
    document.body.style.overflow = ''
    lockedBody = false
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        aria-modal="true"
        role="dialog"
        :aria-labelledby="title ? titleId : undefined"
        :aria-describedby="description ? descId : undefined"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
          @click="closeOnBackdrop && attemptClose()"
        />

        <!-- Panel -->
        <Transition
          appear
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="open"
            ref="modalRef"
            :class="cn(
              'relative z-10 w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh]',
              sizeClasses[size],
              shaking && 'animate-shake',
              $attrs.class as string,
            )"
            v-bind="{ ...$attrs, class: undefined }"
          >
            <!-- Header -->
            <div
              v-if="title || $slots.header"
              class="flex items-start justify-between gap-4 px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0"
            >
              <slot name="header">
                <div>
                  <h2 :id="titleId" class="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {{ title }}
                  </h2>
                  <p v-if="description" :id="descId" class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    {{ description }}
                  </p>
                </div>
              </slot>
              <button
                type="button"
                class="shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md p-0.5"
                aria-label="Close dialog"
                @click="attemptClose"
              >
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <!-- Body -->
            <div class="flex-1 overflow-y-auto px-6 py-5">
              <slot />
            </div>

            <!-- Footer -->
            <div
              v-if="$slots.footer"
              class="shrink-0 px-6 py-4 border-t border-slate-200 dark:border-slate-800"
            >
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  20%,
  60% {
    transform: translateX(-6px);
  }
  40%,
  80% {
    transform: translateX(6px);
  }
}

.animate-shake {
  animation: shake 0.4s ease-in-out;
}
</style>
