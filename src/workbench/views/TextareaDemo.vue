<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseTextarea from '@/components/ui/BaseTextarea.vue'
import rawSource from '@/components/ui/BaseTextarea.vue?raw'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const value = ref('')
const sampleValue = ref('')
const autoResize = ref(false)
const showMaxLength = ref(true)
const disabled = ref(false)
const error = ref('')

const usageCode = computed(() => {
  const attrs: string[] = ['v-model="value"', 'label="Message"', 'placeholder="Type your message..."']
  if (autoResize.value) attrs.push(':auto-resize="true"')
  if (showMaxLength.value) attrs.push(':max-length="200"')
  if (disabled.value) attrs.push(':disabled="true"')
  if (error.value) attrs.push(`error="${error.value}"`)
  return `<BaseTextarea\n  ${attrs.join('\n  ')}\n/>`
})
</script>

<template>
  <ComponentPreview title="Textarea" description="Multi-line text input with auto-resize and character count.">
    <template #preview>
      <div class="w-full max-w-sm">
        <BaseTextarea
          v-model="value"
          label="Message"
          :auto-resize="autoResize"
          :max-length="showMaxLength ? 200 : undefined"
          :disabled="disabled"
          :error="error"
          placeholder="Type your message..."
        />
      </div>
    </template>

    <template #knobs>
      <div class="flex flex-col gap-3">
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Error message</label>
          <input
            v-model="error"
            type="text"
            placeholder="Leave empty for no error"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          />
        </div>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="autoResize" type="checkbox" class="rounded" /> Auto Resize
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="showMaxLength" type="checkbox" class="rounded" /> Character limit (200)
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="disabled" type="checkbox" class="rounded" /> Disabled
        </label>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseTextarea.vue" />
    </template>

    <template #variants>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BaseTextarea v-model="sampleValue" label="Default" placeholder="Enter text..." />
        <BaseTextarea v-model="sampleValue" label="With char count" :max-length="150" placeholder="Max 150 characters..." />
        <BaseTextarea v-model="sampleValue" label="Auto resize" :auto-resize="true" placeholder="Grows automatically with content..." />
        <BaseTextarea v-model="sampleValue" label="With error" error="This field is required" placeholder="..." />
      </div>
    </template>
  </ComponentPreview>
</template>
