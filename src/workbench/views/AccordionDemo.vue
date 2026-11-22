<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseAccordion, { type AccordionItem } from '@/components/ui/BaseAccordion.vue'
import rawSource from '@/components/ui/BaseAccordion.vue?raw'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const value = ref<Array<string | number> | string | number>(['q1'])
const multiple = ref(false)

const items: AccordionItem[] = [
  {
    key: 'q1',
    title: 'What is Vue.js?',
    content: 'Vue.js is a progressive JavaScript framework for building composable, reactive user interfaces.',
  },
  {
    key: 'q2',
    title: 'Are these components accessible?',
    content: 'Yes! All components follow WAI-ARIA guidelines with keyboard navigation, ARIA roles, and focus management.',
  },
  {
    key: 'q3',
    title: 'Can I copy and paste individual components?',
    content: 'Absolutely. Each component is self-contained with zero cross-component imports — just copy the .vue file from the Component Source tab.',
  },
  {
    key: 'q4',
    title: 'What about dark mode?',
    content: 'Every component ships with complete dark mode parity using Tailwind CSS dark: variants.',
  },
]

const usageCode = computed(() => {
  const multiAttr = multiple.value ? ' :multiple="true"' : ''
  return `<BaseAccordion v-model="openItems" :items="items"${multiAttr} />`
})
</script>

<template>
  <ComponentPreview
    title="Accordion"
    description="Collapsible disclosure sections with smooth CSS grid height transitions."
  >
    <template #preview>
      <div class="w-full max-w-lg">
        <BaseAccordion v-model="value" :items="items" :multiple="multiple" />
      </div>
    </template>

    <template #knobs>
      <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
        <input v-model="multiple" type="checkbox" class="rounded" /> Allow multiple open
      </label>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseAccordion.vue" />
    </template>
  </ComponentPreview>
</template>
