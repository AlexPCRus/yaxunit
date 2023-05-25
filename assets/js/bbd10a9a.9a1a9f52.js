"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={tags:["\u041d\u0430\u0447\u0430\u043b\u043e","\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442"]},l="\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442",o={unversionedId:"user-api/context",id:"user-api/context",title:"\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442",description:"\u041e\u0434\u043d\u0438\u043c \u0438\u0437 \u0432\u0430\u0436\u043d\u0435\u0439\u0448\u0438\u0445 \u0431\u043b\u043e\u043a\u043e\u0432 \u0440\u0430\u0431\u043e\u0442\u044b \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043e\u0432.",source:"@site/docs/user-api/context.md",sourceDirName:"user-api",slug:"/user-api/context",permalink:"/yaxunit/docs/user-api/context",draft:!1,editUrl:"https://github.com/bia-technologies/yaxunit/docs/user-api/context.md",tags:[{label:"\u041d\u0430\u0447\u0430\u043b\u043e",permalink:"/yaxunit/docs/tags/\u043d\u0430\u0447\u0430\u043b\u043e"},{label:"\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442",permalink:"/yaxunit/docs/tags/\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442"}],version:"current",frontMatter:{tags:["\u041d\u0430\u0447\u0430\u043b\u043e","\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442"]},sidebar:"tutorialSidebar",previous:{title:"\u0423\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0431\u0430\u0437\u044b",permalink:"/yaxunit/docs/user-api/assertions/assertions-db"},next:{title:"\u041c\u043e\u043a\u0438\u0442\u043e",permalink:"/yaxunit/docs/user-api/mockito"}},p={},u=[],c={toc:u},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442"},"\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442"),(0,a.kt)("p",null,"\u041e\u0434\u043d\u0438\u043c \u0438\u0437 \u0432\u0430\u0436\u043d\u0435\u0439\u0448\u0438\u0445 \u0431\u043b\u043e\u043a\u043e\u0432 \u0440\u0430\u0431\u043e\u0442\u044b \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043e\u0432."),(0,a.kt)("p",null,"\u041e\u043d \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u0430 \u0442\u0435\u043a\u0443\u0447\u0438\u0445 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439"),(0,a.kt)("li",{parentName:"ol"},"\u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u043c\u0435\u0436\u0434\u0443 \u0442\u0435\u0441\u0442\u0430\u043c\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),(0,a.kt)("li",{parentName:"ol"},"\u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 (\u043f\u043e\u043a\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b)")),(0,a.kt)("p",null,"\u0418 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u041d\u0435 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c"),(0,a.kt)("li",{parentName:"ol"},'\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u044b \u0438\u043c\u0435\u044e\u0442 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0436\u0438\u0437\u043d\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u0441\u0442\u0430 "\u0436\u0438\u0432\u0435\u0442" \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0442\u0435\u0441\u0442\u0430 \u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f\u0445 "\u041f\u0435\u0440\u0435\u0434\u041a\u0430\u0436\u0434\u044b\u043c\u0422\u0435\u0441\u0442\u043e\u043c", "\u041f\u043e\u0441\u043b\u0435\u041a\u0430\u0436\u0434\u043e\u0433\u043e\u0422\u0435\u0441\u0442\u0430".')),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u043e\u0432 \u0434\u0432\u0438\u0436\u043a\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u044b, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0439, \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u0441\u0442\u0430 \u0438 \u0442\u0434."),(0,a.kt)("p",null,"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443 \u0442\u0435\u0441\u0442\u043e\u0432 \u0431\u0443\u0434\u0443\u0442 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u044b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u0441\u0442\u0430 (",(0,a.kt)("inlineCode",{parentName:"li"},"\u042e\u0422\u0435\u0441\u0442.\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0422\u0435\u0441\u0442\u0430"),") - \u0436\u0438\u0432\u0435\u0442 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043e\u0434\u043d\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0430, \u0442\u0430\u043a\u0436\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u0439 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0434\u041a\u0430\u0436\u0434\u044b\u043c\u0422\u0435\u0441\u0442\u043e\u043c")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u043e\u0441\u043b\u0435\u041a\u0430\u0436\u0434\u043e\u0433\u043e\u0422\u0435\u0441\u0442\u0430")),(0,a.kt)("li",{parentName:"ul"},"\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u043d\u0430\u0431\u043e\u0440\u0430 (",(0,a.kt)("inlineCode",{parentName:"li"},"\u042e\u0422\u0435\u0441\u0442.\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e\u041d\u0430\u0431\u043e\u0440\u0430"),") - \u0436\u0438\u0432\u0435\u0442 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043d\u0430\u0431\u043e\u0440\u0430 \u0442\u0435\u0441\u0442\u043e\u0432. \u0414\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u0442\u0435\u0441\u0442\u0435 \u043d\u0430\u0431\u043e\u0440\u0430 \u0438 \u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u0439",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0434\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u043c\u041d\u0430\u0431\u043e\u0440\u043e\u043c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u043e\u0441\u043b\u0435\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e\u041d\u0430\u0431\u043e\u0440\u0430")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0434\u041a\u0430\u0436\u0434\u044b\u043c\u0422\u0435\u0441\u0442\u043e\u043c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u043e\u0441\u043b\u0435\u041a\u0430\u0436\u0434\u043e\u0433\u043e\u0422\u0435\u0441\u0442\u0430")))),(0,a.kt)("li",{parentName:"ul"},"\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f (",(0,a.kt)("inlineCode",{parentName:"li"},"\u042e\u0422\u0435\u0441\u0442.\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u041c\u043e\u0434\u0443\u043b\u044f"),") - \u0436\u0438\u0432\u0435\u0442 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f. \u0414\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u0442\u0435\u0441\u0442\u0435 \u043c\u043e\u0434\u0443\u043b\u044f \u0438 \u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u0439",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0434\u0412\u0441\u0435\u043c\u0438\u0422\u0435\u0441\u0442\u0430\u043c\u0438")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u043e\u0441\u043b\u0435\u0412\u0441\u0435\u0445\u0422\u0435\u0441\u0442\u043e\u0432")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0434\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u043c\u041d\u0430\u0431\u043e\u0440\u043e\u043c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u043e\u0441\u043b\u0435\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e\u041d\u0430\u0431\u043e\u0440\u0430")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0434\u041a\u0430\u0436\u0434\u044b\u043c\u0422\u0435\u0441\u0442\u043e\u043c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u043e\u0441\u043b\u0435\u041a\u0430\u0436\u0434\u043e\u0433\u043e\u0422\u0435\u0441\u0442\u0430"))))))}s.isMDXComponent=!0}}]);