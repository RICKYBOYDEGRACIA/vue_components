<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'
import rawSource from '@/components/ui/BaseCheckbox.vue?raw'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const single = ref(true)
const multi = ref<string[]>(['vue'])
const indeterminate = ref(false)
const disabled = ref(false)
const showDescription = ref(true)

const usageCode = computed(() => {
  const attrs: string[] = ['v-model="accepted"', 'label="Accept terms and conditions"']
  if (showDescription.value) attrs.push('description="You agree to our terms of service."')
  if (indeterminate.value) attrs.push(':indeterminate="true"')
  if (disabled.value) attrs.push(':disabled="true"')
  return `<BaseCheckbox\n  ${attrs.join('\n  ')}\n/>`
})
</script>

<template>
  <ComponentPreview title="Checkbox" description="Single toggle and multi-select checkbox with indeterminate state.">
    <template #preview>
      <div class="flex flex-col gap-3">
        <BaseCheckbox
          v-model="single"
          :indeterminate="indeterminate"
          :disabled="disabled"
          label="Accept terms and conditions"
          :description="showDescription ? 'You agree to our terms of service.' : undefined"
        />
      </div>
    </template>

    <template #knobs>
      <div class="flex flex-col gap-3">
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="indeterminate" type="checkbox" class="rounded" /> Indeterminate
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="showDescription" type="checkbox" class="rounded" /> Show description
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="disabled" type="checkbox" class="rounded" /> Disabled
        </label>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseCheckbox.vue" />
    </template>

    <template #variants>
      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-3">
          <BaseCheckbox v-model="single" label="Single checkbox" />
          <BaseCheckbox v-model="single" label="With description" description="Additional context for this option." />
          <BaseCheckbox :model-value="false" label="Indeterminate state" :indeterminate="true" />
          <BaseCheckbox :model-value="true" label="Disabled checked" :disabled="true" />
        </div>
        <div class="pt-3 border-t border-slate-200 dark:border-slate-800">
          <p class="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Multi-select (array v-model)</p>
          <div class="flex flex-col gap-2">
            <BaseCheckbox v-model="multi" value="vue" label="Vue.js" />
            <BaseCheckbox v-model="multi" value="react" label="React" />
            <BaseCheckbox v-model="multi" value="svelte" label="Svelte" />
          </div>
          <p class="text-xs text-slate-400 mt-2">Selected: {{ multi.join(', ') || 'none' }}</p>
        </div>
      </div>
    </template>
  </ComponentPreview>
</template>
