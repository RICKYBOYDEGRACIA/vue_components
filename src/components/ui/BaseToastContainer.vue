<script lang="ts">
import { ref } from 'vue'
import { useId } from '@/lib/utils'

export type ToastVariant = 'success' | 'error' | 'info' | 'warning'
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export interface Toast {
  id: string
  variant: ToastVariant
  title?: string
  message: string
  duration: number
}

export type ToastOptions = Omit<Toast, 'id' | 'duration'> & Partial<Pick<Toast, 'duration'>>

interface ToastTimerState {
  timerId: ReturnType<typeof setTimeout> | null
  remaining: number
  startedAt: number
  paused: boolean
}

const toasts = ref<Toast[]>([])
const timers = new Map<string, ToastTimerState>()

function startTimer(id: string) {
  const state = timers.get(id)
  if (!state || state.remaining <= 0) return
  if (state.timerId) clearTimeout(state.timerId)
  state.startedAt = Date.now()
  state.paused = false
  state.timerId = setTimeout(() => {
    dismiss(id)
  }, state.remaining)
}

function pauseTimer(id: string) {
  const state = timers.get(id)
  if (!state || state.paused || !state.timerId) return
  clearTimeout(state.timerId)
  state.timerId = null
  const elapsed = Date.now() - state.startedAt
  state.remaining = Math.max(0, state.remaining - elapsed)
  state.paused = true
}

function resumeTimer(id: string) {
  const state = timers.get(id)
  if (!state || !state.paused) return
  if (state.remaining <= 0) {
    dismiss(id)
    return
  }
  startTimer(id)
}

function dismiss(id: string) {
  const state = timers.get(id)
  if (state?.timerId) {
    clearTimeout(state.timerId)
  }
  timers.delete(id)
  const idx = toasts.value.findIndex((t) => t.id === id)
  if (idx >= 0) toasts.value.splice(idx, 1)
}

function clear() {
  for (const state of timers.values()) {
    if (state.timerId) clearTimeout(state.timerId)
  }
  timers.clear()
  toasts.value = []
}

export function useToast() {
  function add(options: ToastOptions): string {
    const id = useId('toast')
    const duration = options.duration ?? 5000
    const toast: Toast = { ...options, duration, id }
    toasts.value.push(toast)

    if (duration > 0) {
      timers.set(id, {
        timerId: null,
        remaining: duration,
        startedAt: Date.now(),
        paused: false,
      })
      startTimer(id)
    }

    return id
  }

  return {
    add,
    success: (message: string, title?: string, duration = 5000) =>
      add({ variant: 'success', message, title, duration }),
    error: (message: string, title?: string, duration = 5000) =>
      add({ variant: 'error', message, title, duration }),
    info: (message: string, title?: string, duration = 5000) =>
      add({ variant: 'info', message, title, duration }),
    warning: (message: string, title?: string, duration = 5000) =>
      add({ variant: 'warning', message, title, duration }),
    dismiss,
    clear,
  }
}
export interface BaseToastContainerProps {
  position?: ToastPosition
}
</script>

<script setup lang="ts">
import { useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

withDefaults(defineProps<BaseToastContainerProps>(), {
  position: 'top-right',
})

const $attrs = useAttrs()

const positionClasses: Record<ToastPosition, string> = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
}

const variantConfig: Record<ToastVariant, { container: string; icon: string }> = {
  success: {
    container: 'border-green-200 dark:border-green-800 bg-white dark:bg-slate-900',
    icon: 'text-green-500 dark:text-green-400',
  },
  error: {
    container: 'border-red-200 dark:border-red-800 bg-white dark:bg-slate-900',
    icon: 'text-red-500 dark:text-red-400',
  },
  info: {
    container: 'border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900',
    icon: 'text-blue-500 dark:text-blue-400',
  },
  warning: {
    container: 'border-amber-200 dark:border-amber-800 bg-white dark:bg-slate-900',
    icon: 'text-amber-500 dark:text-amber-400',
  },
}
</script>

<template>
  <Teleport to="body">
    <div
      v-bind="{ ...$attrs, class: undefined }"
      :class="cn(
        'fixed z-[100] flex flex-col gap-2 w-full max-w-sm pointer-events-none',
        positionClasses[position],
        $attrs.class as string,
      )"
      aria-live="polite"
      aria-label="Notifications"
    >
      <TransitionGroup
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 translate-y-2 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 scale-95"
        move-class="transition-all duration-300"
        tag="div"
        class="flex flex-col gap-2"
      >
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="cn(
            'pointer-events-auto flex gap-3 items-start rounded-xl border p-4 shadow-lg',
            variantConfig[toast.variant].container,
          )"
          role="status"
          :aria-label="toast.title || toast.message"
          @mouseenter="pauseTimer(toast.id)"
          @mouseleave="resumeTimer(toast.id)"
        >
          <div :class="cn('shrink-0 mt-0.5', variantConfig[toast.variant].icon)">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                v-if="toast.variant === 'success'"
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
              <path
                v-else-if="toast.variant === 'error'"
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              />
              <path
                v-else-if="toast.variant === 'info'"
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
              <path
                v-else
                fill-rule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <p v-if="toast.title" class="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {{ toast.title }}
            </p>
            <p class="text-sm text-slate-600 dark:text-slate-400">{{ toast.message }}</p>
          </div>
          <button
            type="button"
            class="shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Dismiss notification"
            @click="dismiss(toast.id)"
          >
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>
