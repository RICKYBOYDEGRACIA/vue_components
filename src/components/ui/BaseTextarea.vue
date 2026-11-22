<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, useAttrs } from 'vue'
import { cn, useId } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseTextareaProps {
  rows?: number
  autoResize?: boolean
  maxLength?: number
  placeholder?: string
  label?: string
  hint?: string
  error?: string | boolean
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  id?: string
}

const props = withDefaults(defineProps<BaseTextareaProps>(), {
  rows: 3,
  autoResize: false,
  disabled: false,
  readonly: false,
  required: false,
})

const model = defineModel<string>({ default: '' })
const $attrs = useAttrs()

const fallbackId = useId('base-textarea')
const textareaId = computed(() => props.id ?? fallbackId)
const hintId = computed(() => `${textareaId.value}-hint`)

const textareaRef = ref<HTMLTextAreaElement | null>(null)

const charCount = computed(() => model.value?.length ?? 0)

function resize() {
  if (!props.autoResize || !textareaRef.value) return
  textareaRef.value.style.height = 'auto'
  textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`
}

onMounted(() => {
  if (props.autoResize) resize()
})

watch(model, () => {
  if (props.autoResize) nextTick(resize)
})

const textareaClasses = computed(() =>
  cn(
    'w-full rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm px-3 py-2.5 transition-colors resize-y',
    'focus:outline-none focus:ring-2 focus:ring-offset-0',
    props.error
      ? 'border-red-400 dark:border-red-500 focus:ring-red-500/30 focus:border-red-500'
      : 'border-slate-300 dark:border-slate-700 focus:ring-blue-500/30 focus:border-blue-500',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50 dark:disabled:bg-slate-800',
    props.autoResize && 'resize-none overflow-hidden',
    $attrs.class as string,
  )
)
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <div v-if="label || maxLength" class="flex items-center justify-between">
      <label v-if="label" :for="textareaId" class="text-sm font-medium text-slate-700 dark:text-slate-300">
        {{ label }}
        <span v-if="required" class="text-red-500 ml-1" aria-hidden="true">*</span>
      </label>
      <span v-if="maxLength" class="text-xs text-slate-400 ml-auto">
        {{ charCount }}/{{ maxLength }}
      </span>
    </div>

    <textarea
      ref="textareaRef"
      v-bind="{ ...$attrs, class: undefined }"
      :id="textareaId"
      :class="textareaClasses"
      :rows="rows"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :maxlength="maxLength"
      :aria-invalid="!!error || undefined"
      :aria-describedby="hint || error ? hintId : undefined"
      :value="model"
      @input="model = ($event.target as HTMLTextAreaElement).value"
    />

    <p v-if="typeof error === 'string' && error" :id="hintId" class="text-xs text-red-500 dark:text-red-400" role="alert">{{ error }}</p>
    <p v-else-if="hint" :id="hintId" class="text-xs text-slate-500 dark:text-slate-400">{{ hint }}</p>
  </div>
</template>
