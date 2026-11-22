import{d as $,x as M,l as B,A as L,B as C,C as q,o as i,g as x,e as w,t as p,k as v,a as s,p as A,u as T,z as U,j as g,i as f,c as D,w as y,b,f as k,s as E,h as V}from"./index-CdapSEgI.js";import{c as j,u as H,_ as N,a as P}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-C6t35oVS.js";const S={class:"flex flex-col gap-1.5"},W={key:0,class:"flex items-center justify-between"},G=["for"],O={key:0,class:"text-red-500 ml-1","aria-hidden":"true"},F={key:1,class:"text-xs text-slate-400 ml-auto"},J=["id","rows","placeholder","disabled","readonly","required","maxlength","aria-invalid","aria-describedby","value"],K=["id"],Q=["id"],h=$({inheritAttrs:!1,__name:"BaseTextarea",props:U({rows:{default:3},autoResize:{type:Boolean,default:!1},maxLength:{},placeholder:{},label:{},hint:{},error:{type:[String,Boolean]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},id:{}},{modelValue:{default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const r=t,l=M(t,"modelValue"),u=B(),m=H("base-textarea"),o=g(()=>r.id??m),n=g(()=>`${o.value}-hint`),c=f(null),d=g(()=>{var z;return((z=l.value)==null?void 0:z.length)??0});function e(){!r.autoResize||!c.value||(c.value.style.height="auto",c.value.style.height=`${c.value.scrollHeight}px`)}L(()=>{r.autoResize&&e()}),C(l,()=>{r.autoResize&&q(e)});const a=g(()=>j("w-full rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm px-3 py-2.5 transition-colors resize-y","focus:outline-none focus:ring-2 focus:ring-offset-0",r.error?"border-red-400 dark:border-red-500 focus:ring-red-500/30 focus:border-red-500":"border-slate-300 dark:border-slate-700 focus:ring-blue-500/30 focus:border-blue-500","disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50 dark:disabled:bg-slate-800",r.autoResize&&"resize-none overflow-hidden",u.class));return(z,R)=>(i(),x("div",S,[t.label||t.maxLength?(i(),x("div",W,[t.label?(i(),x("label",{key:0,for:o.value,class:"text-sm font-medium text-slate-700 dark:text-slate-300"},[w(p(t.label)+" ",1),t.required?(i(),x("span",O,"*")):v("",!0)],8,G)):v("",!0),t.maxLength?(i(),x("span",F,p(d.value)+"/"+p(t.maxLength),1)):v("",!0)])):v("",!0),s("textarea",A({ref_key:"textareaRef",ref:c},{...T(u),class:void 0},{id:o.value,class:a.value,rows:t.rows,placeholder:t.placeholder,disabled:t.disabled,readonly:t.readonly,required:t.required,maxlength:t.maxLength,"aria-invalid":!!t.error||void 0,"aria-describedby":t.hint||t.error?n.value:void 0,value:l.value,onInput:R[0]||(R[0]=I=>l.value=I.target.value)}),null,16,J),typeof t.error=="string"&&t.error?(i(),x("p",{key:1,id:n.value,class:"text-xs text-red-500 dark:text-red-400",role:"alert"},p(t.error),9,K)):t.hint?(i(),x("p",{key:2,id:n.value,class:"text-xs text-slate-500 dark:text-slate-400"},p(t.hint),9,Q)):v("",!0)]))}}),X=`<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, useAttrs } from 'vue'
import { cn, useId } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

export interface BaseTextareaProps {
  rows?: number
  autoResize?: boolean
  maxLength?: number
  placeholder?: string
  label?: string
  hint?: string
  error?: string | boolean
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  id?: string
}

const props = withDefaults(defineProps<BaseTextareaProps>(), {
  rows: 3,
  autoResize: false,
  disabled: false,
  readonly: false,
  required: false,
})

const model = defineModel<string>({ default: '' })
const $attrs = useAttrs()

