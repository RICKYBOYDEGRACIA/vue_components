import{d as B,x as $,l as I,o as d,g as b,a as r,n as A,u as m,k as p,t as g,p as j,z as M,j as C,c as S,w as k,b as n,f as h,h as y,e as w,i as x}from"./index-CdapSEgI.js";import{c as V,u as U,_ as D,a as N}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";const L={class:"relative flex items-center justify-center mt-0.5"},P=["id","checked","indeterminate","disabled","aria-invalid"],z=["for"],H={key:0,class:"h-2.5 w-2.5",viewBox:"0 0 10 8",fill:"none"},Y={key:1,class:"h-2.5 w-2.5",viewBox:"0 0 10 2",fill:"none"},E={key:0,class:"flex flex-col gap-0.5"},O=["for"],R={key:1,class:"text-xs text-slate-500 dark:text-slate-400"},T={key:2,class:"text-xs text-red-500 dark:text-red-400",role:"alert"},i=B({inheritAttrs:!1,__name:"BaseCheckbox",props:M({value:{type:[String,Number,Boolean]},indeterminate:{type:Boolean,default:!1},label:{},description:{},error:{type:[String,Boolean]},disabled:{type:Boolean,default:!1},id:{}},{modelValue:{type:[Boolean,Array]},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=l,s=$(l,"modelValue"),u=I(),v=U("base-checkbox"),o=C(()=>a.id??v),f=C(()=>Array.isArray(s.value)?s.value.includes(a.value):!!s.value);function c(){if(!a.disabled)if(Array.isArray(s.value)){const e=a.value;s.value.includes(e)?s.value=s.value.filter(t=>t!==e):s.value=[...s.value,e]}else s.value=!s.value}return(e,t)=>(d(),b("div",j({...m(u),class:void 0},{class:m(V)("flex items-start gap-3",m(u).class)}),[r("div",L,[r("input",{type:"checkbox",id:o.value,checked:f.value,indeterminate:l.indeterminate,disabled:l.disabled,"aria-invalid":!!l.error||void 0,class:"sr-only peer",onChange:c},null,40,P),r("label",{for:o.value,class:A(m(V)("flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 cursor-pointer transition-colors","peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-offset-2 dark:peer-focus-visible:ring-offset-slate-900",f.value||l.indeterminate?"bg-blue-600 border-blue-600 dark:bg-blue-500 dark:border-blue-500 text-white":l.error?"bg-white dark:bg-slate-900 border-red-400 dark:border-red-500 hover:border-red-500":"bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 hover:border-blue-500",l.disabled&&"opacity-50 cursor-not-allowed")),"aria-hidden":"true"},[f.value&&!l.indeterminate?(d(),b("svg",H,[...t[0]||(t[0]=[r("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):l.indeterminate?(d(),b("svg",Y,[...t[1]||(t[1]=[r("path",{d:"M1 1H9",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},null,-1)])])):p("",!0)],10,z)]),l.label||l.description||typeof l.error=="string"&&l.error?(d(),b("div",E,[l.label?(d(),b("label",{key:0,for:o.value,class:A(m(V)("text-sm font-medium text-slate-900 dark:text-slate-100 cursor-pointer",l.disabled&&"opacity-50 cursor-not-allowed"))},g(l.label),11,O)):p("",!0),l.description?(d(),b("p",R,g(l.description),1)):p("",!0),typeof l.error=="string"&&l.error?(d(),b("p",T,g(l.error),1)):p("",!0)])):p("",!0)],16))}}),W=`<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn, useId } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseCheckboxProps {
  value?: string | number | boolean
  indeterminate?: boolean
  label?: string
  description?: string
  error?: string | boolean
  disabled?: boolean
  id?: string
}

const props = withDefaults(defineProps<BaseCheckboxProps>(), {
  indeterminate: false,
  disabled: false,
})

const model = defineModel<boolean | Array<string | number | boolean>>()
const $attrs = useAttrs()

const fallbackId = useId('base-checkbox')
const checkId = computed(() => props.id ?? fallbackId)

const isChecked = computed(() => {
  if (Array.isArray(model.value)) {
    return model.value.includes(props.value as string | number | boolean)
  }
  return !!model.value
})

function toggle() {
  if (props.disabled) return
  if (Array.isArray(model.value)) {
    const val = props.value as string | number | boolean
    if (model.value.includes(val)) {
      model.value = model.value.filter((v) => v !== val)
    } else {
      model.value = [...model.value, val]
    }
  } else {
    model.value = !model.value
  }
}
<\/script>

<template>
  <div v-bind="{ ...$attrs, class: undefined }" :class="cn('flex items-start gap-3', $attrs.class as string)">
    <div class="relative flex items-center justify-center mt-0.5">
      <input
        type="checkbox"
        :id="checkId"
        :checked="isChecked"
        :indeterminate="indeterminate"
        :disabled="disabled"
        :aria-invalid="!!error || undefined"
        class="sr-only peer"
        @change="toggle"
      />
      <label
        :for="checkId"
        :class="cn(
          'flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 cursor-pointer transition-colors',
          'peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-offset-2 dark:peer-focus-visible:ring-offset-slate-900',
          isChecked || indeterminate
            ? 'bg-blue-600 border-blue-600 dark:bg-blue-500 dark:border-blue-500 text-white'
            : error
              ? 'bg-white dark:bg-slate-900 border-red-400 dark:border-red-500 hover:border-red-500'
              : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 hover:border-blue-500',
          disabled && 'opacity-50 cursor-not-allowed',
        )"
        aria-hidden="true"
      >
        <!-- Checkmark -->
        <svg v-if="isChecked && !indeterminate" class="h-2.5 w-2.5" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <!-- Indeterminate dash -->
        <svg v-else-if="indeterminate" class="h-2.5 w-2.5" viewBox="0 0 10 2" fill="none">
          <path d="M1 1H9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </label>
    </div>

    <div v-if="label || description || (typeof error === 'string' && error)" class="flex flex-col gap-0.5">
      <label v-if="label" :for="checkId" :class="cn('text-sm font-medium text-slate-900 dark:text-slate-100 cursor-pointer', disabled && 'opacity-50 cursor-not-allowed')">
        {{ label }}
      </label>
      <p v-if="description" class="text-xs text-slate-500 dark:text-slate-400">{{ description }}</p>
      <p v-if="typeof error === 'string' && error" class="text-xs text-red-500 dark:text-red-400" role="alert">{{ error }}</p>
    </div>
  </div>
</template>
`,q={class:"flex flex-col gap-3"},F={class:"flex flex-col gap-3"},G={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},J={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},K={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},Q={class:"flex flex-col gap-5"},X={class:"flex flex-col gap-3"},Z={class:"pt-3 border-t border-slate-200 dark:border-slate-800"},_={class:"flex flex-col gap-2"},ee={class:"text-xs text-slate-400 mt-2"},se=B({__name:"CheckboxDemo",setup(l){const a=x(!0),s=x(["vue"]),u=x(!1),v=x(!1),o=x(!0),f=C(()=>{const c=['v-model="accepted"','label="Accept terms and conditions"'];return o.value&&c.push('description="You agree to our terms of service."'),u.value&&c.push(':indeterminate="true"'),v.value&&c.push(':disabled="true"'),`<BaseCheckbox
  ${c.join(`
  `)}
/>`});return(c,e)=>(d(),S(N,{title:"Checkbox",description:"Single toggle and multi-select checkbox with indeterminate state."},{preview:k(()=>[r("div",q,[n(i,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t),indeterminate:u.value,disabled:v.value,label:"Accept terms and conditions",description:o.value?"You agree to our terms of service.":void 0},null,8,["modelValue","indeterminate","disabled","description"])])]),knobs:k(()=>[r("div",F,[r("label",G,[h(r("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>u.value=t),type:"checkbox",class:"rounded"},null,512),[[y,u.value]]),e[9]||(e[9]=w(" Indeterminate ",-1))]),r("label",J,[h(r("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>o.value=t),type:"checkbox",class:"rounded"},null,512),[[y,o.value]]),e[10]||(e[10]=w(" Show description ",-1))]),r("label",K,[h(r("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>v.value=t),type:"checkbox",class:"rounded"},null,512),[[y,v.value]]),e[11]||(e[11]=w(" Disabled ",-1))])])]),code:k(()=>[n(D,{usage:f.value,source:m(W),filename:"BaseCheckbox.vue"},null,8,["usage","source"])]),variants:k(()=>[r("div",Q,[r("div",X,[n(i,{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=t=>a.value=t),label:"Single checkbox"},null,8,["modelValue"]),n(i,{modelValue:a.value,"onUpdate:modelValue":e[5]||(e[5]=t=>a.value=t),label:"With description",description:"Additional context for this option."},null,8,["modelValue"]),n(i,{"model-value":!1,label:"Indeterminate state",indeterminate:!0}),n(i,{"model-value":!0,label:"Disabled checked",disabled:!0})]),r("div",Z,[e[12]||(e[12]=r("p",{class:"text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"},"Multi-select (array v-model)",-1)),r("div",_,[n(i,{modelValue:s.value,"onUpdate:modelValue":e[6]||(e[6]=t=>s.value=t),value:"vue",label:"Vue.js"},null,8,["modelValue"]),n(i,{modelValue:s.value,"onUpdate:modelValue":e[7]||(e[7]=t=>s.value=t),value:"react",label:"React"},null,8,["modelValue"]),n(i,{modelValue:s.value,"onUpdate:modelValue":e[8]||(e[8]=t=>s.value=t),value:"svelte",label:"Svelte"},null,8,["modelValue"])]),r("p",ee,"Selected: "+g(s.value.join(", ")||"none"),1)])])]),_:1}))}});export{se as default};
