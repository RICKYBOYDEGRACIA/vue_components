import{d as $,x as B,l as I,o as v,g as x,a as s,n as h,u as r,t as k,k as z,p as N,z as A,j as y,c as D,w as m,b as d,f as w,v as U,h as V,e as S,i as f}from"./index-CdapSEgI.js";import{c as p,u as C,_ as M,a as P}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";const R=["id","aria-checked","aria-labelledby","disabled"],T={key:0,class:"flex flex-col"},E=["id","for"],j={key:0,class:"text-xs text-slate-500 dark:text-slate-400"},b=$({inheritAttrs:!1,__name:"BaseSwitch",props:A({label:{},description:{},size:{default:"md"},disabled:{type:Boolean,default:!1},id:{}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const a=t,n=B(t,"modelValue"),i=I(),u=C("base-switch"),c=y(()=>a.id??u),o={sm:"h-5 w-9",md:"h-6 w-11"},e={sm:"h-3.5 w-3.5",md:"h-[18px] w-[18px]"},l={sm:"translate-x-4",md:"translate-x-5"};return(H,g)=>(v(),x("div",N({...r(i),class:void 0},{class:r(p)("flex items-center gap-3",r(i).class)}),[s("button",{id:c.value,type:"button",role:"switch","aria-checked":n.value,"aria-labelledby":t.label?`${c.value}-label`:void 0,disabled:t.disabled,class:h(r(p)("relative inline-flex shrink-0 items-center rounded-full p-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900",o[t.size],n.value?"bg-blue-600 dark:bg-blue-500":"bg-slate-200 dark:bg-slate-700",t.disabled&&"opacity-50 cursor-not-allowed")),onClick:g[0]||(g[0]=J=>!t.disabled&&(n.value=!n.value))},[s("span",{class:h(r(p)("rounded-full bg-white shadow-sm transition-transform duration-200",e[t.size],n.value?l[t.size]:"translate-x-0.5")),"aria-hidden":"true"},null,2)],10,R),t.label||t.description?(v(),x("div",T,[s("label",{id:`${c.value}-label`,for:c.value,class:h(r(p)("text-sm font-medium text-slate-900 dark:text-slate-100 cursor-pointer",t.disabled&&"opacity-50"))},k(t.label),11,E),t.description?(v(),x("p",j,k(t.description),1)):z("",!0)])):z("",!0)],16))}}),O=`<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn, useId } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseSwitchProps {
  label?: string
  description?: string
  size?: 'sm' | 'md'
  disabled?: boolean
  id?: string
}

const props = withDefaults(defineProps<BaseSwitchProps>(), {
  size: 'md',
  disabled: false,
})

const model = defineModel<boolean>({ default: false })
const $attrs = useAttrs()

const fallbackId = useId('base-switch')
const switchId = computed(() => props.id ?? fallbackId)

const trackSize: Record<NonNullable<BaseSwitchProps['size']>, string> = {
  sm: 'h-5 w-9',
  md: 'h-6 w-11',
}
const thumbSize: Record<NonNullable<BaseSwitchProps['size']>, string> = {
  sm: 'h-3.5 w-3.5',
  md: 'h-[18px] w-[18px]',
}
const thumbTranslate: Record<NonNullable<BaseSwitchProps['size']>, string> = {
  sm: 'translate-x-4',
  md: 'translate-x-5',
}
<\/script>

<template>
  <div v-bind="{ ...$attrs, class: undefined }" :class="cn('flex items-center gap-3', $attrs.class as string)">
    <button
      :id="switchId"
      type="button"
      role="switch"
      :aria-checked="model"
      :aria-labelledby="label ? \`\${switchId}-label\` : undefined"
      :disabled="disabled"
      :class="cn(
        'relative inline-flex shrink-0 items-center rounded-full p-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900',
        trackSize[size],
        model ? 'bg-blue-600 dark:bg-blue-500' : 'bg-slate-200 dark:bg-slate-700',
        disabled && 'opacity-50 cursor-not-allowed',
      )"
      @click="!disabled && (model = !model)"
    >
      <span
        :class="cn(
          'rounded-full bg-white shadow-sm transition-transform duration-200',
          thumbSize[size],
          model ? thumbTranslate[size] : 'translate-x-0.5',
        )"
        aria-hidden="true"
      />
    </button>

    <div v-if="label || description" class="flex flex-col">
      <label :id="\`\${switchId}-label\`" :for="switchId" :class="cn('text-sm font-medium text-slate-900 dark:text-slate-100 cursor-pointer', disabled && 'opacity-50')">
        {{ label }}
      </label>
      <p v-if="description" class="text-xs text-slate-500 dark:text-slate-400">{{ description }}</p>
    </div>
  </div>
</template>
`,W={class:"flex flex-col gap-3"},q={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},F={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},G={class:"flex flex-col gap-4"},Q=$({__name:"SwitchDemo",setup(t){const a=f(!0),n=f("md"),i=f(!1),u=f(!0),c=y(()=>{const o=['v-model="enabled"','label="Enable notifications"'];return u.value&&o.push('description="Receive alerts for important updates."'),n.value!=="md"&&o.push(`size="${n.value}"`),i.value&&o.push(':disabled="true"'),`<BaseSwitch
  ${o.join(`
  `)}
/>`});return(o,e)=>(v(),D(P,{title:"Switch",description:"Accessible toggle switch for boolean settings."},{preview:m(()=>[d(b,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),label:"Enable notifications",description:u.value?"Receive alerts for important updates.":void 0,size:n.value,disabled:i.value},null,8,["modelValue","description","size","disabled"])]),knobs:m(()=>[s("div",W,[s("div",null,[e[9]||(e[9]=s("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Size",-1)),w(s("select",{"onUpdate:modelValue":e[1]||(e[1]=l=>n.value=l),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[...e[8]||(e[8]=[s("option",{value:"sm"},"Small (sm)",-1),s("option",{value:"md"},"Medium (md)",-1)])],512),[[U,n.value]])]),s("label",q,[w(s("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>u.value=l),type:"checkbox",class:"rounded"},null,512),[[V,u.value]]),e[10]||(e[10]=S(" Show description ",-1))]),s("label",F,[w(s("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>i.value=l),type:"checkbox",class:"rounded"},null,512),[[V,i.value]]),e[11]||(e[11]=S(" Disabled ",-1))])])]),code:m(()=>[d(M,{usage:c.value,source:r(O),filename:"BaseSwitch.vue"},null,8,["usage","source"])]),variants:m(()=>[s("div",G,[d(b,{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=l=>a.value=l),label:"Default switch"},null,8,["modelValue"]),d(b,{modelValue:a.value,"onUpdate:modelValue":e[5]||(e[5]=l=>a.value=l),label:"With description",description:"Additional context shown here."},null,8,["modelValue"]),d(b,{"model-value":!0,label:"Active state"}),d(b,{modelValue:a.value,"onUpdate:modelValue":e[6]||(e[6]=l=>a.value=l),label:"Small size",size:"sm"},null,8,["modelValue"]),d(b,{modelValue:a.value,"onUpdate:modelValue":e[7]||(e[7]=l=>a.value=l),label:"Disabled",disabled:!0},null,8,["modelValue"])])]),_:1}))}});export{Q as default};
