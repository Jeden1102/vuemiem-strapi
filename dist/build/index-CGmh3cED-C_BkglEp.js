import{u as O,aq as P,bp as _,r as f,gi as $,gb as G,gj as v,v as U,gk as q,j as e,P as y,L as z,bf as x,a4 as K,aR as o,bh as Q,T as u,F as V,I as C,b8 as Y,H as J,bj as X,bk as Z,bl as ee,gl as m}from"./strapi-4ofMJ9n6.js";import{u as te,H as se,R as oe}from"./Layout-BIIxkAtf-Badawn2r.js";import"./useDragLayer-BU4cLZGB.js";const ie=()=>{const{formatMessage:s}=O(),a=P(),{trackUsage:b}=_(),[d,c]=f.useState(null),[S,w]=f.useState(!1),{data:L,isLoading:M}=$(),{meta:i,workflows:g,isLoading:r,delete:T}=te(),{getFeature:R,isLoading:p}=G(),D=v(t=>t.admin_app.permissions.settings?.["review-workflows"]),{allowedActions:{canCreate:h,canRead:E,canUpdate:W,canDelete:F}}=U(D),l=R("review-workflows")?.[q],I=t=>{c(t)},A=()=>{c(null)},N=async()=>{d&&(await T(d),c(null))},j=t=>{t.preventDefault(),l&&i&&i?.workflowCount>=parseInt(l,10)?(t.preventDefault(),w(!0)):(a("create"),b("willCreateWorkflow"))};f.useEffect(()=>{!r&&!p&&l&&i&&i?.workflowCount>parseInt(l,10)&&w(!0)},[p,r,i,i?.workflowCount,l]);const k=[{label:s({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"}),name:"name"},{label:s({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"}),name:"stages"},{label:s({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"}),name:"content-types"}];if(r||M)return e.jsx(y.Loading,{});const B=Object.values(L??{}).reduce((t,n)=>(t.push(...n),t),[]);return e.jsxs(e.Fragment,{children:[e.jsx(se,{primaryAction:h?e.jsx(z,{startIcon:e.jsx(x,{}),size:"S",tag:K,to:"create",onClick:j,children:s({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}):null,subtitle:s({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:s({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),e.jsxs(oe,{children:[e.jsx(o.Root,{isLoading:r,rows:g,footer:h?e.jsx(Q,{icon:e.jsx(x,{}),onClick:j,children:s({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}):null,headers:k,children:e.jsxs(o.Content,{children:[e.jsx(o.Head,{children:k.map(t=>e.jsx(o.HeaderCell,{...t},t.name))}),e.jsx(o.Body,{children:g.map(t=>e.jsxs(o.Row,{onClick:()=>{a(`${t.id}`)},children:[e.jsx(o.Cell,{width:"25rem",children:e.jsx(u,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:t.name})}),e.jsx(o.Cell,{children:e.jsx(u,{textColor:"neutral800",children:t.stages.length})}),e.jsx(o.Cell,{children:e.jsx(u,{textColor:"neutral800",children:t.contentTypes.map(n=>B.find(H=>H.uid===n)?.info.displayName??"").join(", ")})}),e.jsx(o.Cell,{children:e.jsxs(V,{alignItems:"center",justifyContent:"end",children:[E||W?e.jsx(C,{tag:Y,to:t.id.toString(),label:s({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:t.name}),variant:"ghost",children:e.jsx(J,{})}):null,g.length>1&&F?e.jsx(C,{withTooltip:!1,label:s({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),variant:"ghost",onClick:n=>{n.stopPropagation(),I(String(t.id))},children:e.jsx(X,{})}):null]})})]},t.id))})]})}),e.jsx(Z.Root,{open:!!d,onOpenChange:A,children:e.jsx(ee,{onConfirm:N,children:s({id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"})})}),e.jsxs(m.Root,{open:S,onOpenChange:()=>w(!1),children:[e.jsx(m.Title,{children:s({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You’ve reached the limit of workflows in your plan"})}),e.jsx(m.Body,{children:s({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},ce=()=>{const s=v(a=>a.admin_app.permissions.settings?.["review-workflows"]?.main);return e.jsx(y.Protect,{permissions:s,children:e.jsx(ie,{})})};export{ce as ProtectedListPage,ie as ReviewWorkflowsListView};