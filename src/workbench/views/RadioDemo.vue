<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseRadioGroup from '@/components/ui/BaseRadioGroup.vue'
import rawSource from '@/components/ui/BaseRadioGroup.vue?raw'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const value = ref('vue')
const variant = ref<'default' | 'cards'>('default')
const orientation = ref<'vertical' | 'horizontal'>('vertical')
const disabled = ref(false)

const options = [
  { label: 'Vue.js', value: 'vue', description: 'Progressive JavaScript framework' },
  { label: 'React', value: 'react', description: 'UI library by Meta' },
  { label: 'Svelte', value: 'svelte', description: 'Cybernetically enhanced web apps' },
]

const usageCode = computed(() => {
  const attrs: string[] = ['v-model="selected"', ':options="options"', 'label="Choose a framework"']
  if (variant.value !== 'default') attrs.push(`variant="${variant.value}"`)
  if (orientation.value !== 'vertical') attrs.push(`orientation="${orientation.value}"`)
  if (disabled.value) attrs.push(':disabled="true"')
  return `<BaseRadioGroup\n  ${attrs.join('\n  ')}\n/>`
})
</script>

<template>
  <ComponentPreview title="Radio Group" description="Single-select radio buttons with vertical, horizontal, and card variants.">
    <template #preview>
      <div class="w-full max-w-md">
        <BaseRadioGroup
          v-model="value"
          :options="options"
          :variant="variant"
          :orientation="orientation"
          :disabled="disabled"
          label="Choose a framework"
        />
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
            <option value="default">Default</option>
            <option value="cards">Cards</option>
          </select>
        </div>
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Orientation</label>
          <select
            v-model="orientation"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value="vertical">Vertical</option>
            <option value="horizontal">Horizontal</option>
          </select>
        </div>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="disabled" type="checkbox" class="rounded" /> Disabled
        </label>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseRadioGroup.vue" />
    </template>

    <template #variants>
      <div class="flex flex-col gap-6">
        <BaseRadioGroup v-model="value" :options="options" name="demo-vertical" label="Default vertical" />
        <BaseRadioGroup v-model="value" :options="options" name="demo-horizontal" orientation="horizontal" label="Horizontal" />
        <BaseRadioGroup v-model="value" :options="options" name="demo-cards" variant="cards" label="Card variant" />
      </div>
    </template>
  </ComponentPreview>
</template>
