import{d as $,x as C,l as B,o,g as u,t as m,k as p,a,F as R,r as S,n as w,u as i,p as z,z as U,c as j,w as x,b as f,f as y,v as V,h as D,e as I,i as g,j as M}from"./index-CdapSEgI.js";import{c as k,u as G,_ as A,a as N}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";const P={key:0,class:"text-sm font-medium text-slate-700 dark:text-slate-300"},O=["aria-label"],F={class:"relative flex items-center justify-center mt-0.5 shrink-0"},H=["name","value","checked","disabled","onChange"],E={key:0,class:"h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500"},J={class:"flex flex-col gap-0.5"},L={class:"text-sm font-medium text-slate-900 dark:text-slate-100"},T={key:0,class:"text-xs text-slate-500 dark:text-slate-400"},q={key:1,class:"text-xs text-red-500 dark:text-red-400",role:"alert"},h=$({inheritAttrs:!1,__name:"BaseRadioGroup",props:U({options:{},orientation:{default:"vertical"},variant:{default:"default"},name:{},label:{},error:{type:[String,Boolean]},disabled:{type:Boolean,default:!1}},{modelValue:{type:[String,Number,Boolean]},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const l=C(t,"modelValue"),n=B(),d=G("base-radio");return(b,v)=>(o(),u("div",z({...i(n),class:void 0},{class:i(k)("flex flex-col gap-2",i(n).class)}),[t.label?(o(),u("p",P,m(t.label),1)):p("",!0),a("div",{class:w(i(k)("flex gap-2",t.orientation==="vertical"?"flex-col":"flex-row flex-wrap")),role:"radiogroup","aria-label":t.label},[(o(!0),u(R,null,S(t.options,s=>(o(),u("label",{key:String(s.value),class:w(i(k)("flex items-start gap-3 cursor-pointer",t.variant==="cards"&&"flex-row items-start rounded-lg border p-3 transition-colors",t.variant==="cards"&&l.value===s.value?"border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-500":t.variant==="cards"?"border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800":"",(t.disabled||s.disabled)&&"opacity-50 cursor-not-allowed"))},[a("div",F,[a("input",{type:"radio",name:t.name??i(d),value:s.value,checked:l.value===s.value,disabled:t.disabled||s.disabled,class:"sr-only peer",onChange:c=>l.value=s.value},null,40,H),a("div",{class:w(i(k)("h-4 w-4 rounded-full border-2 flex items-center justify-center transition-colors","peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-offset-2 dark:peer-focus-visible:ring-offset-slate-900",l.value===s.value?"border-blue-600 dark:border-blue-500":"border-slate-300 dark:border-slate-600")),"aria-hidden":"true"},[l.value===s.value?(o(),u("div",E)):p("",!0)],2)]),a("div",J,[a("span",L,m(s.label),1),s.description?(o(),u("span",T,m(s.description),1)):p("",!0)])],2))),128))],10,O),typeof t.error=="string"&&t.error?(o(),u("p",q,m(t.error),1)):p("",!0)],16))}}),K=`<script setup lang="ts">
import { useAttrs } from 'vue'
import { cn, useId } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface RadioOption {
  label: string
  value: string | number | boolean
  description?: string
  disabled?: boolean
}

export interface BaseRadioGroupProps {
  options: RadioOption[]
  orientation?: 'vertical' | 'horizontal'
  variant?: 'default' | 'cards'
  name?: string
  label?: string
  error?: string | boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<BaseRadioGroupProps>(), {
  orientation: 'vertical',
  variant: 'default',
  disabled: false,
})

const model = defineModel<string | number | boolean>()
const $attrs = useAttrs()

const groupId = useId('base-radio')
<\/script>

