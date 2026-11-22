<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import rawSource from '@/components/ui/BaseBadge.vue?raw'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const variant = ref<'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'outline'>('primary')
const size = ref<'sm' | 'md'>('md')
const dot = ref(false)
const removable = ref(false)
const previewRemoved = ref(false)

const badges = ref(['Vue 3', 'TypeScript', 'Tailwind CSS'])
function remove(label: string) {
  badges.value = badges.value.filter((b) => b !== label)
}
function reset() {
  badges.value = ['Vue 3', 'TypeScript', 'Tailwind CSS']
}

const usageCode = computed(() => {
  const attrs: string[] = []
  if (variant.value !== 'neutral') attrs.push(`variant="${variant.value}"`)
  if (size.value !== 'md') attrs.push(`size="${size.value}"`)
  if (dot.value) attrs.push(':dot="true"')
  if (removable.value) attrs.push(':removable="true" @remove="handleRemove"')
  const attrStr = attrs.length ? ` ${attrs.join(' ')}` : ''
  return `<BaseBadge${attrStr}>Status</BaseBadge>`
})
</script>

<template>
  <ComponentPreview title="Badge" description="Status indicators, tags, and counters.">
    <template #preview>
      <div class="flex items-center gap-3">
        <BaseBadge
          v-if="!previewRemoved"
          :variant="variant"
          :size="size"
          :dot="dot"
          :removable="removable"
          @remove="previewRemoved = true"
        >
          Status
        </BaseBadge>
        <button
          v-else
          type="button"
          class="text-xs text-blue-600 dark:text-blue-400 hover:underline"
          @click="previewRemoved = false"
        >
          Restore badge
        </button>
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
            <option v-for="v in ['neutral', 'primary', 'success', 'warning', 'danger', 'outline']" :key="v" :value="v">
              {{ v }}
            </option>
          </select>
        </div>
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Size</label>
          <select
            v-model="size"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value="sm">sm</option>
            <option value="md">md</option>
          </select>
        </div>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="dot" type="checkbox" class="rounded" />
          Status dot
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="removable" type="checkbox" class="rounded" />
          Removable
        </label>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseBadge.vue" />
    </template>

    <template #variants>
      <div class="flex flex-col gap-6">
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">All Variants</p>
          <div class="flex flex-wrap gap-2">
            <BaseBadge variant="neutral">Neutral</BaseBadge>
            <BaseBadge variant="primary">Primary</BaseBadge>
            <BaseBadge variant="success">Success</BaseBadge>
            <BaseBadge variant="warning">Warning</BaseBadge>
            <BaseBadge variant="danger">Danger</BaseBadge>
            <BaseBadge variant="outline">Outline</BaseBadge>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">With Dot</p>
          <div class="flex flex-wrap gap-2">
            <BaseBadge variant="success" :dot="true">Online</BaseBadge>
            <BaseBadge variant="warning" :dot="true">Away</BaseBadge>
            <BaseBadge variant="danger" :dot="true">Offline</BaseBadge>
            <BaseBadge variant="primary" :dot="true">In Progress</BaseBadge>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Removable Tags</p>
          <div class="flex flex-wrap gap-2 items-center">
            <BaseBadge
              v-for="badge in badges"
              :key="badge"
              variant="primary"
              :removable="true"
              @remove="remove(badge)"
            >
              {{ badge }}
            </BaseBadge>
            <button
              v-if="badges.length < 3"
              type="button"
              class="text-xs text-blue-600 dark:text-blue-400 hover:underline"
              @click="reset"
            >
              Reset tags
            </button>
          </div>
        </div>
      </div>
    </template>
  </ComponentPreview>
</template>
