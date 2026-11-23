<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export type ThemeMode = 'light' | 'dark' | 'system'

export interface BaseThemeToggleProps {
  variant?: 'button' | 'icon' | 'switch' | 'segmented'
  size?: 'sm' | 'md' | 'lg'
  includeSystem?: boolean
  showLabel?: boolean
  syncDocument?: boolean
  storageKey?: string
  disabled?: boolean
  ariaLabel?: string
}

const props = withDefaults(defineProps<BaseThemeToggleProps>(), {
  variant: 'button',
  size: 'md',
  includeSystem: false,
  showLabel: true,
  syncDocument: true,
  storageKey: '',
  disabled: false,
})

const emit = defineEmits<{
  change: [payload: { mode: ThemeMode; resolved: 'light' | 'dark' }]
}>()

const mode = defineModel<ThemeMode>({ default: 'light' })
const $attrs = useAttrs()

const systemPrefersDark = ref(false)
let mediaQuery: MediaQueryList | null = null
let docObserver: MutationObserver | null = null
let applyingToDocument = false

const resolvedTheme = computed<'light' | 'dark'>(() => {
  if (mode.value === 'system') {
    return systemPrefersDark.value ? 'dark' : 'light'
  }
  return mode.value
})

const isDark = computed(() => resolvedTheme.value === 'dark')

const segmentedOptions = computed<Array<{ value: ThemeMode; label: string }>>(() =>
  props.includeSystem
    ? [
        { value: 'light', label: 'Light' },
        { value: 'system', label: 'System' },
        { value: 'dark', label: 'Dark' },
      ]
    : [
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' },
      ],
)

const modeLabels: Record<ThemeMode, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
}

const computedAriaLabel = computed(() => {
  if (props.ariaLabel) return props.ariaLabel
  if (props.includeSystem) {
    return `Theme: ${modeLabels[mode.value]}. Click to switch theme mode`
  }
  return isDark.value ? 'Switch to light mode' : 'Switch to dark mode'
})

function applyDocumentClass(dark: boolean) {
  if (!props.syncDocument || typeof document === 'undefined') return
  applyingToDocument = true
  document.documentElement.classList.toggle('dark', dark)
  applyingToDocument = false
}

function setMode(next: ThemeMode) {
  if (props.disabled) return
  mode.value = next
  if (props.storageKey && typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(props.storageKey, next)
    } catch {
      // Ignore storage write failures (e.g. private mode)
    }
  }
  const resolved: 'light' | 'dark' =
    next === 'system' ? (systemPrefersDark.value ? 'dark' : 'light') : next
  applyDocumentClass(resolved === 'dark')
  emit('change', { mode: next, resolved })
}

function cycleMode() {
  if (props.disabled) return
  if (props.includeSystem) {
    const order: ThemeMode[] = ['light', 'dark', 'system']
    const next = order[(order.indexOf(mode.value) + 1) % order.length] ?? 'light'
    setMode(next)
  } else {
    setMode(isDark.value ? 'light' : 'dark')
  }
}

function handleSegmentedKeydown(e: KeyboardEvent, currentIndex: number) {
  const opts = segmentedOptions.value
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault()
    const next = opts[(currentIndex + 1) % opts.length]
    if (next) setMode(next.value)
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault()
    const prev = opts[(currentIndex - 1 + opts.length) % opts.length]
    if (prev) setMode(prev.value)
  }
}

function handleMediaChange(e: MediaQueryListEvent) {
  systemPrefersDark.value = e.matches
  if (mode.value === 'system') {
    applyDocumentClass(e.matches)
    emit('change', { mode: 'system', resolved: e.matches ? 'dark' : 'light' })
  }
}

watch(resolvedTheme, (val) => {
  applyDocumentClass(val === 'dark')
})

watch(
  () => props.includeSystem,
  (allowed) => {
    if (!allowed && mode.value === 'system') {
      setMode(systemPrefersDark.value ? 'dark' : 'light')
    }
  },
)

