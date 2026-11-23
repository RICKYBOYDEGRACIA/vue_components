<script setup lang="ts">
import { ref, computed, defineAsyncComponent, onMounted, onUnmounted, nextTick } from 'vue'
import BaseSidebar from '@/components/ui/BaseSidebar.vue'
import BaseThemeToggle, { type ThemeMode } from '@/components/ui/BaseThemeToggle.vue'

const theme = ref<ThemeMode>('light')

type AccentKey = 'blue' | 'indigo' | 'emerald' | 'violet' | 'rose'
const accentPresets: Array<{ key: AccentKey; label: string; swatch: string }> = [
  { key: 'blue', label: 'Blue', swatch: '#0038A8' },
  { key: 'emerald', label: 'Emerald', swatch: '#FFD700' },
  // { key: 'violet', label: 'Violet', swatch: '#7c3aed' },
  // { key: 'rose', label: 'Rose', swatch: '#e11d48' },
]

const accent = ref<AccentKey>('blue')
function setAccent(preset: AccentKey) {
  accent.value = preset
  document.documentElement.setAttribute('data-accent', preset)
}

type ViewportKey = 'desktop' | 'tablet' | 'mobile'
const viewport = ref<ViewportKey>('desktop')
const viewportWidths: Record<ViewportKey, string> = {
  desktop: '100%',
  tablet: '768px',
  mobile: '375px',
}

const search = ref('')
const searchInputRef = ref<HTMLInputElement | null>(null)
const activeComponent = ref('BaseButton')
const isDesktopCollapsed = ref(false)
const isMobileSidebarOpen = ref(false)
const isDesktopViewport = ref(true)
let desktopMq: MediaQueryList | null = null

const componentCategories = [
  {
    label: 'Actions & Feedback',
    items: [
      { key: 'BaseButton', label: 'Button' },
      { key: 'BaseBadge', label: 'Badge' },
      { key: 'BaseAlert', label: 'Alert' },
      { key: 'BaseToastContainer', label: 'Toast' },
      { key: 'BaseSkeleton', label: 'Skeleton' },
    ],
  },
  {
    label: 'Form Controls',
    items: [
      { key: 'BaseInput', label: 'Input' },
      { key: 'BaseTextarea', label: 'Textarea' },
      { key: 'BaseCheckbox', label: 'Checkbox' },
      { key: 'BaseRadioGroup', label: 'Radio Group' },
      { key: 'BaseSwitch', label: 'Switch' },
      { key: 'BaseThemeToggle', label: 'Theme Toggle' },
      { key: 'BaseSelect', label: 'Select' },
    ],
  },
  {
    label: 'Data Display',
    items: [
      { key: 'BaseDataTable', label: 'Data Table' },
      { key: 'BasePagination', label: 'Pagination' },
      { key: 'BaseCard', label: 'Card' },
    ],
  },
  {
    label: 'Overlays & Navigation',
    items: [
      { key: 'BaseSidebar', label: 'Sidebar' },
      { key: 'BaseModal', label: 'Modal' },
      { key: 'BaseDrawer', label: 'Drawer' },
      { key: 'BaseTabs', label: 'Tabs' },
      { key: 'BaseAccordion', label: 'Accordion' },
      { key: 'BaseTooltip', label: 'Tooltip' },
    ],
  },
]

const totalComponents = computed(() =>
  componentCategories.reduce((sum, cat) => sum + cat.items.length, 0),
)

const filteredCategories = computed(() => {
  if (!search.value.trim()) return componentCategories
  const q = search.value.toLowerCase()
  return componentCategories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.label.toLowerCase().includes(q) ||
          item.key.toLowerCase().includes(q),
      ),
    }))
    .filter((cat) => cat.items.length > 0)
})

