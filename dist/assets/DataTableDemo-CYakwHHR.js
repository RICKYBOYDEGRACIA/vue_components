import{d as Z,x as ee,l as te,o as r,g as o,m as _,k as C,a as l,n as j,u as K,F as M,r as P,H as Y,E as G,p as le,z as Q,j as A,e as y,t as D,i as h,c as X,w as f,b as S,f as L,h as N}from"./index-CdapSEgI.js";import{c as U,_ as ne,a as se}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";import{_ as ae}from"./BasePagination.vue_vue_type_script_setup_true_lang-CIHRwGMy.js";import{_ as q}from"./BaseBadge.vue_vue_type_script_setup_true_lang-ew2DSwq6.js";import{_ as I}from"./BaseButton.vue_vue_type_script_setup_true_lang-DaWVsIZi.js";const re={key:0,class:"mb-3"},oe={class:"overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800"},ie={class:"w-full text-sm border-collapse"},de={key:0,class:"w-10 px-3 py-3 border-b border-slate-200 dark:border-slate-700"},ue={class:"flex items-center justify-center"},ce=["checked","indeterminate","aria-label"],ve=["aria-sort","onClick"],ge={key:0,class:"ml-0.5","aria-hidden":"true"},pe={key:0,class:"h-3.5 w-3.5 text-blue-600 dark:text-blue-400",viewBox:"0 0 20 20",fill:"currentColor"},be={key:1,class:"h-3.5 w-3.5 text-blue-600 dark:text-blue-400",viewBox:"0 0 20 20",fill:"currentColor"},fe={key:2,class:"h-3.5 w-3.5 opacity-30",viewBox:"0 0 20 20",fill:"currentColor"},ye={class:"divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900"},ke={key:0,class:"px-3 py-3"},me={key:1},xe=["colspan"],he={class:"flex flex-col items-center gap-2"},we={class:"text-sm font-medium text-slate-700 dark:text-slate-300"},Se={class:"text-xs text-slate-400 dark:text-slate-500"},Ke=["onClick"],Ce=["onClick"],$e={class:"flex items-center justify-center"},Te=["checked","aria-label","onChange"],De={key:1,class:"mt-3"},ze=Z({inheritAttrs:!1,__name:"BaseDataTable",props:Q({columns:{},rows:{},rowKey:{type:Function,default:"id"},loading:{type:Boolean,default:!1},selectable:{type:Boolean,default:!1},sortable:{type:Boolean,default:!1},striped:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!0},stickyHeader:{type:Boolean,default:!1},emptyTitle:{default:"No data"},emptyDescription:{default:"No records to display."},manualPagination:{type:Boolean,default:!1},manualSorting:{type:Boolean,default:!1},page:{},pageSize:{}},{selectedKeys:{default:()=>[]},selectedKeysModifiers:{}}),emits:Q(["row-click","sort-change"],["update:selectedKeys"]),setup(d,{emit:E}){const v=d,k=E,g=ee(d,"selectedKeys"),m=te(),b=h(null),p=h(null);function x(n,s=0){if(typeof v.rowKey=="function")return v.rowKey(n);const t=n[v.rowKey];return t??s}function w(n,s){return s.split(".").reduce((t,c)=>t==null?void 0:t[c],n)}function z(n){if(!n.sortable&&!v.sortable)return;const s=String(n.key);b.value!==s?(b.value=s,p.value="asc"):p.value==="asc"?p.value="desc":(b.value=null,p.value=null),k("sort-change",{key:b.value??s,direction:p.value})}function V(n){if(!(!n.sortable&&!v.sortable))return b.value!==String(n.key)||!p.value?"none":p.value==="asc"?"ascending":"descending"}const $=A(()=>{if(v.manualSorting||!b.value||!p.value)return v.rows;const n=b.value,s=p.value;return[...v.rows].sort((t,c)=>{const i=w(t,n),R=w(c,n);if(i==null&&R==null)return 0;if(i==null)return 1;if(R==null)return-1;if(typeof i=="number"&&typeof R=="number")return s==="asc"?i-R:R-i;const O=String(i).localeCompare(String(R),void 0,{numeric:!0,sensitivity:"base"});return s==="asc"?O:-O})}),H=A(()=>{if(v.manualPagination||v.page===void 0||v.pageSize===void 0)return $.value;const n=Math.max(1,v.page),s=Math.max(1,v.pageSize),t=(n-1)*s;return $.value.slice(t,t+s)}),T=A(()=>H.value.map((n,s)=>x(n,s))),B=A(()=>T.value.length>0&&T.value.every(n=>g.value.includes(n))),F=A(()=>T.value.some(n=>g.value.includes(n))&&!B.value);function J(){B.value?g.value=g.value.filter(n=>!T.value.includes(n)):g.value=[...new Set([...g.value,...T.value])]}function W(n,s){const t=x(n,s);g.value.includes(t)?g.value=g.value.filter(c=>c!==t):g.value=[...g.value,t]}function u(n,s){return g.value.includes(x(n,s))}const e={left:"text-left",center:"text-center",right:"text-right"},a=["72%","56%","84%","64%","78%"];return(n,s)=>(r(),o("div",le({...K(m),class:void 0},{class:K(U)("flex flex-col",K(m).class)}),[n.$slots.toolbar?(r(),o("div",re,[_(n.$slots,"toolbar",{selectedKeys:g.value})])):C("",!0),l("div",oe,[l("table",ie,[l("thead",{class:j(K(U)(d.stickyHeader&&"sticky top-0 z-10","bg-slate-50 dark:bg-slate-800/60"))},[l("tr",null,[d.selectable?(r(),o("th",de,[l("div",ue,[l("input",{type:"checkbox",checked:B.value,indeterminate:F.value,class:"h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-blue-600 focus:ring-blue-500 cursor-pointer","aria-label":B.value?"Deselect all":"Select all",onChange:J},null,40,ce)])])):C("",!0),(r(!0),o(M,null,P(d.columns,t=>(r(),o("th",{key:String(t.key),"aria-sort":V(t),class:j(K(U)("px-4 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700",e[t.align??"left"],(t.sortable||d.sortable)&&"cursor-pointer select-none hover:text-slate-700 dark:hover:text-slate-200")),style:Y(t.width?{width:t.width}:void 0),onClick:c=>z(t)},[_(n.$slots,`header-${String(t.key)}`,{column:t},()=>[l("span",{class:j(["inline-flex items-center gap-1",t.align==="center"?"justify-center":t.align==="right"?"justify-end":""])},[y(D(t.label)+" ",1),t.sortable||d.sortable?(r(),o("span",ge,[b.value===String(t.key)&&p.value==="asc"?(r(),o("svg",pe,[...s[1]||(s[1]=[l("path",{"fill-rule":"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z","clip-rule":"evenodd"},null,-1)])])):b.value===String(t.key)&&p.value==="desc"?(r(),o("svg",be,[...s[2]||(s[2]=[l("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1)])])):(r(),o("svg",fe,[...s[3]||(s[3]=[l("path",{d:"M5 10l5-5 5 5H5zm0 1l5 5 5-5H5z"},null,-1)])]))])):C("",!0)],2)])],14,ve))),128))])],2),l("tbody",ye,[d.loading?(r(),o(M,{key:0},P(5,t=>l("tr",{key:`skeleton-${t}`},[d.selectable?(r(),o("td",ke,[...s[4]||(s[4]=[l("div",{class:"mx-auto h-4 w-4 rounded bg-slate-200 dark:bg-slate-700 animate-pulse"},null,-1)])])):C("",!0),(r(!0),o(M,null,P(d.columns,(c,i)=>(r(),o("td",{key:String(c.key),class:"px-4 py-3"},[l("div",{class:"h-4 rounded bg-slate-200 dark:bg-slate-700 animate-pulse",style:Y({width:a[(t+i)%a.length]})},null,4)]))),128))])),64)):H.value.length?(r(!0),o(M,{key:2},P(H.value,(t,c)=>(r(),o("tr",{key:String(x(t,c)),class:j(K(U)("transition-colors",d.striped&&c%2===1&&"bg-slate-50/70 dark:bg-slate-800/30",d.hoverable&&"hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer",u(t,c)&&"bg-blue-50/60 dark:bg-blue-900/20")),onClick:i=>k("row-click",t)},[d.selectable?(r(),o("td",{key:0,class:"px-3 py-3",onClick:G(i=>W(t,c),["stop"])},[l("div",$e,[l("input",{type:"checkbox",checked:u(t,c),class:"h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-blue-600 focus:ring-blue-500 cursor-pointer","aria-label":`Select row ${c+1}`,onChange:i=>W(t,c),onClick:s[0]||(s[0]=G(()=>{},["stop"]))},null,40,Te)])],8,Ce)):C("",!0),(r(!0),o(M,null,P(d.columns,i=>(r(),o("td",{key:String(i.key),class:j(K(U)("px-4 py-3 text-slate-700 dark:text-slate-300",e[i.align??"left"]))},[_(n.$slots,`cell-${String(i.key)}`,{row:t,value:w(t,String(i.key)),index:c},()=>[y(D(i.formatter?i.formatter(w(t,String(i.key)),t):w(t,String(i.key))),1)])],2))),128))],10,Ke))),128)):(r(),o("tr",me,[l("td",{colspan:d.columns.length+(d.selectable?1:0),class:"px-4 py-16 text-center"},[_(n.$slots,"empty",{},()=>[l("div",he,[s[5]||(s[5]=l("svg",{class:"h-10 w-10 text-slate-300 dark:text-slate-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})],-1)),l("p",we,D(d.emptyTitle),1),l("p",Se,D(d.emptyDescription),1)])])],8,xe)]))])])]),n.$slots.footer?(r(),o("div",De,[_(n.$slots,"footer")])):C("",!0)],16))}}),Ve=`<script lang="ts">
export interface DataTableColumn<T> {
  key: keyof T | string
  label: string
  sortable?: boolean
  align?: 'left' | 'center' | 'right'
  width?: string
  formatter?: (value: any, row: T) => string
}

export interface BaseDataTableProps<T> {
  columns: DataTableColumn<T>[]
  rows: T[]
  rowKey?: keyof T | ((row: T) => string | number)
  loading?: boolean
  selectable?: boolean
  sortable?: boolean
  striped?: boolean
  hoverable?: boolean
  stickyHeader?: boolean
  emptyTitle?: string
  emptyDescription?: string
  manualPagination?: boolean
  manualSorting?: boolean
  page?: number
  pageSize?: number
}
<\/script>

<script setup lang="ts" generic="T extends Record<string, any>">
import { ref, computed, useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<BaseDataTableProps<T>>(), {
  rowKey: 'id' as any,
  loading: false,
  selectable: false,
  sortable: false,
  striped: false,
  hoverable: true,
  stickyHeader: false,
  emptyTitle: 'No data',
  emptyDescription: 'No records to display.',
  manualPagination: false,
  manualSorting: false,
})

const emit = defineEmits<{
  'row-click': [row: T]
  'sort-change': [{ key: string; direction: 'asc' | 'desc' | null }]
}>()

const selectedKeys = defineModel<Array<string | number>>('selectedKeys', { default: () => [] })
const $attrs = useAttrs()

// Sorting
const sortKey = ref<string | null>(null)
const sortDir = ref<'asc' | 'desc' | null>(null)

function getRowKey(row: T, fallbackIndex = 0): string | number {
  if (typeof props.rowKey === 'function') return props.rowKey(row)
  const val = row[props.rowKey as keyof T]
  return val !== undefined && val !== null ? (val as string | number) : fallbackIndex
}

function getCellValue(row: T, key: string): any {
  return key.split('.').reduce((obj: any, k) => obj?.[k], row)
}

function toggleSort(col: DataTableColumn<T>) {
  if (!col.sortable && !props.sortable) return
  const key = String(col.key)
  if (sortKey.value !== key) {
    sortKey.value = key
    sortDir.value = 'asc'
  } else if (sortDir.value === 'asc') {
    sortDir.value = 'desc'
  } else {
    sortKey.value = null
    sortDir.value = null
  }
  emit('sort-change', { key: sortKey.value ?? key, direction: sortDir.value })
}

function getAriaSort(col: DataTableColumn<T>): 'ascending' | 'descending' | 'none' | undefined {
  if (!col.sortable && !props.sortable) return undefined
  if (sortKey.value !== String(col.key) || !sortDir.value) return 'none'
  return sortDir.value === 'asc' ? 'ascending' : 'descending'
}

const sortedRows = computed<T[]>(() => {
  if (props.manualSorting || !sortKey.value || !sortDir.value) return props.rows
  const key = sortKey.value
  const dir = sortDir.value
  return [...props.rows].sort((a, b) => {
    const aVal = getCellValue(a, key)
    const bVal = getCellValue(b, key)
    if (aVal == null && bVal == null) return 0
    if (aVal == null) return 1
    if (bVal == null) return -1
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return dir === 'asc' ? aVal - bVal : bVal - aVal
    }
    const cmp = String(aVal).localeCompare(String(bVal), undefined, { numeric: true, sensitivity: 'base' })
    return dir === 'asc' ? cmp : -cmp
  })
})

const displayRows = computed<T[]>(() => {
  if (props.manualPagination || props.page === undefined || props.pageSize === undefined) {
    return sortedRows.value
  }
  const safePage = Math.max(1, props.page)
  const safeSize = Math.max(1, props.pageSize)
  const start = (safePage - 1) * safeSize
  return sortedRows.value.slice(start, start + safeSize)
})

// Selection (operates over currently visible rows)
const visibleKeys = computed(() => displayRows.value.map((row, idx) => getRowKey(row, idx)))
const allSelected = computed(
  () => visibleKeys.value.length > 0 && visibleKeys.value.every((k) => selectedKeys.value.includes(k)),
)
const someSelected = computed(
  () => visibleKeys.value.some((k) => selectedKeys.value.includes(k)) && !allSelected.value,
)

function toggleAll() {
  if (allSelected.value) {
    selectedKeys.value = selectedKeys.value.filter((k) => !visibleKeys.value.includes(k))
  } else {
    selectedKeys.value = [...new Set([...selectedKeys.value, ...visibleKeys.value])]
  }
}

function toggleRow(row: T, index: number) {
  const key = getRowKey(row, index)
  if (selectedKeys.value.includes(key)) {
    selectedKeys.value = selectedKeys.value.filter((k) => k !== key)
  } else {
    selectedKeys.value = [...selectedKeys.value, key]
  }
}

function isRowSelected(row: T, index: number): boolean {
  return selectedKeys.value.includes(getRowKey(row, index))
}

const alignClass: Record<NonNullable<DataTableColumn<T>['align']>, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const skeletonWidths = ['72%', '56%', '84%', '64%', '78%']
<\/script>

<template>
  <div
    v-bind="{ ...$attrs, class: undefined }"
    :class="cn('flex flex-col', $attrs.class as string)"
  >
    <!-- Toolbar slot -->
    <div v-if="$slots.toolbar" class="mb-3">
      <slot name="toolbar" :selected-keys="selectedKeys" />
    </div>

    <!-- Table wrapper -->
    <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
      <table class="w-full text-sm border-collapse">
        <thead :class="cn(stickyHeader && 'sticky top-0 z-10', 'bg-slate-50 dark:bg-slate-800/60')">
          <tr>
            <!-- Select all checkbox -->
            <th v-if="selectable" class="w-10 px-3 py-3 border-b border-slate-200 dark:border-slate-700">
              <div class="flex items-center justify-center">
                <input
                  type="checkbox"
                  :checked="allSelected"
                  :indeterminate="someSelected"
                  class="h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  :aria-label="allSelected ? 'Deselect all' : 'Select all'"
                  @change="toggleAll"
                />
              </div>
            </th>

            <th
              v-for="col in columns"
              :key="String(col.key)"
              :aria-sort="getAriaSort(col)"
              :class="cn(
                'px-4 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700',
                alignClass[col.align ?? 'left'],
                (col.sortable || sortable) && 'cursor-pointer select-none hover:text-slate-700 dark:hover:text-slate-200',
              )"
              :style="col.width ? { width: col.width } : undefined"
              @click="toggleSort(col)"
            >
              <slot :name="\`header-\${String(col.key)}\`" :column="col">
                <span
                  class="inline-flex items-center gap-1"
                  :class="col.align === 'center' ? 'justify-center' : col.align === 'right' ? 'justify-end' : ''"
                >
                  {{ col.label }}
                  <span v-if="col.sortable || sortable" class="ml-0.5" aria-hidden="true">
                    <svg
                      v-if="sortKey === String(col.key) && sortDir === 'asc'"
                      class="h-3.5 w-3.5 text-blue-600 dark:text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      v-else-if="sortKey === String(col.key) && sortDir === 'desc'"
                      class="h-3.5 w-3.5 text-blue-600 dark:text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg v-else class="h-3.5 w-3.5 opacity-30" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5 10l5-5 5 5H5zm0 1l5 5 5-5H5z" />
                    </svg>
                  </span>
                </span>
              </slot>
            </th>
          </tr>
        </thead>

        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
          <!-- Loading skeleton rows -->
          <template v-if="loading">
            <tr v-for="i in 5" :key="\`skeleton-\${i}\`">
              <td v-if="selectable" class="px-3 py-3">
                <div class="mx-auto h-4 w-4 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
              </td>
              <td v-for="(col, colIdx) in columns" :key="String(col.key)" class="px-4 py-3">
                <div
                  class="h-4 rounded bg-slate-200 dark:bg-slate-700 animate-pulse"
                  :style="{ width: skeletonWidths[(i + colIdx) % skeletonWidths.length] }"
                />
              </td>
            </tr>
          </template>

          <!-- Empty state -->
          <template v-else-if="!displayRows.length">
            <tr>
              <td :colspan="columns.length + (selectable ? 1 : 0)" class="px-4 py-16 text-center">
                <slot name="empty">
                  <div class="flex flex-col items-center gap-2">
                    <svg
                      class="h-10 w-10 text-slate-300 dark:text-slate-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    <p class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ emptyTitle }}</p>
                    <p class="text-xs text-slate-400 dark:text-slate-500">{{ emptyDescription }}</p>
                  </div>
                </slot>
              </td>
            </tr>
          </template>

          <!-- Data rows -->
          <template v-else>
            <tr
              v-for="(row, rowIndex) in displayRows"
              :key="String(getRowKey(row, rowIndex))"
              :class="cn(
                'transition-colors',
                striped && rowIndex % 2 === 1 && 'bg-slate-50/70 dark:bg-slate-800/30',
                hoverable && 'hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer',
                isRowSelected(row, rowIndex) && 'bg-blue-50/60 dark:bg-blue-900/20',
              )"
              @click="emit('row-click', row)"
            >
              <!-- Row select checkbox -->
              <td v-if="selectable" class="px-3 py-3" @click.stop="toggleRow(row, rowIndex)">
                <div class="flex items-center justify-center">
                  <input
                    type="checkbox"
                    :checked="isRowSelected(row, rowIndex)"
                    class="h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    :aria-label="\`Select row \${rowIndex + 1}\`"
                    @change="toggleRow(row, rowIndex)"
                    @click.stop
                  />
                </div>
              </td>

              <td
                v-for="col in columns"
                :key="String(col.key)"
                :class="cn(
                  'px-4 py-3 text-slate-700 dark:text-slate-300',
                  alignClass[col.align ?? 'left'],
                )"
              >
                <slot
                  :name="\`cell-\${String(col.key)}\`"
                  :row="row"
                  :value="getCellValue(row, String(col.key))"
                  :index="rowIndex"
                >
                  {{
                    col.formatter
                      ? col.formatter(getCellValue(row, String(col.key)), row)
                      : getCellValue(row, String(col.key))
                  }}
                </slot>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <!-- Footer slot -->
    <div v-if="$slots.footer" class="mt-3">
      <slot name="footer" />
    </div>
  </div>
</template>
`,Be={class:"w-full"},Re={class:"flex flex-wrap items-center justify-between gap-3"},Me={class:"flex items-center gap-2"},Ae={class:"text-sm font-medium text-slate-700 dark:text-slate-300"},He={class:"flex items-center gap-2"},_e={class:"flex flex-col gap-3"},je={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},Pe={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},Le={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},Ne={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},Ue={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},Ge=Z({__name:"DataTableDemo",setup(d){const E=["Alice Johnson","Bob Smith","Carol White","David Brown","Eve Davis","Frank Wilson","Grace Lee","Henry Martinez","Iris Taylor","Jack Thomas","Karen Anderson","Liam Jackson","Mia Harris","Noah Clark","Olivia Lewis","Paul Robinson","Quinn Walker","Rachel Hall","Samuel Allen","Tina Young","Uma King","Victor Wright","Wendy Scott","Xavier Green","Yara Adams"];function v(){return E.map((u,e)=>({id:e+1,name:u,email:`${u.toLowerCase().replace(/\s+/g,".")}@example.com`,role:["Admin","Editor","Viewer"][e%3],status:["active","inactive","pending"][e%3],joined:`2024-${String(e%12+1).padStart(2,"0")}-${String(e%28+1).padStart(2,"0")}`}))}const k=h(v()),g=[{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"role",label:"Role",sortable:!0},{key:"status",label:"Status",sortable:!0},{key:"joined",label:"Joined",sortable:!0},{key:"actions",label:"Actions",align:"right"}],m=h([]),b=h(1),p=h(10),x=h(!1),w=h(!0),z=h(!1),V=h(!0),$=h(!1),H={active:"success",inactive:"danger",pending:"warning"};function T(){x.value=!0,setTimeout(()=>{x.value=!1},1500)}function B(u){k.value=k.value.filter(e=>e.id!==u),m.value=m.value.filter(e=>e!==u)}function F(){if(!m.value.length)return;const u=new Set(m.value);k.value=k.value.filter(e=>!u.has(e.id)),m.value=[]}function J(){k.value=v(),m.value=[],b.value=1}const W=A(()=>{const u=[':columns="columns"',':rows="users"','row-key="id"',':page="page"',':page-size="pageSize"'];return w.value&&(u.push(':selectable="true"'),u.push('v-model:selected-keys="selectedKeys"')),z.value&&u.push(':striped="true"'),V.value&&u.push(':hoverable="true"'),$.value&&u.push(':sticky-header="true"'),x.value&&u.push(':loading="true"'),`<BaseDataTable
  ${u.join(`
  `)}
>
  <template #cell-status="{ row }">
    <BaseBadge :variant="statusVariant[row.status]" :dot="true">
      {{ row.status }}
    </BaseBadge>
  </template>

  <template #footer>
    <BasePagination
      v-model:page="page"
      v-model:page-size="pageSize"
      :total-items="users.length"
    />
  </template>
</BaseDataTable>`});return(u,e)=>(r(),X(se,{title:"Data Table",description:"Generic, sortable, selectable data table with custom cell slots, bulk actions, loading skeletons, and pagination."},{preview:f(()=>[l("div",Be,[S(ze,{"selected-keys":m.value,"onUpdate:selectedKeys":e[3]||(e[3]=a=>m.value=a),columns:g,rows:k.value,"row-key":"id",loading:x.value,selectable:w.value,striped:z.value,hoverable:V.value,"sticky-header":$.value,page:b.value,"page-size":p.value},{toolbar:f(({selectedKeys:a})=>[l("div",Re,[l("div",Me,[l("span",Ae," Users ("+D(k.value.length)+") ",1),a.length?(r(),o(M,{key:0},[S(q,{variant:"primary"},{default:f(()=>[y(D(a.length)+" selected",1)]),_:2},1024),S(I,{variant:"danger",size:"xs",onClick:F},{default:f(()=>[...e[9]||(e[9]=[y(" Delete Selected ",-1)])]),_:1})],64)):C("",!0)]),l("div",He,[k.value.length<25?(r(),X(I,{key:0,variant:"ghost",size:"sm",onClick:J},{default:f(()=>[...e[10]||(e[10]=[y(" Reset 25 Users ",-1)])]),_:1})):C("",!0),S(I,{variant:"outline",size:"sm",onClick:T},{default:f(()=>[...e[11]||(e[11]=[y(" Simulate Loading ",-1)])]),_:1})])])]),"cell-status":f(({row:a})=>[S(q,{variant:H[a.status],dot:!0,class:"capitalize"},{default:f(()=>[y(D(a.status),1)]),_:2},1032,["variant"])]),"cell-actions":f(({row:a})=>[l("div",{class:"flex justify-end gap-1",onClick:e[0]||(e[0]=G(()=>{},["stop"]))},[S(I,{variant:"ghost",size:"xs",class:"text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30",onClick:n=>B(a.id)},{default:f(()=>[...e[12]||(e[12]=[y(" Delete ",-1)])]),_:1},8,["onClick"])])]),footer:f(()=>[S(ae,{page:b.value,"onUpdate:page":e[1]||(e[1]=a=>b.value=a),"page-size":p.value,"onUpdate:pageSize":e[2]||(e[2]=a=>p.value=a),"total-items":k.value.length,"page-size-options":[5,10,25]},null,8,["page","page-size","total-items"])]),_:1},8,["selected-keys","rows","loading","selectable","striped","hoverable","sticky-header","page","page-size"])])]),knobs:f(()=>[l("div",_e,[l("label",je,[L(l("input",{"onUpdate:modelValue":e[4]||(e[4]=a=>w.value=a),type:"checkbox",class:"rounded"},null,512),[[N,w.value]]),e[13]||(e[13]=y(" Selectable ",-1))]),l("label",Pe,[L(l("input",{"onUpdate:modelValue":e[5]||(e[5]=a=>z.value=a),type:"checkbox",class:"rounded"},null,512),[[N,z.value]]),e[14]||(e[14]=y(" Striped rows ",-1))]),l("label",Le,[L(l("input",{"onUpdate:modelValue":e[6]||(e[6]=a=>V.value=a),type:"checkbox",class:"rounded"},null,512),[[N,V.value]]),e[15]||(e[15]=y(" Hoverable rows ",-1))]),l("label",Ne,[L(l("input",{"onUpdate:modelValue":e[7]||(e[7]=a=>$.value=a),type:"checkbox",class:"rounded"},null,512),[[N,$.value]]),e[16]||(e[16]=y(" Sticky header ",-1))]),l("label",Ue,[L(l("input",{"onUpdate:modelValue":e[8]||(e[8]=a=>x.value=a),type:"checkbox",class:"rounded"},null,512),[[N,x.value]]),e[17]||(e[17]=y(" Loading skeleton ",-1))])])]),code:f(()=>[S(ne,{usage:W.value,source:K(Ve),filename:"BaseDataTable.vue"},null,8,["usage","source"])]),_:1}))}});export{Ge as default};
