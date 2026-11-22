<script setup lang="ts">
import { ref, computed, useAttrs, useSlots } from 'vue'
import { cn, useId } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseInputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'url' | 'tel' | 'date'
  size?: 'sm' | 'md' | 'lg'
  placeholder?: string
  label?: string
  hint?: string
  error?: string | boolean
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  clearable?: boolean
  showPasswordToggle?: boolean
  id?: string
}

const props = withDefaults(defineProps<BaseInputProps>(), {
  type: 'text',
  size: 'md',
  disabled: false,
  readonly: false,
  required: false,
  clearable: false,
  showPasswordToggle: false,
})

const model = defineModel<string | number | null>({ default: '' })
const $attrs = useAttrs()
const slots = useSlots()

const fallbackId = useId('base-input')
const inputId = computed(() => props.id ?? fallbackId)
const hintId = computed(() => `${inputId.value}-hint`)

const showPassword = ref(false)
const resolvedType = computed(() => {
  if (props.type === 'password' && showPassword.value) return 'text'
  return props.type
})

const hasValue = computed(() => model.value !== '' && model.value !== null && model.value !== undefined)
const showClear = computed(() => props.clearable && hasValue.value && !props.disabled && !props.readonly)
const hasSuffix = computed(() =>
  !!(slots.suffix || showClear.value || (props.type === 'password' && props.showPasswordToggle))
)
const hasPrefix = computed(() => !!slots.prefix)

const sizeClasses: Record<NonNullable<BaseInputProps['size']>, string> = {
  sm: 'h-8 text-xs px-2.5',
  md: 'h-10 text-sm px-3',
  lg: 'h-12 text-base px-4',
}

const inputClasses = computed(() =>
  cn(
    'w-full rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-offset-0',
    props.error
      ? 'border-red-400 dark:border-red-500 focus:ring-red-500/30 focus:border-red-500'
      : 'border-slate-300 dark:border-slate-700 focus:ring-blue-500/30 focus:border-blue-500',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50 dark:disabled:bg-slate-800',
    sizeClasses[props.size],
    hasSuffix.value ? 'pr-10' : '',
    hasPrefix.value ? 'pl-10' : '',
  )
)
</script>

<template>
  <div :class="cn('flex flex-col gap-1.5', $attrs.class as string)">
    <label
      v-if="label"
      :for="inputId"
      class="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1"
    >
      {{ label }}
      <span v-if="required" class="text-red-500" aria-hidden="true">*</span>
    </label>

    <div class="relative">
      <!-- Prefix slot -->
      <div v-if="slots.prefix" class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
        <slot name="prefix" />
      </div>

      <input
        v-bind="{ ...$attrs, class: undefined }"
        :id="inputId"
        :type="resolvedType"
        :class="inputClasses"
        :value="model"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :aria-invalid="!!error || undefined"
        :aria-describedby="hint || error ? hintId : undefined"
        @input="model = ($event.target as HTMLInputElement).value"
      />

      <!-- Suffix / clear / password toggle -->
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 gap-1">
        <button
          v-if="showClear"
          type="button"
          class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none"
          aria-label="Clear input"
          @click="model = ''"
        >
          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </button>
        <button
          v-else-if="type === 'password' && showPasswordToggle"
          type="button"
          class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none"
          :aria-label="showPassword ? 'Hide password' : 'Show password'"
          @click="showPassword = !showPassword"
        >
          <svg v-if="showPassword" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"/>
            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/>
          </svg>
          <svg v-else class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
          </svg>
        </button>
        <div v-else-if="slots.suffix" class="text-slate-400">
          <slot name="suffix" />
        </div>
      </div>
    </div>

    <!-- Hint / Error -->
    <p
      v-if="typeof error === 'string' && error"
      :id="hintId"
      class="text-xs text-red-500 dark:text-red-400"
      role="alert"
    >{{ error }}</p>
    <p
      v-else-if="hint"
      :id="hintId"
      class="text-xs text-slate-500 dark:text-slate-400"
    >{{ hint }}</p>
  </div>
</template>
