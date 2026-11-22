<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted, useAttrs } from 'vue'
import { cn, useId } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseSelectProps {
  options: Record<string, any>[]
  labelKey?: string
  valueKey?: string
  multiple?: boolean
  searchable?: boolean
  clearable?: boolean
  placeholder?: string
  label?: string
  hint?: string
  error?: string | boolean
  disabled?: boolean
  id?: string
}

const props = withDefaults(defineProps<BaseSelectProps>(), {
  labelKey: 'label',
  valueKey: 'value',
  multiple: false,
  searchable: false,
  clearable: false,
  disabled: false,
  placeholder: 'Select an option...',
})

const model = defineModel<string | number | Array<string | number> | null>({ default: null })
const $attrs = useAttrs()

const fallbackId = useId('base-select')
const selectId = computed(() => props.id ?? fallbackId)
const listboxId = computed(() => `${selectId.value}-listbox`)
const hintId = computed(() => `${selectId.value}-hint`)

const isOpen = ref(false)
const searchQuery = ref('')
const activeIndex = ref(-1)
const triggerRef = ref<HTMLElement | null>(null)
const searchRef = ref<HTMLInputElement | null>(null)
const listboxRef = ref<HTMLUListElement | null>(null)

const filteredOptions = computed(() => {
  if (!props.searchable || !searchQuery.value) return props.options
  const q = searchQuery.value.toLowerCase()
  return props.options.filter((opt) =>
    String(opt[props.labelKey]).toLowerCase().includes(q)
  )
})

watch(searchQuery, () => {
  if (isOpen.value) {
    activeIndex.value = filteredOptions.value.length > 0 ? 0 : -1
  }
})

const selectedLabels = computed(() => {
  if (model.value === null || model.value === undefined) return []
  if (Array.isArray(model.value)) {
    return model.value.map((val) => {
      const opt = props.options.find((o) => o[props.valueKey] === val)
      return opt ? String(opt[props.labelKey]) : String(val)
    })
  }
  const opt = props.options.find((o) => o[props.valueKey] === model.value)
  return opt ? [String(opt[props.labelKey])] : []
})

const displayText = computed(() => {
  if (selectedLabels.value.length === 0) return ''
  if (!props.multiple) return selectedLabels.value[0]
  return ''
})

function isSelected(option: Record<string, any>) {
  const val = option[props.valueKey]
  if (Array.isArray(model.value)) return model.value.includes(val)
  return model.value === val
}

function open() {
  if (props.disabled) return
  isOpen.value = true
  activeIndex.value = -1
  nextTick(() => {
    if (props.searchable) searchRef.value?.focus()
  })
}

function close(restoreFocus = true) {
  isOpen.value = false
  searchQuery.value = ''
  if (restoreFocus) {
    triggerRef.value?.focus()
  }
}

function selectOption(option: Record<string, any>) {
  const val = option[props.valueKey] as string | number
  if (props.multiple) {
    const current = (Array.isArray(model.value) ? model.value : []) as Array<string | number>
    if (current.includes(val)) {
      model.value = current.filter((v) => v !== val)
    } else {
      model.value = [...current, val]
    }
  } else {
    model.value = val
    close()
  }
}

function removeTag(val: string | number) {
  if (Array.isArray(model.value)) {
    model.value = model.value.filter((v) => v !== val)
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (!isOpen.value) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault()
      open()
    }
    return
  }
  switch (e.key) {
    case 'Escape':
      close()
      break
    case 'ArrowDown':
      e.preventDefault()
      activeIndex.value = Math.min(activeIndex.value + 1, filteredOptions.value.length - 1)
      break
    case 'ArrowUp':
      e.preventDefault()
      activeIndex.value = Math.max(activeIndex.value - 1, 0)
      break
    case 'Home':
      e.preventDefault()
      activeIndex.value = 0
      break
    case 'End':
      e.preventDefault()
      activeIndex.value = filteredOptions.value.length - 1
      break
    case 'Enter':
      e.preventDefault()
      if (activeIndex.value >= 0 && filteredOptions.value[activeIndex.value]) {
        selectOption(filteredOptions.value[activeIndex.value])
      }
      break
  }
}

function handleClickOutside(e: MouseEvent) {
  if (!isOpen.value) return
  const el = triggerRef.value?.closest('[data-select-root]') as HTMLElement | null
  if (el && !el.contains(e.target as Node)) {
    close(false)
  }
}

onMounted(() => document.addEventListener('mousedown', handleClickOutside))
onUnmounted(() => document.removeEventListener('mousedown', handleClickOutside))
</script>

