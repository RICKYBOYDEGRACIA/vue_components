<script setup lang="ts">
import { useAttrs, useId } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface AccordionItem {
  key: string | number
  title: string
  content?: string
  disabled?: boolean
}

export interface BaseAccordionProps {
  items: AccordionItem[]
  multiple?: boolean
}

const props = withDefaults(defineProps<BaseAccordionProps>(), {
  multiple: false,
})

const model = defineModel<Array<string | number> | string | number>({
  default: () => [],
})

const $attrs = useAttrs()
const uid = useId()

function triggerId(key: string | number) {
  return `${uid}-accordion-trigger-${key}`
}

function panelId(key: string | number) {
  return `${uid}-accordion-panel-${key}`
}

function isOpen(key: string | number): boolean {
  if (Array.isArray(model.value)) return model.value.includes(key)
  return model.value === key
}

function toggle(key: string | number) {
  if (props.multiple) {
    const current = Array.isArray(model.value)
      ? model.value
      : model.value !== undefined && model.value !== ''
        ? [model.value]
        : []
    if (current.includes(key)) {
      model.value = current.filter((k) => k !== key)
    } else {
      model.value = [...current, key]
    }
  } else {
    const open = isOpen(key)
    if (Array.isArray(model.value)) {
      model.value = open ? [] : [key]
    } else {
      model.value = open ? [] : key
    }
  }
}
</script>

<template>
  <div
    v-bind="{ ...$attrs, class: undefined }"
    :class="cn(
      'divide-y divide-slate-200 dark:divide-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden',
      $attrs.class as string,
    )"
  >
    <div v-for="item in items" :key="item.key">
      <!-- Trigger -->
      <button
        type="button"
        :aria-expanded="isOpen(item.key)"
        :aria-controls="panelId(item.key)"
        :id="triggerId(item.key)"
        :disabled="item.disabled"
        :class="cn(
          'flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500',
          item.disabled && 'opacity-50 cursor-not-allowed',
        )"
        @click="!item.disabled && toggle(item.key)"
      >
        <slot :name="`title-${item.key}`" :item="item">
          <span>{{ item.title }}</span>
        </slot>
        <svg
          :class="cn(
            'h-5 w-5 shrink-0 text-slate-400 dark:text-slate-500 transition-transform duration-200',
            isOpen(item.key) && 'rotate-180',
          )"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Panel with CSS grid transition -->
      <div
        :id="panelId(item.key)"
        :aria-labelledby="triggerId(item.key)"
        role="region"
        :class="cn(
          'grid transition-[grid-template-rows] duration-200 ease-in-out bg-white dark:bg-slate-900',
          isOpen(item.key) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )"
      >
        <div class="overflow-hidden">
          <div class="px-5 pb-4 pt-0 text-sm text-slate-600 dark:text-slate-400">
            <slot :name="`content-${item.key}`" :item="item">
              <p>{{ item.content }}</p>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