const buttonSizeClasses: Record<NonNullable<BaseThemeToggleProps['size']>, string> = {
  sm: 'px-2.5 py-1 text-xs gap-1.5 rounded-md',
  md: 'px-3 py-1.5 text-sm gap-2 rounded-lg',
  lg: 'px-4 py-2 text-sm gap-2 rounded-lg',
}

const iconButtonSizeClasses: Record<NonNullable<BaseThemeToggleProps['size']>, string> = {
  sm: 'h-8 w-8 rounded-md',
  md: 'h-9 w-9 rounded-lg',
  lg: 'h-11 w-11 rounded-lg',
}

const iconSizeClasses: Record<NonNullable<BaseThemeToggleProps['size']>, string> = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
}

const switchTrackClasses: Record<NonNullable<BaseThemeToggleProps['size']>, string> = {
  sm: 'h-6 w-11',
  md: 'h-7 w-14',
  lg: 'h-8 w-16',
}

const switchThumbClasses: Record<NonNullable<BaseThemeToggleProps['size']>, { base: string; translated: string; icon: string }> = {
  sm: { base: 'h-5 w-5', translated: 'translate-x-5', icon: 'h-3 w-3' },
  md: { base: 'h-6 w-6', translated: 'translate-x-7', icon: 'h-3.5 w-3.5' },
  lg: { base: 'h-7 w-7', translated: 'translate-x-8', icon: 'h-4 w-4' },
}

const segmentedItemSizeClasses: Record<NonNullable<BaseThemeToggleProps['size']>, string> = {
  sm: 'px-2 py-1 text-xs gap-1',
  md: 'px-2.5 py-1.5 text-xs gap-1.5',
  lg: 'px-3.5 py-2 text-sm gap-2',
}

onMounted(() => {
  if (typeof window === 'undefined') return
  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  systemPrefersDark.value = mediaQuery.matches
  mediaQuery.addEventListener('change', handleMediaChange)

  if (props.storageKey) {
    try {
      const saved = window.localStorage.getItem(props.storageKey)
      if (saved === 'light' || saved === 'dark' || (saved === 'system' && props.includeSystem)) {
        mode.value = saved
      }
    } catch {
      // Ignore storage read failures
    }
  } else if (props.syncDocument) {
    const docIsDark = document.documentElement.classList.contains('dark')
    if (mode.value !== 'system' && docIsDark !== (mode.value === 'dark')) {
      mode.value = docIsDark ? 'dark' : 'light'
    }
  }

  applyDocumentClass(isDark.value)

  if (props.syncDocument && typeof MutationObserver !== 'undefined') {
    docObserver = new MutationObserver(() => {
      if (applyingToDocument) return
      const docIsDark = document.documentElement.classList.contains('dark')
      if (mode.value !== 'system' && docIsDark !== (mode.value === 'dark')) {
        mode.value = docIsDark ? 'dark' : 'light'
      }
    })
    docObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
  }
})

onUnmounted(() => {
  mediaQuery?.removeEventListener('change', handleMediaChange)
  docObserver?.disconnect()
})
</script>

