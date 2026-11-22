<script setup lang="ts">
import { ref, nextTick, useAttrs, useId } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface TabItem {
  key: string | number
  label: string
  disabled?: boolean
  badge?: string | number
}

export interface BaseTabsProps {
  tabs: TabItem[]
  variant?: 'underline' | 'pills' | 'segmented'
}

const props = withDefaults(defineProps<BaseTabsProps>(), {
  variant: 'underline',
})

const model = defineModel<string | number>()
const $attrs = useAttrs()

const uid = useId()
const tablistRef = ref<HTMLDivElement | null>(null)

function tabId(key: string | number) {
  return `${uid}-tab-${key}`
}

function panelId(key: string | number) {
  return `${uid}-panel-${key}`
}

async function selectAndFocus(key: string | number) {
  model.value = key
  await nextTick()
  const el = tablistRef.value?.querySelector<HTMLButtonElement>(`[id="${CSS.escape(tabId(key))}"]`)
  el?.focus()
}

function handleKeydown(e: KeyboardEvent, currentIndex: number) {
  const enabledTabs = props.tabs.filter((t) => !t.disabled)
  if (!enabledTabs.length) return
  const currentTab = props.tabs[currentIndex]
  if (!currentTab) return
  const idx = enabledTabs.findIndex((t) => t.key === currentTab.key)
  if (idx === -1) return

  if (e.key === 'ArrowRight') {
    e.preventDefault()
    const next = enabledTabs[(idx + 1) % enabledTabs.length]
    if (next) selectAndFocus(next.key)
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    const prev = enabledTabs[(idx - 1 + enabledTabs.length) % enabledTabs.length]
    if (prev) selectAndFocus(prev.key)
  } else if (e.key === 'Home') {
    e.preventDefault()
    const first = enabledTabs[0]
    if (first) selectAndFocus(first.key)
  } else if (e.key === 'End') {
    e.preventDefault()
    const last = enabledTabs[enabledTabs.length - 1]
    if (last) selectAndFocus(last.key)
  }
}
</script>

<template>
  <div v-bind="{ ...$attrs, class: undefined }" :class="cn('flex flex-col', $attrs.class as string)">
    <!-- Tab list -->
    <div
      ref="tablistRef"
      role="tablist"
      :class="cn(
        variant === 'underline' && 'flex border-b border-slate-200 dark:border-slate-800 gap-0',
        variant === 'pills' && 'flex gap-1',
        variant === 'segmented' && 'flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1 gap-1',
      )"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="tab.key"
        type="button"
        role="tab"
        :aria-selected="model === tab.key"
        :aria-controls="panelId(tab.key)"
        :id="tabId(tab.key)"
        :disabled="tab.disabled"
        :tabindex="model === tab.key ? 0 : -1"
        :class="cn(
          'flex items-center justify-center gap-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 dark:focus-visible:ring-offset-slate-900',
          tab.disabled && 'opacity-40 cursor-not-allowed',

          variant === 'underline' && 'px-4 py-2.5 border-b-2 -mb-px',
          variant === 'underline' && model === tab.key
            ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
            : variant === 'underline'
              ? 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600'
              : '',

          variant === 'pills' && 'px-3.5 py-1.5 rounded-lg',
          variant === 'pills' && model === tab.key
            ? 'bg-blue-600 text-white dark:bg-blue-500'
            : variant === 'pills'
              ? 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              : '',

          variant === 'segmented' && 'flex-1 px-3 py-1.5 rounded-md',
          variant === 'segmented' && model === tab.key
            ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-slate-100'
            : variant === 'segmented'
              ? 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              : '',
        )"
        @click="!tab.disabled && (model = tab.key)"
        @keydown="handleKeydown($event, index)"
      >
        {{ tab.label }}
        <span
          v-if="tab.badge !== undefined"
          :class="cn(
            'inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 text-xs rounded-full font-medium',
            model === tab.key
              ? variant === 'pills'
                ? 'bg-white/20 text-white'
                : 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
          )"
        >
          {{ tab.badge }}
        </span>
      </button>
    </div>

    <!-- Tab panels -->
    <div class="mt-4">
      <div
        v-for="tab in tabs"
        :key="tab.key"
        :id="panelId(tab.key)"
        role="tabpanel"
        :aria-labelledby="tabId(tab.key)"
        :hidden="model !== tab.key"
      >
        <slot :name="`panel-${tab.key}`" />
      </div>
      <slot />
    </div>
  </div>
</template>
