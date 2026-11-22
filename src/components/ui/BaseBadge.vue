<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseBadgeProps {
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'outline'
  size?: 'sm' | 'md'
  dot?: boolean
  removable?: boolean
}

const props = withDefaults(defineProps<BaseBadgeProps>(), {
  variant: 'neutral',
  size: 'md',
  dot: false,
  removable: false,
})

const emit = defineEmits<{ remove: [] }>()

const $attrs = useAttrs()

const variantClasses: Record<NonNullable<BaseBadgeProps['variant']>, string> = {
  neutral: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  primary: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  success: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  danger: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  outline: 'border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400',
}

const dotColors: Record<NonNullable<BaseBadgeProps['variant']>, string> = {
  neutral: 'bg-slate-500',
  primary: 'bg-blue-500',
  success: 'bg-green-500',
  warning: 'bg-amber-500',
  danger: 'bg-red-500',
  outline: 'bg-slate-400',
}

const sizeClasses: Record<NonNullable<BaseBadgeProps['size']>, string> = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2.5 py-0.5 text-xs',
}

const classes = computed(() =>
  cn(
    'inline-flex items-center gap-1.5 rounded-full font-medium',
    variantClasses[props.variant],
    sizeClasses[props.size],
    $attrs.class as string,
  )
)
</script>

<template>
  <span v-bind="{ ...$attrs, class: undefined }" :class="classes">
    <span v-if="dot" :class="cn('w-1.5 h-1.5 rounded-full shrink-0', dotColors[variant])" aria-hidden="true" />
    <slot />
    <button
      v-if="removable"
      type="button"
      class="ml-0.5 -mr-1 h-3.5 w-3.5 rounded-full inline-flex items-center justify-center hover:opacity-70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current"
      aria-label="Remove"
      @click.stop="emit('remove')"
    >
      <svg class="h-2.5 w-2.5" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
        <path d="M6.414 5l2.293-2.293a1 1 0 00-1.414-1.414L5 3.586 2.707 1.293a1 1 0 00-1.414 1.414L3.586 5 1.293 7.293a1 1 0 001.414 1.414L5 6.414l2.293 2.293a1 1 0 001.414-1.414L6.414 5z"/>
      </svg>
    </button>
  </span>
</template>
