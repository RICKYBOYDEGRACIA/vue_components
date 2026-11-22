<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseDrawer from '@/components/ui/BaseDrawer.vue'
import rawSource from '@/components/ui/BaseDrawer.vue?raw'
import BaseButton from '@/components/ui/BaseButton.vue'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const open = ref(false)
const side = ref<'left' | 'right' | 'top' | 'bottom'>('right')
const persistent = ref(false)

function openFrom(edge: 'left' | 'right' | 'top' | 'bottom') {
  side.value = edge
  open.value = true
}

const usageCode = computed(() => {
  const attrs: string[] = ['v-model:open="open"', 'title="Drawer Panel"']
  if (side.value !== 'right') attrs.push(`side="${side.value}"`)
  if (persistent.value) attrs.push(':persistent="true"')
  return `<BaseDrawer ${attrs.join(' ')}>
  <p>Drawer content slides in from the ${side.value}.</p>
  <template #footer>
    <BaseButton @click="open = false">Done</BaseButton>
  </template>
</BaseDrawer>`
})
</script>

<template>
  <ComponentPreview title="Drawer" description="Slide-over panel anchored to any edge of the viewport.">
    <template #preview>
      <div class="flex flex-wrap justify-center gap-3">
        <BaseButton @click="openFrom('right')">Open Right</BaseButton>
        <BaseButton variant="outline" @click="openFrom('left')">Open Left</BaseButton>
        <BaseButton variant="outline" @click="openFrom('top')">Open Top</BaseButton>
        <BaseButton variant="outline" @click="openFrom('bottom')">Open Bottom</BaseButton>
      </div>

      <BaseDrawer
        v-model:open="open"
        :side="side"
        :persistent="persistent"
        title="Drawer Panel"
        description="Secondary workflow or contextual details."
      >
        <div class="space-y-3 text-sm text-slate-600 dark:text-slate-400">
          <p>Drawer content slides smoothly in from the <strong class="text-slate-900 dark:text-slate-100">{{ side }}</strong> edge.</p>
          <p>Focus is trapped inside the panel while open and restored to the trigger button upon closing.</p>
        </div>
        <template #footer>
          <div class="flex justify-end gap-2">
            <BaseButton variant="outline" @click="open = false">Cancel</BaseButton>
            <BaseButton @click="open = false">Save Changes</BaseButton>
          </div>
        </template>
      </BaseDrawer>
    </template>

    <template #knobs>
      <div class="flex flex-col gap-3">
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Side</label>
          <select
            v-model="side"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value="right">right</option>
            <option value="left">left</option>
            <option value="top">top</option>
            <option value="bottom">bottom</option>
          </select>
        </div>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="persistent" type="checkbox" class="rounded" /> Persistent (shake)
        </label>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseDrawer.vue" />
    </template>
  </ComponentPreview>
</template>
