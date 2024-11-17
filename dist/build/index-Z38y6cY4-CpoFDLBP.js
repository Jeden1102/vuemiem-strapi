import{fZ as E,g as l,r as g,gN as A,a3 as H,d as V,j as u,B as W,W as T,F as Z,aW as Y,aT as M,hu as J,cm as X,hv as Q,bz as r}from"./strapi-4ofMJ9n6.js";/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function oo(){const t={resolve:null,promise:null};return t.promise=new Promise(o=>{t.resolve=o}),t}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function to(t){let o=null;return(...e)=>(o||(o={current:t(...e)}),o.current)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const h=new Array(256).fill("").map((t,o)=>("0"+o.toString(16)).slice(-2));function eo(){const[t,o,e,c]=crypto.getRandomValues(new Uint32Array(4));return"e"+h[t>>0&255]+h[t>>8&255]+h[t>>16&255]+h[t>>24&255]+h[o>>0&255]+h[o>>8&255]+h[o>>16&255]+h[o>>24&255]+h[e>>0&255]+h[e>>8&255]+h[e>>16&255]+h[e>>24&255]+h[c>>0&255]+h[c>>8&255]+h[c>>16&255]+h[c>>24&255]}var ro=Object.defineProperty,co=(t,o,e)=>o in t?ro(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,p=(t,o,e)=>co(t,typeof o!="symbol"?o+"":o,e);/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const U=class ${constructor(o,e){p(this,"_lifecycle"),p(this,"_element"),p(this,"_releaseLock",null),p(this,"_value",null),p(this,"_afterMountCallbacks",[]),p(this,"_state",{destroyedBeforeInitialization:!1,mountingInProgress:null}),p(this,"release",to(()=>{const{_releaseLock:c,_state:i,_element:s,_lifecycle:n}=this;i.mountingInProgress?i.mountingInProgress.then(()=>n.unmount({element:s,mountResult:this.value})).catch(a=>{console.error("Semaphore unmounting error:",a)}).then(c.resolve).then(()=>{this._value=null}):(i.destroyedBeforeInitialization=!0,c.resolve())})),this._element=o,this._lifecycle=e,this._lock()}get value(){return this._value}unsafeSetValue(o){this._value=o,this._afterMountCallbacks.forEach(e=>e(o)),this._afterMountCallbacks=[]}runAfterMount(o){const{_value:e,_afterMountCallbacks:c}=this;e?o(e):c.push(o)}_lock(){const{_semaphores:o}=$,{_state:e,_element:c,_lifecycle:i}=this,s=o.get(c)||Promise.resolve(null),n=oo();this._releaseLock=n;const a=s.then(()=>e.destroyedBeforeInitialization?Promise.resolve(void 0):(e.mountingInProgress=i.mount().then(d=>(d&&this.unsafeSetValue(d),d)),e.mountingInProgress)).then(async d=>{d&&i.afterMount&&await i.afterMount({element:c,mountResult:d})}).then(()=>n.promise).catch(d=>{console.error("Semaphore mounting error:",d)}).then(()=>{o.get(c)===a&&o.delete(c)});o.set(c,a)}};p(U,"_semaphores",new Map);let io=U;/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const no="$__CKEditorReactContextMetadata";function ao(t,o){return{...o,[no]:t}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const so=E.createContext(null),lo=t=>!!t&&typeof t=="object"&&"status"in t&&["initializing","initialized","error"].includes(t.status),G=t=>o=>lo(o)&&o.status===t,z=G("initializing"),uo=t=>G("initialized")(t)&&t.watchdog.state==="ready";/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const D="Lock from React integration (@ckeditor/ckeditor5-react)";class S extends E.Component{constructor(o){super(o),p(this,"domContainer",E.createRef()),p(this,"editorSemaphore",null),this._checkVersion()}_checkVersion(){const{CKEDITOR_VERSION:o}=window;if(!o)return console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.');const[e]=o.split(".").map(Number);e>=42||o.startsWith("0.0.0")||console.warn("The <CKEditor> component requires using CKEditor 5 in version 42+ or nightly build.")}get _semaphoreValue(){const{editorSemaphore:o}=this;return o?o.value:null}get watchdog(){const{_semaphoreValue:o}=this;return o?o.watchdog:null}get editor(){const{_semaphoreValue:o}=this;return o?o.instance:null}shouldComponentUpdate(o){const{props:e,editorSemaphore:c}=this;return o.id!==e.id||o.disableWatchdog!==e.disableWatchdog?!0:(c&&(c.runAfterMount(({instance:i})=>{this._shouldUpdateEditorData(e,o,i)&&i.data.set(o.data)}),"disabled"in o&&c.runAfterMount(({instance:i})=>{o.disabled?i.enableReadOnlyMode(D):i.disableReadOnlyMode(D)})),!1)}componentDidMount(){z(this.context)||this._initLifeCycleSemaphore()}componentDidUpdate(){z(this.context)||this._initLifeCycleSemaphore()}componentWillUnmount(){this._unlockLifeCycleSemaphore()}_unlockLifeCycleSemaphore(){this.editorSemaphore&&(this.editorSemaphore.release(),this.editorSemaphore=null)}_initLifeCycleSemaphore(){this._unlockLifeCycleSemaphore(),this.editorSemaphore=new io(this.domContainer.current,{mount:async()=>this._initializeEditor(),afterMount:({mountResult:o})=>{const{onReady:e}=this.props;e&&this.domContainer.current!==null&&e(o.instance)},unmount:async({element:o,mountResult:e})=>{const{onAfterDestroy:c}=this.props;try{await this._destroyEditor(e),o.innerHTML=""}finally{c&&c(e.instance)}}})}render(){return E.createElement("div",{ref:this.domContainer})}async _initializeEditor(){if(this.props.disableWatchdog)return{instance:await this._createEditor(this.domContainer.current,this._getConfig()),watchdog:null};const o=uo(this.context)?new ko(this.context.watchdog):new this.props.editor.EditorWatchdog(this.props.editor,this.props.watchdogConfig),e={current:0};return o.setCreator(async(c,i)=>{var s;const{editorSemaphore:n}=this,{onAfterDestroy:a}=this.props;e.current>0&&a&&((s=n?.value)!=null&&s.instance)&&a(n.value.instance);const d=await this._createEditor(c,i);return n&&e.current>0&&(n.unsafeSetValue({instance:d,watchdog:o}),setTimeout(()=>{this.props.onReady&&this.props.onReady(o.editor)})),e.current++,d}),o.on("error",(c,{error:i,causesRestart:s})=>{(this.props.onError||console.error)(i,{phase:"runtime",willEditorRestart:s})}),await o.create(this.domContainer.current,this._getConfig()).catch(c=>{(this.props.onError||console.error)(c,{phase:"initialization",willEditorRestart:!1})}),{watchdog:o,instance:o.editor}}_createEditor(o,e){const{contextItemMetadata:c}=this.props;return c&&(e=ao(c,e)),this.props.editor.create(o,e).then(i=>{if("disabled"in this.props){/* istanbul ignore else -- @preserve */this.props.disabled&&i.enableReadOnlyMode(D)}const s=i.model.document,n=i.editing.view.document;return s.on("change:data",a=>{/* istanbul ignore else -- @preserve */this.props.onChange&&this.props.onChange(a,i)}),n.on("focus",a=>{/* istanbul ignore else -- @preserve */this.props.onFocus&&this.props.onFocus(a,i)}),n.on("blur",a=>{/* istanbul ignore else -- @preserve */this.props.onBlur&&this.props.onBlur(a,i)}),i})}async _destroyEditor(o){const{watchdog:e,instance:c}=o;return new Promise((i,s)=>{/* istanbul ignore next -- @preserve */setTimeout(async()=>{try{if(e)return await e.destroy(),i();if(c)return await c.destroy(),i();i()}catch(n){console.error(n),s(n)}})})}_shouldUpdateEditorData(o,e,c){return!(o.data===e.data||c.data.get()===e.data)}_getConfig(){const o=this.props.config||{};return this.props.data&&o.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...o,initialData:o.initialData||this.props.data||""}}}p(S,"contextType",so);p(S,"propTypes",{editor:l.func.isRequired,data:l.string,config:l.object,disableWatchdog:l.bool,watchdogConfig:l.object,onChange:l.func,onReady:l.func,onFocus:l.func,onBlur:l.func,onError:l.func,disabled:l.bool,id:l.any});class ko{constructor(o){p(this,"_contextWatchdog"),p(this,"_id"),p(this,"_creator"),this._contextWatchdog=o,this._id=eo()}setCreator(o){this._creator=o}create(o,e){return this._contextWatchdog.add({sourceElementOrData:o,config:e,creator:this._creator,id:this._id,type:"editor"})}on(o,e){this._contextWatchdog.on("itemError",(c,{itemId:i,error:s})=>{i===this._id&&e(null,{error:s,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function B(...t){return o=>{t.forEach(e=>{typeof e=="function"?e(o):e!=null&&(e.current=o)})}}const ho=g.memo(g.forwardRef(({id:t,semaphore:o,rootName:e},c)=>{const i=g.useRef(null);return g.useEffect(()=>{let s,n;return o.runAfterMount(({instance:a})=>{if(!i.current)return;n=a;const{ui:d,model:k}=n,v=k.document.getRoot(e);v&&n.ui.getEditableElement(e)&&n.detachEditable(v),s=d.view.createEditable(e,i.current),d.addEditable(s),a.editing.view.forceRender()}),()=>{if(n&&n.state!=="destroyed"&&i.current){const a=n.model.document.getRoot(e);/* istanbul ignore else -- @preserve */a&&n.detachEditable(a)}}},[o.revision]),E.createElement("div",{key:o.revision,id:t,ref:B(c,i)})}));ho.displayName="EditorEditable";const bo=g.forwardRef(({editor:t},o)=>{const e=g.useRef(null);return g.useEffect(()=>{const c=e.current;if(!t||!c)return;const i=t.ui.view.toolbar.element;return c.appendChild(i),()=>{c.contains(i)&&c.removeChild(i)}},[t&&t.id]),E.createElement("div",{ref:B(e,o)})});bo.displayName="EditorToolbarWrapper";const N=t=>t&&t.startsWith("/")?`${window.strapi.backendURL}${t}`:t,F=({isOpen:t=!1,onToggle:o=()=>{},editor:e})=>{const i=X("MediaLib",({components:a})=>a)["media-library"],s=a=>{let d="";a.map(({name:_,url:w,alt:R,formats:m,mime:x,width:I,height:O})=>{if(x.includes("image"))if(m&&globalThis.SH_CKE_UPLOAD_ADAPTER_IS_RESPONSIVE){let b="";Object.keys(m).sort((f,L)=>m[f].width-m[L].width).map(f=>b+=N(m[f].url)+` ${m[f].width}w,`),d=`<img src="${w}" alt="${R}" width="${I}" height="${O}" srcset="${b}" />`}else d=`<img src="${w}" alt="${R}" width="${I}" height="${O}" />`;else x.includes("video")?d=`
            <video class="video" controls width="500px">
                <source src="${w}" type="${x}" />
            </video>`:d=`<a href="${w}">${_||"Open document"}</a>`});const k=e.data.processor.toView(d),v=e.data.toModel(k);e.model.insertContent(v),o()},n=a=>{const d=a.map(k=>({name:k.name,alt:k.alternativeText||k.name,url:N(k.url),mime:k.mime,formats:k.formats,width:k.width,height:k.height}));s(d)};return t?u.jsx(i,{onClose:o,onSelectAssets:n}):null};F.propTypes={isOpen:l.bool,onToggle:l.func};const P={TOKEN:"jwtToken",PREFERED_LANGUAGE:"strapi-admin-language",PROFILE_THEME:"STRAPI_THEME"},po=()=>{const t=localStorage.getItem(P.TOKEN)??sessionStorage.getItem(P.TOKEN);return typeof t=="string"?JSON.parse(t):null},go=()=>localStorage.getItem(P.PREFERED_LANGUAGE)?.replace(/^"|"$/g,"")||"en",_o=()=>localStorage.getItem(P.PROFILE_THEME),mo=(t,o)=>{const e=po(),c=t?.plugins?[...t.plugins.map(i=>i.pluginName)]:[];c.includes("StrapiMediaLib")&&(t.strapiMediaLib={toggle:o}),c.includes("StrapiUploadAdapter")&&(t.strapiUploadAdapter={uploadUrl:`${strapi.backendURL}/upload`,headers:{Authorization:"Bearer "+e},backendUrl:strapi.backendURL,responsive:globalThis.SH_CKE_UPLOAD_ADAPTER_IS_RESPONSIVE}),c.includes("WordCount")&&(t.WordCountPlugin=!0)},j={af:()=>r(()=>import("./af-DkLS234u.js"),[]),ar:()=>r(()=>import("./ar-D_4b5gOX.js"),[]),ast:()=>r(()=>import("./ast-CFVShApU.js"),[]),az:()=>r(()=>import("./az-CMbbxQE6.js"),[]),bg:()=>r(()=>import("./bg-DjmKSOGn.js"),[]),bn:()=>r(()=>import("./bn-DwuSIRJr.js"),[]),bs:()=>r(()=>import("./bs-DzPUonhl.js"),[]),ca:()=>r(()=>import("./ca-e8fKBb1q.js"),[]),cs:()=>r(()=>import("./cs-BI9dDsfx.js"),[]),da:()=>r(()=>import("./da-W_hAyrRj.js"),[]),"de-ch":()=>r(()=>import("./de-ch-CXmf4OL8.js"),[]),de:()=>r(()=>import("./de-B4uzA27d.js"),[]),el:()=>r(()=>import("./el-5IbE-DK0.js"),[]),"en-au":()=>r(()=>import("./en-au-CB73AVhD.js"),[]),"en-gb":()=>r(()=>import("./en-gb-DiQQjWw6.js"),[]),en:()=>r(()=>import("./en-CwrOat7D.js"),[]),eo:()=>r(()=>import("./eo-CY9xxeul.js"),[]),"es-co":()=>r(()=>import("./es-co-bqvoXzfD.js"),[]),es:()=>r(()=>import("./es-DhITb4TB.js"),[]),et:()=>r(()=>import("./et-xPdZY9ra.js"),[]),eu:()=>r(()=>import("./eu-DCmYB2nd.js"),[]),fa:()=>r(()=>import("./fa-BJO2NVA_.js"),[]),fi:()=>r(()=>import("./fi-BP0958wv.js"),[]),fr:()=>r(()=>import("./fr-DCdUjN84.js"),[]),gl:()=>r(()=>import("./gl-zWikLmse.js"),[]),gu:()=>r(()=>import("./gu-z5F1SqLI.js"),[]),he:()=>r(()=>import("./he-DJqidfWa.js"),[]),hi:()=>r(()=>import("./hi-D5XnTPig.js"),[]),hr:()=>r(()=>import("./hr-BJ8RyxDP.js"),[]),hu:()=>r(()=>import("./hu-BA19xzV0.js"),[]),hy:()=>r(()=>import("./hy-mPEMvNZY.js"),[]),id:()=>r(()=>import("./id-DsVGTBX-.js"),[]),it:()=>r(()=>import("./it-PhxQwmGl.js"),[]),ja:()=>r(()=>import("./ja-Bo1y4EKM.js"),[]),jv:()=>r(()=>import("./jv-BLx2X3R4.js"),[]),kk:()=>r(()=>import("./kk-CtbLnxsr.js"),[]),km:()=>r(()=>import("./km-YyfMPRuI.js"),[]),kn:()=>r(()=>import("./kn-D-xoqmcD.js"),[]),ko:()=>r(()=>import("./ko-BEMObE5l.js"),[]),ku:()=>r(()=>import("./ku-DxF2IecX.js"),[]),lt:()=>r(()=>import("./lt-C6j_Md9s.js"),[]),lv:()=>r(()=>import("./lv-CsbRBBhC.js"),[]),ms:()=>r(()=>import("./ms-Bm7UADsa.js"),[]),nb:()=>r(()=>import("./nb-Cdn_b4Bc.js"),[]),ne:()=>r(()=>import("./ne-BZG9-Nmu.js"),[]),nl:()=>r(()=>import("./nl-tPltQGSs.js"),[]),no:()=>r(()=>import("./no-DZaUHWzr.js"),[]),oc:()=>r(()=>import("./oc-DVn706MX.js"),[]),pl:()=>r(()=>import("./pl-BrgvcyZO.js"),[]),"pt-br":()=>r(()=>import("./pt-br-Z-FhP3-r.js"),[]),pt:()=>r(()=>import("./pt-CxQqh0hn.js"),[]),ro:()=>r(()=>import("./ro-Ck5jjUhe.js"),[]),ru:()=>r(()=>import("./ru-CQDJZt6p.js"),[]),si:()=>r(()=>import("./si-bI4SFycl.js"),[]),sk:()=>r(()=>import("./sk-CjUK6Hzb.js"),[]),sl:()=>r(()=>import("./sl-D-ulVgnl.js"),[]),sq:()=>r(()=>import("./sq-CkT6fadd.js"),[]),sr:()=>r(()=>import("./sr--Qt85M9d.js"),[]),"sr-latn":()=>r(()=>import("./sr-latn-DSHr5MY4.js"),[]),sv:()=>r(()=>import("./sv-BVgskEkD.js"),[]),th:()=>r(()=>import("./th-BB-lJzlJ.js"),[]),ti:()=>r(()=>import("./ti-eF8oXupf.js"),[]),tk:()=>r(()=>import("./tk-CyVRg8kA.js"),[]),tr:()=>r(()=>import("./tr-DND9y5qk.js"),[]),tt:()=>r(()=>import("./tt-Ct9RD6mJ.js"),[]),ug:()=>r(()=>import("./ug-BUxvRYwF.js"),[]),uk:()=>r(()=>import("./uk-CXJa54xi.js"),[]),ur:()=>r(()=>import("./ur-DY-f6X1H.js"),[]),uz:()=>r(()=>import("./uz-D9PmCEyQ.js"),[]),vi:()=>r(()=>import("./vi-DkDjCN0n.js"),[]),"zh-cn":()=>r(()=>import("./zh-cn-rkFS0L-0.js"),[]),zh:()=>r(()=>import("./zh-B4LWc9VO.js"),[])},fo=async(t,o)=>{if(j[o]){const e=await j[o]();t.translations=e.default}else console.error(`No translation found for language: ${o}`)},vo=()=>{const t=new URLSearchParams(window.location.search),e=Object.fromEntries(t.entries())["plugins[i18n][locale]"];return e&&e.split("-")[0]},Eo=async t=>{const o=vo(),e=go(),{ui:c=t.language&&typeof t.language=="string"?t.language:e,textPartLanguage:i,ignorei18n:s}=t.language||{};o&&!s&&(t.language={ui:c,content:o,textPartLanguage:i}),c!=="en"&&await fo(t,c)},wo=async(t,{toggleMediaLib:o,strapiFieldPlaceholder:e})=>{const{presets:c,dontMergePresets:i}=globalThis.SH_CKE_CONFIG||{},s=i?c[t]:Q[t],n={...s,editorConfig:{...s.editorConfig,placeholder:e||s.editorConfig.placeholder}};return mo(n.editorConfig,o),await Eo(n.editorConfig),n},xo=A`
  .ck {
    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);
    --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
    --ck-color-mention-text: hsl(341, 100%, 30%);
    --ck-color-table-caption-background: hsl(0, 0%, 97%);
    --ck-color-table-caption-text: hsl(0, 0%, 20%);
    --ck-highlight-marker-blue: hsl(201, 97%, 72%);
    --ck-highlight-marker-green: hsl(120, 93%, 68%);
    --ck-highlight-marker-pink: hsl(345, 96%, 73%);
    --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
    --ck-highlight-pen-green: hsl(112, 100%, 27%);
    --ck-highlight-pen-red: hsl(0, 85%, 49%);
    --ck-image-style-spacing: 1.5em;
    --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
    --ck-todo-list-checkmark-size: 16px;
    font-size: 14px;
  }

  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    top: 64px !important;
  }
  .ck.ck-reset.ck-dropdown__panel.ck-dropdown__panel_sw.ck-dropdown__panel-visible {
    border-radius: 4px;
  }

  .ck-editor__main {
    --ck-font-face: 'Source Sans Pro', system-ui, Roboto, 'Helvetica Neue',
      'Helvetica', Arial, sans-serif;

    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }

    h1 {
      font-size: 2.3em;
    }

    h2 {
      font-size: 1.84em;
    }

    h3 {
      font-size: 1.48em;
    }

    h4 {
      font-size: 1.22em;
    }

    h5 {
      font-size: 1.06em;
    }

    h6 {
      font-size: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2em;
      padding-top: 0.8em;
      margin-bottom: 0.4em;
    }

    blockquote,
    ol,
    p,
    ul {
      font-size: 1em;
      line-height: 1.6em;
      padding-top: 0.2em;
      margin-bottom: var(--ck-spacing-large);
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    a {
      text-decoration: none;
      color: #1b3af2;
    }

    a:hover {
      text-decoration: underline;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      transition-property: border-color, box-shadow, max-height;
      transition-timing-function: ease-in-out;
      transition-duration: 0.5s;
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid var(--ck-color-base-border);
        /* border: var(--ck-focus-ring); */
        box-shadow: none;
        transition-property: border-color, box-shadow, max-height;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;
      }
    }

    .ck-focused,
    .ck-blurred {
      overflow-y: auto;
      overflow-x: hidden;
      transition: max-height 0.5s ease-in-out, min-height 0.5s ease-in-out !important;
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-track {
        background: var(--ck-scroll-track-background);
        border: none;
      }
      ::-webkit-scrollbar-thumb {
        transition: background 2s;
        background: var(--ck-scroll-thumb-background);
        border: 1px solid var(--ck-scroll-thumb-border-color);
      }
      ::-webkit-scrollbar-thumb:hover {
        transition: background 2s;
        background: var(--ck-scroll-thumb-hover-background);
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--ck-scroll-thumb-active-background);
      }
    }
  }

  .ck .ck-source-editing-area textarea {
    color: var(--ck-color-text);
    background-color: var(--ck-color-base-background);
    border: 1px solid var(--ck-color-base-border) !important;
    box-shadow: none !important;
  }

  .ck .ck-block-toolbar-button {
    min-width: 0 !important;
    min-height: 0 !important;
    width: 20px !important;
    height: 25px !important;
    margin-left: -2px !important ;

    & svg {
      color: var(--ck-color-text) !important;
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  .ck-word-count {
    margin-top: 0.3rem;
    display: flex;
    justify-content: end;
    gap: 0.3rem;
    font-size: 1rem;
    font-weight: 500;
    text-transform: lowercase;
    /* color: #b3b3c4; */
  }

  .ck[dir='rtl'] {
    .ck-block-toolbar-button {
      margin-left: 2px !important ;
    }
    & + div {
      justify-content: flex-start;
      & > .ck-word-count {
        & > div:first-child {
          order: 2;
        }
        & > div:last-child {
          order: 1;
        }
      }
    }
  }

  .ck.ck-editor__editable > .ck-placeholder::before {
    color: var(--ck-color-editor-base-text);
    opacity: 0.65;
  }
`,yo=A`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: #e4e3ff !important;
    --ck-focus-ring: 1px solid rgb(73, 69, 255) !important;
    --ck-color-button-default-hover-background: #f0f0ff !important;
  }

  .ck.ck-powered-by > a > svg > path:first-child {
    fill: #001234;
  }

  .ck {
    --ck-scroll-track-background: rgb(242, 242, 242);
    --ck-scroll-thumb-background: rgb(236, 236, 236);
    --ck-scroll-thumb-border-color: #cdcdf8;
    --ck-scroll-thumb-hover-background: #f0f0ff;
    --ck-scroll-thumb-active-background: #d9d8ff;

    --ck-color-editor-base-text: #001234;
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #dcdce4;
    --ck-color-base-background: #ffffff;
    --ck-custom-background: #ffffff;
    --ck-custom-foreground: #dedede;
    --ck-custom-border: #dcdce4;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #f0f0ff;
    --ck-color-base-active-focus: #e2e2fd;
    
    /* -- Overrides generic colors. ----------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);

    --ck-color-focus-border: rgb(73, 69, 255);

    --ck-color-text: #32324d;
    --ck-color-shadow-drop: hsla(250, 31%, 80%, 0.1);
    --ck-color-shadow-inner: hsla(250, 31%, 80%, 0.1);

    /* -- Overrides the default .ck-button class colors. -------------------- */

    --ck-color-button-default-background: var(--ck-custom-background);
    --ck-color-button-default-hover-background: #f0f0ff;
    --ck-color-button-default-active-background: #f6f6f9;
    --ck-color-button-default-active-shadow: #dedefb;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: rgb(73, 69, 255);
    --ck-color-button-on-background: #f0f0ff;
    --ck-color-button-on-hover-background: #e6e9fc;
    --ck-color-button-on-active-background: #f6f6f9;
    --ck-color-button-on-active-shadow: #cdcdf8;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. ------------------ */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. --------------- */

    --ck-color-split-button-hover-background: var(
      --ck-color-button-default-hover-background
    );
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. --------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(0, 0%, 97%);
    --ck-color-input-disabled-border: rgb(214, 214, 214);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. -------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ---------------------- */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #f4f4fb;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(
      --ck-color-base-active-focus
    );
    --ck-color-list-button-on-text: #271fe2;

    /* -- Overrides the default .ck-balloon-panel class colors. ------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. ------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. ------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. - */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package.  */

    --ck-color-widget-blurred-border: #cfcffa;
    --ck-color-widget-hover-border: #c9c9e4;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. -- */

    --ck-color-link-default: hsl(209, 89%, 33%);

    --ck-powered-by-background: transparrent;
    --ck-powered-by-border-color: var(--ck-color-base-background);

    --ck-color-dialog-background: var(--ck-custom-background);
    --ck-color-dialog-form-header-border: var(--ck-color-base-border);
  }
`,Io=A`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: rgba(106, 114, 143, 0.4) !important;
    --ck-focus-ring: 1px solid #4945ff !important;
    --ck-color-button-default-hover-background: #262630 !important;
  }

  .ck.ck-powered-by > a > svg > path:first-child {
    fill: rgb(236, 236, 236);
  }

  .ck.ck-powered-by > a > svg > path:nth-child(3) {
    fill: rgb(172, 156, 251);
  }

  .ck {
    --ck-scroll-track-background: #3d3d57;
    --ck-scroll-thumb-background: #181826;
    --ck-scroll-thumb-border-color: rgb(70, 70, 70);
    --ck-scroll-thumb-hover-background: #202033;
    --ck-scroll-thumb-active-background: #2b2b45;

    --ck-color-editor-base-text: rgb(236, 236, 236);
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #4a4a6a;
    --ck-color-base-background: #212134;
    --ck-custom-background: #181826;
    --ck-custom-foreground: #26263b;
    --ck-custom-border: #4a4a6a;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-focus-outer-shadow: #212134;

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #2e2e5c;
    --ck-color-base-active-focus: #28284d;
    
    /* -- Overrides generic colors. ----------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);
    --ck-color-focus-border: #6765bd;
    --ck-color-text: hsl(0, 0%, 93%);
    --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
    --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

    /* -- Overrides the default .ck-button class colors. -------------------- */

    --ck-color-button-default-background: rgb(33, 33, 52);

    --ck-color-button-default-hover-background: #262630;
    --ck-color-button-default-active-background: #3c3c47;
    --ck-color-button-default-active-shadow: #3c3c47;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: #7b79ff;
    --ck-color-button-on-background: #2b2b36;
    --ck-color-button-on-hover-background: #30303b;
    --ck-color-button-on-active-background: #3c3c47;
    --ck-color-button-on-active-shadow: #3c3c47;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. ------------------ */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. --------------- */

    --ck-color-split-button-hover-background: var(
      --ck-color-button-default-hover-background
    );
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. --------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(255, 4%, 21%);
    --ck-color-input-disabled-border: hsl(250, 3%, 38%);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------*/

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ---------------------- */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #121221;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(
      --ck-color-base-active-focus
    );
    --ck-color-list-button-on-text: #ffffff;

    /* -- Overrides the default .ck-balloon-panel class colors. ------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. ------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. ------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. - */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package.  */

    --ck-color-widget-blurred-border: #7c7c96;
    --ck-color-widget-hover-border: #666687;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. -- */

    --ck-color-link-default: hsl(216, 100%, 75%);

    --ck-powered-by-background: transparrent;
    --ck-powered-by-border-color: var(--ck-color-base-background);

    --ck-color-dialog-background: var(--ck-custom-background);
    --ck-color-dialog-form-header-border: var(--ck-color-base-border);
  }
