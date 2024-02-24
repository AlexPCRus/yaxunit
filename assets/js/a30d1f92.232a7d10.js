"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[419],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),y=i,g=s["".concat(p,".").concat(y)]||s[y]||d[y]||o;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9081:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(8168),i=(r(6540),r(5680));const o={sidebar_position:9,tags:["\u041d\u0430\u0447\u0430\u043b\u043e"]},a="\u0424\u043e\u0440\u043c\u0430\u0442\u044b \u043e\u0442\u0447\u0435\u0442\u043e\u0432 \u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438",l={unversionedId:"reports",id:"reports",title:"\u0424\u043e\u0440\u043c\u0430\u0442\u044b \u043e\u0442\u0447\u0435\u0442\u043e\u0432 \u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438",description:"YAxUnit \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044e \u043e\u0442\u0447\u0435\u0442\u043e\u0432 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0430\u0445 JUnit \u0438 Allure.",source:"@site/docs/reports.md",sourceDirName:".",slug:"/reports",permalink:"/yaxunit/docs/reports",draft:!1,editUrl:"https://github.com/bia-technologies/yaxunit/docs/reports.md",tags:[{label:"\u041d\u0430\u0447\u0430\u043b\u043e",permalink:"/yaxunit/docs/tags/\u043d\u0430\u0447\u0430\u043b\u043e"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,tags:["\u041d\u0430\u0447\u0430\u043b\u043e"]},sidebar:"tutorialSidebar",previous:{title:"\u041f\u0438\u0448\u0435\u043c \u043f\u0435\u0440\u0432\u044b\u0439 \u0442\u0435\u0441\u0442",permalink:"/yaxunit/docs/first-test"},next:{title:"\u0417\u0430\u043f\u0443\u0441\u043a",permalink:"/yaxunit/docs/run/"}},p={},c=[{value:"\u0424\u043e\u0440\u043c\u0430\u0442 <code>JUnit</code>",id:"\u0444\u043e\u0440\u043c\u0430\u0442-junit",level:2},{value:"\u0424\u043e\u0440\u043c\u0430\u0442 <code>Allure</code>",id:"\u0444\u043e\u0440\u043c\u0430\u0442-allure",level:2}],u={toc:c},s="wrapper";function d(e){let{components:t,...o}=e;return(0,i.yg)(s,(0,n.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"\u0444\u043e\u0440\u043c\u0430\u0442\u044b-\u043e\u0442\u0447\u0435\u0442\u043e\u0432-\u043e-\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438"},"\u0424\u043e\u0440\u043c\u0430\u0442\u044b \u043e\u0442\u0447\u0435\u0442\u043e\u0432 \u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438"),(0,i.yg)("p",null,"YAxUnit \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044e \u043e\u0442\u0447\u0435\u0442\u043e\u0432 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0430\u0445 ",(0,i.yg)("inlineCode",{parentName:"p"},"JUnit")," \u0438 ",(0,i.yg)("inlineCode",{parentName:"p"},"Allure"),"."),(0,i.yg)("p",null,"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0432\u044b \u043c\u043e\u0436\u0435\u0442 \u0432 ",(0,i.yg)("a",{parentName:"p",href:"run/configuration"},"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u0445 \u0437\u0430\u043f\u0443\u0441\u043a\u0430"),", \u043b\u0438\u0431\u043e \u0432 ",(0,i.yg)("a",{parentName:"p",href:"yaxunit-ui#%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B8-%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%86%D0%B8%D0%B8"},"\u0444\u043e\u0440\u043c\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),".\n\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0444\u043e\u0440\u043c\u0430\u0442 ",(0,i.yg)("inlineCode",{parentName:"p"},"JUnit"),"."),(0,i.yg)("h2",{id:"\u0444\u043e\u0440\u043c\u0430\u0442-junit"},"\u0424\u043e\u0440\u043c\u0430\u0442 ",(0,i.yg)("inlineCode",{parentName:"h2"},"JUnit")),(0,i.yg)("p",null,"\u0428\u0438\u0440\u043e\u043a\u043e \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043e\u0442\u0447\u0435\u0442\u043e\u0432 \u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0441 ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/bia-technologies/edt-test-runner"},"\u043f\u043b\u0430\u0433\u0438\u043d\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0442\u0435\u0441\u0442\u043e\u0432 \u0438\u0437 EDT"),". \u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0438 \u043e\u0442 Allure \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438 \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0442\u044c \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u043e\u0435 \u0438 \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f. \u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438/\u043e\u0442\u043b\u0430\u0434\u043a\u0438 \u0442\u0435\u0441\u0442\u043e\u0432."),(0,i.yg)("h2",{id:"\u0444\u043e\u0440\u043c\u0430\u0442-allure"},"\u0424\u043e\u0440\u043c\u0430\u0442 ",(0,i.yg)("inlineCode",{parentName:"h2"},"Allure")),(0,i.yg)("p",null,"\u0427\u0430\u0449\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0432 CI \u043a\u0430\u043a \u0431\u043e\u043b\u0435\u0435 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u0438 \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0442\u0447\u0435\u0442\u043e\u0432 \u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438. \u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0443\u044e \u043c\u0435\u0442\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u043e\u0442\u0447\u0435\u0442\u0435, \u0438\u043c\u0435\u0435\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u044b \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438, \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u0432 \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435."),(0,i.yg)("p",null,"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u043c \u043d\u0430\u0431\u043e\u0440\u0430\u043c"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u043c \u043d\u0430\u0431\u043e\u0440\u0430\u043c",src:r(9506).A,width:"1537",height:"830"})),(0,i.yg)("p",null,"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438",src:r(5832).A,width:"1519",height:"831"})))}d.isMDXComponent=!0},5832:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/allure-report-behaviors-c5097d7d01d8d8deb3d25f282bce1c99.png"},9506:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/allure-report-suites-5b9f6463967e9605246f3bcf265a8876.png"}}]);