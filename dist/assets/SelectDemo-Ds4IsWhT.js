import{d as G,x as X,l as Y,B as Z,A as _,D as ee,o as d,g as u,t as h,k as I,a as i,n as B,u as y,F as P,r as j,e as S,E as R,b as g,w as $,f as V,s as le,m as q,G as te,p as ae,z as ne,j as k,i as p,C as se,c as re,h as E}from"./index-CdapSEgI.js";import{c as O,u as oe,_ as ie,a as de}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";const ue=["id"],ce={class:"relative"},ve=["id","tabindex","aria-expanded","aria-controls","aria-labelledby","aria-activedescendant","aria-invalid","aria-disabled","aria-describedby"],pe={class:"flex-1 flex flex-wrap gap-1 min-h-[1.5rem] items-center"},be=["onClick"],fe={key:1,class:"text-slate-900 dark:text-slate-100"},me={key:2,class:"text-slate-400"},xe={key:0,class:"absolute z-50 w-full mt-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden"},he={key:0,class:"p-2 border-b border-slate-200 dark:border-slate-700"},ye=["id","aria-multiselectable"],ge=["id","aria-selected","onMouseenter","onMousedown"],ke={key:0,class:"h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},we={key:1,class:"h-4 w-4 shrink-0","aria-hidden":"true"},Ie={key:1,class:"px-3 py-4 text-sm text-center text-slate-400 dark:text-slate-500"},Se=["id"],Ae=["id"],L=G({inheritAttrs:!1,__name:"BaseSelect",props:ne({options:{},labelKey:{default:"label"},valueKey:{default:"value"},multiple:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},placeholder:{default:"Select an option..."},label:{},hint:{},error:{type:[String,Boolean]},disabled:{type:Boolean,default:!1},id:{}},{modelValue:{default:null},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const r=a,s=X(a,"modelValue"),m=Y(),w=oe("base-select"),b=k(()=>r.id??w),f=k(()=>`${b.value}-listbox`),A=k(()=>`${b.value}-hint`),c=p(!1),n=p(""),l=p(-1),C=p(null),T=p(null),W=p(null),x=k(()=>{if(!r.searchable||!n.value)return r.options;const t=n.value.toLowerCase();return r.options.filter(e=>String(e[r.labelKey]).toLowerCase().includes(t))});Z(n,()=>{c.value&&(l.value=x.value.length>0?0:-1)});const D=k(()=>{if(s.value===null||s.value===void 0)return[];if(Array.isArray(s.value))return s.value.map(e=>{const o=r.options.find(v=>v[r.valueKey]===e);return String(o?o[r.labelKey]:e)});const t=r.options.find(e=>e[r.valueKey]===s.value);return t?[String(t[r.labelKey])]:[]}),U=k(()=>D.value.length===0||r.multiple?"":D.value[0]);function M(t){const e=t[r.valueKey];return Array.isArray(s.value)?s.value.includes(e):s.value===e}function z(){r.disabled||(c.value=!0,l.value=-1,se(()=>{var t;r.searchable&&((t=T.value)==null||t.focus())}))}function K(t=!0){var e;c.value=!1,n.value="",t&&((e=C.value)==null||e.focus())}function Q(t){const e=t[r.valueKey];if(r.multiple){const o=Array.isArray(s.value)?s.value:[];o.includes(e)?s.value=o.filter(v=>v!==e):s.value=[...o,e]}else s.value=e,K()}function J(t){Array.isArray(s.value)&&(s.value=s.value.filter(e=>e!==t))}function N(t){if(!c.value){(t.key==="Enter"||t.key===" "||t.key==="ArrowDown")&&(t.preventDefault(),z());return}switch(t.key){case"Escape":K();break;case"ArrowDown":t.preventDefault(),l.value=Math.min(l.value+1,x.value.length-1);break;case"ArrowUp":t.preventDefault(),l.value=Math.max(l.value-1,0);break;case"Home":t.preventDefault(),l.value=0;break;case"End":t.preventDefault(),l.value=x.value.length-1;break;case"Enter":t.preventDefault(),l.value>=0&&x.value[l.value]&&Q(x.value[l.value]);break}}function F(t){var o;if(!c.value)return;const e=(o=C.value)==null?void 0:o.closest("[data-select-root]");e&&!e.contains(t.target)&&K(!1)}return _(()=>document.addEventListener("mousedown",F)),ee(()=>document.removeEventListener("mousedown",F)),(t,e)=>(d(),u("div",ae({"data-select-root":""},{...y(m),class:void 0},{class:y(O)("flex flex-col gap-1.5",y(m).class)}),[a.label?(d(),u("label",{key:0,id:`${b.value}-label`,class:"text-sm font-medium text-slate-700 dark:text-slate-300",onClick:e[0]||(e[0]=o=>{var v;return!a.disabled&&((v=C.value)==null?void 0:v.focus())})},h(a.label),9,ue)):I("",!0),i("div",ce,[i("div",{ref_key:"triggerRef",ref:C,id:b.value,role:"combobox",tabindex:a.disabled?-1:0,"aria-expanded":c.value,"aria-haspopup":"listbox","aria-controls":f.value,"aria-labelledby":a.label?`${b.value}-label`:void 0,"aria-activedescendant":c.value&&l.value>=0?`${f.value}-${l.value}`:void 0,"aria-invalid":!!a.error||void 0,"aria-disabled":a.disabled||void 0,"aria-describedby":a.hint||a.error?A.value:void 0,class:B(y(O)("w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg border bg-white dark:bg-slate-900 transition-colors text-left cursor-pointer select-none",a.error?"border-red-400 dark:border-red-500 focus:ring-red-500/30 focus:border-red-500":"border-slate-300 dark:border-slate-700 focus:ring-blue-500/30 focus:border-blue-500","focus:outline-none focus:ring-2",a.disabled&&"opacity-50 cursor-not-allowed pointer-events-none")),onClick:e[2]||(e[2]=o=>c.value?K():z()),onKeydown:N},[i("div",pe,[a.multiple&&Array.isArray(s.value)&&s.value.length?(d(!0),u(P,{key:0},j(s.value,(o,v)=>(d(),u("span",{key:v,class:"inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200"},[S(h(D.value[v])+" ",1),a.disabled?I("",!0):(d(),u("button",{key:0,type:"button",class:"hover:opacity-70","aria-label":"Remove",onClick:R(H=>J(o),["stop"])},[...e[4]||(e[4]=[i("svg",{class:"h-3 w-3",viewBox:"0 0 10 10",fill:"currentColor","aria-hidden":"true"},[i("path",{d:"M6.414 5l2.293-2.293a1 1 0 00-1.414-1.414L5 3.586 2.707 1.293a1 1 0 00-1.414 1.414L3.586 5 1.293 7.293a1 1 0 001.414 1.414L5 6.414l2.293 2.293a1 1 0 001.414-1.414L6.414 5z"})],-1)])],8,be))]))),128)):U.value?(d(),u("span",fe,h(U.value),1)):(d(),u("span",me,h(a.placeholder),1))]),a.clearable&&!a.disabled&&s.value!==null&&s.value!==void 0&&(!Array.isArray(s.value)||s.value.length)?(d(),u("button",{key:0,type:"button",class:"shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200","aria-label":"Clear",onClick:e[1]||(e[1]=R(o=>s.value=a.multiple?[]:null,["stop"]))},[...e[5]||(e[5]=[i("svg",{class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[i("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)])])):I("",!0),(d(),u("svg",{class:B(y(O)("shrink-0 h-4 w-4 text-slate-400 transition-transform",c.value&&"rotate-180")),viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[...e[6]||(e[6]=[i("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1)])],2))],42,ve),g(te,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:$(()=>[c.value?(d(),u("div",xe,[a.searchable?(d(),u("div",he,[V(i("input",{ref_key:"searchRef",ref:T,"onUpdate:modelValue":e[3]||(e[3]=o=>n.value=o),type:"text",placeholder:"Search...",class:"w-full text-sm px-2.5 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30",onKeydown:N},null,544),[[le,n.value]])])):I("",!0),i("ul",{ref_key:"listboxRef",ref:W,id:f.value,role:"listbox","aria-multiselectable":a.multiple,class:"max-h-60 overflow-y-auto py-1"},[x.value.length?(d(!0),u(P,{key:0},j(x.value,(o,v)=>(d(),u("li",{key:String(o[a.valueKey]),id:`${f.value}-${v}`,role:"option","aria-selected":M(o),class:B(y(O)("flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors",v===l.value?"bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300":"text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800",M(o)&&"font-medium")),onMouseenter:H=>l.value=v,onMousedown:R(H=>Q(o),["prevent"])},[q(t.$slots,"option",{option:o,selected:M(o),active:v===l.value},()=>[M(o)?(d(),u("svg",ke,[...e[7]||(e[7]=[i("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"},null,-1)])])):(d(),u("span",we)),S(" "+h(o[a.labelKey]),1)])],42,ge))),128)):(d(),u("li",Ie,[q(t.$slots,"empty",{},()=>[e[8]||(e[8]=S("No options found",-1))])]))],8,ye)])):I("",!0)]),_:3})]),typeof a.error=="string"&&a.error?(d(),u("p",{key:1,id:A.value,class:"text-xs text-red-500 dark:text-red-400",role:"alert"},h(a.error),9,Se)):a.hint?(d(),u("p",{key:2,id:A.value,class:"text-xs text-slate-500 dark:text-slate-400"},h(a.hint),9,Ae)):I("",!0)],16))}}),Le=`<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted, useAttrs } from 'vue'
import { cn, useId } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseSelectProps {
  options: Record<string, any>[]
  labelKey?: string
  valueKey?: string
  multiple?: boolean
  searchable?: boolean
  clearable?: boolean
  placeholder?: string
  label?: string
  hint?: string
  error?: string | boolean
  disabled?: boolean
  id?: string
}

const props = withDefaults(defineProps<BaseSelectProps>(), {
  labelKey: 'label',
  valueKey: 'value',
  multiple: false,
  searchable: false,
  clearable: false,
  disabled: false,
  placeholder: 'Select an option...',
})

const model = defineModel<string | number | Array<string | number> | null>({ default: null })
const $attrs = useAttrs()

const fallbackId = useId('base-select')
const selectId = computed(() => props.id ?? fallbackId)
const listboxId = computed(() => \`\${selectId.value}-listbox\`)
const hintId = computed(() => \`\${selectId.value}-hint\`)

const isOpen = ref(false)
const searchQuery = ref('')
const activeIndex = ref(-1)
const triggerRef = ref<HTMLElement | null>(null)
const searchRef = ref<HTMLInputElement | null>(null)
const listboxRef = ref<HTMLUListElement | null>(null)

const filteredOptions = computed(() => {
  if (!props.searchable || !searchQuery.value) return props.options
  const q = searchQuery.value.toLowerCase()
  return props.options.filter((opt) =>
    String(opt[props.labelKey]).toLowerCase().includes(q)
  )
})

watch(searchQuery, () => {
  if (isOpen.value) {
    activeIndex.value = filteredOptions.value.length > 0 ? 0 : -1
  }
})

const selectedLabels = computed(() => {
  if (model.value === null || model.value === undefined) return []
  if (Array.isArray(model.value)) {
    return model.value.map((val) => {
      const opt = props.options.find((o) => o[props.valueKey] === val)
      return opt ? String(opt[props.labelKey]) : String(val)
    })
  }
  const opt = props.options.find((o) => o[props.valueKey] === model.value)
  return opt ? [String(opt[props.labelKey])] : []
})

const displayText = computed(() => {
  if (selectedLabels.value.length === 0) return ''
  if (!props.multiple) return selectedLabels.value[0]
  return ''
})

function isSelected(option: Record<string, any>) {
  const val = option[props.valueKey]
  if (Array.isArray(model.value)) return model.value.includes(val)
  return model.value === val
}

function open() {
  if (props.disabled) return
  isOpen.value = true
  activeIndex.value = -1
  nextTick(() => {
    if (props.searchable) searchRef.value?.focus()
  })
}

function close(restoreFocus = true) {
  isOpen.value = false
  searchQuery.value = ''
  if (restoreFocus) {
    triggerRef.value?.focus()
  }
}

function selectOption(option: Record<string, any>) {
  const val = option[props.valueKey] as string | number
  if (props.multiple) {
    const current = (Array.isArray(model.value) ? model.value : []) as Array<string | number>
    if (current.includes(val)) {
      model.value = current.filter((v) => v !== val)
    } else {
      model.value = [...current, val]
    }
  } else {
    model.value = val
    close()
  }
}

function removeTag(val: string | number) {
  if (Array.isArray(model.value)) {
    model.value = model.value.filter((v) => v !== val)
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (!isOpen.value) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault()
      open()
    }
    return
  }
  switch (e.key) {
    case 'Escape':
      close()
      break
    case 'ArrowDown':
      e.preventDefault()
      activeIndex.value = Math.min(activeIndex.value + 1, filteredOptions.value.length - 1)
      break
    case 'ArrowUp':
      e.preventDefault()
      activeIndex.value = Math.max(activeIndex.value - 1, 0)
      break
    case 'Home':
      e.preventDefault()
      activeIndex.value = 0
      break
    case 'End':
      e.preventDefault()
      activeIndex.value = filteredOptions.value.length - 1
      break
    case 'Enter':
      e.preventDefault()
      if (activeIndex.value >= 0 && filteredOptions.value[activeIndex.value]) {
        selectOption(filteredOptions.value[activeIndex.value])
      }
      break
  }
}

function handleClickOutside(e: MouseEvent) {
  if (!isOpen.value) return
  const el = triggerRef.value?.closest('[data-select-root]') as HTMLElement | null
  if (el && !el.contains(e.target as Node)) {
    close(false)
  }
}

onMounted(() => document.addEventListener('mousedown', handleClickOutside))
onUnmounted(() => document.removeEventListener('mousedown', handleClickOutside))
<\/script>

<template>
  <div
    data-select-root
    v-bind="{ ...$attrs, class: undefined }"
    :class="cn('flex flex-col gap-1.5', $attrs.class as string)"
  >
    <label
      v-if="label"
      :id="\`\${selectId}-label\`"
      class="text-sm font-medium text-slate-700 dark:text-slate-300"
      @click="!disabled && triggerRef?.focus()"
    >
      {{ label }}
    </label>

    <div class="relative">
      <!-- Trigger combobox -->
      <div
        ref="triggerRef"
        :id="selectId"
        role="combobox"
        :tabindex="disabled ? -1 : 0"
        :aria-expanded="isOpen"
        aria-haspopup="listbox"
        :aria-controls="listboxId"
        :aria-labelledby="label ? \`\${selectId}-label\` : undefined"
        :aria-activedescendant="isOpen && activeIndex >= 0 ? \`\${listboxId}-\${activeIndex}\` : undefined"
        :aria-invalid="!!error || undefined"
        :aria-disabled="disabled || undefined"
        :aria-describedby="hint || error ? hintId : undefined"
        :class="cn(
          'w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg border bg-white dark:bg-slate-900 transition-colors text-left cursor-pointer select-none',
          error
            ? 'border-red-400 dark:border-red-500 focus:ring-red-500/30 focus:border-red-500'
            : 'border-slate-300 dark:border-slate-700 focus:ring-blue-500/30 focus:border-blue-500',
          'focus:outline-none focus:ring-2',
          disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        )"
        @click="isOpen ? close() : open()"
        @keydown="handleKeydown"
      >
        <!-- Multiple tags or single display -->
        <div class="flex-1 flex flex-wrap gap-1 min-h-[1.5rem] items-center">
          <template v-if="multiple && Array.isArray(model) && model.length">
            <span
              v-for="(val, i) in model"
              :key="i"
              class="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200"
            >
              {{ selectedLabels[i] }}
              <button
                v-if="!disabled"
                type="button"
                class="hover:opacity-70"
                aria-label="Remove"
                @click.stop="removeTag(val as string | number)"
              >
                <svg class="h-3 w-3" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                  <path d="M6.414 5l2.293-2.293a1 1 0 00-1.414-1.414L5 3.586 2.707 1.293a1 1 0 00-1.414 1.414L3.586 5 1.293 7.293a1 1 0 001.414 1.414L5 6.414l2.293 2.293a1 1 0 001.414-1.414L6.414 5z"/>
                </svg>
              </button>
            </span>
          </template>
          <span v-else-if="displayText" class="text-slate-900 dark:text-slate-100">{{ displayText }}</span>
          <span v-else class="text-slate-400">{{ placeholder }}</span>
        </div>

        <!-- Clear -->
        <button
          v-if="clearable && !disabled && model !== null && model !== undefined && (!Array.isArray(model) || model.length)"
          type="button"
          class="shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          aria-label="Clear"
          @click.stop="model = multiple ? [] : null"
        >
          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </button>

        <!-- Chevron -->
        <svg :class="cn('shrink-0 h-4 w-4 text-slate-400 transition-transform', isOpen && 'rotate-180')" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
      </div>

      <!-- Dropdown -->
      <Transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="isOpen"
          class="absolute z-50 w-full mt-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden"
        >
          <!-- Search -->
          <div v-if="searchable" class="p-2 border-b border-slate-200 dark:border-slate-700">
            <input
              ref="searchRef"
              v-model="searchQuery"
              type="text"
              placeholder="Search..."
              class="w-full text-sm px-2.5 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              @keydown="handleKeydown"
            />
          </div>

          <ul
            ref="listboxRef"
            :id="listboxId"
            role="listbox"
            :aria-multiselectable="multiple"
            class="max-h-60 overflow-y-auto py-1"
          >
            <template v-if="filteredOptions.length">
              <li
                v-for="(option, index) in filteredOptions"
                :key="String(option[valueKey])"
                :id="\`\${listboxId}-\${index}\`"
                role="option"
                :aria-selected="isSelected(option)"
                :class="cn(
                  'flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors',
                  index === activeIndex ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800',
                  isSelected(option) && 'font-medium',
                )"
                @mouseenter="activeIndex = index"
                @mousedown.prevent="selectOption(option)"
              >
                <slot name="option" :option="option" :selected="isSelected(option)" :active="index === activeIndex">
                  <svg v-if="isSelected(option)" class="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span v-else class="h-4 w-4 shrink-0" aria-hidden="true" />
                  {{ option[labelKey] }}
                </slot>
              </li>
            </template>
            <li v-else class="px-3 py-4 text-sm text-center text-slate-400 dark:text-slate-500">
              <slot name="empty">No options found</slot>
            </li>
          </ul>
        </div>
      </Transition>
    </div>

    <p v-if="typeof error === 'string' && error" :id="hintId" class="text-xs text-red-500 dark:text-red-400" role="alert">{{ error }}</p>
    <p v-else-if="hint" :id="hintId" class="text-xs text-slate-500 dark:text-slate-400">{{ hint }}</p>
  </div>
</template>
`,$e={class:"w-full max-w-xs"},Ce={class:"flex flex-col gap-3"},Me={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},Ke={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},Oe={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},Ve={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Re=G({__name:"SelectDemo",setup(a){const r=p("vue"),s=p(["vue","svelte"]),m=p(!0),w=p(!0),b=p(!1),f=[{label:"Vue.js",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"},{label:"Solid.js",value:"solid"},{label:"Qwik",value:"qwik"}],A=k(()=>{const c=['v-model="value"',':options="options"','label="Framework"','placeholder="Select a framework..."'];return m.value&&c.push(':searchable="true"'),w.value&&c.push(':clearable="true"'),b.value&&c.push(':disabled="true"'),`<BaseSelect
  ${c.join(`
  `)}
/>`});return(c,n)=>(d(),re(de,{title:"Select",description:"Custom accessible dropdown with keyboard navigation, search, and multi-select."},{preview:$(()=>[i("div",$e,[g(L,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=l=>r.value=l),options:f,searchable:m.value,clearable:w.value,disabled:b.value,label:"Framework",placeholder:"Select a framework..."},null,8,["modelValue","searchable","clearable","disabled"])])]),knobs:$(()=>[i("div",Ce,[i("label",Me,[V(i("input",{"onUpdate:modelValue":n[1]||(n[1]=l=>m.value=l),type:"checkbox",class:"rounded"},null,512),[[E,m.value]]),n[8]||(n[8]=S(" Searchable ",-1))]),i("label",Ke,[V(i("input",{"onUpdate:modelValue":n[2]||(n[2]=l=>w.value=l),type:"checkbox",class:"rounded"},null,512),[[E,w.value]]),n[9]||(n[9]=S(" Clearable ",-1))]),i("label",Oe,[V(i("input",{"onUpdate:modelValue":n[3]||(n[3]=l=>b.value=l),type:"checkbox",class:"rounded"},null,512),[[E,b.value]]),n[10]||(n[10]=S(" Disabled ",-1))])])]),code:$(()=>[g(ie,{usage:A.value,source:y(Le),filename:"BaseSelect.vue"},null,8,["usage","source"])]),variants:$(()=>[i("div",Ve,[g(L,{modelValue:r.value,"onUpdate:modelValue":n[4]||(n[4]=l=>r.value=l),options:f,label:"Default",placeholder:"Select..."},null,8,["modelValue"]),g(L,{modelValue:r.value,"onUpdate:modelValue":n[5]||(n[5]=l=>r.value=l),options:f,label:"Searchable",searchable:!0,placeholder:"Search..."},null,8,["modelValue"]),g(L,{modelValue:s.value,"onUpdate:modelValue":n[6]||(n[6]=l=>s.value=l),options:f,label:"Multi-select",multiple:!0,clearable:!0,placeholder:"Select multiple..."},null,8,["modelValue"]),g(L,{modelValue:r.value,"onUpdate:modelValue":n[7]||(n[7]=l=>r.value=l),options:f,label:"With error",error:"Please select an option",placeholder:"Select..."},null,8,["modelValue"])])]),_:1}))}});export{Re as default};
