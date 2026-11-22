<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseSwitch from '@/components/ui/BaseSwitch.vue'
import rawSource from '@/components/ui/BaseSwitch.vue?raw'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const enabled = ref(true)
const size = ref<'sm' | 'md'>('md')
const disabled = ref(false)
const showDescription = ref(true)

const usageCode = computed(() => {
  const attrs: string[] = ['v-model="enabled"', 'label="Enable notifications"']
  if (showDescription.value) attrs.push('description="Receive alerts for important updates."')
  if (size.value !== 'md') attrs.push(`size="${size.value}"`)
  if (disabled.value) attrs.push(':disabled="true"')
  return `<BaseSwitch\n  ${attrs.join('\n  ')}\n/>`
})
</script>

<template>
  <ComponentPreview title="Switch" description="Accessible toggle switch for boolean settings.">
    <template #preview>
      <BaseSwitch
        v-model="enabled"
        label="Enable notifications"
        :description="showDescription ? 'Receive alerts for important updates.' : undefined"
        :size="size"
        :disabled="disabled"
      />
    </template>

    <template #knobs>
      <div class="flex flex-col gap-3">
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Size</label>
          <select
            v-model="size"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value="sm">Small (sm)</option>
            <option value="md">Medium (md)</option>
          </select>
        </div>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="showDescription" type="checkbox" class="rounded" /> Show description
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="disabled" type="checkbox" class="rounded" /> Disabled
        </label>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseSwitch.vue" />
    </template>

    <template #variants>
      <div class="flex flex-col gap-4">
        <BaseSwitch v-model="enabled" label="Default switch" />
        <BaseSwitch v-model="enabled" label="With description" description="Additional context shown here." />
        <BaseSwitch :model-value="true" label="Active state" />
        <BaseSwitch v-model="enabled" label="Small size" size="sm" />
        <BaseSwitch v-model="enabled" label="Disabled" :disabled="true" />
      </div>
    </template>
  </ComponentPreview>
</template>