<template>
  <!-- Segmented Variant -->
  <div
    v-if="variant === 'segmented'"
    v-bind="{ ...$attrs, class: undefined }"
    role="radiogroup"
    :aria-label="ariaLabel ?? 'Color theme'"
    :class="
      cn(
        'inline-flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 p-1 gap-1 border border-slate-200/70 dark:border-slate-700/70',
        disabled && 'opacity-50 pointer-events-none',
        $attrs.class as string,
      )
    "
  >
    <button
      v-for="(opt, idx) in segmentedOptions"
      :key="opt.value"
      type="button"
      role="radio"
      :aria-checked="mode === opt.value"
      :aria-label="opt.label"
      :disabled="disabled"
      :class="
        cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
          segmentedItemSizeClasses[size],
          mode === opt.value
            ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200',
        )
      "
      @click="setMode(opt.value)"
      @keydown="handleSegmentedKeydown($event, idx)"
    >
      <!-- Sun icon -->
      <svg
        v-if="opt.value === 'light'"
        :class="cn(iconSizeClasses[size], mode === 'light' ? 'text-amber-500' : '')"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path stroke-linecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>

      <!-- Moon icon -->
      <svg
        v-else-if="opt.value === 'dark'"
        :class="cn(iconSizeClasses[size], mode === 'dark' ? 'text-blue-400' : '')"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>

      <!-- System / Monitor icon -->
      <svg
        v-else
        :class="cn(iconSizeClasses[size], mode === 'system' ? 'text-blue-500 dark:text-blue-400' : '')"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path stroke-linecap="round" d="M8 21h8m-4-4v4" />
      </svg>

      <span v-if="showLabel">{{ opt.label }}</span>
    </button>
  </div>

  <!-- Switch Variant -->
  <button
    v-else-if="variant === 'switch'"
    v-bind="{ ...$attrs, class: undefined }"
    type="button"
    role="switch"
    :aria-checked="isDark"
    :aria-label="computedAriaLabel"
    :disabled="disabled"
    :class="
      cn(
        'relative inline-flex shrink-0 items-center rounded-full p-0.5 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900',
        switchTrackClasses[size],
        isDark
          ? 'bg-slate-700 border border-slate-600'
          : 'bg-amber-100 border border-amber-200',
        disabled && 'opacity-50 cursor-not-allowed',
        $attrs.class as string,
      )
    "
    @click="setMode(isDark ? 'light' : 'dark')"
  >
    <!-- Track background hint icons -->
    <span class="pointer-events-none absolute inset-0 flex items-center justify-between px-1.5" aria-hidden="true">
      <svg class="h-3 w-3 text-amber-500/70" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" />
        <path stroke-linecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
      <svg class="h-3 w-3 text-slate-400/80" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </span>

    <!-- Sliding thumb -->
    <span
      :class="
        cn(
          'relative z-10 inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-sm transition-transform duration-300',
          switchThumbClasses[size].base,
          isDark ? switchThumbClasses[size].translated : 'translate-x-0',
        )
      "
      aria-hidden="true"
    >
      <svg
        v-if="isDark"
        :class="cn(switchThumbClasses[size].icon, 'text-blue-400')"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
      <svg
        v-else
        :class="cn(switchThumbClasses[size].icon, 'text-amber-500')"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  </button>

  <!-- Button & Icon Variants -->
  <button
    v-else
    v-bind="{ ...$attrs, class: undefined }"
    type="button"
    :aria-label="computedAriaLabel"
    :aria-pressed="isDark"
    :title="computedAriaLabel"
    :disabled="disabled"
    :class="
      cn(
        'inline-flex items-center justify-center font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900',
        'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700',
        variant === 'icon' ? iconButtonSizeClasses[size] : buttonSizeClasses[size],
        disabled && 'opacity-50 cursor-not-allowed',
        $attrs.class as string,
      )
    "
    @click="cycleMode"
  >
    <!-- System icon -->
    <svg
      v-if="mode === 'system'"
      :class="cn(iconSizeClasses[size], 'text-blue-600 dark:text-blue-400 shrink-0')"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path stroke-linecap="round" d="M8 21h8m-4-4v4" />
    </svg>

    <!-- Sun icon (shown in dark mode to switch to light, or represents active light mode) -->
    <svg
      v-else-if="isDark"
      :class="cn(iconSizeClasses[size], 'text-amber-400 shrink-0')"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path stroke-linecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>

    <!-- Moon icon -->
    <svg
      v-else
      :class="cn(iconSizeClasses[size], 'text-slate-600 dark:text-slate-300 shrink-0')"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>

    <span v-if="variant === 'button' && showLabel">
      {{ mode === 'system' ? 'System' : isDark ? 'Light' : 'Dark' }}
    </span>
  </button>
</template>
