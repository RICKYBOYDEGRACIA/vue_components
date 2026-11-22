import{d as P,x as B,l as F,J as U,o,g as f,a,F as A,r as I,n as h,u,e as C,t as S,k as R,m as D,p as E,z as M,i as x,C as K,c as L,w as s,b as y,f as j,v as H,j as N}from"./index-CdapSEgI.js";import{c as $,_ as O,a as q}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";const z=["aria-selected","aria-controls","id","disabled","tabindex","onClick","onKeydown"],J={class:"mt-4"},W=["id","aria-labelledby","hidden"],V=P({inheritAttrs:!1,__name:"BaseTabs",props:M({tabs:{},variant:{default:"underline"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const c=l,r=B(l,"modelValue"),m=F(),k=U(),g=x(null);function d(n){return`${k}-tab-${n}`}function w(n){return`${k}-panel-${n}`}async function b(n){var t;r.value=n,await K();const v=(t=g.value)==null?void 0:t.querySelector(`[id="${CSS.escape(d(n))}"]`);v==null||v.focus()}function e(n,v){const t=c.tabs.filter(i=>!i.disabled);if(!t.length)return;const T=c.tabs[v];if(!T)return;const p=t.findIndex(i=>i.key===T.key);if(p!==-1){if(n.key==="ArrowRight"){n.preventDefault();const i=t[(p+1)%t.length];i&&b(i.key)}else if(n.key==="ArrowLeft"){n.preventDefault();const i=t[(p-1+t.length)%t.length];i&&b(i.key)}else if(n.key==="Home"){n.preventDefault();const i=t[0];i&&b(i.key)}else if(n.key==="End"){n.preventDefault();const i=t[t.length-1];i&&b(i.key)}}}return(n,v)=>(o(),f("div",E({...u(m),class:void 0},{class:u($)("flex flex-col",u(m).class)}),[a("div",{ref_key:"tablistRef",ref:g,role:"tablist",class:h(u($)(l.variant==="underline"&&"flex border-b border-slate-200 dark:border-slate-800 gap-0",l.variant==="pills"&&"flex gap-1",l.variant==="segmented"&&"flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1 gap-1"))},[(o(!0),f(A,null,I(l.tabs,(t,T)=>(o(),f("button",{key:t.key,type:"button",role:"tab","aria-selected":r.value===t.key,"aria-controls":w(t.key),id:d(t.key),disabled:t.disabled,tabindex:r.value===t.key?0:-1,class:h(u($)("flex items-center justify-center gap-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 dark:focus-visible:ring-offset-slate-900",t.disabled&&"opacity-40 cursor-not-allowed",l.variant==="underline"&&"px-4 py-2.5 border-b-2 -mb-px",l.variant==="underline"&&r.value===t.key?"border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400":l.variant==="underline"?"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600":"",l.variant==="pills"&&"px-3.5 py-1.5 rounded-lg",l.variant==="pills"&&r.value===t.key?"bg-blue-600 text-white dark:bg-blue-500":l.variant==="pills"?"text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800":"",l.variant==="segmented"&&"flex-1 px-3 py-1.5 rounded-md",l.variant==="segmented"&&r.value===t.key?"bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-slate-100":l.variant==="segmented"?"text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200":"")),onClick:p=>!t.disabled&&(r.value=t.key),onKeydown:p=>e(p,T)},[C(S(t.label)+" ",1),t.badge!==void 0?(o(),f("span",{key:0,class:h(u($)("inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 text-xs rounded-full font-medium",r.value===t.key?l.variant==="pills"?"bg-white/20 text-white":"bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"))},S(t.badge),3)):R("",!0)],42,z))),128))],2),a("div",J,[(o(!0),f(A,null,I(l.tabs,t=>(o(),f("div",{key:t.key,id:w(t.key),role:"tabpanel","aria-labelledby":d(t.key),hidden:r.value!==t.key},[D(n.$slots,`panel-${t.key}`)],8,W))),128)),D(n.$slots,"default")])],16))}}),G=`<script setup lang="ts">
import { ref, nextTick, useAttrs, useId } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface TabItem {
  key: string | number
  label: string
  disabled?: boolean
  badge?: string | number
}

export interface BaseTabsProps {
  tabs: TabItem[]
  variant?: 'underline' | 'pills' | 'segmented'
}

const props = withDefaults(defineProps<BaseTabsProps>(), {
  variant: 'underline',
})

const model = defineModel<string | number>()
const $attrs = useAttrs()

