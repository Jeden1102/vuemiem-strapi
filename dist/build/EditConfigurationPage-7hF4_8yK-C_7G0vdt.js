import{bp as T,u as I,o as v,s as A,cF as N,cJ as D,fc as k,r as w,eX as O,j as s,P as c}from"./strapi-CNqpKmdp.js";import{C as R,T as U}from"./Form-CxQ2pPjq-D3rBgzj_.js";import{u as G}from"./hooks-E5u1mcgM-BK9WafDi.js";import{s as H}from"./objects-D6yBsdmx-CXHHNAHJ.js";import"./useDragAndDrop-DdHgKsqq-aViMRFLD.js";import"./ComponentIcon-u4bIXTFY-CzByWEK9.js";import"./FieldTypeIcon-CMlNO8PE-XGNBKZxn.js";import"./getEmptyImage-CjqolaH3.js";const J=()=>{const{trackUsage:o}=T(),{formatMessage:n}=I(),{toggleNotification:a}=v(),{_unstableFormatAPIError:u}=A(),{isLoading:F,schema:y,model:L}=N(),{isLoading:S,error:h,list:E,edit:g}=D(),{fieldSizes:x,error:d,isLoading:_,isFetching:j}=k(void 0,{selectFromResult:e=>{const l=Object.entries(e.data?.fieldSizes??{}).reduce((r,[t,{default:i}])=>(r[t]=i,r),{});return{isFetching:e.isFetching,isLoading:e.isLoading,error:e.error,fieldSizes:l}}});w.useEffect(()=>{d&&a({type:"danger",message:u(d)})},[d,u,a]);const C=F||S||_||j,[M]=O(),P=async e=>{try{o("willSaveContentTypeLayout");const l=Object.entries(E.metadatas).reduce((t,[i,{mainField:m,...f}])=>{const z=g.metadatas[i],{__temp_key__:Q,size:V,name:X,...b}=e.layout.flatMap(p=>p.children).find(p=>p.name===i)??{};return t[i]={edit:{...z,...b},list:f},t},{}),r=await M({layouts:{edit:e.layout.map(t=>t.children.reduce((i,{name:m,size:f})=>m!==U?[...i,{name:m,size:f}]:i,[])),list:E.layout.map(t=>t.name)},settings:H(e.settings,"displayName",void 0),metadatas:l,uid:L});"data"in r?(o("didEditEditSettings"),a({type:"success",message:n({id:"notification.success.saved",defaultMessage:"Saved"})})):a({type:"danger",message:u(r.error)})}catch{a({type:"danger",message:n({id:"notification.error",defaultMessage:"An error occurred"})})}};return C?s.jsx(c.Loading,{}):d||h||!y?s.jsx(c.Error,{}):s.jsxs(s.Fragment,{children:[s.jsx(c.Title,{children:`Configure ${g.settings.displayName} Edit View`}),s.jsx(R,{onSubmit:P,attributes:y.attributes,fieldSizes:x,layout:g})]})},te=()=>{const o=G(n=>n.admin_app.permissions.contentManager?.collectionTypesConfigurations);return s.jsx(c.Protect,{permissions:o,children:s.jsx(J,{})})};export{J as EditConfigurationPage,te as ProtectedEditConfigurationPage};