const viewMap: Record<string, ReturnType<typeof defineAsyncComponent>> = {
  BaseButton: defineAsyncComponent(() => import('../views/ButtonDemo.vue')),
  BaseBadge: defineAsyncComponent(() => import('../views/BadgeDemo.vue')),
  BaseAlert: defineAsyncComponent(() => import('../views/AlertDemo.vue')),
  BaseToastContainer: defineAsyncComponent(() => import('../views/ToastDemo.vue')),
  BaseSkeleton: defineAsyncComponent(() => import('../views/SkeletonDemo.vue')),
  BaseInput: defineAsyncComponent(() => import('../views/InputDemo.vue')),
  BaseTextarea: defineAsyncComponent(() => import('../views/TextareaDemo.vue')),
  BaseCheckbox: defineAsyncComponent(() => import('../views/CheckboxDemo.vue')),
  BaseRadioGroup: defineAsyncComponent(() => import('../views/RadioDemo.vue')),
  BaseSwitch: defineAsyncComponent(() => import('../views/SwitchDemo.vue')),
  BaseThemeToggle: defineAsyncComponent(() => import('../views/ThemeToggleDemo.vue')),
  BaseSelect: defineAsyncComponent(() => import('../views/SelectDemo.vue')),
  BaseDataTable: defineAsyncComponent(() => import('../views/DataTableDemo.vue')),
  BasePagination: defineAsyncComponent(() => import('../views/PaginationDemo.vue')),
  BaseCard: defineAsyncComponent(() => import('../views/CardDemo.vue')),
  BaseSidebar: defineAsyncComponent(() => import('../views/SidebarDemo.vue')),
  BaseModal: defineAsyncComponent(() => import('../views/ModalDemo.vue')),
  BaseDrawer: defineAsyncComponent(() => import('../views/DrawerDemo.vue')),
  BaseTabs: defineAsyncComponent(() => import('../views/TabsDemo.vue')),
  BaseAccordion: defineAsyncComponent(() => import('../views/AccordionDemo.vue')),
  BaseTooltip: defineAsyncComponent(() => import('../views/TooltipDemo.vue')),
}

const activeView = computed(() => viewMap[activeComponent.value])

function toggleSidebar() {
  if (isDesktopViewport.value) {
    isDesktopCollapsed.value = !isDesktopCollapsed.value
  } else {
    isMobileSidebarOpen.value = !isMobileSidebarOpen.value
  }
}

function selectComponent(key: string) {
  activeComponent.value = key
  isMobileSidebarOpen.value = false
}

function handleDesktopMediaChange(e: MediaQueryListEvent) {
  isDesktopViewport.value = e.matches
}

function handleGlobalKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    if (isDesktopViewport.value) {
      isDesktopCollapsed.value = false
    } else {
      isMobileSidebarOpen.value = true
    }
    nextTick(() => {
      searchInputRef.value?.focus()
      searchInputRef.value?.select()
    })
  }
}

onMounted(() => {
  document.documentElement.setAttribute('data-accent', accent.value)
  desktopMq = window.matchMedia('(min-width: 1024px)')
  isDesktopViewport.value = desktopMq.matches
  desktopMq.addEventListener('change', handleDesktopMediaChange)
  window.addEventListener('keydown', handleGlobalKeydown)
})

onUnmounted(() => {
  desktopMq?.removeEventListener('change', handleDesktopMediaChange)
  window.removeEventListener('keydown', handleGlobalKeydown)
})
</script>

