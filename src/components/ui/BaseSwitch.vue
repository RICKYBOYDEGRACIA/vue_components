<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn, useId } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseSwitchProps {
  label?: string
  description?: string
  size?: 'sm' | 'md'
  disabled?: boolean
  id?: string
}

const props = withDefaults(defineProps<BaseSwitchProps>(), {
  size: 'md',
  disabled: false,
})

const model = defineModel<boolean>({ default: false })
const $attrs = useAttrs()

const fallbackId = useId('base-switch')
const switchId = computed(() => props.id ?? fallbackId)

const trackSize: Record<NonNullable<BaseSwitchProps['size']>, string> = {
  sm: 'h-5 w-9',
  md: 'h-6 w-11',
}
const thumbSize: Record<NonNullable<BaseSwitchProps['size']>, string> = {
  sm: 'h-3.5 w-3.5',
  md: 'h-[18px] w-[18px]',
}
const thumbTranslate: Record<NonNullable<BaseSwitchProps['size']>, string> = {
  sm: 'translate-x-4',
  md: 'translate-x-5',
}
</script>

<template>
  <div v-bind="{ ...$attrs, class: undefined }" :class="cn('flex items-center gap-3', $attrs.class as string)">
    <button
      :id="switchId"
      type="button"
      role="switch"
      :aria-checked="model"
      :aria-labelledby="label ? `${switchId}-label` : undefined"
      :disabled="disabled"
      :class="cn(
        'relative inline-flex shrink-0 items-center rounded-full p-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900',
        trackSize[size],
        model ? 'bg-blue-600 dark:bg-blue-500' : 'bg-slate-200 dark:bg-slate-700',
        disabled && 'opacity-50 cursor-not-allowed',
      )"
      @click="!disabled && (model = !model)"
    >
      <span
        :class="cn(
          'rounded-full bg-white shadow-sm transition-transform duration-200',
          thumbSize[size],
          model ? thumbTranslate[size] : 'translate-x-0.5',
        )"
        aria-hidden="true"
      />
    </button>

    <div v-if="label || description" class="flex flex-col">
      <label :id="`${switchId}-label`" :for="switchId" :class="cn('text-sm font-medium text-slate-900 dark:text-slate-100 cursor-pointer', disabled && 'opacity-50')">
        {{ label }}
      </label>
      <p v-if="description" class="text-xs text-slate-500 dark:text-slate-400">{{ description }}</p>
    </div>
  </div>
</template>
