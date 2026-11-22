<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseTooltip from '@/components/ui/BaseTooltip.vue'
import rawSource from '@/components/ui/BaseTooltip.vue?raw'
import BaseButton from '@/components/ui/BaseButton.vue'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const content = ref('Helpful contextual tooltip!')
const placement = ref<'top' | 'bottom' | 'left' | 'right'>('top')
const delay = ref(200)

const placements = ['top', 'right', 'bottom', 'left'] as const

const usageCode = computed(() => {
  const attrs: string[] = [`content="${content.value}"`]
  if (placement.value !== 'top') attrs.push(`placement="${placement.value}"`)
  if (delay.value !== 200) attrs.push(`:delay="${delay.value}"`)
  return `<BaseTooltip ${attrs.join(' ')}>
  <BaseButton variant="outline">Hover or focus me</BaseButton>
</BaseTooltip>`
})
</script>

<template>
  <ComponentPreview
    title="Tooltip"
    description="Accessible hover and keyboard-focus tooltip with configurable placement and show delay."
  >
    <template #preview>
      <div class="py-6">
        <BaseTooltip :content="content" :placement="placement" :delay="delay">
          <BaseButton variant="outline">Hover or focus me</BaseButton>
        </BaseTooltip>
      </div>
    </template>

    <template #knobs>
      <div class="flex flex-col gap-3">
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Content</label>
          <input
            v-model="content"
            type="text"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          />
        </div>
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Placement</label>
          <select
            v-model="placement"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option v-for="p in placements" :key="p" :value="p">{{ p }}</option>
          </select>
        </div>
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Delay (ms)</label>
          <select
            v-model.number="delay"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option :value="0">0ms (Instant)</option>
            <option :value="200">200ms</option>
            <option :value="500">500ms</option>
          </select>
        </div>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseTooltip.vue" />
    </template>

    <template #variants>
      <div class="flex flex-wrap justify-center gap-6 py-8">
        <BaseTooltip
          v-for="p in placements"
          :key="p"
          :content="`${p} tooltip`"
          :placement="p"
          :delay="100"
        >
          <BaseButton variant="outline" size="sm" class="capitalize">{{ p }}</BaseButton>
        </BaseTooltip>
      </div>
    </template>
  </ComponentPreview>
</template>