`,Ro=A`
  /* --- expanding --- */

  .ck.ck-editor__main .ck-blurred {
    max-height: 200px !important;
  }
  .ck.ck-editor__main .ck-focused {
    min-height: 200px !important;
    max-height: 700px !important;
  }

  /* --- color-grid --- */

  .ck.ck-color-ui-dropdown {
    --ck-color-grid-tile-size: 22px !important;
  }
  .ck.ck-color-grid__tile {
    width: auto;
  }
  .ck.ck-color-ui-dropdown .ck-color-grid {
    grid-gap: 2px;
  }
  .ck.ck-color-ui-dropdown .ck-color-grid .ck-button {
    border-radius: 2px;
  }
  .ck.ck-color-ui-dropdown
    .ck.ck-color-grid
    .ck-color-grid__tile:hover:not(.ck-disabled),
  .ck.ck-color-ui-dropdown
    .ck.ck-color-grid
    .ck-color-grid__tile:focus:not(.ck-disabled) {
    z-index: 1;
    transform: scale(1.1);
    border-radius: 2px;
  }

  /* ---- Styles feature ------------------------------------------------------ */

  :root {
    --ck-georgia-serif-font-stack: Georgia, Times, Times New Roman, serif;
  }

  .ck-content h1.document-title {
    font-family: var(--ck-georgia-serif-font-stack);
    font-size: 50px;
    font-weight: bold;
    border: 0;
  }

  .ck-content h2.document-subtitle {
    font-family: var(--ck-georgia-serif-font-stack);
    font-size: 20px;
    font-weight: bold;
    color: #d1d1d1;
    letter-spacing: 10px;
  }

  .ck-content p.callout {
    --border-color: #e91e1e;
    padding: 1.2em 2em;
    border: 1px solid var(--border-color);
    border-left: 10px solid var(--border-color);
    background: #fff9fb;
    border-radius: 5px;
    margin: 1.5em 2em;
    box-shadow: 5px 5px 0 #ffe6ef;
  }

  .ck-content blockquote.side-quote {
    font-family: var(--ck-georgia-serif-font-stack);
    font-style: normal;
    float: right;
    width: 35%;
    position: relative;
    border: 0;
    overflow: visible;
    z-index: 1;
    margin-left: 1em;
  }

  .ck-content blockquote.side-quote::before {
    content: '“';
    position: absolute;
    top: -37px;
    left: -10px;
    display: block;
    font-size: 200px;
    color: #e7e7e7;
    z-index: -1;
    line-height: 1;
  }

  .ck-content blockquote.side-quote p {
    font-size: 2em;
    line-height: 1;
  }

  .ck-content blockquote.side-quote p:last-child:not(:first-child) {
    font-size: 1.3em;
    text-align: right;
    color: #555;
  }

  .ck-content span.needs-clarification {
    outline: 1px dashed #c8a24b;
    background: #ffe19c;
    border-radius: 2px;
    position: relative;
  }

  .ck-content span.needs-clarification::after {
    content: '?';
    display: inline-block;
    color: #fff;
    background: #3b3b3b;
    font-size: 12px;
    vertical-align: super;
    width: 12px;
    height: 12px;
    line-height: 12px;
    border-radius: 10px;
    text-align: center;
    position: absolute;
    right: -6px;
    top: -6px;
    font-weight: bold;
    letter-spacing: initial;
  }

  .ck-content span.wide-spacing {
    letter-spacing: 0.3em;
  }

  .ck-content span.small-caps {
    font-variant: small-caps;
  }

  .ck-content span.spoiler {
    background: #000;
    color: #000;
  }

  .ck-content span.spoiler:hover {
    background: #000;
    color: #fff;
  }

  .ck-content pre.stylish-code {
    border-color: transparent;
    margin-left: 2em;
    margin-right: 2em;
    border-radius: 10px;
  }

  .ck-content pre.stylish-code::before {
    content: '';
    display: block;
    height: 13px;
    background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==);
    margin-bottom: 8px;
    background-repeat: no-repeat;
  }

  .ck-content pre.stylish-code-dark,
  .ck-content pre.stylish-code-bright {
    padding: 1em;
  }

  .ck-content pre.stylish-code-dark {
    background: #272822;
    box-shadow: 5px 5px 0 #0000001f;
    color: white;
  }

  .ck-content pre.stylish-code-dark code {
    color: white;
  }

  .ck-content pre.stylish-code-bright {
    background: #dddfe0;
    color: #000;
    box-shadow: 5px 5px 0 #b3b3b3;
  }

  .ck-content pre.stylish-code-bright code {
    color: #222;
  }
