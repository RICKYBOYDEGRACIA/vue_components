<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseSkeleton from '@/components/ui/BaseSkeleton.vue'
import rawSource from '@/components/ui/BaseSkeleton.vue?raw'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const variant = ref<'text' | 'circular' | 'rectangular'>('text')
const animated = ref(true)
const width = ref('240px')
const height = ref('20px')

const resolvedHeight = computed(() => {
  if (variant.value === 'circular') return width.value
  return height.value
})

const usageCode = computed(() => {
  const attrs: string[] = [`variant="${variant.value}"`]
  if (width.value) attrs.push(`width="${width.value}"`)
  if (resolvedHeight.value) attrs.push(`height="${resolvedHeight.value}"`)
  if (!animated.value) attrs.push(':animated="false"')
  return `<BaseSkeleton ${attrs.join(' ')} />`
})
</script>

<template>
  <ComponentPreview title="Skeleton" description="Loading placeholders matching content layout.">
    <template #preview>
      <BaseSkeleton
        :variant="variant"
        :width="width"
        :height="resolvedHeight"
        :animated="animated"
      />
    </template>

    <template #knobs>
      <div class="flex flex-col gap-3">
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Variant</label>
          <select
            v-model="variant"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            @change="
              if (variant === 'circular') { width = '56px'; height = '56px' }
              else if (variant === 'rectangular') { width = '240px'; height = '96px' }
              else { width = '240px'; height = '16px' }
            "
          >
            <option value="text">text</option>
            <option value="circular">circular</option>
            <option value="rectangular">rectangular</option>
          </select>
        </div>
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Width</label>
          <input
            v-model="width"
            type="text"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          />
        </div>
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Height</label>
          <input
            v-model="height"
            type="text"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          />
        </div>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="animated" type="checkbox" class="rounded" />
          Animated pulse
        </label>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseSkeleton.vue" />
    </template>

    <template #variants>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Text Lines</p>
          <div class="space-y-2.5 max-w-sm">
            <BaseSkeleton variant="text" width="60%" />
            <BaseSkeleton variant="text" />
            <BaseSkeleton variant="text" width="80%" />
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Card Skeleton</p>
          <div class="max-w-sm space-y-3 p-4 border border-slate-200 dark:border-slate-800 rounded-xl">
            <div class="flex items-center gap-3">
              <BaseSkeleton variant="circular" width="40px" height="40px" />
              <div class="flex-1 space-y-2">
                <BaseSkeleton variant="text" width="50%" />
                <BaseSkeleton variant="text" width="30%" />
              </div>
            </div>
            <BaseSkeleton variant="rectangular" height="120px" />
            <BaseSkeleton variant="text" />
            <BaseSkeleton variant="text" width="70%" />
          </div>
        </div>
      </div>
    </template>
  </ComponentPreview>
</template>
