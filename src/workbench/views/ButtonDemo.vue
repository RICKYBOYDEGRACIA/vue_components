<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import rawSource from '@/components/ui/BaseButton.vue?raw'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const variant = ref<'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'link'>('primary')
const size = ref<'xs' | 'sm' | 'md' | 'lg' | 'icon'>('md')
const loading = ref(false)
const disabled = ref(false)
const block = ref(false)

const usageCode = computed(() => {
  const attrs: string[] = []
  if (variant.value !== 'primary') attrs.push(`variant="${variant.value}"`)
  if (size.value !== 'md') attrs.push(`size="${size.value}"`)
  if (loading.value) attrs.push(':loading="true"')
  if (disabled.value) attrs.push(':disabled="true"')
  if (block.value) attrs.push(':block="true"')
  const attrStr = attrs.length ? ` ${attrs.join(' ')}` : ''
  const label = size.value === 'icon' ? '\n  <svg class="h-4 w-4" ... />\n' : 'Click me'
  return `<BaseButton${attrStr}>${label}</BaseButton>`
})
</script>

<template>
  <ComponentPreview
    title="Button"
    description="Primary trigger for user actions, form submissions, and navigation."
  >
    <template #preview>
      <div :class="block ? 'w-full' : ''">
        <BaseButton
          :variant="variant"
          :size="size"
          :loading="loading"
          :disabled="disabled"
          :block="block"
        >
          <svg
            v-if="size === 'icon'"
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span v-else>Click me</span>
        </BaseButton>
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
            <option v-for="v in ['primary', 'secondary', 'outline', 'ghost', 'danger', 'link']" :key="v" :value="v">
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
            <option v-for="s in ['xs', 'sm', 'md', 'lg', 'icon']" :key="s" :value="s">
              {{ s }}
            </option>
          </select>
        </div>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="loading" type="checkbox" class="rounded" />
          Loading
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="disabled" type="checkbox" class="rounded" />
          Disabled
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="block" type="checkbox" class="rounded" />
          Full width (block)
        </label>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseButton.vue" />
    </template>

    <template #variants>
      <div class="flex flex-col gap-6">
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Variants</p>
          <div class="flex flex-wrap items-center gap-3">
            <BaseButton variant="primary">Primary</BaseButton>
            <BaseButton variant="secondary">Secondary</BaseButton>
            <BaseButton variant="outline">Outline</BaseButton>
            <BaseButton variant="ghost">Ghost</BaseButton>
            <BaseButton variant="danger">Danger</BaseButton>
            <BaseButton variant="link">Link</BaseButton>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Sizes</p>
          <div class="flex flex-wrap items-center gap-3">
            <BaseButton size="xs">Extra Small</BaseButton>
            <BaseButton size="sm">Small</BaseButton>
            <BaseButton size="md">Medium</BaseButton>
            <BaseButton size="lg">Large</BaseButton>
            <BaseButton size="icon" aria-label="Add item">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </BaseButton>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">With Icons & States</p>
          <div class="flex flex-wrap items-center gap-3">
            <BaseButton variant="primary">
              <template #prefix>
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </template>
              Download
            </BaseButton>
            <BaseButton variant="outline">
              Continue
              <template #suffix>
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </template>
            </BaseButton>
            <BaseButton :loading="true">Loading</BaseButton>
            <BaseButton :disabled="true">Disabled</BaseButton>
          </div>
        </div>
      </div>
    </template>
  </ComponentPreview>
</template>