const fallbackId = useId('base-textarea')
const textareaId = computed(() => props.id ?? fallbackId)
const hintId = computed(() => \`\${textareaId.value}-hint\`)

const textareaRef = ref<HTMLTextAreaElement | null>(null)

const charCount = computed(() => model.value?.length ?? 0)

function resize() {
  if (!props.autoResize || !textareaRef.value) return
  textareaRef.value.style.height = 'auto'
  textareaRef.value.style.height = \`\${textareaRef.value.scrollHeight}px\`
}

onMounted(() => {
  if (props.autoResize) resize()
})

watch(model, () => {
  if (props.autoResize) nextTick(resize)
})

const textareaClasses = computed(() =>
  cn(
    'w-full rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm px-3 py-2.5 transition-colors resize-y',
    'focus:outline-none focus:ring-2 focus:ring-offset-0',
    props.error
      ? 'border-red-400 dark:border-red-500 focus:ring-red-500/30 focus:border-red-500'
      : 'border-slate-300 dark:border-slate-700 focus:ring-blue-500/30 focus:border-blue-500',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50 dark:disabled:bg-slate-800',
    props.autoResize && 'resize-none overflow-hidden',
    $attrs.class as string,
  )
)
<\/script>

<template>
  <div class="flex flex-col gap-1.5">
    <div v-if="label || maxLength" class="flex items-center justify-between">
      <label v-if="label" :for="textareaId" class="text-sm font-medium text-slate-700 dark:text-slate-300">
        {{ label }}
        <span v-if="required" class="text-red-500 ml-1" aria-hidden="true">*</span>
      </label>
      <span v-if="maxLength" class="text-xs text-slate-400 ml-auto">
        {{ charCount }}/{{ maxLength }}
      </span>
    </div>

    <textarea
      ref="textareaRef"
      v-bind="{ ...$attrs, class: undefined }"
      :id="textareaId"
      :class="textareaClasses"
      :rows="rows"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :maxlength="maxLength"
      :aria-invalid="!!error || undefined"
      :aria-describedby="hint || error ? hintId : undefined"
      :value="model"
      @input="model = ($event.target as HTMLTextAreaElement).value"
    />

    <p v-if="typeof error === 'string' && error" :id="hintId" class="text-xs text-red-500 dark:text-red-400" role="alert">{{ error }}</p>
    <p v-else-if="hint" :id="hintId" class="text-xs text-slate-500 dark:text-slate-400">{{ hint }}</p>
  </div>
</template>
`,Y={class:"w-full max-w-sm"},Z={class:"flex flex-col gap-3"},_={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},ee={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},te={class:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"},ae={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},re=$({__name:"TextareaDemo",setup(t){const r=f(""),l=f(""),u=f(!1),m=f(!0),o=f(!1),n=f(""),c=g(()=>{const d=['v-model="value"','label="Message"','placeholder="Type your message..."'];return u.value&&d.push(':auto-resize="true"'),m.value&&d.push(':max-length="200"'),o.value&&d.push(':disabled="true"'),n.value&&d.push(`error="${n.value}"`),`<BaseTextarea
  ${d.join(`
  `)}
/>`});return(d,e)=>(i(),D(P,{title:"Textarea",description:"Multi-line text input with auto-resize and character count."},{preview:y(()=>[s("div",Y,[b(h,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),label:"Message","auto-resize":u.value,"max-length":m.value?200:void 0,disabled:o.value,error:n.value,placeholder:"Type your message..."},null,8,["modelValue","auto-resize","max-length","disabled","error"])])]),knobs:y(()=>[s("div",Z,[s("div",null,[e[9]||(e[9]=s("label",{class:"text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1"},"Error message",-1)),k(s("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>n.value=a),type:"text",placeholder:"Leave empty for no error",class:"w-full text-sm border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"},null,512),[[E,n.value]])]),s("label",_,[k(s("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>u.value=a),type:"checkbox",class:"rounded"},null,512),[[V,u.value]]),e[10]||(e[10]=w(" Auto Resize ",-1))]),s("label",ee,[k(s("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>m.value=a),type:"checkbox",class:"rounded"},null,512),[[V,m.value]]),e[11]||(e[11]=w(" Character limit (200) ",-1))]),s("label",te,[k(s("input",{"onUpdate:modelValue":e[4]||(e[4]=a=>o.value=a),type:"checkbox",class:"rounded"},null,512),[[V,o.value]]),e[12]||(e[12]=w(" Disabled ",-1))])])]),code:y(()=>[b(N,{usage:c.value,source:T(X),filename:"BaseTextarea.vue"},null,8,["usage","source"])]),variants:y(()=>[s("div",ae,[b(h,{modelValue:l.value,"onUpdate:modelValue":e[5]||(e[5]=a=>l.value=a),label:"Default",placeholder:"Enter text..."},null,8,["modelValue"]),b(h,{modelValue:l.value,"onUpdate:modelValue":e[6]||(e[6]=a=>l.value=a),label:"With char count","max-length":150,placeholder:"Max 150 characters..."},null,8,["modelValue"]),b(h,{modelValue:l.value,"onUpdate:modelValue":e[7]||(e[7]=a=>l.value=a),label:"Auto resize","auto-resize":!0,placeholder:"Grows automatically with content..."},null,8,["modelValue"]),b(h,{modelValue:l.value,"onUpdate:modelValue":e[8]||(e[8]=a=>l.value=a),label:"With error",error:"This field is required",placeholder:"..."},null,8,["modelValue"])])]),_:1}))}});export{re as default};
