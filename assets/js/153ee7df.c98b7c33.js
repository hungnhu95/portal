(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[3509],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1799:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var o=n(2122),r=n(9756),a=(n(7294),n(4137)),s={id:"utxo-model",title:"Classic UTxO model",sidebar_label:"Classic UTxO model",description:"Stake pool course: The classic UTxO model.",image:"./img/og-developer-portal.png"},i=void 0,c={unversionedId:"stake-pool-course/handbook/utxo-model",id:"stake-pool-course/handbook/utxo-model",isDocsHomePage:!1,title:"Classic UTxO model",description:"Stake pool course: The classic UTxO model.",source:"@site/docs/stake-pool-course/handbook/utxo-model.md",sourceDirName:"stake-pool-course/handbook",slug:"/stake-pool-course/handbook/utxo-model",permalink:"/docs/stake-pool-course/handbook/utxo-model",editUrl:"https://github.com/cardano-foundation/developer-portal/edit/staging/docs/stake-pool-course/handbook/utxo-model.md",tags:[],version:"current",lastUpdatedBy:"katomm",lastUpdatedAt:1627034034,formattedLastUpdatedAt:"7/23/2021",frontMatter:{id:"utxo-model",title:"Classic UTxO model",sidebar_label:"Classic UTxO model",description:"Stake pool course: The classic UTxO model.",image:"./img/og-developer-portal.png"},sidebar:"someSidebar",previous:{title:"Command Line Interface",permalink:"/docs/stake-pool-course/handbook/use-cli"},next:{title:"Creating keys and addresses",permalink:"/docs/stake-pool-course/handbook/keys-addresses"}},l=[{value:"Reference material",id:"reference-material",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the classic UTxO model (Cardano SL in Byron and Shelley), a transaction output locked by a script carries two pieces of information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"its value (the amount)"),(0,a.kt)("li",{parentName:"ul"},'its reference address (the "proof" of ownership telling who is the owner of the output)')),(0,a.kt)("p",null,"Every transaction has at least one input and at least one output. Transactions carries the information about money flow. Inputs inform where the money came from (source address), while outputs inform where the money goes to (destination address). Every new transactions spend outputs of previous transactions and produce new outputs that can be spent by future transactions. The blockchain records the collective history of those transactions. "),(0,a.kt)("p",null,"An unspent transaction output is called a UTxO (as in ",(0,a.kt)("strong",{parentName:"p"},"U"),"nspent ",(0,a.kt)("strong",{parentName:"p"},"Tx")," ",(0,a.kt)("strong",{parentName:"p"},"O"),'utput) and represents an amount of money owned by a participant that can be spent as an input in a new transaction. The key issue here is that a complete UTxO must be used as an input for a new transaction. UTxOs cannot be consumed in part. Rather, the difference is sent back to the source as a "change" during the transaction, which is represented as a new UTxO. '),(0,a.kt)("p",null,"For example, asuming zero transaction fees, let's say Alice has 100 ada and Bob has 20 ada. If Alice wants to transfer Bob 40 ada, Alice must consume the full 100 ada as input to the new transaction. This new transaction will have two outputs: 40 ada to Bob and 60 ada to Alice. "),(0,a.kt)("p",null,"Therefore, the current balance in a wallet will be the sum of all its unspent transaction outputs (UTxOs). On future transactions, those UTxOs will become the inputs for those new transactions."),(0,a.kt)("h3",{id:"reference-material"},"Reference material"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://emurgo.io/blog/understanding-unspent-transaction-outputs-in-cardano"},"Understanding Unspent Transaction Outputs in Cardano")))}p.isMDXComponent=!0}}]);