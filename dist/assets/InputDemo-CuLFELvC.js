import{d as A,x as N,l as H,y as W,o as r,g as n,e as I,t as z,k as V,a as t,u as y,m as S,p as j,n as F,z as R,j as f,i as c,c as O,w as C,b,f as w,F as L,r as T,v as q,s as G,h as B}from"./index-CdapSEgI.js";import{c as U,u as J,_ as K,a as Q}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";const X=["for"],Y={key:0,class:"text-red-500","aria-hidden":"true"},Z={class:"relative"},_={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400"},ee=["id","type","value","placeholder","disabled","readonly","required","aria-invalid","aria-describedby"],le={class:"absolute inset-y-0 right-0 flex items-center pr-3 gap-1"},te=["aria-label"],se={key:0,class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},ae={key:1,class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},re={key:2,class:"text-slate-400"},oe=["id"],ne=["id"],h=A({inheritAttrs:!1,__name:"BaseInput",props:R({type:{default:"text"},size:{default:"md"},placeholder:{},label:{},hint:{},error:{type:[String,Boolean]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPasswordToggle:{type:Boolean,default:!1},id:{}},{modelValue:{default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const o=s,a=N(s,"modelValue"),k=H(),p=W(),m=J("base-input"),u=f(()=>o.id??m),x=f(()=>`${u.value}-hint`),v=c(!1),g=f(()=>o.type==="password"&&v.value?"text":o.type),P=f(()=>a.value!==""&&a.value!==null&&a.value!==void 0),d=f(()=>o.clearable&&P.value&&!o.disabled&&!o.readonly),e=f(()=>!!(p.suffix||d.value||o.type==="password"&&o.showPasswordToggle)),l=f(()=>!!p.prefix),D={sm:"h-8 text-xs px-2.5",md:"h-10 text-sm px-3",lg:"h-12 text-base px-4"},E=f(()=>U("w-full rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors","focus:outline-none focus:ring-2 focus:ring-offset-0",o.error?"border-red-400 dark:border-red-500 focus:ring-red-500/30 focus:border-red-500":"border-slate-300 dark:border-slate-700 focus:ring-blue-500/30 focus:border-blue-500","disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50 dark:disabled:bg-slate-800",D[o.size],e.value?"pr-10":"",l.value?"pl-10":""));return(M,i)=>(r(),n("div",{class:F(y(U)("flex flex-col gap-1.5",y(k).class))},[s.label?(r(),n("label",{key:0,for:u.value,class:"text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1"},[I(z(s.label)+" ",1),s.required?(r(),n("span",Y,"*")):V("",!0)],8,X)):V("",!0),t("div",Z,[y(p).prefix?(r(),n("div",_,[S(M.$slots,"prefix")])):V("",!0),t("input",j({...y(k),class:void 0},{id:u.value,type:g.value,class:E.value,value:a.value,placeholder:s.placeholder,disabled:s.disabled,readonly:s.readonly,required:s.required,"aria-invalid":!!s.error||void 0,"aria-describedby":s.hint||s.error?x.value:void 0,onInput:i[0]||(i[0]=$=>a.value=$.target.value)}),null,16,ee),t("div",le,[d.value?(r(),n("button",{key:0,type:"button",class:"text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none","aria-label":"Clear input",onClick:i[1]||(i[1]=$=>a.value="")},[...i[3]||(i[3]=[t("svg",{class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)])])):s.type==="password"&&s.showPasswordToggle?(r(),n("button",{key:1,type:"button",class:"text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none","aria-label":v.value?"Hide password":"Show password",onClick:i[2]||(i[2]=$=>v.value=!v.value)},[v.value?(r(),n("svg",se,[...i[4]||(i[4]=[t("path",{"fill-rule":"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z","clip-rule":"evenodd"},null,-1),t("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"},null,-1)])])):(r(),n("svg",ae,[...i[5]||(i[5]=[t("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"},null,-1),t("path",{"fill-rule":"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z","clip-rule":"evenodd"},null,-1)])]))],8,te)):y(p).suffix?(r(),n("div",re,[S(M.$slots,"suffix")])):V("",!0)])]),typeof s.error=="string"&&s.error?(r(),n("p",{key:1,id:x.value,class:"text-xs text-red-500 dark:text-red-400",role:"alert"},z(s.error),9,oe)):s.hint?(r(),n("p",{key:2,id:x.value,class:"text-xs text-slate-500 dark:text-slate-400"},z(s.hint),9,ne)):V("",!0)],2))}}),de=`<script setup lang="ts">
import { ref, computed, useAttrs, useSlots } from 'vue'
import { cn, useId } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseInputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'url' | 'tel' | 'date'
  size?: 'sm' | 'md' | 'lg'
  placeholder?: string
  label?: string
  hint?: string
  error?: string | boolean
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  clearable?: boolean
  showPasswordToggle?: boolean
  id?: string
}

const props = withDefaults(defineProps<BaseInputProps>(), {
  type: 'text',
  size: 'md',
  disabled: false,
  readonly: false,
  required: false,
  clearable: false,
  showPasswordToggle: false,
})

const model = defineModel<string | number | null>({ default: '' })
const $attrs = useAttrs()
const slots = useSlots()

const fallbackId = useId('base-input')
const inputId = computed(() => props.id ?? fallbackId)
const hintId = computed(() => \`\${inputId.value}-hint\`)

const showPassword = ref(false)
const resolvedType = computed(() => {
  if (props.type === 'password' && showPassword.value) return 'text'
  return props.type
})

const hasValue = computed(() => model.value !== '' && model.value !== null && model.value !== undefined)
const showClear = computed(() => props.clearable && hasValue.value && !props.disabled && !props.readonly)
const hasSuffix = computed(() =>
  !!(slots.suffix || showClear.value || (props.type === 'password' && props.showPasswordToggle))
)
const hasPrefix = computed(() => !!slots.prefix)

const sizeClasses: Record<NonNullable<BaseInputProps['size']>, string> = {
  sm: 'h-8 text-xs px-2.5',
  md: 'h-10 text-sm px-3',
  lg: 'h-12 text-base px-4',
}

const inputClasses = computed(() =>
  cn(
    'w-full rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-offset-0',
    props.error
      ? 'border-red-400 dark:border-red-500 focus:ring-red-500/30 focus:border-red-500'
      : 'border-slate-300 dark:border-slate-700 focus:ring-blue-500/30 focus:border-blue-500',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50 dark:disabled:bg-slate-800',
    sizeClasses[props.size],
    hasSuffix.value ? 'pr-10' : '',
    hasPrefix.value ? 'pl-10' : '',
  )
)
<\/script>

<template>
  <div :class="cn('flex flex-col gap-1.5', $attrs.class as string)">
    <label
      v-if="label"
      :for="inputId"
      class="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1"
    >
      {{ label }}
      <span v-if="required" class="text-red-500" aria-hidden="true">*</span>
    </label>

    <div class="relative">
      <!-- Prefix slot -->
      <div v-if="slots.prefix" class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
        <slot name="prefix" />
      </div>

      <input
        v-bind="{ ...$attrs, class: undefined }"
        :id="inputId"
        :type="resolvedType"
        :class="inputClasses"
        :value="model"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :aria-invalid="!!error || undefined"
        :aria-describedby="hint || error ? hintId : undefined"
        @input="model = ($event.target as HTMLInputElement).value"
      />

      <!-- Suffix / clear / password toggle -->
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 gap-1">
        <button
          v-if="showClear"
          type="button"
          class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none"
          aria-label="Clear input"
          @click="model = ''"
        >
          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </button>
        <button
          v-else-if="type === 'password' && showPasswordToggle"
          type="button"
          class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none"
          :aria-label="showPassword ? 'Hide password' : 'Show password'"
          @click="showPassword = !showPassword"
        >
          <svg v-if="showPassword" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"/>
            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/>
          </svg>
          <svg v-else class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
          </svg>
        </button>
        <div v-else-if="slots.suffix" class="text-slate-400">
          <slot name="suffix" />
        </div>
      </div>
    </div>

    <!-- Hint / Error -->
    <p
      v-if="typeof error === 'string' && error"
      :id="hintId"
      class="text-xs text-red-500 dark:text-red-400"
      role="alert"
    >{{ error }}</p>
    <p
      v-else-if="hint"
      :id="hintId"
      class="text-xs text-slate-500 dark:text-slate-400"
    >{{ hint }}</p>
  </div>
</template>
`,ie={class:"w-full max-w-xs"},ue={class:"flex flex-col gap-3"},pe=["value"],ve=["value"],ce={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},fe={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},xe={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},be={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ge=A({__name:"InputDemo",setup(s){const o=c(""),a=c(""),k=c("secret123"),p=c(""),m=c("md"),u=c("text"),x=c(!0),v=c(!1),g=c(!1),P=f(()=>{const d=['v-model="value"','label="Label"','placeholder="Enter text..."'];return u.value!=="text"&&d.push(`type="${u.value}"`),u.value==="password"&&d.push(':show-password-toggle="true"'),m.value!=="md"&&d.push(`size="${m.value}"`),x.value&&d.push(':clearable="true"'),g.value&&d.push(':required="true"'),v.value&&d.push(':disabled="true"'),p.value&&d.push(`error="${p.value}"`),`<BaseInput
  ${d.join(`
  `)}
/>`});return(d,e)=>(r(),O(Q,{title:"Input",description:"Text input field with validation, icons, clear button, and password toggle."},{preview:C(()=>[t("div",ie,[b(h,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l),type:u.value,size:m.value,disabled:v.value,required:g.value,error:p.value,clearable:x.value,"show-password-toggle":u.value==="password",label:"Label",placeholder:"Enter text..."},null,8,["modelValue","type","size","disabled","required","error","clearable","show-password-toggle"])])]),knobs:C(()=>[t("div",ue,[t("div",null,[e[13]||(e[13]=t("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Type",-1)),w(t("select",{"onUpdate:modelValue":e[1]||(e[1]=l=>u.value=l),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[(r(),n(L,null,T(["text","email","password","search"],l=>t("option",{key:l,value:l},z(l),9,pe)),64))],512),[[q,u.value]])]),t("div",null,[e[14]||(e[14]=t("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Size",-1)),w(t("select",{"onUpdate:modelValue":e[2]||(e[2]=l=>m.value=l),class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},[(r(),n(L,null,T(["sm","md","lg"],l=>t("option",{key:l,value:l},z(l),9,ve)),64))],512),[[q,m.value]])]),t("div",null,[e[15]||(e[15]=t("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Error message",-1)),w(t("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>p.value=l),type:"text",placeholder:"Leave empty for no error",class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},null,512),[[G,p.value]])]),t("label",ce,[w(t("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>x.value=l),type:"checkbox",class:"rounded"},null,512),[[B,x.value]]),e[16]||(e[16]=I(" Clearable ",-1))]),t("label",fe,[w(t("input",{"onUpdate:modelValue":e[5]||(e[5]=l=>g.value=l),type:"checkbox",class:"rounded"},null,512),[[B,g.value]]),e[17]||(e[17]=I(" Required ",-1))]),t("label",xe,[w(t("input",{"onUpdate:modelValue":e[6]||(e[6]=l=>v.value=l),type:"checkbox",class:"rounded"},null,512),[[B,v.value]]),e[18]||(e[18]=I(" Disabled ",-1))])])]),code:C(()=>[b(K,{usage:P.value,source:y(de),filename:"BaseInput.vue"},null,8,["usage","source"])]),variants:C(()=>[t("div",be,[b(h,{modelValue:a.value,"onUpdate:modelValue":e[7]||(e[7]=l=>a.value=l),label:"Default",placeholder:"Placeholder..."},null,8,["modelValue"]),b(h,{modelValue:a.value,"onUpdate:modelValue":e[8]||(e[8]=l=>a.value=l),label:"With hint",hint:"We will never share your email.",placeholder:"you@example.com"},null,8,["modelValue"]),b(h,{modelValue:a.value,"onUpdate:modelValue":e[9]||(e[9]=l=>a.value=l),label:"With error",error:"This field is required",placeholder:"Placeholder..."},null,8,["modelValue"]),b(h,{modelValue:a.value,"onUpdate:modelValue":e[10]||(e[10]=l=>a.value=l),label:"With prefix icon",placeholder:"Search users..."},{prefix:C(()=>[...e[19]||(e[19]=[t("svg",{class:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)])]),_:1},8,["modelValue"]),b(h,{modelValue:k.value,"onUpdate:modelValue":e[11]||(e[11]=l=>k.value=l),label:"Password",type:"password","show-password-toggle":!0,placeholder:"Enter password..."},null,8,["modelValue"]),b(h,{modelValue:a.value,"onUpdate:modelValue":e[12]||(e[12]=l=>a.value=l),label:"Disabled",disabled:!0,placeholder:"Disabled..."},null,8,["modelValue"])])]),_:1}))}});export{ge as default};
