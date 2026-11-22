<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseCardProps {
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
  bordered?: boolean
}

const props = withDefaults(defineProps<BaseCardProps>(), {
  padding: 'md',
  hoverable: false,
  bordered: true,
})

const $attrs = useAttrs()

const paddingMap: Record<NonNullable<BaseCardProps['padding']>, string> = {
  none: '',
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-8',
}

const classes = computed(() =>
  cn(
    'bg-white dark:bg-slate-900 rounded-xl',
    props.bordered && 'border border-slate-200 dark:border-slate-800',
    props.hoverable && 'transition-shadow hover:shadow-md cursor-pointer',
    $attrs.class as string,
  )
)
</script>

<template>
  <div v-bind="{ ...$attrs, class: undefined }" :class="classes">
    <div v-if="$slots.media" class="overflow-hidden rounded-t-xl -mx-0 -mt-0">
      <slot name="media" />
    </div>
    <div v-if="$slots.header" :class="cn('border-b border-slate-200 dark:border-slate-800', paddingMap[padding])">
      <slot name="header" />
    </div>
    <div :class="paddingMap[padding]">
      <slot />
    </div>
    <div v-if="$slots.footer" :class="cn('border-t border-slate-200 dark:border-slate-800', paddingMap[padding])">
      <slot name="footer" />
    </div>
  </div>
</template>
