(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[3281],{4137:function(t,e,r){"use strict";r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:e},s),{},{components:r})):n.createElement(f,i({ref:e},s))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2735:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return o}})},9524:function(t,e,r){"use strict";r.d(e,{C:function(){return a},Z:function(){return i}});var n=r(9962),o=r(2735);function a(){var t=(0,n.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,a=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,u=void 0!==i&&i,l=a.absolute,c=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(u)return e+r;var s=r.startsWith(e)?r:e+r.replace(/^\//,"");return c?t+s:s}(a,r,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,a().withBaseUrl)(t,e)}},1048:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(7294),o=r(508);function a(){return(0,n.useContext)(o._)}},5406:function(t,e,r){"use strict";var n=r(7294).createContext(void 0);e.Z=n},4087:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var n=r(2122),o=r(9756),a=r(7294),i=r(6010),u=r(1048),l=r(8002),c={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},s=function(t){var e=(0,u.Z)(),r=(0,l.Z)().isDarkTheme,s=t.sources,p=t.className,d=t.alt,m=void 0===d?"":d,f=(0,o.Z)(t,["sources","className","alt"]),h=e?r?["dark"]:["light"]:["light","dark"];return a.createElement(a.Fragment,null,h.map((function(t){return a.createElement("img",(0,n.Z)({key:t,src:s[t],alt:m,className:(0,i.Z)(c.themedImage,c["themedImage--"+t],p)},f))})))}},8002:function(t,e,r){"use strict";var n=r(7294),o=r(5406);e.Z=function(){var t=(0,n.useContext)(o.Z);if(null==t)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return t}},1651:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(2122),o=r(9756),a=(r(7294),r(4137)),i=r(4087),u=r(9524),l={id:"portal-contributors",title:"Contributors",sidebar_label:"Contributors",description:"Thank you for contributing to the Cardano developer portal.",image:"./img/og-developer-portal.png"},c=void 0,s={unversionedId:"portal-contributors",id:"portal-contributors",isDocsHomePage:!1,title:"Contributors",description:"Thank you for contributing to the Cardano developer portal.",source:"@site/docs/portal-contributors.md",sourceDirName:".",slug:"/portal-contributors",permalink:"/docs/portal-contributors",editUrl:"https://github.com/cardano-foundation/developer-portal/edit/staging/docs/portal-contributors.md",tags:[],version:"current",lastUpdatedBy:"katomm",lastUpdatedAt:1626443399,formattedLastUpdatedAt:"7/16/2021",frontMatter:{id:"portal-contributors",title:"Contributors",sidebar_label:"Contributors",description:"Thank you for contributing to the Cardano developer portal.",image:"./img/og-developer-portal.png"},sidebar:"someSidebar",previous:{title:"Marketing a Stake Pool",permalink:"/docs/operate-a-stake-pool/marketing-stake-pool"},next:{title:"How to contribute",permalink:"/docs/portal-contribute"}},p=[{value:"People",id:"people",children:[]},{value:"Organizations",id:"organizations",children:[]}],d={toc:p};function m(t){var e=t.components,r=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Everyone is welcome to contribute to the Cardano Developer Portal. Below is just a thank you to the people and organizations who either contribute consistently or have made an exceptional contribution, listed in chronological order:"),(0,a.kt)("h2",{id:"people"},"People"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rdlrt"},"Priyank")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gufmar"},"Markus Gufler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ruttkowa"},"Alex Ruttkowski")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/adosiawolf"},"Kyle Solomon")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/AndrewWestberg"},"Andrew Westberg")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tweakch"},"Alexander Klee"))),(0,a.kt)("h2",{id:"organizations"},"Organizations"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation"},(0,a.kt)(i.Z,{alt:"Cardano Foundation Logo",sources:{light:(0,u.Z)("/img/logo-cardanofoundation-lightmode.svg"),dark:(0,u.Z)("/img/logo-cardanofoundation-darkmode.svg")},mdxType:"ThemedImage"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk"},(0,a.kt)(i.Z,{alt:"IOHK Logo",sources:{light:(0,u.Z)("/img/logo-iohk-lightmode.svg"),dark:(0,u.Z)("/img/logo-iohk-darkmode.svg")},mdxType:"ThemedImage"}))),(0,a.kt)("p",null,"Furthermore, we thank all those who are listed on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation/developer-portal/graphs/contributors"},"contributors page in the repository")," because they have made at least one commit."))}m.isMDXComponent=!0},6010:function(t,e,r){"use strict";function n(t){var e,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=n(t[e]))&&(o&&(o+=" "),o+=r);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}function o(){for(var t,e,r=0,o="";r<arguments.length;)(t=arguments[r++])&&(e=n(t))&&(o&&(o+=" "),o+=e);return o}r.d(e,{Z:function(){return o}})}}]);