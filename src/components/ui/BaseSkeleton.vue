<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseSkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string
  height?: string
  animated?: boolean
}

const props = withDefaults(defineProps<BaseSkeletonProps>(), {
  variant: 'text',
  animated: true,
})

const $attrs = useAttrs()

const classes = computed(() =>
  cn(
    'bg-slate-200 dark:bg-slate-700',
    props.animated && 'animate-pulse',
    props.variant === 'text' && 'rounded h-4',
    props.variant === 'circular' && 'rounded-full',
    props.variant === 'rectangular' && 'rounded-lg',
    $attrs.class as string,
  )
)
</script>

<template>
  <div
    v-bind="{ ...$attrs, class: undefined }"
    :class="classes"
    :style="{ width: width, height: height }"
    aria-hidden="true"
  />
</template>