<template>
  <div
    data-select-root
    v-bind="{ ...$attrs, class: undefined }"
    :class="cn('flex flex-col gap-1.5', $attrs.class as string)"
  >
    <label
      v-if="label"
      :id="`${selectId}-label`"
      class="text-sm font-medium text-slate-700 dark:text-slate-300"
      @click="!disabled && triggerRef?.focus()"
    >
      {{ label }}
    </label>

    <div class="relative">
      <!-- Trigger combobox -->
      <div
        ref="triggerRef"
        :id="selectId"
        role="combobox"
        :tabindex="disabled ? -1 : 0"
        :aria-expanded="isOpen"
        aria-haspopup="listbox"
        :aria-controls="listboxId"
        :aria-labelledby="label ? `${selectId}-label` : undefined"
        :aria-activedescendant="isOpen && activeIndex >= 0 ? `${listboxId}-${activeIndex}` : undefined"
        :aria-invalid="!!error || undefined"
        :aria-disabled="disabled || undefined"
        :aria-describedby="hint || error ? hintId : undefined"
        :class="cn(
          'w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg border bg-white dark:bg-slate-900 transition-colors text-left cursor-pointer select-none',
          error
            ? 'border-red-400 dark:border-red-500 focus:ring-red-500/30 focus:border-red-500'
            : 'border-slate-300 dark:border-slate-700 focus:ring-blue-500/30 focus:border-blue-500',
          'focus:outline-none focus:ring-2',
          disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        )"
        @click="isOpen ? close() : open()"
        @keydown="handleKeydown"
      >
        <!-- Multiple tags or single display -->
        <div class="flex-1 flex flex-wrap gap-1 min-h-[1.5rem] items-center">
          <template v-if="multiple && Array.isArray(model) && model.length">
            <span
              v-for="(val, i) in model"
              :key="i"
              class="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200"
            >
              {{ selectedLabels[i] }}
              <button
                v-if="!disabled"
                type="button"
                class="hover:opacity-70"
                aria-label="Remove"
                @click.stop="removeTag(val as string | number)"
              >
                <svg class="h-3 w-3" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                  <path d="M6.414 5l2.293-2.293a1 1 0 00-1.414-1.414L5 3.586 2.707 1.293a1 1 0 00-1.414 1.414L3.586 5 1.293 7.293a1 1 0 001.414 1.414L5 6.414l2.293 2.293a1 1 0 001.414-1.414L6.414 5z"/>
                </svg>
              </button>
            </span>
          </template>
          <span v-else-if="displayText" class="text-slate-900 dark:text-slate-100">{{ displayText }}</span>
          <span v-else class="text-slate-400">{{ placeholder }}</span>
        </div>

        <!-- Clear -->
        <button
          v-if="clearable && !disabled && model !== null && model !== undefined && (!Array.isArray(model) || model.length)"
          type="button"
          class="shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          aria-label="Clear"
          @click.stop="model = multiple ? [] : null"
        >
          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </button>

        <!-- Chevron -->
        <svg :class="cn('shrink-0 h-4 w-4 text-slate-400 transition-transform', isOpen && 'rotate-180')" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
      </div>

      <!-- Dropdown -->
      <Transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="isOpen"
          class="absolute z-50 w-full mt-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden"
        >
          <!-- Search -->
          <div v-if="searchable" class="p-2 border-b border-slate-200 dark:border-slate-700">
            <input
              ref="searchRef"
              v-model="searchQuery"
              type="text"
              placeholder="Search..."
              class="w-full text-sm px-2.5 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              @keydown="handleKeydown"
            />
          </div>

          <ul
            ref="listboxRef"
            :id="listboxId"
            role="listbox"
            :aria-multiselectable="multiple"
            class="max-h-60 overflow-y-auto py-1"
          >
            <template v-if="filteredOptions.length">
              <li
                v-for="(option, index) in filteredOptions"
                :key="String(option[valueKey])"
                :id="`${listboxId}-${index}`"
                role="option"
                :aria-selected="isSelected(option)"
                :class="cn(
                  'flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors',
                  index === activeIndex ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800',
                  isSelected(option) && 'font-medium',
                )"
                @mouseenter="activeIndex = index"
                @mousedown.prevent="selectOption(option)"
              >
                <slot name="option" :option="option" :selected="isSelected(option)" :active="index === activeIndex">
                  <svg v-if="isSelected(option)" class="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span v-else class="h-4 w-4 shrink-0" aria-hidden="true" />
                  {{ option[labelKey] }}
                </slot>
              </li>
            </template>
            <li v-else class="px-3 py-4 text-sm text-center text-slate-400 dark:text-slate-500">
              <slot name="empty">No options found</slot>
            </li>
          </ul>
        </div>
      </Transition>
    </div>

    <p v-if="typeof error === 'string' && error" :id="hintId" class="text-xs text-red-500 dark:text-red-400" role="alert">{{ error }}</p>
    <p v-else-if="hint" :id="hintId" class="text-xs text-slate-500 dark:text-slate-400">{{ hint }}</p>
  </div>
</template>
