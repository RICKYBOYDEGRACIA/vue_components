import{d as w,x as $,l as I,J as _,o,g as v,F as C,r as B,a as s,m as k,n as g,u as a,p as V,z as S,t as y,c as M,w as b,b as x,f as O,h as j,e as q,i as h,j as z}from"./index-CdapSEgI.js";import{c as f,_ as P,a as D}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";const E=["aria-expanded","aria-controls","id","disabled","onClick"],L=["id","aria-labelledby"],N={class:"overflow-hidden"},T={class:"px-5 pb-4 pt-0 text-sm text-slate-600 dark:text-slate-400"},W=w({inheritAttrs:!1,__name:"BaseAccordion",props:S({items:{},multiple:{type:Boolean,default:!1}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:["update:modelValue"],setup(d){const u=d,n=$(d,"modelValue"),c=I(),m=_();function p(t){return`${m}-accordion-trigger-${t}`}function i(t){return`${m}-accordion-panel-${t}`}function r(t){return Array.isArray(n.value)?n.value.includes(t):n.value===t}function A(t){if(u.multiple){const l=Array.isArray(n.value)?n.value:n.value!==void 0&&n.value!==""?[n.value]:[];l.includes(t)?n.value=l.filter(e=>e!==t):n.value=[...l,t]}else{const l=r(t);Array.isArray(n.value)?n.value=l?[]:[t]:n.value=l?[]:t}}return(t,l)=>(o(),v("div",V({...a(c),class:void 0},{class:a(f)("divide-y divide-slate-200 dark:divide-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden",a(c).class)}),[(o(!0),v(C,null,B(d.items,e=>(o(),v("div",{key:e.key},[s("button",{type:"button","aria-expanded":r(e.key),"aria-controls":i(e.key),id:p(e.key),disabled:e.disabled,class:g(a(f)("flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500",e.disabled&&"opacity-50 cursor-not-allowed")),onClick:U=>!e.disabled&&A(e.key)},[k(t.$slots,`title-${e.key}`,{item:e},()=>[s("span",null,y(e.title),1)]),(o(),v("svg",{class:g(a(f)("h-5 w-5 shrink-0 text-slate-400 dark:text-slate-500 transition-transform duration-200",r(e.key)&&"rotate-180")),viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[...l[0]||(l[0]=[s("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1)])],2))],10,E),s("div",{id:i(e.key),"aria-labelledby":p(e.key),role:"region",class:g(a(f)("grid transition-[grid-template-rows] duration-200 ease-in-out bg-white dark:bg-slate-900",r(e.key)?"grid-rows-[1fr]":"grid-rows-[0fr]"))},[s("div",N,[s("div",T,[k(t.$slots,`content-${e.key}`,{item:e},()=>[s("p",null,y(e.content),1)])])])],10,L)]))),128))],16))}}),F=`<script setup lang="ts">
import { useAttrs, useId } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface AccordionItem {
  key: string | number
  title: string
  content?: string
  disabled?: boolean
}

export interface BaseAccordionProps {
  items: AccordionItem[]
  multiple?: boolean
}

const props = withDefaults(defineProps<BaseAccordionProps>(), {
  multiple: false,
})

const model = defineModel<Array<string | number> | string | number>({
  default: () => [],
})

const $attrs = useAttrs()
const uid = useId()

function triggerId(key: string | number) {
  return \`\${uid}-accordion-trigger-\${key}\`
}

function panelId(key: string | number) {
  return \`\${uid}-accordion-panel-\${key}\`
}

function isOpen(key: string | number): boolean {
  if (Array.isArray(model.value)) return model.value.includes(key)
  return model.value === key
}

function toggle(key: string | number) {
  if (props.multiple) {
    const current = Array.isArray(model.value)
      ? model.value
      : model.value !== undefined && model.value !== ''
        ? [model.value]
        : []
    if (current.includes(key)) {
      model.value = current.filter((k) => k !== key)
    } else {
      model.value = [...current, key]
    }
  } else {
    const open = isOpen(key)
    if (Array.isArray(model.value)) {
      model.value = open ? [] : [key]
    } else {
      model.value = open ? [] : key
    }
  }
}
<\/script>

<template>
  <div
    v-bind="{ ...$attrs, class: undefined }"
    :class="cn(
      'divide-y divide-slate-200 dark:divide-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden',
      $attrs.class as string,
    )"
  >
    <div v-for="item in items" :key="item.key">
      <!-- Trigger -->
      <button
        type="button"
        :aria-expanded="isOpen(item.key)"
        :aria-controls="panelId(item.key)"
        :id="triggerId(item.key)"
        :disabled="item.disabled"
        :class="cn(
          'flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500',
          item.disabled && 'opacity-50 cursor-not-allowed',
        )"
        @click="!item.disabled && toggle(item.key)"
      >
        <slot :name="\`title-\${item.key}\`" :item="item">
          <span>{{ item.title }}</span>
        </slot>
        <svg
          :class="cn(
            'h-5 w-5 shrink-0 text-slate-400 dark:text-slate-500 transition-transform duration-200',
            isOpen(item.key) && 'rotate-180',
          )"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Panel with CSS grid transition -->
      <div
        :id="panelId(item.key)"
        :aria-labelledby="triggerId(item.key)"
        role="region"
        :class="cn(
          'grid transition-[grid-template-rows] duration-200 ease-in-out bg-white dark:bg-slate-900',
          isOpen(item.key) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )"
      >
        <div class="overflow-hidden">
          <div class="px-5 pb-4 pt-0 text-sm text-slate-600 dark:text-slate-400">
            <slot :name="\`content-\${item.key}\`" :item="item">
              <p>{{ item.content }}</p>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`,J={class:"w-full max-w-lg"},R={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},H=w({__name:"AccordionDemo",setup(d){const u=h(["q1"]),n=h(!1),c=[{key:"q1",title:"What is Vue.js?",content:"Vue.js is a progressive JavaScript framework for building composable, reactive user interfaces."},{key:"q2",title:"Are these components accessible?",content:"Yes! All components follow WAI-ARIA guidelines with keyboard navigation, ARIA roles, and focus management."},{key:"q3",title:"Can I copy and paste individual components?",content:"Absolutely. Each component is self-contained with zero cross-component imports — just copy the .vue file from the Component Source tab."},{key:"q4",title:"What about dark mode?",content:"Every component ships with complete dark mode parity using Tailwind CSS dark: variants."}],m=z(()=>`<BaseAccordion v-model="openItems" :items="items"${n.value?' :multiple="true"':""} />`);return(p,i)=>(o(),M(D,{title:"Accordion",description:"Collapsible disclosure sections with smooth CSS grid height transitions."},{preview:b(()=>[s("div",J,[x(W,{modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=r=>u.value=r),items:c,multiple:n.value},null,8,["modelValue","multiple"])])]),knobs:b(()=>[s("label",R,[O(s("input",{"onUpdate:modelValue":i[1]||(i[1]=r=>n.value=r),type:"checkbox",class:"rounded"},null,512),[[j,n.value]]),i[2]||(i[2]=q(" Allow multiple open ",-1))])]),code:b(()=>[x(P,{usage:m.value,source:a(F),filename:"BaseAccordion.vue"},null,8,["usage","source"])]),_:1}))}});export{H as default};
