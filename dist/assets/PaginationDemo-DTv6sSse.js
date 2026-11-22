import{d as f,o as x,c as h,w as r,a as n,t as b,b as p,u as w,f as v,s as S,v as k,i as s,j as z}from"./index-CdapSEgI.js";import{_ as g}from"./BasePagination.vue_vue_type_script_setup_true_lang-CIHRwGMy.js";import{_ as P,a as y}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";const I=`<script setup lang="ts">
import { computed, useAttrs, watch } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BasePaginationProps {
  totalItems: number
  pageSizeOptions?: number[]
  siblingCount?: number
}

const props = withDefaults(defineProps<BasePaginationProps>(), {
  pageSizeOptions: () => [10, 25, 50, 100],
  siblingCount: 1,
})

const page = defineModel<number>('page', { default: 1 })
const pageSize = defineModel<number>('pageSize', { default: 10 })
const $attrs = useAttrs()

const totalPages = computed(() => Math.max(1, Math.ceil(props.totalItems / Math.max(1, pageSize.value))))

watch(totalPages, (max) => {
  if (page.value > max) {
    page.value = max
  } else if (page.value < 1) {
    page.value = 1
  }
})

const startItem = computed(() =>
  props.totalItems === 0 ? 0 : Math.min((page.value - 1) * pageSize.value + 1, props.totalItems),
)
const endItem = computed(() => Math.min(page.value * pageSize.value, props.totalItems))

const pageNumbers = computed<Array<number | '...'>>(() => {
  const total = totalPages.value
  const current = page.value
  const sibling = props.siblingCount

  const range = (start: number, end: number): number[] =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i)

  if (total <= 2 * sibling + 5) return range(1, total)

  const leftSibling = Math.max(current - sibling, 2)
  const rightSibling = Math.min(current + sibling, total - 1)

  const showLeftEllipsis = leftSibling > 2
  const showRightEllipsis = rightSibling < total - 1

  if (!showLeftEllipsis && showRightEllipsis) {
    return [...range(1, 2 + 2 * sibling + 1), '...', total]
  }
  if (showLeftEllipsis && !showRightEllipsis) {
    return [1, '...', ...range(total - (2 + 2 * sibling), total)]
  }
  return [1, '...', ...range(leftSibling, rightSibling), '...', total]
})

function goTo(p: number) {
  if (p < 1 || p > totalPages.value) return
  page.value = p
}

function handlePageSizeChange(event: Event) {
  const target = event.target as HTMLSelectElement
  pageSize.value = Number(target.value)
  page.value = 1
}

const btnBase =
  'flex items-center justify-center h-8 min-w-[2rem] px-2 text-sm rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'
const btnActive = 'bg-blue-600 text-white dark:bg-blue-500 font-medium'
const btnInactive =
  'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
const btnDisabled = 'opacity-40 pointer-events-none'
<\/script>

