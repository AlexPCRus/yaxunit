"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[492],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=u(t),g=a,d=y["".concat(p,".").concat(g)]||y[g]||m[g]||i;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[y]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3216:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(8168),a=(t(6540),t(5680));const i={sidebar_position:9,title:"\u042e\u0422\u041e\u0431\u0449\u0438\u0439"},l="\u041e\u0431\u0449\u0438\u0439 (\u042e\u0422\u041e\u0431\u0449\u0438\u0439)",o={unversionedId:"\u042e\u0422\u041e\u0431\u0449\u0438\u0439",id:"\u042e\u0422\u041e\u0431\u0449\u0438\u0439",title:"\u042e\u0422\u041e\u0431\u0449\u0438\u0439",description:"\u041c\u0435\u0442\u043e\u0434\u044b \u043c\u043e\u0434\u0443\u043b\u044f",source:"@site/api/\u042e\u0422\u041e\u0431\u0449\u0438\u0439.md",sourceDirName:".",slug:"/\u042e\u0422\u041e\u0431\u0449\u0438\u0439",permalink:"/yaxunit/api/\u042e\u0422\u041e\u0431\u0449\u0438\u0439",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"\u042e\u0422\u041e\u0431\u0449\u0438\u0439"},sidebar:"api",previous:{title:"\u042e\u0422\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",permalink:"/yaxunit/api/\u042e\u0422\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},next:{title:"\u042e\u0422\u041f\u043e\u0434\u0440\u0430\u0436\u0430\u0442\u0435\u043b\u044c",permalink:"/yaxunit/api/\u042e\u0422\u041f\u043e\u0434\u0440\u0430\u0436\u0430\u0442\u0435\u043b\u044c"}},p={},u=[{value:"\u041c\u0435\u0442\u043e\u0434\u044b \u043c\u043e\u0434\u0443\u043b\u044f",id:"\u043c\u0435\u0442\u043e\u0434\u044b-\u043c\u043e\u0434\u0443\u043b\u044f",level:2},{value:"<code>\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430</code>",id:"\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430",level:3},{value:"<code>\u0425\u0435\u0448MD5</code>",id:"\u0445\u0435\u0448md5",level:3}],c={toc:u},y="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u043e\u0431\u0449\u0438\u0439-\u044e\u0442\u043e\u0431\u0449\u0438\u0439"},"\u041e\u0431\u0449\u0438\u0439 (\u042e\u0422\u041e\u0431\u0449\u0438\u0439)"),(0,a.yg)("h2",{id:"\u043c\u0435\u0442\u043e\u0434\u044b-\u043c\u043e\u0434\u0443\u043b\u044f"},"\u041c\u0435\u0442\u043e\u0434\u044b \u043c\u043e\u0434\u0443\u043b\u044f"),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"},(0,a.yg)("inlineCode",{parentName:"h3"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430")),(0,a.yg)("p",null,'\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.\n\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 "\u0433\u043b\u0443\u0431\u043e\u043a\u043e" \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438 \u043f\u043e \u0438\u043d\u0434\u0435\u043a\u0441\u0443'),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043c\u0435\u0442\u043e\u0434\u0430")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"\u041e\u0431\u044a\u0435\u043a\u0442"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0439")," - "))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"\u0418\u043c\u044f\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"\u0421\u0442\u0440\u043e\u043a\u0430"),' - \u041f\u0443\u0442\u044c \u043a \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0443. \u041f\u0440\u0438\u043c\u0435\u0440\u044b: "\u0418\u043c\u044f\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430.\u0418\u043c\u044f\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0433\u043e\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430", "',"[2]",'.\u0418\u043c\u044f\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430", "\u0418\u043c\u044f\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430',"[2]",'.\u0418\u043c\u044f\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0433\u043e\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430"'),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"\u0427\u0438\u0441\u043b\u043e")," - \u0418\u043d\u0434\u0435\u043a\u0441 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u0435\u043d \u0432\u044b\u0431\u043e\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0441 \u043a\u043e\u043d\u0446\u0430, \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0441 \u043a\u043e\u043d\u0446\u0430,\n\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: '-1' - \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442, '-2' - \u043f\u0440\u0435\u0434\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439")))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0439")," - "),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"\u0445\u0435\u0448md5"},(0,a.yg)("inlineCode",{parentName:"h3"},"\u0425\u0435\u0448MD5")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043c\u0435\u0442\u043e\u0434\u0430")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"\u0414\u0430\u043d\u043d\u044b\u0435")," -")))}m.isMDXComponent=!0}}]);