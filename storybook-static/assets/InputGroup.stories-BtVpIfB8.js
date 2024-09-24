import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{I as J}from"./InputAnnotation-B9rrnO_A.js";import{I as K}from"./InputLabel-DPOiYRij.js";import{I as P,M as i,C as r}from"./InputText-ehZgDbsJ.js";import{S as m}from"./index-CPQLvZ3f.js";import"./index-DJO9vBfz.js";import"./createLucideIcon-DVDrDyUM.js";const M=B=>{const{id:d,label:Z,size:p,required:c,disabled:u,withHint:G,inputType:N,placeholder:X,iconLeft:_,iconRight:D,isQuiet:F,value:Q,onChange:A,error:h,text:O,...k}=B;return e.jsxs("div",{className:"inputGroup",children:[e.jsx(K,{id:d,label:Z,withHint:G,required:c,disabled:u,size:p}),e.jsx(P,{id:d,type:N,placeholder:X,iconLeft:_,size:p,iconRight:D,value:Q,onChange:A,isError:!!h,isQuiet:F,disabled:u,required:c,...k}),e.jsx(J,{text:O,size:p,isError:!!h,disabled:u})]})};M.__docgenInfo={description:"",methods:[],displayName:"InputGroup",props:{id:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"SIZES"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},withHint:{required:!1,tsType:{name:"boolean"},description:""},inputType:{required:!0,tsType:{name:"union",raw:'"text" | "number" | "password" | "email" | "numeric"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"number"'},{name:"literal",value:'"password"'},{name:"literal",value:'"email"'},{name:"literal",value:'"numeric"'}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},iconLeft:{required:!1,tsType:{name:"ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactNode"},description:""},isQuiet:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},error:{required:!1,tsType:{name:"union",raw:"FieldError | undefined",elements:[{name:"FieldError"},{name:"undefined"}]},description:""},text:{required:!0,tsType:{name:"string"},description:""}}};const re={title:"Components/InputGroup",component:M,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{id:"email",label:"Email",withHint:!0,required:!0,inputType:"email",placeholder:"Email",iconLeft:e.jsx(i,{size:16}),iconRight:e.jsx(r,{size:16}),text:"This is a hint to help user."}},a={args:{id:"email",label:"Email",withHint:!0,required:!0,inputType:"email",placeholder:"Email",iconLeft:e.jsx(i,{size:16}),iconRight:e.jsx(r,{size:16}),text:"This is a hint to help user.",error:"error"}},n={args:{id:"email",label:"Email",withHint:!0,required:!0,inputType:"email",placeholder:"Email",iconLeft:e.jsx(i,{size:16}),iconRight:e.jsx(r,{size:16}),text:"This is a hint to help user.",disabled:!0}},s={args:{id:"email",label:"Email",size:m.XS,withHint:!0,required:!0,inputType:"email",placeholder:"Email",iconLeft:e.jsx(i,{size:14}),iconRight:e.jsx(r,{size:14}),text:"This is a hint to help user."}},l={args:{id:"email",label:"Email",size:m.L,withHint:!0,required:!0,inputType:"email",placeholder:"Email",iconLeft:e.jsx(i,{size:14}),iconRight:e.jsx(r,{size:14}),text:"This is a hint to help user."}},o={args:{id:"email",label:"Email",size:m.XL,withHint:!0,required:!0,inputType:"email",placeholder:"Email",iconLeft:e.jsx(i,{size:14}),iconRight:e.jsx(r,{size:14}),text:"This is a hint to help user."}};var g,E,T;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: "email",
    label: "Email",
    withHint: true,
    required: true,
    inputType: "email",
    placeholder: "Email",
    iconLeft: <Mail size={16} />,
    iconRight: <CircleHelp size={16} />,
    text: "This is a hint to help user."
  }
}`,...(T=(E=t.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var x,y,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: "email",
    label: "Email",
    withHint: true,
    required: true,
    inputType: "email",
    placeholder: "Email",
    iconLeft: <Mail size={16} />,
    iconRight: <CircleHelp size={16} />,
    text: "This is a hint to help user.",
    error: "error"
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var z,q,b;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: "email",
    label: "Email",
    withHint: true,
    required: true,
    inputType: "email",
    placeholder: "Email",
    iconLeft: <Mail size={16} />,
    iconRight: <CircleHelp size={16} />,
    text: "This is a hint to help user.",
    disabled: true
  }
}`,...(b=(q=n.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};var L,H,S;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: "email",
    label: "Email",
    size: SIZES.XS,
    withHint: true,
    required: true,
    inputType: "email",
    placeholder: "Email",
    iconLeft: <Mail size={14} />,
    iconRight: <CircleHelp size={14} />,
    text: "This is a hint to help user."
  }
}`,...(S=(H=s.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var w,j,I;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: "email",
    label: "Email",
    size: SIZES.L,
    withHint: true,
    required: true,
    inputType: "email",
    placeholder: "Email",
    iconLeft: <Mail size={14} />,
    iconRight: <CircleHelp size={14} />,
    text: "This is a hint to help user."
  }
}`,...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var R,C,v;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    id: "email",
    label: "Email",
    size: SIZES.XL,
    withHint: true,
    required: true,
    inputType: "email",
    placeholder: "Email",
    iconLeft: <Mail size={14} />,
    iconRight: <CircleHelp size={14} />,
    text: "This is a hint to help user."
  }
}`,...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const te=["Base","BaseError","BaseDisabled","ExtraSmall","Large","ExtraLarge"];export{t as Base,n as BaseDisabled,a as BaseError,o as ExtraLarge,s as ExtraSmall,l as Large,te as __namedExportsOrder,re as default};