<template>
  <div v-bind="{ ...$attrs, class: undefined }" :class="cn('flex flex-col gap-2', $attrs.class as string)">
    <p v-if="label" class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ label }}</p>

    <div
      :class="cn(
        'flex gap-2',
        orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
      )"
      role="radiogroup"
      :aria-label="label"
    >
      <label
        v-for="option in options"
        :key="String(option.value)"
        :class="cn(
          'flex items-start gap-3 cursor-pointer',
          variant === 'cards' && 'flex-row items-start rounded-lg border p-3 transition-colors',
          variant === 'cards' && model === option.value
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-500'
            : variant === 'cards'
              ? 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
              : '',
          (disabled || option.disabled) && 'opacity-50 cursor-not-allowed',
        )"
      >
        <div class="relative flex items-center justify-center mt-0.5 shrink-0">
          <input
            type="radio"
            :name="name ?? groupId"
            :value="option.value"
            :checked="model === option.value"
            :disabled="disabled || option.disabled"
            class="sr-only peer"
            @change="model = option.value"
          />
          <div
            :class="cn(
              'h-4 w-4 rounded-full border-2 flex items-center justify-center transition-colors',
              'peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-offset-2 dark:peer-focus-visible:ring-offset-slate-900',
              model === option.value
                ? 'border-blue-600 dark:border-blue-500'
                : 'border-slate-300 dark:border-slate-600',
            )"
            aria-hidden="true"
          >
            <div
              v-if="model === option.value"
              class="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500"
            />
          </div>
        </div>

        <div class="flex flex-col gap-0.5">
          <span class="text-sm font-medium text-slate-900 dark:text-slate-100">{{ option.label }}</span>
          <span v-if="option.description" class="text-xs text-slate-500 dark:text-slate-400">{{ option.description }}</span>
        </div>
      </label>
    </div>

    <p v-if="typeof error === 'string' && error" class="text-xs text-red-500 dark:text-red-400" role="alert">{{ error }}</p>
  </div>
</template>
`,Q={class:"w-full max-w-md"},W={class:"flex flex-col gap-3"},X={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},Y={class:"flex flex-col gap-6"},ee=$({__name:"RadioDemo",setup(t){const l=g("vue"),n=g("default"),d=g("vertical"),b=g(!1),v=[{label:"Vue.js",value:"vue",description:"Progressive JavaScript framework"},{label:"React",value:"react",description:"UI library by Meta"},{label:"Svelte",value:"svelte",description:"Cybernetically enhanced web apps"}],s=M(()=>{const c=['v-model="selected"',':options="options"','label="Choose a framework"'];return n.value!=="default"&&c.push(`variant="${n.value}"`),d.value!=="vertical"&&c.push(`orientation="${d.value}"`),b.value&&c.push(':disabled="true"'),`<BaseRadioGroup
  ${c.join(`
  `)}
/>`});return(c,e)=>(o(),j(N,{title:"Radio Group",description:"Single-select radio buttons with vertical, horizontal, and card variants."},{preview:x(()=>[a("div",Q,[f(h,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=r=>l.value=r),options:v,variant:n.value,orientation:d.value,disabled:b.value,label:"Choose a framework"},null,8,["modelValue","variant","orientation","disabled"])])]),knobs:x(()=>[a("div",W,[a("div",null,[e[8]||(e[8]=a("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Variant",-1)),y(a("select",{"onUpdate:modelValue":e[1]||(e[1]=r=>n.value=r),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[...e[7]||(e[7]=[a("option",{value:"default"},"Default",-1),a("option",{value:"cards"},"Cards",-1)])],512),[[V,n.value]])]),a("div",null,[e[10]||(e[10]=a("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Orientation",-1)),y(a("select",{"onUpdate:modelValue":e[2]||(e[2]=r=>d.value=r),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[...e[9]||(e[9]=[a("option",{value:"vertical"},"Vertical",-1),a("option",{value:"horizontal"},"Horizontal",-1)])],512),[[V,d.value]])]),a("label",X,[y(a("input",{"onUpdate:modelValue":e[3]||(e[3]=r=>b.value=r),type:"checkbox",class:"rounded"},null,512),[[D,b.value]]),e[11]||(e[11]=I(" Disabled ",-1))])])]),code:x(()=>[f(A,{usage:s.value,source:i(K),filename:"BaseRadioGroup.vue"},null,8,["usage","source"])]),variants:x(()=>[a("div",Y,[f(h,{modelValue:l.value,"onUpdate:modelValue":e[4]||(e[4]=r=>l.value=r),options:v,name:"demo-vertical",label:"Default vertical"},null,8,["modelValue"]),f(h,{modelValue:l.value,"onUpdate:modelValue":e[5]||(e[5]=r=>l.value=r),options:v,name:"demo-horizontal",orientation:"horizontal",label:"Horizontal"},null,8,["modelValue"]),f(h,{modelValue:l.value,"onUpdate:modelValue":e[6]||(e[6]=r=>l.value=r),options:v,name:"demo-cards",variant:"cards",label:"Card variant"},null,8,["modelValue"])])]),_:1}))}});export{ee as default};
