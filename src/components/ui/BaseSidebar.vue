<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, useAttrs } from 'vue'
import type { Component } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface SidebarItem {
  key: string
  label: string
  href?: string
  badge?: string | number
  disabled?: boolean
  icon?: Component
}

export interface SidebarGroup {
  label?: string
  items: SidebarItem[]
}

export interface BaseSidebarProps {
  groups?: SidebarGroup[]
  side?: 'left' | 'right'
  collapsible?: 'icon' | 'offcanvas' | 'none'
  breakpoint?: 'md' | 'lg'
  mode?: 'auto' | 'desktop' | 'mobile'
  contained?: boolean
  closeOnSelect?: boolean
  showCollapseButton?: boolean
  ariaLabel?: string
}

const props = withDefaults(defineProps<BaseSidebarProps>(), {
  groups: () => [],
  side: 'left',
  collapsible: 'icon',
  breakpoint: 'lg',
  mode: 'auto',
  contained: false,
  closeOnSelect: true,
  showCollapseButton: true,
  ariaLabel: 'Sidebar navigation',
})

const emit = defineEmits<{
  select: [item: SidebarItem]
}>()

const activeKey = defineModel<string>({ default: '' })
const collapsed = defineModel<boolean>('collapsed', { default: false })
const mobileOpen = defineModel<boolean>('mobileOpen', { default: false })

const $attrs = useAttrs()

const matchesDesktop = ref(true)
let mediaQuery: MediaQueryList | null = null
let lockedBody = false

function updateMediaQuery() {
  if (typeof window === 'undefined') return
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', handleMediaChange)
  }
  const minWidth = props.breakpoint === 'md' ? '768px' : '1024px'
  mediaQuery = window.matchMedia(`(min-width: ${minWidth})`)
  matchesDesktop.value = mediaQuery.matches
  mediaQuery.addEventListener('change', handleMediaChange)
}

function handleMediaChange(e: MediaQueryListEvent) {
  matchesDesktop.value = e.matches
  if (e.matches && mobileOpen.value) {
    mobileOpen.value = false
  }
}

const isMobileView = computed(() => {
  if (props.mode === 'mobile') return true
  if (props.mode === 'desktop') return false
  return !matchesDesktop.value
})

const isIconCollapsed = computed(
  () => !isMobileView.value && props.collapsible === 'icon' && collapsed.value,
)

const isOffcanvasHidden = computed(
  () => !isMobileView.value && props.collapsible === 'offcanvas' && collapsed.value,
)

function toggleCollapse() {
  if (props.collapsible === 'none') return
  collapsed.value = !collapsed.value
}

function closeMobile() {
  mobileOpen.value = false
}

function handleSelect(item: SidebarItem) {
  if (item.disabled) return
  activeKey.value = item.key
  emit('select', item)
  if (props.closeOnSelect && isMobileView.value) {
    mobileOpen.value = false
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isMobileView.value && mobileOpen.value) {
    mobileOpen.value = false
  }
}

