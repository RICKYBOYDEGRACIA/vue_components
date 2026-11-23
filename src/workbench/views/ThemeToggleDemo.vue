<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseThemeToggle, { type ThemeMode } from '@/components/ui/BaseThemeToggle.vue'
import rawSource from '@/components/ui/BaseThemeToggle.vue?raw'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const theme = ref<ThemeMode>('light')
const resolvedTheme = ref<'light' | 'dark'>(
  typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
    ? 'dark'
    : 'light',
)
const variant = ref<'button' | 'icon' | 'switch' | 'segmented'>('segmented')
const size = ref<'sm' | 'md' | 'lg'>('md')
const includeSystem = ref(true)
const showLabel = ref(true)
const syncDocument = ref(true)
const disabled = ref(false)

function handleThemeChange(payload: { mode: ThemeMode; resolved: 'light' | 'dark' }) {
  resolvedTheme.value = payload.resolved
}

const activeResolved = computed<'light' | 'dark'>(() =>
  theme.value === 'system' ? resolvedTheme.value : theme.value,
)

const usageCode = computed(() => {
  const attrs: string[] = ['v-model="theme"']
  if (variant.value !== 'button') attrs.push(`variant="${variant.value}"`)
  if (size.value !== 'md') attrs.push(`size="${size.value}"`)
  if (includeSystem.value) attrs.push(':include-system="true"')
  if (!showLabel.value && (variant.value === 'button' || variant.value === 'segmented')) {
    attrs.push(':show-label="false"')
  }
  if (!syncDocument.value) attrs.push(':sync-document="false"')
  if (disabled.value) attrs.push(':disabled="true"')
  attrs.push('storage-key="app-theme"')

  return `<BaseThemeToggle\n  ${attrs.join('\n  ')}\n/>`
})
</script>

<template>
  <ComponentPreview
    title="Theme Toggle (Dark / Light Mode)"
    description="Accessible dark and light mode switcher with optional system preference detection, document class syncing, and localStorage persistence."
  >
    <template #preview>
      <div class="w-full max-w-md flex flex-col items-center gap-5">
        <BaseThemeToggle
          v-model="theme"
          :variant="variant"
          :size="size"
          :include-system="includeSystem"
          :show-label="showLabel"
          :sync-document="syncDocument"
          :disabled="disabled"
          @change="handleThemeChange"
        />

        <!-- Live surface card demonstrating light/dark appearance -->
        <div class="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 p-4 transition-colors">
          <div class="flex items-center justify-between gap-2">
            <div>
              <p class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Active Theme Preview
              </p>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Toggles Tailwind's <code class="font-mono">dark</code> class on <code class="font-mono">&lt;html&gt;</code>.
              </p>
            </div>
            <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 capitalize">
              <span
                :class="[
                  'h-2 w-2 rounded-full',
                  activeResolved === 'dark' ? 'bg-blue-400' : 'bg-amber-400',
                ]"
              />
              {{ theme }}
            </span>
          </div>
        </div>
      </div>
    </template>

    <template #knobs>
      <div class="flex flex-col gap-3">
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Variant</label>
          <select
            v-model="variant"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value="button">button</option>
            <option value="icon">icon</option>
            <option value="switch">switch</option>
            <option value="segmented">segmented</option>
          </select>
        </div>

        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Size</label>
          <select
            v-model="size"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value="sm">Small (sm)</option>
            <option value="md">Medium (md)</option>
            <option value="lg">Large (lg)</option>
          </select>
        </div>

        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="includeSystem" type="checkbox" class="rounded" /> Include system option
        </label>

        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="showLabel" type="checkbox" class="rounded" /> Show label
        </label>

        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="syncDocument" type="checkbox" class="rounded" /> Sync document dark class
        </label>

        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="disabled" type="checkbox" class="rounded" /> Disabled
        </label>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseThemeToggle.vue" />
    </template>

    <template #variants>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="flex flex-col gap-2">
          <span class="text-xs font-medium text-slate-500 dark:text-slate-400">Button</span>
          <div class="flex flex-wrap items-center gap-3">
            <BaseThemeToggle v-model="theme" variant="button" size="sm" :sync-document="syncDocument" />
            <BaseThemeToggle v-model="theme" variant="button" size="md" :sync-document="syncDocument" />
            <BaseThemeToggle v-model="theme" variant="button" size="lg" :sync-document="syncDocument" />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <span class="text-xs font-medium text-slate-500 dark:text-slate-400">Icon Only</span>
          <div class="flex flex-wrap items-center gap-3">
            <BaseThemeToggle v-model="theme" variant="icon" size="sm" :sync-document="syncDocument" />
            <BaseThemeToggle v-model="theme" variant="icon" size="md" :sync-document="syncDocument" />
            <BaseThemeToggle v-model="theme" variant="icon" size="lg" :sync-document="syncDocument" />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <span class="text-xs font-medium text-slate-500 dark:text-slate-400">Switch</span>
          <div class="flex flex-wrap items-center gap-4">
            <BaseThemeToggle v-model="theme" variant="switch" size="sm" :sync-document="syncDocument" />
            <BaseThemeToggle v-model="theme" variant="switch" size="md" :sync-document="syncDocument" />
            <BaseThemeToggle v-model="theme" variant="switch" size="lg" :sync-document="syncDocument" />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <span class="text-xs font-medium text-slate-500 dark:text-slate-400">Segmented (Light / System / Dark)</span>
          <div class="flex flex-wrap items-center gap-3">
            <BaseThemeToggle
              v-model="theme"
              variant="segmented"
              :include-system="true"
              size="sm"
              :sync-document="syncDocument"
            />
            <BaseThemeToggle
              v-model="theme"
              variant="segmented"
              :show-label="false"
              :include-system="true"
              size="sm"
              :sync-document="syncDocument"
            />
          </div>
        </div>
      </div>
    </template>
  </ComponentPreview>
</template>
