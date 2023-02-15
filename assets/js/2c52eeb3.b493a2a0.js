"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[231],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=s(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(k,l(l({ref:e},c),{},{components:a})):n.createElement(k,l({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4105:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1,tags:["Getting started"]},l="\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",o={unversionedId:"install/install",id:"install/install",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",description:"YAXUnit - \u044d\u0442\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0434\u043b\u044f 1\u0421:\u041f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043d\u0430\u0434\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0443.",source:"@site/docs/install/install.md",sourceDirName:"install",slug:"/install/",permalink:"/yaxunit/docs/install/",draft:!1,editUrl:"https://github.com/bia-technologies/yaxunit/docs/install/install.md",tags:[{label:"Getting started",permalink:"/yaxunit/docs/tags/getting-started"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Getting started"]},sidebar:"tutorialSidebar",next:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043b\u0430\u0433\u0438\u043d\u0430 EDT",permalink:"/yaxunit/docs/install/install-plugin"}},p={},s=[{value:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432 EDT",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0432-edt",level:2},{value:"\u041f\u0435\u0440\u0432\u0438\u0447\u043d\u0430\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 \u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e (workspace)",id:"\u043f\u0435\u0440\u0432\u0438\u0447\u043d\u0430\u044f-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e-\u0434\u0432\u0438\u0436\u043a\u0430-\u0432-\u0440\u0430\u0431\u043e\u0447\u0435\u0435-\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e-workspace",level:3},{value:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430",id:"\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435-\u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e-\u0434\u0432\u0438\u0436\u043a\u0430",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0442\u043e\u0440",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0432-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0442\u043e\u0440",level:2}],c={toc:s},m="wrapper";function u(t){let{components:e,...i}=t;return(0,r.kt)(m,(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,r.kt)("p",null,"YAXUnit - \u044d\u0442\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0434\u043b\u044f 1\u0421:\u041f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043d\u0430\u0434\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0443."),(0,r.kt)("h2",{id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"},"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1\u0421:\u041f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 8.3.10 \u0438\u043b\u0438 \u0441\u0442\u0430\u0440\u0448\u0435")),(0,r.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0432-edt"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432 EDT"),(0,r.kt)("h3",{id:"\u043f\u0435\u0440\u0432\u0438\u0447\u043d\u0430\u044f-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e-\u0434\u0432\u0438\u0436\u043a\u0430-\u0432-\u0440\u0430\u0431\u043e\u0447\u0435\u0435-\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e-workspace"},"\u041f\u0435\u0440\u0432\u0438\u0447\u043d\u0430\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430 \u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e (workspace)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0421\u043a\u0430\u0447\u0430\u0435\u043c \u0430\u0440\u0445\u0438\u0432 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bia-technologies/yaxunit/releases/latest"},"\u0440\u0435\u043b\u0438\u0437\u0430"),"\n",(0,r.kt)("img",{alt:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u043b\u0438\u0437\u0430",src:a(4108).Z,width:"861",height:"893"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u041a\u043e\u043f\u0438\u0440\u0443\u0435\u043c \u0438\u0437 \u0430\u0440\u0445\u0438\u0432\u0430 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0435 \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"exts/yaxunit/")," \u0432 \u0441\u0432\u043e\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0441 \u0438\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u0430\u043c\u0438 (\u043d\u0435 \u0432 \u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441)\n",(0,r.kt)("img",{alt:"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0430\u0440\u0445\u0438\u0432\u0430",src:a(4623).Z,width:"865",height:"271"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0432 \u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\n",(0,r.kt)("img",{alt:"\u0418\u043c\u043f\u043e\u0440\u0442 \u043f\u0440\u043e\u0435\u043a\u0442\u0430",src:a(9879).Z,width:"1081",height:"627"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u041f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u043c \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438\n",(0,r.kt)("img",{alt:"\u0421\u0432\u044f\u0437\u044c \u0441 \u0431\u0430\u0437\u043e\u0432\u044b\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u043c",src:a(9173).Z,width:"1076",height:"369"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0412 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0442\u043e\u0440\u0435 \u0441\u043d\u0438\u043c\u0430\u0435\u043c \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f ",(0,r.kt)("strong",{parentName:"p"},"\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c")," \u0438 ",(0,r.kt)("strong",{parentName:"p"},"\u0437\u0430\u0449\u0438\u0442\u0443 \u043e\u0442 \u043e\u043f\u0430\u0441\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0413\u043e\u0442\u043e\u0432\u043e, \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u0442\u044c \u043a \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044e \u0442\u0435\u0441\u0442\u043e\u0432."),(0,r.kt)("admonition",{parentName:"li",title:"\u0441\u043e\u0432\u0435\u0442",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u0414\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0442\u0435\u0441\u0442\u043e\u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f ",(0,r.kt)("a",{parentName:"p",href:"/yaxunit/docs/install/install-plugin"},"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u043b\u0430\u0433\u0438\u043d"))))),(0,r.kt)("h3",{id:"\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435-\u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e-\u0434\u0432\u0438\u0436\u043a\u0430"},"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u0421\u043a\u0430\u0447\u0430\u0435\u043c \u0430\u0440\u0445\u0438\u0432 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bia-technologies/yaxunit/releases/latest"},"\u0440\u0435\u043b\u0438\u0437\u0430")),(0,r.kt)("li",{parentName:"ol"},"\u0415\u0441\u043b\u0438 \u0432\u044b \u0434\u043e\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u043b\u0438 \u0434\u0432\u0438\u0436\u043e\u043a, \u0442\u043e \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u0435\u043c \u0430\u0440\u0445\u0438\u0432 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0434\u0432\u0438\u0436\u043a\u0430"),(0,r.kt)("li",{parentName:"ol"},"\u0420\u0430\u0437\u0430\u0440\u0445\u0438\u0432\u0438\u0440\u0443\u0435\u043c \u0438\u0445 \u0432\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433"),(0,r.kt)("li",{parentName:"ol"},"\u0412\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u0441\u044f \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u043e\u043c \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f EDT\n",(0,r.kt)("img",{alt:"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435",src:a(2513).Z,width:"1171",height:"684"}),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u0412\u0442\u043e\u0440\u043e\u0439 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a - \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u043a \u043d\u043e\u0432\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430"),(0,r.kt)("li",{parentName:"ul"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430 \u043d\u0443\u0436\u043d\u043e \u0434\u043b\u044f \u0442\u0440\u0435\u0445\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0435\u0433\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0445 \u0434\u0432\u0438\u0436\u043a\u0430."))),(0,r.kt)("li",{parentName:"ol"},'\u041d\u0430\u0436\u0438\u043c\u0430\u0435\u043c "\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c"'),(0,r.kt)("li",{parentName:"ol"},"\u0413\u043e\u0442\u043e\u0432\u043e.")),(0,r.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0432-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0442\u043e\u0440"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0442\u043e\u0440"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u0421\u043a\u0430\u0447\u0430\u0435\u043c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 (cfe) ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bia-technologies/yaxunit/releases/latest"},"\u0440\u0435\u043b\u0438\u0437\u0430"),(0,r.kt)("img",{alt:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u043b\u0438\u0437\u0430",src:a(4108).Z,width:"861",height:"893"})),(0,r.kt)("li",{parentName:"ol"},"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0442\u043e\u0440"),(0,r.kt)("li",{parentName:"ol"},"\u0421\u043d\u0438\u043c\u0430\u0435\u043c \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f ",(0,r.kt)("strong",{parentName:"li"},"\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c")," \u0438 ",(0,r.kt)("strong",{parentName:"li"},"\u0437\u0430\u0449\u0438\u0442\u0443 \u043e\u0442 \u043e\u043f\u0430\u0441\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439")),(0,r.kt)("li",{parentName:"ol"},"\u0413\u043e\u0442\u043e\u0432\u043e")))}u.isMDXComponent=!0},2513:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/compare-a752a84a3e1ca6f00a80776f5df034da.png"},4623:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/gh-release-content-2b422b831aa4e3587f88cae3c9af188e.png"},4108:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/gh-release-352caaca6f7c417c12517dd9aac41d86.png"},9173:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/link-base-project-6ca4ed117c5fcacc95fa022f8a56d404.png"},9879:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/project-import-7d0b8692c50b037424c55772779956bb.png"}}]);