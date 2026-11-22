<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import rawSource from '@/components/ui/BaseInput.vue?raw'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const value = ref('')
const variantText = ref('')
const passwordValue = ref('secret123')
const error = ref('')
const size = ref<'sm' | 'md' | 'lg'>('md')
const type = ref<'text' | 'email' | 'password' | 'search'>('text')
const clearable = ref(true)
const disabled = ref(false)
const required = ref(false)

const usageCode = computed(() => {
  const attrs: string[] = ['v-model="value"', 'label="Label"', 'placeholder="Enter text..."']
  if (type.value !== 'text') attrs.push(`type="${type.value}"`)
  if (type.value === 'password') attrs.push(':show-password-toggle="true"')
  if (size.value !== 'md') attrs.push(`size="${size.value}"`)
  if (clearable.value) attrs.push(':clearable="true"')
  if (required.value) attrs.push(':required="true"')
  if (disabled.value) attrs.push(':disabled="true"')
  if (error.value) attrs.push(`error="${error.value}"`)
  return `<BaseInput\n  ${attrs.join('\n  ')}\n/>`
})
</script>

<template>
  <ComponentPreview title="Input" description="Text input field with validation, icons, clear button, and password toggle.">
    <template #preview>
      <div class="w-full max-w-xs">
        <BaseInput
          v-model="value"
          :type="type"
          :size="size"
          :disabled="disabled"
          :required="required"
          :error="error"
          :clearable="clearable"
          :show-password-toggle="type === 'password'"
          label="Label"
          placeholder="Enter text..."
        />
      </div>
    </template>

    <template #knobs>
      <div class="flex flex-col gap-3">
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Type</label>
          <select
            v-model="type"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option v-for="t in ['text', 'email', 'password', 'search']" :key="t" :value="t">{{ t }}</option>
          </select>
        </div>
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Size</label>
          <select
            v-model="size"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option v-for="s in ['sm', 'md', 'lg']" :key="s" :value="s">{{ s }}</option>
          </select>
        </div>
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
          <input v-model="clearable" type="checkbox" class="rounded" /> Clearable
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="required" type="checkbox" class="rounded" /> Required
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="disabled" type="checkbox" class="rounded" /> Disabled
        </label>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseInput.vue" />
    </template>

    <template #variants>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BaseInput v-model="variantText" label="Default" placeholder="Placeholder..." />
        <BaseInput v-model="variantText" label="With hint" hint="We will never share your email." placeholder="you@example.com" />
        <BaseInput v-model="variantText" label="With error" error="This field is required" placeholder="Placeholder..." />
        <BaseInput v-model="variantText" label="With prefix icon" placeholder="Search users...">
          <template #prefix>
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </template>
        </BaseInput>
        <BaseInput v-model="passwordValue" label="Password" type="password" :show-password-toggle="true" placeholder="Enter password..." />
        <BaseInput v-model="variantText" label="Disabled" :disabled="true" placeholder="Disabled..." />
      </div>
    </template>
  </ComponentPreview>
</template>
