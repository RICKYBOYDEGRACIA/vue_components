<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseTabs, { type TabItem } from '@/components/ui/BaseTabs.vue'
import rawSource from '@/components/ui/BaseTabs.vue?raw'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const activeTab = ref<string | number>('overview')
const variant = ref<'underline' | 'pills' | 'segmented'>('underline')

const underlineTab = ref<string | number>('overview')
const pillsTab = ref<string | number>('overview')
const segmentedTab = ref<string | number>('overview')

const tabs: TabItem[] = [
  { key: 'overview', label: 'Overview', badge: 3 },
  { key: 'features', label: 'Features' },
  { key: 'pricing', label: 'Pricing' },
  { key: 'disabled', label: 'Disabled', disabled: true },
]

const usageCode = computed(() => {
  const variantAttr = variant.value !== 'underline' ? ` variant="${variant.value}"` : ''
  return `<BaseTabs v-model="activeTab" :tabs="tabs"${variantAttr}>
  <template #panel-overview>
    <p>Overview content.</p>
  </template>
  <template #panel-features>
    <p>Features content.</p>
  </template>
  <template #panel-pricing>
    <p>Pricing content.</p>
  </template>
</BaseTabs>`
})
</script>

<template>
  <ComponentPreview
    title="Tabs"
    description="WAI-ARIA compliant tabbed navigation with keyboard arrow support and 3 visual styles."
  >
    <template #preview>
      <div class="w-full">
        <BaseTabs v-model="activeTab" :tabs="tabs" :variant="variant">
          <template #panel-overview>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Overview panel content. Use Left/Right arrow keys, Home, or End while focused on a tab to navigate.
            </p>
          </template>
          <template #panel-features>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Features panel content showcasing keyboard accessibility and badge counters.
            </p>
          </template>
          <template #panel-pricing>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Pricing panel content with transparent, copy-paste-free component licensing.
            </p>
          </template>
        </BaseTabs>
      </div>
    </template>

    <template #knobs>
      <div>
        <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Variant</label>
        <select
          v-model="variant"
          class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
        >
          <option value="underline">Underline</option>
          <option value="pills">Pills</option>
          <option value="segmented">Segmented</option>
        </select>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseTabs.vue" />
    </template>

    <template #variants>
      <div class="flex flex-col gap-6">
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Underline</p>
          <BaseTabs v-model="underlineTab" :tabs="tabs.slice(0, 3)" variant="underline">
            <template #panel-overview><p class="text-sm text-slate-600 dark:text-slate-400">Underline overview content</p></template>
            <template #panel-features><p class="text-sm text-slate-600 dark:text-slate-400">Underline features content</p></template>
            <template #panel-pricing><p class="text-sm text-slate-600 dark:text-slate-400">Underline pricing content</p></template>
          </BaseTabs>
        </div>
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Pills</p>
          <BaseTabs v-model="pillsTab" :tabs="tabs.slice(0, 3)" variant="pills">
            <template #panel-overview><p class="text-sm text-slate-600 dark:text-slate-400">Pills overview content</p></template>
            <template #panel-features><p class="text-sm text-slate-600 dark:text-slate-400">Pills features content</p></template>
            <template #panel-pricing><p class="text-sm text-slate-600 dark:text-slate-400">Pills pricing content</p></template>
          </BaseTabs>
        </div>
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Segmented</p>
          <BaseTabs v-model="segmentedTab" :tabs="tabs.slice(0, 3)" variant="segmented">
            <template #panel-overview><p class="text-sm text-slate-600 dark:text-slate-400">Segmented overview content</p></template>
            <template #panel-features><p class="text-sm text-slate-600 dark:text-slate-400">Segmented features content</p></template>
            <template #panel-pricing><p class="text-sm text-slate-600 dark:text-slate-400">Segmented pricing content</p></template>
          </BaseTabs>
        </div>
      </div>
    </template>
  </ComponentPreview>
</template>
