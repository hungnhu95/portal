(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[8540],{4137:function(e,t,o){"use strict";o.d(t,{Zo:function(){return p},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(g,i(i({ref:t},p),{},{components:o})):r.createElement(g,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7258:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=o(2122),n=o(9756),a=(o(7294),o(4137)),i={id:"lesson-5",title:"Lesson 5",sidebar_label:"Lesson 5",description:"Stake pool course: Lesson 5.",image:"./img/og-developer-portal.png"},s=void 0,l={unversionedId:"stake-pool-course/lesson-5",id:"stake-pool-course/lesson-5",isDocsHomePage:!1,title:"Lesson 5",description:"Stake pool course: Lesson 5.",source:"@site/docs/stake-pool-course/lesson-5.md",sourceDirName:"stake-pool-course",slug:"/stake-pool-course/lesson-5",permalink:"/docs/stake-pool-course/lesson-5",editUrl:"https://github.com/cardano-foundation/developer-portal/edit/staging/docs/stake-pool-course/lesson-5.md",tags:[],version:"current",lastUpdatedBy:"katomm",lastUpdatedAt:1625336488,formattedLastUpdatedAt:"7/4/2021",frontMatter:{id:"lesson-5",title:"Lesson 5",sidebar_label:"Lesson 5",description:"Stake pool course: Lesson 5.",image:"./img/og-developer-portal.png"},sidebar:"someSidebar",previous:{title:"Lesson 4",permalink:"/docs/stake-pool-course/lesson-4"},next:{title:"Installing VirtualBox",permalink:"/docs/stake-pool-course/handbook/setup-virtual-box-written"}},c=[{value:"Logging and Monitoring with Prometheus",id:"logging-and-monitoring-with-prometheus",children:[]},{value:"Grafana Dashboard",id:"grafana-dashboard",children:[]}],p={toc:c};function u(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"logging-and-monitoring-with-prometheus"},"Logging and Monitoring with Prometheus"),(0,a.kt)("p",null,"Learn how to perform logging and monitoring of your stake pool with prometheus. To be able to follow the video better you can find the written tutorial ",(0,a.kt)("a",{parentName:"p",href:"handbook/apply-logging-prometheus"},"how to perform logging and monitoring with prometheus")," in the stake pool operator handbook."),(0,a.kt)("iframe",{width:"100%",height:"325",src:"https://www.youtube.com/embed/VIyDBz7Gd4Y",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"grafana-dashboard"},"Grafana Dashboard"),(0,a.kt)("p",null,"Learn how to use Grafana to build a dashboard to monitor your nodes. To be able to follow the video better you can find the written tutorial ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cardano.org/projects/cardano-node/en/latest/logging-monitoring/grafana.html"},"how to use Grafana")," in the stake pool operator handbook."),(0,a.kt)("iframe",{width:"100%",height:"325",src:"https://www.youtube.com/embed/KsYqeEjjVbQ",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"questions or suggestions?")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you have any questions and suggestions while taking the lessons please feel free to ",(0,a.kt)("a",{parentName:"p",href:"https://forum.cardano.org/c/staking-delegation/setup-a-stake-pool/158"},"ask in the Cardano forum")," and we will respond as soon as possible."))))}u.isMDXComponent=!0}}]);