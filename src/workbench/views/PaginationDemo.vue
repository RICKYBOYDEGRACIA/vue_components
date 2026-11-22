<script setup lang="ts">
import { ref, computed } from 'vue'
import BasePagination from '@/components/ui/BasePagination.vue'
import rawSource from '@/components/ui/BasePagination.vue?raw'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const page = ref(1)
const pageSize = ref(10)
const totalItems = ref(237)
const siblingCount = ref(1)

const smallPage = ref(1)
const smallPageSize = ref(10)

const usageCode = computed(() => {
  const attrs: string[] = [
    'v-model:page="page"',
    'v-model:page-size="pageSize"',
    `:total-items="${totalItems.value}"`,
  ]
  if (siblingCount.value !== 1) attrs.push(`:sibling-count="${siblingCount.value}"`)
  return `<BasePagination\n  ${attrs.join('\n  ')}\n/>`
})
</script>

<template>
  <ComponentPreview title="Pagination" description="Smart ellipsis pagination with page-size selector and range summary.">
    <template #preview>
      <div class="w-full">
        <BasePagination
          v-model:page="page"
          v-model:page-size="pageSize"
          :total-items="totalItems"
          :sibling-count="siblingCount"
        />
      </div>
    </template>

    <template #knobs>
      <div class="flex flex-col gap-3">
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Total Items</label>
          <input
            v-model.number="totalItems"
            type="number"
            min="0"
            max="5000"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          />
        </div>
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Sibling Count</label>
          <select
            v-model.number="siblingCount"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option :value="1">1</option>
            <option :value="2">2</option>
          </select>
        </div>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BasePagination.vue" />
    </template>

    <template #variants>
      <div class="flex flex-col gap-6">
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
            Large Dataset ({{ totalItems }} items — page {{ page }})
          </p>
          <BasePagination v-model:page="page" v-model:page-size="pageSize" :total-items="totalItems" />
        </div>
        <div class="pt-4 border-t border-slate-200 dark:border-slate-800">
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
            Small Dataset (5 items)
          </p>
          <BasePagination v-model:page="smallPage" v-model:page-size="smallPageSize" :total-items="5" />
        </div>
      </div>
    </template>
  </ComponentPreview>
</template>
