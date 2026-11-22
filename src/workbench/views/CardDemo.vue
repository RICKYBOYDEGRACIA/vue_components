<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import rawSource from '@/components/ui/BaseCard.vue?raw'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const padding = ref<'none' | 'sm' | 'md' | 'lg'>('md')
const hoverable = ref(false)
const bordered = ref(true)
const showHeader = ref(true)
const showFooter = ref(false)

const usageCode = computed(() => {
  const attrs: string[] = []
  if (padding.value !== 'md') attrs.push(`padding="${padding.value}"`)
  if (hoverable.value) attrs.push(':hoverable="true"')
  if (!bordered.value) attrs.push(':bordered="false"')
  const attrStr = attrs.length ? ` ${attrs.join(' ')}` : ''
  const lines = [`<BaseCard${attrStr}>`]
  if (showHeader.value) lines.push('  <template #header><h3>Card Title</h3></template>')
  lines.push('  <p>Card body content goes here.</p>')
  if (showFooter.value) lines.push('  <template #footer><span>Card footer</span></template>')
  lines.push('</BaseCard>')
  return lines.join('\n')
})
</script>

<template>
  <ComponentPreview title="Card" description="Flexible surface container for grouping content.">
    <template #preview>
      <BaseCard
        class="max-w-sm w-full"
        :padding="padding"
        :hoverable="hoverable"
        :bordered="bordered"
      >
        <template v-if="showHeader" #header>
          <h3 class="font-semibold text-slate-900 dark:text-slate-100 text-sm">Card Title</h3>
        </template>
        <p class="text-slate-600 dark:text-slate-400 text-sm">
          Card body content goes here. Customize padding, borders, and hover states with the knobs.
        </p>
        <template v-if="showFooter" #footer>
          <span class="text-xs text-slate-400">Updated 2 minutes ago</span>
        </template>
      </BaseCard>
    </template>

    <template #knobs>
      <div class="flex flex-col gap-3">
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Padding</label>
          <select
            v-model="padding"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option v-for="p in ['none', 'sm', 'md', 'lg']" :key="p" :value="p">{{ p }}</option>
          </select>
        </div>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="hoverable" type="checkbox" class="rounded" />
          Hoverable
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="bordered" type="checkbox" class="rounded" />
          Bordered
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="showHeader" type="checkbox" class="rounded" />
          Show header
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="showFooter" type="checkbox" class="rounded" />
          Show footer
        </label>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseCard.vue" />
    </template>

    <template #variants>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BaseCard>
          <template #header>
            <h3 class="font-semibold text-slate-900 dark:text-slate-100 text-sm">With Header & Footer</h3>
          </template>
          <p class="text-sm text-slate-600 dark:text-slate-400">Card body content with distinct sections.</p>
          <template #footer>
            <p class="text-xs text-slate-400">Footer text</p>
          </template>
        </BaseCard>
        <BaseCard :hoverable="true">
          <p class="text-sm text-slate-600 dark:text-slate-400">Hoverable card — hover to see shadow transition.</p>
        </BaseCard>
        <BaseCard padding="lg">
          <p class="text-sm text-slate-600 dark:text-slate-400">Large padding card.</p>
        </BaseCard>
        <BaseCard :bordered="false" class="shadow-md">
          <p class="text-sm text-slate-600 dark:text-slate-400">No border, elevated with shadow.</p>
        </BaseCard>
      </div>
    </template>
  </ComponentPreview>
</template>
