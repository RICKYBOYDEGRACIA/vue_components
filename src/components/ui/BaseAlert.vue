<script setup lang="ts">
import { ref, computed, useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseAlertProps {
  variant?: 'info' | 'success' | 'warning' | 'danger'
  title?: string
  dismissible?: boolean
}

const props = withDefaults(defineProps<BaseAlertProps>(), {
  variant: 'info',
  dismissible: false,
})

const emit = defineEmits<{ dismiss: [] }>()

const $attrs = useAttrs()
const dismissed = ref(false)

function handleDismiss() {
  dismissed.value = true
  emit('dismiss')
}

const config = computed(() => ({
  info: {
    container: 'bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:border-blue-800',
    icon: 'text-blue-500 dark:text-blue-400',
    title: 'text-blue-800 dark:text-blue-200',
    body: 'text-blue-700 dark:text-blue-300',
    role: 'status' as const,
    svg: `<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>`,
  },
  success: {
    container: 'bg-green-50 border-green-200 dark:bg-green-950/40 dark:border-green-800',
    icon: 'text-green-500 dark:text-green-400',
    title: 'text-green-800 dark:text-green-200',
    body: 'text-green-700 dark:text-green-300',
    role: 'status' as const,
    svg: `<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>`,
  },
  warning: {
    container: 'bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:border-amber-800',
    icon: 'text-amber-500 dark:text-amber-400',
    title: 'text-amber-800 dark:text-amber-200',
    body: 'text-amber-700 dark:text-amber-300',
    role: 'alert' as const,
    svg: `<path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>`,
  },
  danger: {
    container: 'bg-red-50 border-red-200 dark:bg-red-950/40 dark:border-red-800',
    icon: 'text-red-500 dark:text-red-400',
    title: 'text-red-800 dark:text-red-200',
    body: 'text-red-700 dark:text-red-300',
    role: 'alert' as const,
    svg: `<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>`,
  },
}[props.variant]))
</script>

<template>
  <div
    v-if="!dismissed"
    v-bind="{ ...$attrs, class: undefined }"
    :class="cn('flex gap-3 rounded-lg border p-4', config.container, $attrs.class as string)"
    :role="config.role"
  >
    <!-- Icon slot -->
    <div :class="cn('shrink-0 mt-0.5', config.icon)">
      <slot name="icon">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" v-html="config.svg" />
      </slot>
    </div>

    <!-- Content -->
    <div class="flex-1 min-w-0">
      <p v-if="title" :class="cn('text-sm font-semibold mb-1', config.title)">{{ title }}</p>
      <div :class="cn('text-sm', config.body)">
        <slot />
      </div>
      <div v-if="$slots.actions" class="mt-3">
        <slot name="actions" />
      </div>
    </div>

    <!-- Dismiss button -->
    <button
      v-if="dismissible"
      type="button"
      :class="cn('shrink-0 p-0.5 rounded-md hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1', config.icon)"
      aria-label="Dismiss"
      @click="handleDismiss"
    >
      <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
      </svg>
    </button>
  </div>
</template>
