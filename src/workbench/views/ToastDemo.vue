<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseToastContainer, { useToast, type ToastPosition } from '@/components/ui/BaseToastContainer.vue'
import rawSource from '@/components/ui/BaseToastContainer.vue?raw'
import BaseButton from '@/components/ui/BaseButton.vue'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const toast = useToast()
const position = ref<ToastPosition>('top-right')
const duration = ref(5000)

const usageCode = computed(() => {
  const posAttr = position.value !== 'top-right' ? ` position="${position.value}"` : ''
  const durArg = duration.value !== 5000 ? `, ${duration.value}` : ''
  return `<script setup lang="ts">
import BaseToastContainer, { useToast } from '@/components/ui/BaseToastContainer.vue'

const toast = useToast()
function notify() {
  toast.success('Changes saved!', 'Success'${durArg})
}
<\/script>

<template>
  <BaseButton @click="notify">Show Toast</BaseButton>
  <BaseToastContainer${posAttr} />
</template>`
})
</script>

<template>
  <ComponentPreview
    title="Toast"
    description="Non-blocking ephemeral notifications with hover pause and configurable positioning."
  >
    <template #preview>
      <div class="flex flex-wrap justify-center gap-3">
        <BaseButton variant="primary" @click="toast.success('Your changes have been saved.', 'Success', duration)">
          Success Toast
        </BaseButton>
        <BaseButton variant="danger" @click="toast.error('Failed to save changes. Please retry.', 'Error', duration)">
          Error Toast
        </BaseButton>
        <BaseButton variant="outline" @click="toast.info('A new software update is available.', 'Info', duration)">
          Info Toast
        </BaseButton>
        <BaseButton variant="secondary" @click="toast.warning('Your session will expire in 5 minutes.', 'Warning', duration)">
          Warning Toast
        </BaseButton>
        <BaseButton variant="ghost" @click="toast.clear()">
          Clear All
        </BaseButton>
      </div>
    </template>

    <template #knobs>
      <div class="flex flex-col gap-3">
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Position</label>
          <select
            v-model="position"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value="top-right">top-right</option>
            <option value="top-left">top-left</option>
            <option value="bottom-right">bottom-right</option>
            <option value="bottom-left">bottom-left</option>
          </select>
        </div>
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">
            Auto-dismiss (ms)
          </label>
          <select
            v-model.number="duration"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option :value="2000">2000ms (2s)</option>
            <option :value="5000">5000ms (5s)</option>
            <option :value="8000">8000ms (8s)</option>
            <option :value="0">0ms (Persistent)</option>
          </select>
        </div>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseToastContainer.vue" />
    </template>

    <template #variants>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Click any button in the preview above to trigger stacked toasts. Hovering over a toast pauses its auto-dismiss timer until your cursor leaves.
      </p>
    </template>
  </ComponentPreview>

  <BaseToastContainer :position="position" />
</template>