<template>
  <div
    v-bind="{ ...$attrs, class: undefined }"
    :class="cn('flex flex-col sm:flex-row items-center justify-between gap-3', $attrs.class as string)"
    aria-label="Pagination"
  >
    <!-- Summary + page size selector -->
    <div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
      <span v-if="totalItems > 0">
        Showing
        <strong class="text-slate-900 dark:text-slate-100">{{ startItem }}–{{ endItem }}</strong>
        of
        <strong class="text-slate-900 dark:text-slate-100">{{ totalItems }}</strong>
        results
      </span>
      <span v-else>No results</span>

      <select
        :value="pageSize"
        class="text-sm border border-slate-200 dark:border-slate-700 rounded-md bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        aria-label="Results per page"
        @change="handlePageSizeChange"
      >
        <option v-for="opt in pageSizeOptions" :key="opt" :value="opt">{{ opt }} / page</option>
      </select>
    </div>

    <!-- Page navigation -->
    <nav class="flex items-center gap-1" aria-label="Page navigation">
      <!-- Previous -->
      <button
        type="button"
        :class="cn(btnBase, page <= 1 ? btnDisabled : btnInactive)"
        :disabled="page <= 1"
        aria-label="Previous page"
        @click="goTo(page - 1)"
      >
        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Pages -->
      <template v-for="(p, i) in pageNumbers" :key="\`\${p}-\${i}\`">
        <span
          v-if="p === '...'"
          class="flex items-center justify-center h-8 w-8 text-sm text-slate-400 dark:text-slate-500 select-none"
          aria-hidden="true"
        >
          …
        </span>
        <button
          v-else
          type="button"
          :class="cn(btnBase, page === p ? btnActive : btnInactive)"
          :aria-label="\`Page \${p}\`"
          :aria-current="page === p ? 'page' : undefined"
          @click="goTo(p)"
        >
          {{ p }}
        </button>
      </template>

      <!-- Next -->
      <button
        type="button"
        :class="cn(btnBase, page >= totalPages ? btnDisabled : btnInactive)"
        :disabled="page >= totalPages"
        aria-label="Next page"
        @click="goTo(page + 1)"
      >
        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </nav>
  </div>
</template>
`,M={class:"w-full"},B={class:"flex flex-col gap-3"},C={class:"flex flex-col gap-6"},$={class:"text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3"},D={class:"pt-4 border-t border-slate-200 dark:border-slate-800"},L=f({__name:"PaginationDemo",setup(E){const l=s(1),o=s(10),a=s(237),i=s(1),d=s(1),m=s(10),c=z(()=>{const u=['v-model:page="page"','v-model:page-size="pageSize"',`:total-items="${a.value}"`];return i.value!==1&&u.push(`:sibling-count="${i.value}"`),`<BasePagination
  ${u.join(`
  `)}
/>`});return(u,e)=>(x(),h(y,{title:"Pagination",description:"Smart ellipsis pagination with page-size selector and range summary."},{preview:r(()=>[n("div",M,[p(g,{page:l.value,"onUpdate:page":e[0]||(e[0]=t=>l.value=t),"page-size":o.value,"onUpdate:pageSize":e[1]||(e[1]=t=>o.value=t),"total-items":a.value,"sibling-count":i.value},null,8,["page","page-size","total-items","sibling-count"])])]),knobs:r(()=>[n("div",B,[n("div",null,[e[8]||(e[8]=n("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Total Items",-1)),v(n("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>a.value=t),type:"number",min:"0",max:"5000",class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},null,512),[[S,a.value,void 0,{number:!0}]])]),n("div",null,[e[10]||(e[10]=n("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Sibling Count",-1)),v(n("select",{"onUpdate:modelValue":e[3]||(e[3]=t=>i.value=t),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[...e[9]||(e[9]=[n("option",{value:1},"1",-1),n("option",{value:2},"2",-1)])],512),[[k,i.value,void 0,{number:!0}]])])])]),code:r(()=>[p(P,{usage:c.value,source:w(I),filename:"BasePagination.vue"},null,8,["usage","source"])]),variants:r(()=>[n("div",C,[n("div",null,[n("p",$," Large Dataset ("+b(a.value)+" items — page "+b(l.value)+") ",1),p(g,{page:l.value,"onUpdate:page":e[4]||(e[4]=t=>l.value=t),"page-size":o.value,"onUpdate:pageSize":e[5]||(e[5]=t=>o.value=t),"total-items":a.value},null,8,["page","page-size","total-items"])]),n("div",D,[e[11]||(e[11]=n("p",{class:"text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3"}," Small Dataset (5 items) ",-1)),p(g,{page:d.value,"onUpdate:page":e[6]||(e[6]=t=>d.value=t),"page-size":m.value,"onUpdate:pageSize":e[7]||(e[7]=t=>m.value=t),"total-items":5},null,8,["page","page-size"])])])]),_:1}))}});export{L as default};