const uid = useId()
const tablistRef = ref<HTMLDivElement | null>(null)

function tabId(key: string | number) {
  return \`\${uid}-tab-\${key}\`
}

function panelId(key: string | number) {
  return \`\${uid}-panel-\${key}\`
}

async function selectAndFocus(key: string | number) {
  model.value = key
  await nextTick()
  const el = tablistRef.value?.querySelector<HTMLButtonElement>(\`[id="\${CSS.escape(tabId(key))}"]\`)
  el?.focus()
}

function handleKeydown(e: KeyboardEvent, currentIndex: number) {
  const enabledTabs = props.tabs.filter((t) => !t.disabled)
  if (!enabledTabs.length) return
  const currentTab = props.tabs[currentIndex]
  if (!currentTab) return
  const idx = enabledTabs.findIndex((t) => t.key === currentTab.key)
  if (idx === -1) return

  if (e.key === 'ArrowRight') {
    e.preventDefault()
    const next = enabledTabs[(idx + 1) % enabledTabs.length]
    if (next) selectAndFocus(next.key)
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    const prev = enabledTabs[(idx - 1 + enabledTabs.length) % enabledTabs.length]
    if (prev) selectAndFocus(prev.key)
  } else if (e.key === 'Home') {
    e.preventDefault()
    const first = enabledTabs[0]
    if (first) selectAndFocus(first.key)
  } else if (e.key === 'End') {
    e.preventDefault()
    const last = enabledTabs[enabledTabs.length - 1]
    if (last) selectAndFocus(last.key)
  }
}
<\/script>

<template>
  <div v-bind="{ ...$attrs, class: undefined }" :class="cn('flex flex-col', $attrs.class as string)">
    <!-- Tab list -->
    <div
      ref="tablistRef"
      role="tablist"
      :class="cn(
        variant === 'underline' && 'flex border-b border-slate-200 dark:border-slate-800 gap-0',
        variant === 'pills' && 'flex gap-1',
        variant === 'segmented' && 'flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1 gap-1',
      )"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="tab.key"
        type="button"
        role="tab"
        :aria-selected="model === tab.key"
        :aria-controls="panelId(tab.key)"
        :id="tabId(tab.key)"
        :disabled="tab.disabled"
        :tabindex="model === tab.key ? 0 : -1"
        :class="cn(
          'flex items-center justify-center gap-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 dark:focus-visible:ring-offset-slate-900',
          tab.disabled && 'opacity-40 cursor-not-allowed',

          variant === 'underline' && 'px-4 py-2.5 border-b-2 -mb-px',
          variant === 'underline' && model === tab.key
            ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
            : variant === 'underline'
              ? 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600'
              : '',

          variant === 'pills' && 'px-3.5 py-1.5 rounded-lg',
          variant === 'pills' && model === tab.key
            ? 'bg-blue-600 text-white dark:bg-blue-500'
            : variant === 'pills'
              ? 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              : '',

          variant === 'segmented' && 'flex-1 px-3 py-1.5 rounded-md',
          variant === 'segmented' && model === tab.key
            ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-slate-100'
            : variant === 'segmented'
              ? 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              : '',
        )"
        @click="!tab.disabled && (model = tab.key)"
        @keydown="handleKeydown($event, index)"
      >
        {{ tab.label }}
        <span
          v-if="tab.badge !== undefined"
          :class="cn(
            'inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 text-xs rounded-full font-medium',
            model === tab.key
              ? variant === 'pills'
                ? 'bg-white/20 text-white'
                : 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
          )"
        >
          {{ tab.badge }}
        </span>
      </button>
    </div>

    <!-- Tab panels -->
    <div class="mt-4">
      <div
        v-for="tab in tabs"
        :key="tab.key"
        :id="panelId(tab.key)"
        role="tabpanel"
        :aria-labelledby="tabId(tab.key)"
        :hidden="model !== tab.key"
      >
        <slot :name="\`panel-\${tab.key}\`" />
      </div>
      <slot />
    </div>
  </div>
</template>
`,Q={class:"w-full"},X={class:"flex flex-col gap-6"},_=P({__name:"TabsDemo",setup(l){const c=x("overview"),r=x("underline"),m=x("overview"),k=x("overview"),g=x("overview"),d=[{key:"overview",label:"Overview",badge:3},{key:"features",label:"Features"},{key:"pricing",label:"Pricing"},{key:"disabled",label:"Disabled",disabled:!0}],w=N(()=>`<BaseTabs v-model="activeTab" :tabs="tabs"${r.value!=="underline"?` variant="${r.value}"`:""}>
  <template #panel-overview>
    <p>Overview content.</p>
  </template>
  <template #panel-features>
    <p>Features content.</p>
  </template>
  <template #panel-pricing>
    <p>Pricing content.</p>
  </template>
</BaseTabs>`);return(b,e)=>(o(),L(q,{title:"Tabs",description:"WAI-ARIA compliant tabbed navigation with keyboard arrow support and 3 visual styles."},{preview:s(()=>[a("div",Q,[y(V,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=n=>c.value=n),tabs:d,variant:r.value},{"panel-overview":s(()=>[...e[5]||(e[5]=[a("p",{class:"text-sm text-slate-600 dark:text-slate-400"}," Overview panel content. Use Left/Right arrow keys, Home, or End while focused on a tab to navigate. ",-1)])]),"panel-features":s(()=>[...e[6]||(e[6]=[a("p",{class:"text-sm text-slate-600 dark:text-slate-400"}," Features panel content showcasing keyboard accessibility and badge counters. ",-1)])]),"panel-pricing":s(()=>[...e[7]||(e[7]=[a("p",{class:"text-sm text-slate-600 dark:text-slate-400"}," Pricing panel content with transparent, copy-paste-free component licensing. ",-1)])]),_:1},8,["modelValue","variant"])])]),knobs:s(()=>[a("div",null,[e[9]||(e[9]=a("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Variant",-1)),j(a("select",{"onUpdate:modelValue":e[1]||(e[1]=n=>r.value=n),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[...e[8]||(e[8]=[a("option",{value:"underline"},"Underline",-1),a("option",{value:"pills"},"Pills",-1),a("option",{value:"segmented"},"Segmented",-1)])],512),[[H,r.value]])])]),code:s(()=>[y(O,{usage:w.value,source:u(G),filename:"BaseTabs.vue"},null,8,["usage","source"])]),variants:s(()=>[a("div",X,[a("div",null,[e[13]||(e[13]=a("p",{class:"text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3"},"Underline",-1)),y(V,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=n=>m.value=n),tabs:d.slice(0,3),variant:"underline"},{"panel-overview":s(()=>[...e[10]||(e[10]=[a("p",{class:"text-sm text-slate-600 dark:text-slate-400"},"Underline overview content",-1)])]),"panel-features":s(()=>[...e[11]||(e[11]=[a("p",{class:"text-sm text-slate-600 dark:text-slate-400"},"Underline features content",-1)])]),"panel-pricing":s(()=>[...e[12]||(e[12]=[a("p",{class:"text-sm text-slate-600 dark:text-slate-400"},"Underline pricing content",-1)])]),_:1},8,["modelValue","tabs"])]),a("div",null,[e[17]||(e[17]=a("p",{class:"text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3"},"Pills",-1)),y(V,{modelValue:k.value,"onUpdate:modelValue":e[3]||(e[3]=n=>k.value=n),tabs:d.slice(0,3),variant:"pills"},{"panel-overview":s(()=>[...e[14]||(e[14]=[a("p",{class:"text-sm text-slate-600 dark:text-slate-400"},"Pills overview content",-1)])]),"panel-features":s(()=>[...e[15]||(e[15]=[a("p",{class:"text-sm text-slate-600 dark:text-slate-400"},"Pills features content",-1)])]),"panel-pricing":s(()=>[...e[16]||(e[16]=[a("p",{class:"text-sm text-slate-600 dark:text-slate-400"},"Pills pricing content",-1)])]),_:1},8,["modelValue","tabs"])]),a("div",null,[e[21]||(e[21]=a("p",{class:"text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3"},"Segmented",-1)),y(V,{modelValue:g.value,"onUpdate:modelValue":e[4]||(e[4]=n=>g.value=n),tabs:d.slice(0,3),variant:"segmented"},{"panel-overview":s(()=>[...e[18]||(e[18]=[a("p",{class:"text-sm text-slate-600 dark:text-slate-400"},"Segmented overview content",-1)])]),"panel-features":s(()=>[...e[19]||(e[19]=[a("p",{class:"text-sm text-slate-600 dark:text-slate-400"},"Segmented features content",-1)])]),"panel-pricing":s(()=>[...e[20]||(e[20]=[a("p",{class:"text-sm text-slate-600 dark:text-slate-400"},"Segmented pricing content",-1)])]),_:1},8,["modelValue","tabs"])])])]),_:1}))}});export{_ as default};