`,Oo={common:xo,light:yo,dark:Io,additional:Ro},Lo=H`
  ${({theme:t})=>t.common}
  ${({theme:t,variant:o})=>t[o]}
  ${({theme:t})=>t.additional}
`,To=()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",Po=()=>{const{theme:t,dontMergeTheme:o}=globalThis.SH_CKE_CONFIG||{},e=_o(),c=e&&e!=="system"?e:To(),i=o?t:{...Oo,...t};return u.jsx(Lo,{theme:i,variant:c})},Ao=E.memo(Po),Co=V("div")`
  ${({styles:t})=>t}
`,K=({name:t,disabled:o,presetName:e,maxLength:c,placeholder:i})=>{const{onChange:s,value:n}=Y(t),[a,d]=g.useState(!1),[k,v]=g.useState(!1),[_,w]=g.useState(null),[R,m]=g.useState(!1),x=g.useRef(null),I=()=>v(b=>!b),O=b=>b>c?m(!0):m(!1);return g.useEffect(()=>{(async()=>{const b=await wo(e,{toggleMediaLib:I,strapiFieldPlaceholder:i});w(b)})()},[]),u.jsxs(u.Fragment,{children:[_&&u.jsx(Ao,{}),u.jsxs(Co,{styles:_?.styles,children:[!_&&u.jsx(Vo,{hasRadius:!0,background:"neutral100",children:u.jsx(M,{children:"Loading..."})}),_&&u.jsxs(u.Fragment,{children:[u.jsx(S,{editor:J,config:_.editorConfig,disabled:o,data:n??"",onReady:b=>{if(_.editorConfig.WordCountPlugin){const y=b.plugins.get("WordCount");y.on("update",(L,C)=>O(C.characters)),x.current?.appendChild(y.wordCountContainer)}b.plugins.has("ImageUploadEditing")&&b.plugins.get("ImageUploadEditing").on("uploadComplete",(y,{data:f,imageElement:L})=>b.model.change(C=>C.setAttribute("alt",f.alt,L))),d(b)},onChange:(b,y)=>{const f=y.getData();s({target:{name:t,value:f}})}}),u.jsx(F,{isOpen:k,onToggle:I,editor:a}),_.editorConfig.WordCountPlugin&&u.jsx(Do,{color:R?"danger500":"neutral400",ref:x,children:!a&&u.jsx(M,{small:!0,children:"Loading..."})})]})]})]})};K.propTypes={name:l.string.isRequired,disabled:l.bool,presetName:l.string.isRequired,maxLength:l.number,placeholder:l.string};const Do=V(W)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,Vo=V(W)`
  display: flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
`,q=({name:t,attribute:o,value:e="",labelAction:c=null,label:i,disabled:s=!1,error:n=null,required:a=!1,hint:d="",placeholder:k})=>{const{preset:v,maxLengthCharacters:_,...w}=o.options;return u.jsx(T.Root,{name:t,id:t,error:n,hint:d,required:a,children:u.jsxs(Z,{direction:"column",alignItems:"stretch",gap:1,children:[u.jsx(T.Label,{action:c,children:i}),u.jsx(K,{disabled:s,name:t,value:e,presetName:v,maxLength:_,placeholder:k}),u.jsx(T.Hint,{}),u.jsx(T.Error,{})]})})};q.propTypes={name:l.string.isRequired,attribute:l.object.isRequired,value:l.string,labelAction:l.object,label:l.string,disabled:l.bool,error:l.string,required:l.bool,hint:l.string,placeholder:l.string};const Mo=E.memo(q);export{Mo as default};
