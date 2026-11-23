<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  Menu,
  Monitor,
  Smartphone,
} from 'lucide-vue-next'
import BaseSidebar, { type SidebarGroup } from '@/components/ui/BaseSidebar.vue'
import rawSource from '@/components/ui/BaseSidebar.vue?raw'
import BaseThemeToggle, { type ThemeMode } from '@/components/ui/BaseThemeToggle.vue'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const activeKey = ref('dashboard')
const collapsed = ref(false)
const mobileOpen = ref(false)
const mode = ref<'desktop' | 'mobile' | 'auto'>('desktop')
const side = ref<'left' | 'right'>('left')
const collapsible = ref<'icon' | 'offcanvas' | 'none'>('icon')
const closeOnSelect = ref(true)
const demoTheme = ref<ThemeMode>('light')

const navGroups: SidebarGroup[] = [
  {
    label: 'Workspace',
    items: [
      { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { key: 'projects', label: 'Projects', icon: FolderKanban, badge: 12 },
      { key: 'team', label: 'Team', icon: Users },
      { key: 'analytics', label: 'Analytics', icon: BarChart3, badge: 'New' },
    ],
  },
  {
    label: 'Preferences',
    items: [
      { key: 'settings', label: 'Settings', icon: Settings },
      { key: 'help', label: 'Help Center', icon: HelpCircle },
    ],
  },
]

const allItems = computed(() => navGroups.flatMap((g) => g.items))
const activeItem = computed(
  () => allItems.value.find((i) => i.key === activeKey.value) ?? allItems.value[0],
)

const isMobilePreview = computed(() => mode.value === 'mobile')

function openSidebar() {
  if (isMobilePreview.value) {
    mobileOpen.value = true
  } else {
    collapsed.value = !collapsed.value
  }
}

const usageCode = computed(() => {
  const attrs: string[] = [
    'v-model="activeKey"',
    'v-model:collapsed="collapsed"',
    'v-model:mobile-open="mobileOpen"',
    ':groups="navGroups"',
  ]
  if (side.value !== 'left') attrs.push(`side="${side.value}"`)
  if (collapsible.value !== 'icon') attrs.push(`collapsible="${collapsible.value}"`)
  if (mode.value !== 'auto') attrs.push(`mode="${mode.value}"`)
  if (!closeOnSelect.value) attrs.push(':close-on-select="false"')

  return `<div class="flex h-screen">
  <BaseSidebar
    ${attrs.join('\n    ')}
  >
    <template #header>
      <span class="font-semibold text-sm">Acme App</span>
    </template>

    <template #footer="{ collapsed }">
      <div class="text-xs text-slate-500">
        {{ collapsed ? 'RD' : 'Ricky De Gracia' }}
      </div>
    </template>
  </BaseSidebar>

  <main class="flex-1 p-6">
    <button class="lg:hidden" @click="mobileOpen = true">Open Menu</button>
    <!-- Page content -->
  </main>
</div>`
})
</script>

<template>
  <ComponentPreview
    title="Responsive Sidebar"
    description="Adaptive navigation sidebar that docks with optional icon-rail collapse on web/desktop and slides over as an accessible drawer on mobile."
  >
    <template #preview>
      <div class="w-full space-y-3">
        <!-- Quick Web / Mobile Mode Switcher -->
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="inline-flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 p-1">
            <button
              type="button"
              :class="[
                'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors',
                mode === 'desktop'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200',
              ]"
              @click="mode = 'desktop'"
            >
              <Monitor class="h-3.5 w-3.5" />
              Web View
            </button>
            <button
              type="button"
              :class="[
                'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors',
                mode === 'mobile'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200',
              ]"
              @click="mode = 'mobile'"
            >
              <Smartphone class="h-3.5 w-3.5" />
              Mobile View
            </button>
          </div>

          <span class="text-xs text-slate-500 dark:text-slate-400">
            Active: <strong class="text-slate-800 dark:text-slate-200">{{ activeItem?.label }}</strong>
          </span>
        </div>

        <!-- Embedded Responsive App Shell -->
        <div
          :class="[
            'relative mx-auto flex h-[400px] overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 transition-all duration-300',
            isMobilePreview ? 'max-w-[360px] shadow-md' : 'w-full',
            side === 'right' ? 'flex-row-reverse' : 'flex-row',
          ]"
        >
          <BaseSidebar
            v-model="activeKey"
            v-model:collapsed="collapsed"
            v-model:mobile-open="mobileOpen"
            :groups="navGroups"
            :side="side"
            :collapsible="collapsible"
            :mode="mode"
            :close-on-select="closeOnSelect"
            contained
          >
            <template #header>
              <div class="flex items-center gap-2 min-w-0">
                <div class="h-7 w-7 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                  <span class="text-xs font-bold text-white">AC</span>
                </div>
                <span class="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Acme Studio
                </span>
              </div>
            </template>

            <template #footer="{ collapsed: isCol }">
              <div
                :class="[
                  'flex items-center gap-2.5',
                  isCol ? 'justify-center' : 'justify-between',
                ]"
              >
                <div class="flex items-center gap-2 min-w-0">
                  <div class="h-7 w-7 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xs font-semibold shrink-0">
                    RD
                  </div>
                  <div v-if="!isCol" class="min-w-0">
                    <p class="truncate text-xs font-medium text-slate-900 dark:text-slate-100">
                      Ricky De Gracia
                    </p>
                    <p class="truncate text-[11px] text-slate-500 dark:text-slate-400">
                      Admin
                    </p>
                  </div>
                </div>
                <BaseThemeToggle
                  v-if="!isCol"
                  v-model="demoTheme"
                  variant="icon"
                  size="sm"
                />
              </div>
            </template>
          </BaseSidebar>

          <!-- Mock Page Content -->
          <div class="flex flex-1 flex-col min-w-0">
            <header class="flex items-center justify-between gap-2 px-4 h-14 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
              <div class="flex items-center gap-2 min-w-0">
                <button
                  v-if="isMobilePreview || (collapsible === 'offcanvas' && collapsed)"
                  type="button"
                  aria-label="Open navigation menu"
                  class="inline-flex items-center justify-center p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  @click="openSidebar"
                >
                  <Menu class="h-4 w-4" />
                </button>
                <h2 class="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {{ activeItem?.label }}
                </h2>
              </div>
              <span class="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                {{ isMobilePreview ? 'Mobile Drawer' : collapsed ? 'Collapsed' : 'Docked' }}
              </span>
            </header>

            <div class="flex-1 overflow-y-auto p-4 space-y-3">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div class="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5">
                  <p class="text-xs text-slate-500 dark:text-slate-400">Active Route</p>
                  <p class="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100">
                    /{{ activeKey }}
                  </p>
                </div>
                <div class="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5">
                  <p class="text-xs text-slate-500 dark:text-slate-400">Layout Mode</p>
                  <p class="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100 capitalize">
                    {{ mode }}
                  </p>
                </div>
              </div>
              <div class="rounded-lg border border-dashed border-slate-300 dark:border-slate-700 p-4 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Switch between <strong>Web View</strong> and <strong>Mobile View</strong> above to inspect the docked desktop rail and the slide-over mobile drawer. In production, use <code class="font-mono text-slate-700 dark:text-slate-300">mode="auto"</code> to adapt automatically at your chosen breakpoint.
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #knobs>
      <div class="flex flex-col gap-3">
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">View Mode</label>
          <select
            v-model="mode"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value="desktop">desktop (Web)</option>
            <option value="mobile">mobile (Drawer)</option>
            <option value="auto">auto (Responsive)</option>
          </select>
        </div>

        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Side</label>
          <select
            v-model="side"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value="left">left</option>
            <option value="right">right</option>
          </select>
        </div>

        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Desktop Collapsible</label>
          <select
            v-model="collapsible"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value="icon">icon (Mini Rail)</option>
            <option value="offcanvas">offcanvas (Hide)</option>
            <option value="none">none (Fixed)</option>
          </select>
        </div>

        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="collapsed" type="checkbox" class="rounded" /> Collapsed (Web)
        </label>

        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="closeOnSelect" type="checkbox" class="rounded" /> Close on select (Mobile)
        </label>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseSidebar.vue" />
    </template>
  </ComponentPreview>
</template>
