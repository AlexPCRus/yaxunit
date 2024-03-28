"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2138],{53465:(e,t,r)=>{r.d(t,{W:()=>u});var s=r(96540),a=r(44586);const n=["zero","one","two","few","many","other"];function c(e){return n.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}},41283:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var s=r(96540),a=r(44586),n=r(72415),c=r(5260),l=r(28774),o=r(21312),u=r(53465),h=r(5391),i=r(56347),m=r(92303),d=r(11088);const p=function(){const e=(0,m.A)(),t=(0,i.W6)(),r=(0,i.zy)(),{siteConfig:{baseUrl:s}}=(0,a.A)(),n=e?new URLSearchParams(r.search):null,c=n?.get("q")||"",l=n?.get("ctx")||"",o=n?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:c,searchContext:l&&Array.isArray(d.Hg)&&d.Hg.some((e=>"string"==typeof e?e===l:e.path===l))?l:"",searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${s}search?${t.toString()}`}}};var g=r(5891),x=r(32384),f=r(86841),y=r(43810),C=r(27674),S=r(2849),j=r(4471);const A={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};var I=r(43385),v=r(74848);function w(){const{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,a.A)(),{selectMessage:r}=(0,u.W)(),{searchValue:n,searchContext:l,searchVersion:i,updateSearchPath:m,updateSearchContext:f}=p(),[y,C]=(0,s.useState)(n),[j,w]=(0,s.useState)(),[P,b]=(0,s.useState)(),F=`${e}${i}`,_=(0,s.useMemo)((()=>y?(0,o.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:y}):(0,o.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[y]);(0,s.useEffect)((()=>{m(y),j&&(y?j(y,(e=>{b(e)})):b(void 0))}),[y,j]);const T=(0,s.useCallback)((e=>{C(e.target.value)}),[]);return(0,s.useEffect)((()=>{n&&n!==y&&C(n)}),[n]),(0,s.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=!Array.isArray(d.Hg)||l||d.dz?await(0,g.Z)(F,l):{wrappedIndexes:[],zhDictionary:[]};w((()=>(0,x.m)(e,t,100)))}()}),[l,F]),(0,v.jsxs)(s.Fragment,{children:[(0,v.jsxs)(c.A,{children:[(0,v.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,v.jsx)("title",{children:_})]}),(0,v.jsxs)("div",{className:"container margin-vert--lg",children:[(0,v.jsx)("h1",{children:_}),(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:(0,h.A)("col",{[A.searchQueryColumn]:Array.isArray(d.Hg),"col--9":Array.isArray(d.Hg),"col--12":!Array.isArray(d.Hg)}),children:(0,v.jsx)("input",{type:"search",name:"q",className:A.searchQueryInput,"aria-label":"Search",onChange:T,value:y,autoComplete:"off",autoFocus:!0})}),Array.isArray(d.Hg)?(0,v.jsx)("div",{className:(0,h.A)("col","col--3","padding-left--none",A.searchContextColumn),children:(0,v.jsxs)("select",{name:"search-context",className:A.searchContextInput,id:"context-selector",value:l,onChange:e=>f(e.target.value),children:[d.dz&&(0,v.jsx)("option",{value:"",children:(0,o.T)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"})}),d.Hg.map((e=>{const{label:r,path:s}=(0,I.p)(e,t);return(0,v.jsx)("option",{value:s,children:r},s)}))]})}):null]}),!j&&y&&(0,v.jsx)("div",{children:(0,v.jsx)(S.A,{})}),P&&(P.length>0?(0,v.jsx)("p",{children:r(P.length,(0,o.T)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:P.length}))}):(0,v.jsx)("p",{children:(0,o.T)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,v.jsx)("section",{children:P&&P.map((e=>(0,v.jsx)(R,{searchResult:e},e.document.i)))})]})]})}function R(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=0===r,o=2===r,u=(c?t.b:s.b).slice(),h=o?t.s:t.t;c||u.push(s.t);let i="";if(d.CU&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);i=`?${e.toString()}`}return(0,v.jsxs)("article",{className:A.searchResultItem,children:[(0,v.jsx)("h2",{children:(0,v.jsx)(l.A,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,f.Z)(h,a):(0,y.C)(h,(0,C.g)(n,"t"),a,100)}})}),u.length>0&&(0,v.jsx)("p",{className:A.searchResultItemPath,children:(0,j.$)(u)}),o&&(0,v.jsx)("p",{className:A.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,y.C)(t.t,(0,C.g)(n,"t"),a,100)}})]})}const P=function(){return(0,v.jsx)(n.A,{children:(0,v.jsx)(w,{})})}}}]);