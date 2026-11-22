<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import rawSource from '@/components/ui/BaseModal.vue?raw'
import BaseButton from '@/components/ui/BaseButton.vue'
import ComponentPreview from '../components/ComponentPreview.vue'
import CodeViewer from '../components/CodeViewer.vue'

const open = ref(false)
const size = ref<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md')
const persistent = ref(false)
const closeOnBackdrop = ref(true)
const closeOnEsc = ref(true)

const usageCode = computed(() => {
  const attrs: string[] = [
    'v-model:open="open"',
    'title="Example Modal"',
    'description="This is a sample modal dialog."',
  ]
  if (size.value !== 'md') attrs.push(`size="${size.value}"`)
  if (persistent.value) attrs.push(':persistent="true"')
  if (!closeOnBackdrop.value) attrs.push(':close-on-backdrop="false"')
  if (!closeOnEsc.value) attrs.push(':close-on-esc="false"')
  return `<BaseModal
  ${attrs.join('\n  ')}
>
  <p>Modal content goes here.</p>
  <template #footer>
    <BaseButton variant="outline" @click="open = false">Cancel</BaseButton>
    <BaseButton @click="open = false">Confirm</BaseButton>
  </template>
</BaseModal>`
})
</script>

<template>
  <ComponentPreview
    title="Modal"
    description="Accessible dialog with focus trap, scroll lock, keyboard Escape support, and persistent shake feedback."
  >
    <template #preview>
      <BaseButton @click="open = true">Open Modal</BaseButton>
      <BaseModal
        v-model:open="open"
        title="Example Modal"
        description="This is a sample modal dialog."
        :size="size"
        :persistent="persistent"
        :close-on-backdrop="closeOnBackdrop"
        :close-on-esc="closeOnEsc"
      >
        <p class="text-sm text-slate-600 dark:text-slate-400">
          Modal content goes here. Try pressing <kbd class="px-1.5 py-0.5 text-xs rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Tab</kbd> to test the focus trap, or enable <strong>Persistent</strong> to see the shake animation on outside click.
        </p>
        <template #footer>
          <div class="flex justify-end gap-2">
            <BaseButton variant="outline" @click="open = false">Cancel</BaseButton>
            <BaseButton @click="open = false">Confirm</BaseButton>
          </div>
        </template>
      </BaseModal>
    </template>

    <template #knobs>
      <div class="flex flex-col gap-3">
        <div>
          <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Size</label>
          <select
            v-model="size"
            class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option v-for="s in ['sm', 'md', 'lg', 'xl', 'full']" :key="s" :value="s">{{ s }}</option>
          </select>
        </div>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="persistent" type="checkbox" class="rounded" /> Persistent (shake)
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="closeOnBackdrop" type="checkbox" class="rounded" /> Close on backdrop
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input v-model="closeOnEsc" type="checkbox" class="rounded" /> Close on Escape
        </label>
      </div>
    </template>

    <template #code>
      <CodeViewer :usage="usageCode" :source="rawSource" filename="BaseModal.vue" />
    </template>
  </ComponentPreview>
</template>
