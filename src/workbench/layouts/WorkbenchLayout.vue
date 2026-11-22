<script setup lang="ts">
import { ref, computed, defineAsyncComponent, onMounted, onUnmounted, nextTick } from 'vue'

const isDark = ref(false)
function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

type AccentKey = 'blue' | 'indigo' | 'emerald' | 'violet' | 'rose'
const accentPresets: Array<{ key: AccentKey; label: string; swatch: string }> = [
  { key: 'blue', label: 'Blue', swatch: '#2563eb' },
  { key: 'indigo', label: 'Indigo', swatch: '#4f46e5' },
  { key: 'emerald', label: 'Emerald', swatch: '#059669' },
  { key: 'violet', label: 'Violet', swatch: '#7c3aed' },
  { key: 'rose', label: 'Rose', swatch: '#e11d48' },
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
const isSidebarOpen = ref(true)

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
      { key: 'BaseModal', label: 'Modal' },
      { key: 'BaseDrawer', label: 'Drawer' },
      { key: 'BaseTabs', label: 'Tabs' },
      { key: 'BaseAccordion', label: 'Accordion' },
      { key: 'BaseTooltip', label: 'Tooltip' },
    ],
  },
]

const filteredCategories = computed(() => {
  if (!search.value.trim()) return componentCategories
  const q = search.value.toLowerCase()
  return componentCategories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.label.toLowerCase().includes(q) ||
          item.key.toLowerCase().includes(q)
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
  BaseSelect: defineAsyncComponent(() => import('../views/SelectDemo.vue')),
  BaseDataTable: defineAsyncComponent(() => import('../views/DataTableDemo.vue')),
  BasePagination: defineAsyncComponent(() => import('../views/PaginationDemo.vue')),
  BaseCard: defineAsyncComponent(() => import('../views/CardDemo.vue')),
  BaseModal: defineAsyncComponent(() => import('../views/ModalDemo.vue')),
  BaseDrawer: defineAsyncComponent(() => import('../views/DrawerDemo.vue')),
  BaseTabs: defineAsyncComponent(() => import('../views/TabsDemo.vue')),
  BaseAccordion: defineAsyncComponent(() => import('../views/AccordionDemo.vue')),
  BaseTooltip: defineAsyncComponent(() => import('../views/TooltipDemo.vue')),
}

const activeView = computed(() => viewMap[activeComponent.value])

function handleGlobalKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    if (!isSidebarOpen.value) {
      isSidebarOpen.value = true
    }
    nextTick(() => {
      searchInputRef.value?.focus()
      searchInputRef.value?.select()
    })
  }
}

onMounted(() => {
  document.documentElement.setAttribute('data-accent', accent.value)
  window.addEventListener('keydown', handleGlobalKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeydown)
})
</script>

<template>
  <div class="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
    <!-- Sidebar -->
    <aside
      :class="[
        'flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 shrink-0',
        isSidebarOpen ? 'w-64' : 'w-0 overflow-hidden border-r-0',
      ]"
    >
      <div class="flex items-center gap-2 px-4 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
        <div class="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
          <span class="text-white text-xs font-bold">UI</span>
        </div>
        <span class="font-semibold text-slate-900 dark:text-slate-100 text-sm">Vue UI Kit</span>
        <span class="ml-auto text-[11px] font-medium px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
          19
        </span>
      </div>

      <!-- Search with Cmd/Ctrl+K badge -->
      <div class="px-3 py-3 border-b border-slate-200 dark:border-slate-800 shrink-0">
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

      <!-- Navigation -->
      <nav class="flex-1 overflow-y-auto py-2" aria-label="Components">
        <template v-if="filteredCategories.length">
          <div v-for="cat in filteredCategories" :key="cat.label" class="px-3 py-1.5">
            <p class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
              {{ cat.label }}
            </p>
            <ul class="space-y-0.5">
              <li v-for="item in cat.items" :key="item.key">
                <button
                  type="button"
                  :class="[
                    'w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors',
                    activeComponent === item.key
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100',
                  ]"
                  @click="activeComponent = item.key"
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
      </nav>
    </aside>

    <!-- Main area -->
    <div class="flex flex-col flex-1 overflow-hidden min-w-0">
      <!-- Top toolbar -->
      <header class="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400"
            aria-label="Toggle sidebar"
            @click="isSidebarOpen = !isSidebarOpen"
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
          <div class="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-1" role="group" aria-label="Viewport size">
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

          <!-- Light/Dark Theme Toggle -->
          <button
            type="button"
            :class="[
              'flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition-colors',
              isDark
                ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50',
            ]"
            @click="toggleDark"
          >
            <svg v-if="isDark" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
            </svg>
            <svg v-else class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            {{ isDark ? 'Light' : 'Dark' }}
          </button>
        </div>
      </header>

      <!-- Component stage -->
      <main class="flex-1 overflow-auto p-6 bg-slate-100 dark:bg-slate-950">
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
