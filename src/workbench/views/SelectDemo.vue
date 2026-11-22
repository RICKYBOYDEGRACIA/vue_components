<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import rawSource from '@/components/ui/BaseSelect.vue?raw'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const value = ref<string | null>('vue')
const multiValue = ref<string[]>(['vue', 'svelte'])
const searchable = ref(true)
const clearable = ref(true)
const disabled = ref(false)

const options = [
  { label: 'Vue.js', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid.js', value: 'solid' },
  { label: 'Qwik', value: 'qwik' },
]

const usageCode = computed(() => {
  const attrs: string[] = [
    'v-model="value"',
    ':options="options"',
    'label="Framework"',
    'placeholder="Select a framework..."',
  ]
  if (searchable.value) attrs.push(':searchable="true"')
  if (clearable.value) attrs.push(':clearable="true"')
  if (disabled.value) attrs.push(':disabled="true"')
  return `<BaseSelect\n  ${attrs.join('\n  ')}\n/>`
})
</script>

<template>
  <ComponentPreview title="Select" description="Custom accessible dropdown with keyboard navigation, search, and multi-select.">
    <template #preview>
      <div class="w-full max-w-xs">
        <BaseSelect
          v-model="value"
          :options="options"
          :searchable="searchable"
          :clearable="clearable"
          :disabled="disabled"
          label="Framework"
          placeholder="Select a framework..."
        />
      </div>
    </template>

    <template #knobs>
      <div class="flex flex-col gap-3">
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="searchable" type="checkbox" class="rounded" /> Searchable
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="clearable" type="checkbox" class="rounded" /> Clearable
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="disabled" type="checkbox" class="rounded" /> Disabled
        </label>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseSelect.vue" />
    </template>

    <template #variants>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BaseSelect v-model="value" :options="options" label="Default" placeholder="Select..." />
        <BaseSelect v-model="value" :options="options" label="Searchable" :searchable="true" placeholder="Search..." />
        <BaseSelect v-model="multiValue" :options="options" label="Multi-select" :multiple="true" :clearable="true" placeholder="Select multiple..." />
        <BaseSelect v-model="value" :options="options" label="With error" error="Please select an option" placeholder="Select..." />
      </div>
    </template>
  </ComponentPreview>
</template>
