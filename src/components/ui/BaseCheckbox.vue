<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn, useId } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseCheckboxProps {
  value?: string | number | boolean
  indeterminate?: boolean
  label?: string
  description?: string
  error?: string | boolean
  disabled?: boolean
  id?: string
}

const props = withDefaults(defineProps<BaseCheckboxProps>(), {
  indeterminate: false,
  disabled: false,
})

const model = defineModel<boolean | Array<string | number | boolean>>()
const $attrs = useAttrs()

const fallbackId = useId('base-checkbox')
const checkId = computed(() => props.id ?? fallbackId)

const isChecked = computed(() => {
  if (Array.isArray(model.value)) {
    return model.value.includes(props.value as string | number | boolean)
  }
  return !!model.value
})

function toggle() {
  if (props.disabled) return
  if (Array.isArray(model.value)) {
    const val = props.value as string | number | boolean
    if (model.value.includes(val)) {
      model.value = model.value.filter((v) => v !== val)
    } else {
      model.value = [...model.value, val]
    }
  } else {
    model.value = !model.value
  }
}
</script>

<template>
  <div v-bind="{ ...$attrs, class: undefined }" :class="cn('flex items-start gap-3', $attrs.class as string)">
    <div class="relative flex items-center justify-center mt-0.5">
      <input
        type="checkbox"
        :id="checkId"
        :checked="isChecked"
        :indeterminate="indeterminate"
        :disabled="disabled"
        :aria-invalid="!!error || undefined"
        class="sr-only peer"
        @change="toggle"
      />
      <label
        :for="checkId"
        :class="cn(
          'flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 cursor-pointer transition-colors',
          'peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-offset-2 dark:peer-focus-visible:ring-offset-slate-900',
          isChecked || indeterminate
            ? 'bg-blue-600 border-blue-600 dark:bg-blue-500 dark:border-blue-500 text-white'
            : error
              ? 'bg-white dark:bg-slate-900 border-red-400 dark:border-red-500 hover:border-red-500'
              : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 hover:border-blue-500',
          disabled && 'opacity-50 cursor-not-allowed',
        )"
        aria-hidden="true"
      >
        <!-- Checkmark -->
        <svg v-if="isChecked && !indeterminate" class="h-2.5 w-2.5" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <!-- Indeterminate dash -->
        <svg v-else-if="indeterminate" class="h-2.5 w-2.5" viewBox="0 0 10 2" fill="none">
          <path d="M1 1H9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </label>
    </div>

    <div v-if="label || description || (typeof error === 'string' && error)" class="flex flex-col gap-0.5">
      <label v-if="label" :for="checkId" :class="cn('text-sm font-medium text-slate-900 dark:text-slate-100 cursor-pointer', disabled && 'opacity-50 cursor-not-allowed')">
        {{ label }}
      </label>
      <p v-if="description" class="text-xs text-slate-500 dark:text-slate-400">{{ description }}</p>
      <p v-if="typeof error === 'string' && error" class="text-xs text-red-500 dark:text-red-400" role="alert">{{ error }}</p>
    </div>
  </div>
</template>
