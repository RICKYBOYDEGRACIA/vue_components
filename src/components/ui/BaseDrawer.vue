<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick, useAttrs, useId } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseDrawerProps {
  title?: string
  description?: string
  side?: 'left' | 'right' | 'top' | 'bottom'
  closeOnBackdrop?: boolean
  closeOnEsc?: boolean
  persistent?: boolean
}

const props = withDefaults(defineProps<BaseDrawerProps>(), {
  side: 'right',
  closeOnBackdrop: true,
  closeOnEsc: true,
  persistent: false,
})

const open = defineModel<boolean>('open', { default: false })
const $attrs = useAttrs()

const drawerRef = ref<HTMLDivElement | null>(null)
const triggerEl = ref<Element | null>(null)
const shaking = ref(false)
let shakeTimer: ReturnType<typeof setTimeout> | null = null
let lockedBody = false

const uid = useId()
const titleId = `drawer-title-${uid}`
const descId = `drawer-desc-${uid}`

const sideClasses: Record<
  NonNullable<BaseDrawerProps['side']>,
  { panel: string; enterFrom: string; leaveTo: string }
> = {
  right: {
    panel: 'inset-y-0 right-0 w-full max-w-md border-l',
    enterFrom: 'translate-x-full',
    leaveTo: 'translate-x-full',
  },
  left: {
    panel: 'inset-y-0 left-0 w-full max-w-md border-r',
    enterFrom: '-translate-x-full',
    leaveTo: '-translate-x-full',
  },
  top: {
    panel: 'inset-x-0 top-0 w-full max-h-[80vh] border-b',
    enterFrom: '-translate-y-full',
    leaveTo: '-translate-y-full',
  },
  bottom: {
    panel: 'inset-x-0 bottom-0 w-full max-h-[80vh] border-t',
    enterFrom: 'translate-y-full',
    leaveTo: 'translate-y-full',
  },
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
  if (!drawerRef.value || !open.value || e.key !== 'Tab') return
  const focusableEls = drawerRef.value.querySelectorAll<HTMLElement>(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
  )
  if (!focusableEls.length) return
  const first = focusableEls[0]
  const last = focusableEls[focusableEls.length - 1]
  if (e.shiftKey) {
    if (document.activeElement === first || !drawerRef.value.contains(document.activeElement)) {
      e.preventDefault()
      last?.focus()
    }
  } else {
    if (document.activeElement === last || !drawerRef.value.contains(document.activeElement)) {
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
    const firstFocusable = drawerRef.value?.querySelector<HTMLElement>(
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
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50"
        role="dialog"
        aria-modal="true"
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
          enter-active-class="transition ease-out duration-300"
          :enter-from-class="sideClasses[side].enterFrom"
          enter-to-class="translate-x-0 translate-y-0"
          leave-active-class="transition ease-in duration-200"
          leave-from-class="translate-x-0 translate-y-0"
          :leave-to-class="sideClasses[side].leaveTo"
        >
          <div
            v-if="open"
            ref="drawerRef"
            :class="cn(
              'absolute bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl flex flex-col overflow-hidden',
              sideClasses[side].panel,
              shaking && 'animate-shake',
              $attrs.class as string,
            )"
            v-bind="{ ...$attrs, class: undefined }"
          >
            <div
              class="flex items-start justify-between gap-4 px-5 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0"
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
                aria-label="Close drawer"
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

            <div class="flex-1 overflow-y-auto px-5 py-4">
              <slot />
            </div>

            <div
              v-if="$slots.footer"
              class="shrink-0 px-5 py-4 border-t border-slate-200 dark:border-slate-800"
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
