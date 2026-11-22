<script setup lang="ts">
import { useAttrs } from 'vue'
import { cn, useId } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface RadioOption {
  label: string
  value: string | number | boolean
  description?: string
  disabled?: boolean
}

export interface BaseRadioGroupProps {
  options: RadioOption[]
  orientation?: 'vertical' | 'horizontal'
  variant?: 'default' | 'cards'
  name?: string
  label?: string
  error?: string | boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<BaseRadioGroupProps>(), {
  orientation: 'vertical',
  variant: 'default',
  disabled: false,
})

const model = defineModel<string | number | boolean>()
const $attrs = useAttrs()

const groupId = useId('base-radio')
</script>

<template>
  <div v-bind="{ ...$attrs, class: undefined }" :class="cn('flex flex-col gap-2', $attrs.class as string)">
    <p v-if="label" class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ label }}</p>

    <div
      :class="cn(
        'flex gap-2',
        orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
      )"
      role="radiogroup"
      :aria-label="label"
    >
      <label
        v-for="option in options"
        :key="String(option.value)"
        :class="cn(
          'flex items-start gap-3 cursor-pointer',
          variant === 'cards' && 'flex-row items-start rounded-lg border p-3 transition-colors',
          variant === 'cards' && model === option.value
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-500'
            : variant === 'cards'
              ? 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
              : '',
          (disabled || option.disabled) && 'opacity-50 cursor-not-allowed',
        )"
      >
        <div class="relative flex items-center justify-center mt-0.5 shrink-0">
          <input
            type="radio"
            :name="name ?? groupId"
            :value="option.value"
            :checked="model === option.value"
            :disabled="disabled || option.disabled"
            class="sr-only peer"
            @change="model = option.value"
          />
          <div
            :class="cn(
              'h-4 w-4 rounded-full border-2 flex items-center justify-center transition-colors',
              'peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-offset-2 dark:peer-focus-visible:ring-offset-slate-900',
              model === option.value
                ? 'border-blue-600 dark:border-blue-500'
                : 'border-slate-300 dark:border-slate-600',
            )"
            aria-hidden="true"
          >
            <div
              v-if="model === option.value"
              class="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500"
            />
          </div>
        </div>

        <div class="flex flex-col gap-0.5">
          <span class="text-sm font-medium text-slate-900 dark:text-slate-100">{{ option.label }}</span>
          <span v-if="option.description" class="text-xs text-slate-500 dark:text-slate-400">{{ option.description }}</span>
        </div>
      </label>
    </div>

    <p v-if="typeof error === 'string' && error" class="text-xs text-red-500 dark:text-red-400" role="alert">{{ error }}</p>
  </div>
</template>