function itemInitials(label: string): string {
  return label
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

watch(
  () => props.breakpoint,
  () => updateMediaQuery(),
)

watch(
  () => [mobileOpen.value, isMobileView.value, props.contained] as const,
  ([open, mobile, contained]) => {
    if (typeof document === 'undefined') return
    if (open && mobile && !contained) {
      document.body.style.overflow = 'hidden'
      lockedBody = true
    } else if (lockedBody) {
      document.body.style.overflow = ''
      lockedBody = false
    }
  },
)

onMounted(() => {
  updateMediaQuery()
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  mediaQuery?.removeEventListener('change', handleMediaChange)
  document.removeEventListener('keydown', handleKeydown)
  if (lockedBody && typeof document !== 'undefined') {
    document.body.style.overflow = ''
    lockedBody = false
  }
})
</script>

<template>
  <!-- Desktop / Web Docked Sidebar -->
  <aside
    v-if="!isMobileView"
    v-bind="{ ...$attrs, class: undefined }"
    :aria-label="ariaLabel"
    :aria-hidden="isOffcanvasHidden || undefined"
    :class="
      cn(
        'flex flex-col bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 transition-all duration-300 shrink-0 overflow-hidden',
        side === 'left' ? 'border-r' : 'border-l',
        isOffcanvasHidden
          ? 'w-0 border-x-0 opacity-0 pointer-events-none'
          : isIconCollapsed
            ? 'w-16'
            : 'w-64',
        $attrs.class as string,
      )
    "
  >
    <!-- Header -->
    <div
      v-if="$slots.header || (collapsible !== 'none' && showCollapseButton)"
      :class="
        cn(
          'flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 shrink-0 min-h-[3.5rem]',
          isIconCollapsed ? 'justify-center px-2 py-3' : 'justify-between px-4 py-3',
        )
      "
    >
      <div v-if="$slots.header && !isIconCollapsed" class="flex items-center gap-2 min-w-0 flex-1">
        <slot
          name="header"
          :collapsed="isIconCollapsed"
          :is-mobile="false"
          :toggle-collapse="toggleCollapse"
          :close-mobile="closeMobile"
        />
      </div>

      <button
        v-if="collapsible !== 'none' && showCollapseButton"
        type="button"
        :title="collapsed ? 'Expand sidebar' : 'Collapse sidebar'"
        :aria-label="collapsed ? 'Expand sidebar' : 'Collapse sidebar'"
        :aria-expanded="!collapsed"
        class="inline-flex items-center justify-center p-1.5 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shrink-0"
        @click="toggleCollapse"
      >
        <svg
          :class="
            cn(
              'h-4 w-4 transition-transform duration-200',
              side === 'left'
                ? isIconCollapsed
                  ? 'rotate-180'
                  : ''
                : isIconCollapsed
                  ? ''
                  : 'rotate-180',
            )
          "
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>

    <!-- Navigation body -->
    <nav :aria-label="ariaLabel" class="flex-1 overflow-y-auto overflow-x-hidden py-3 px-2 space-y-4">
      <div v-for="(group, gIdx) in groups" :key="group.label ?? gIdx" class="space-y-1">
        <p
          v-if="group.label && !isIconCollapsed"
          class="px-2.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"
        >
          {{ group.label }}
        </p>
        <div
          v-else-if="group.label && isIconCollapsed && gIdx > 0"
          class="mx-2 my-2 border-t border-slate-200 dark:border-slate-800"
          aria-hidden="true"
        />

        <ul class="space-y-0.5">
          <li v-for="item in group.items" :key="item.key">
            <component
              :is="item.href && !item.disabled ? 'a' : 'button'"
              :href="item.href && !item.disabled ? item.href : undefined"
              :type="!item.href || item.disabled ? 'button' : undefined"
              :disabled="(!item.href || item.disabled) ? item.disabled : undefined"
              :aria-current="activeKey === item.key ? 'page' : undefined"
              :aria-disabled="item.disabled || undefined"
              :aria-label="isIconCollapsed ? item.label : undefined"
              :title="isIconCollapsed ? item.label : undefined"
              :class="
                cn(
                  'group flex w-full items-center rounded-lg text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                  isIconCollapsed ? 'justify-center p-2.5' : 'gap-2.5 px-2.5 py-2',
                  activeKey === item.key
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100',
                  item.disabled && 'opacity-45 cursor-not-allowed pointer-events-none',
                )
              "
              @click="handleSelect(item)"
            >
              <slot
                name="item"
                :item="item"
                :active="activeKey === item.key"
                :collapsed="isIconCollapsed"
              >
                <span class="shrink-0 flex items-center justify-center">
                  <slot
                    name="icon"
                    :item="item"
                    :active="activeKey === item.key"
                    :collapsed="isIconCollapsed"
                  >
                    <component :is="item.icon" v-if="item.icon" class="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span
                      v-else
                      :class="
                        cn(
                          'inline-flex h-5 w-5 items-center justify-center rounded text-[10px] font-semibold',
                          activeKey === item.key
                            ? 'bg-blue-600 text-white dark:bg-blue-500'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300',
                        )
                      "
                      aria-hidden="true"
                    >
                      {{ itemInitials(item.label) }}
                    </span>
                  </slot>
                </span>

                <span v-if="!isIconCollapsed" class="truncate flex-1 text-left">
                  {{ item.label }}
                </span>

                <span
                  v-if="!isIconCollapsed && item.badge !== undefined"
                  :class="
                    cn(
                      'inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 text-[11px] font-medium rounded-full shrink-0',
                      activeKey === item.key
                        ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
                    )
                  "
                >
                  {{ item.badge }}
                </span>
              </slot>
            </component>
          </li>
        </ul>
      </div>

      <slot :collapsed="isIconCollapsed" :is-mobile="false" />
    </nav>

    <!-- Footer -->
    <div
      v-if="$slots.footer"
      :class="
        cn(
          'border-t border-slate-200 dark:border-slate-800 shrink-0',
          isIconCollapsed ? 'p-2 flex justify-center' : 'p-3',
        )
      "
    >
      <slot
        name="footer"
        :collapsed="isIconCollapsed"
        :is-mobile="false"
        :toggle-collapse="toggleCollapse"
        :close-mobile="closeMobile"
      />
    </div>
  </aside>

  <!-- Mobile Slide-Over Sidebar Drawer -->
  <Teleport v-else to="body" :disabled="contained">
    <Transition
      enter-active-class="transition-opacity ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileOpen"
        :class="cn(contained ? 'absolute inset-0 z-30' : 'fixed inset-0 z-50')"
        role="dialog"
        aria-modal="true"
        :aria-label="ariaLabel"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-slate-950/50 dark:bg-black/70 backdrop-blur-[2px]"
          @click="closeMobile"
        />

        <!-- Drawer Panel -->
        <Transition
          appear
          enter-active-class="transition-transform ease-out duration-300"
          :enter-from-class="side === 'left' ? '-translate-x-full' : 'translate-x-full'"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform ease-in duration-200"
          leave-from-class="translate-x-0"
          :leave-to-class="side === 'left' ? '-translate-x-full' : 'translate-x-full'"
        >
          <aside
            v-if="mobileOpen"
            v-bind="{ ...$attrs, class: undefined }"
            :class="
              cn(
                'absolute inset-y-0 flex w-72 max-w-[85%] flex-col bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-2xl',
                side === 'left' ? 'left-0 border-r' : 'right-0 border-l',
                $attrs.class as string,
              )
            "
          >
            <!-- Mobile Header -->
            <div class="flex items-center justify-between gap-2 px-4 py-3 border-b border-slate-200 dark:border-slate-800 shrink-0 min-h-[3.5rem]">
              <div class="flex items-center gap-2 min-w-0 flex-1">
                <slot
                  name="header"
                  :collapsed="false"
                  :is-mobile="true"
                  :toggle-collapse="toggleCollapse"
                  :close-mobile="closeMobile"
                >
                  <span class="text-sm font-semibold text-slate-900 dark:text-slate-100">Menu</span>
                </slot>
              </div>
              <button
                type="button"
                aria-label="Close sidebar"
                class="inline-flex items-center justify-center p-1.5 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shrink-0"
                @click="closeMobile"
              >
                <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Mobile Navigation -->
            <nav :aria-label="ariaLabel" class="flex-1 overflow-y-auto py-3 px-2 space-y-4">
              <div v-for="(group, gIdx) in groups" :key="group.label ?? gIdx" class="space-y-1">
                <p
                  v-if="group.label"
                  class="px-2.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"
                >
                  {{ group.label }}
                </p>

                <ul class="space-y-0.5">
                  <li v-for="item in group.items" :key="item.key">
                    <component
                      :is="item.href && !item.disabled ? 'a' : 'button'"
                      :href="item.href && !item.disabled ? item.href : undefined"
                      :type="!item.href || item.disabled ? 'button' : undefined"
                      :disabled="(!item.href || item.disabled) ? item.disabled : undefined"
                      :aria-current="activeKey === item.key ? 'page' : undefined"
                      :aria-disabled="item.disabled || undefined"
                      :class="
                        cn(
                          'group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                          activeKey === item.key
                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100',
                          item.disabled && 'opacity-45 cursor-not-allowed pointer-events-none',
                        )
                      "
                      @click="handleSelect(item)"
                    >
                      <slot name="item" :item="item" :active="activeKey === item.key" :collapsed="false">
                        <span class="shrink-0 flex items-center justify-center">
                          <slot name="icon" :item="item" :active="activeKey === item.key" :collapsed="false">
                            <component :is="item.icon" v-if="item.icon" class="h-4 w-4 shrink-0" aria-hidden="true" />
                            <span
                              v-else
                              :class="
                                cn(
                                  'inline-flex h-5 w-5 items-center justify-center rounded text-[10px] font-semibold',
                                  activeKey === item.key
                                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300',
                                )
                              "
                              aria-hidden="true"
                            >
                              {{ itemInitials(item.label) }}
                            </span>
                          </slot>
                        </span>

                        <span class="truncate flex-1 text-left">
                          {{ item.label }}
                        </span>

                        <span
                          v-if="item.badge !== undefined"
                          :class="
                            cn(
                              'inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 text-[11px] font-medium rounded-full shrink-0',
                              activeKey === item.key
                                ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
                            )
                          "
                        >
                          {{ item.badge }}
                        </span>
                      </slot>
                    </component>
                  </li>
                </ul>
              </div>

              <slot :collapsed="false" :is-mobile="true" />
            </nav>

            <!-- Mobile Footer -->
            <div v-if="$slots.footer" class="p-3 border-t border-slate-200 dark:border-slate-800 shrink-0">
              <slot
                name="footer"
                :collapsed="false"
                :is-mobile="true"
                :toggle-collapse="toggleCollapse"
                :close-mobile="closeMobile"
              />
            </div>
          </aside>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