<template>
  <div class="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
    <!-- Responsive Sidebar (Docked on Web, Slide-Over Drawer on Mobile) -->
    <BaseSidebar
      v-model:collapsed="isDesktopCollapsed"
      v-model:mobile-open="isMobileSidebarOpen"
      collapsible="offcanvas"
      breakpoint="lg"
      :show-collapse-button="false"
      aria-label="Components"
    >
      <template #header>
        <div class="flex items-center gap-2 w-full">
          <div class="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
            <span class="text-white text-xs font-bold">UI</span>
          </div>
          <span class="font-semibold text-slate-900 dark:text-slate-100 text-sm truncate">Vue UI Kit</span>
          <span class="ml-auto text-[11px] font-medium px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 shrink-0">
            {{ totalComponents }}
          </span>
        </div>
      </template>

      <div class="space-y-3">
        <!-- Search with Cmd/Ctrl+K badge -->
        <div class="px-1 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div class="relative">
            <input
              ref="searchInputRef"
              v-model="search"
              type="search"
              placeholder="Search components..."
              aria-label="Search components"
              class="w-full text-sm pl-3 pr-12 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              @keydown.escape="search ? (search = '') : searchInputRef?.blur()"
            />
            <kbd
              class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded"
              aria-hidden="true"
            >
              ⌘K
            </kbd>
          </div>
        </div>

        <!-- Categorized Component Navigation -->
        <template v-if="filteredCategories.length">
          <div v-for="cat in filteredCategories" :key="cat.label" class="px-1 py-0.5">
            <p class="px-2 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
              {{ cat.label }}
            </p>
            <ul class="space-y-0.5">
              <li v-for="item in cat.items" :key="item.key">
                <button
                  type="button"
                  :aria-current="activeComponent === item.key ? 'page' : undefined"
                  :class="[
                    'w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors',
                    activeComponent === item.key
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100',
                  ]"
                  @click="selectComponent(item.key)"
                >
                  {{ item.label }}
                </button>
              </li>
            </ul>
          </div>
        </template>
        <p v-else class="px-4 py-6 text-center text-xs text-slate-400 dark:text-slate-500">
          No components match "{{ search }}"
        </p>
      </div>
    </BaseSidebar>

    <!-- Main area -->
    <div class="flex flex-col flex-1 overflow-hidden min-w-0">
      <!-- Top toolbar -->
      <header class="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400"
            aria-label="Toggle sidebar"
            @click="toggleSidebar"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ activeComponent }}</span>
        </div>

        <div class="flex flex-wrap items-center gap-2.5">
          <!-- Accent Color Tester -->
          <div
            class="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg px-2 py-1"
            role="group"
            aria-label="Accent color preset"
          >
            <span class="text-[11px] font-medium text-slate-500 dark:text-slate-400 pr-0.5 hidden sm:inline">
              Accent
            </span>
            <button
              v-for="preset in accentPresets"
              :key="preset.key"
              type="button"
              :title="`${preset.label} accent`"
              :aria-label="`Use ${preset.label} accent color`"
              :aria-pressed="accent === preset.key"
              :class="[
                'h-4 w-4 rounded-full transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 dark:focus-visible:ring-offset-slate-900',
                accent === preset.key
                  ? 'scale-110 ring-2 ring-slate-900 dark:ring-white ring-offset-1 dark:ring-offset-slate-800'
                  : 'opacity-75 hover:opacity-100 hover:scale-105',
              ]"
              :style="{ backgroundColor: preset.swatch }"
              @click="setAccent(preset.key)"
            />
          </div>

          <!-- Viewport Previewer -->
          <div class="hidden sm:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-1" role="group" aria-label="Viewport size">
            <button
              v-for="vp in (['desktop', 'tablet', 'mobile'] as ViewportKey[])"
              :key="vp"
              type="button"
              :class="[
                'px-2.5 py-1 text-xs rounded-md transition-colors capitalize',
                viewport === vp
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-slate-100 font-medium'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300',
              ]"
              @click="viewport = vp"
            >
              {{ vp }}
            </button>
          </div>

          <!-- Light/Dark Theme Toggle Component -->
          <BaseThemeToggle v-model="theme" variant="button" size="sm" />
        </div>
      </header>

      <!-- Component stage -->
      <main class="flex-1 overflow-auto p-4 sm:p-6 bg-slate-100 dark:bg-slate-950">
        <div
          class="mx-auto transition-all duration-300"
          :style="{ maxWidth: viewportWidths[viewport] }"
        >
          <Suspense>
            <component :is="activeView" :key="activeComponent" />
            <template #fallback>
              <div class="flex items-center justify-center min-h-64">
                <div class="animate-spin h-6 w-6 rounded-full border-2 border-blue-600 border-t-transparent" />
              </div>
            </template>
          </Suspense>
        </div>
      </main>
    </div>
  </div>
</template>
