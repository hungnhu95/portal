(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[8366],{4137:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8448:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},7358:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),r=a(2713);var o=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=function(e){var t,a=e.lazy,r=e.block,c=e.defaultValue,d=e.values,p=e.groupId,m=e.className,u=n.Children.toArray(e.children),h=null!=d?d:u.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=c?c:null==(t=u.find((function(e){return e.props.default})))?void 0:t.props.value,k=o(),g=k.tabGroupChoices,v=k.setTabGroupChoices,b=(0,n.useState)(f),w=b[0],N=b[1],y=[];if(null!=p){var x=g[p];null!=x&&x!==w&&h.some((function(e){return e.value===x}))&&N(x)}var C=function(e){var t=e.currentTarget,a=y.indexOf(t),n=h[a].value;N(n),null!=p&&(v(p,n),setTimeout((function(){var e,a,n,r,o,i,s,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,a>=0&&o<=c&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case"ArrowLeft":var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},h.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:O,onFocus:C,onClick:C},null!=a?a:t)}))),a?(0,n.cloneElement)(u.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},u.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},2713:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},104:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=a(2122),r=a(9756),o=(a(7294),a(4137)),i=(a(7358),a(8448),{id:"how-to-create-a-metadata-transaction-cli",title:"How to create a metadata transaction using cardano-cli",sidebar_label:"Create a metadata transaction (CLI)",description:"How to create a metadata transaction using `cardano-cli`",image:"./img/og-developer-portal.png"}),s=void 0,l={unversionedId:"transaction-metadata/how-to-create-a-metadata-transaction-cli",id:"transaction-metadata/how-to-create-a-metadata-transaction-cli",isDocsHomePage:!1,title:"How to create a metadata transaction using cardano-cli",description:"How to create a metadata transaction using `cardano-cli`",source:"@site/docs/transaction-metadata/how-to-create-a-metadata-transaction-cli.md",sourceDirName:"transaction-metadata",slug:"/transaction-metadata/how-to-create-a-metadata-transaction-cli",permalink:"/docs/transaction-metadata/how-to-create-a-metadata-transaction-cli",editUrl:"https://github.com/cardano-foundation/developer-portal/edit/staging/docs/transaction-metadata/how-to-create-a-metadata-transaction-cli.md",tags:[],version:"current",lastUpdatedBy:"Tommy",lastUpdatedAt:1632486943,formattedLastUpdatedAt:"9/24/2021",frontMatter:{id:"how-to-create-a-metadata-transaction-cli",title:"How to create a metadata transaction using cardano-cli",sidebar_label:"Create a metadata transaction (CLI)",description:"How to create a metadata transaction using `cardano-cli`",image:"./img/og-developer-portal.png"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/transaction-metadata/"},next:{title:"Create a metadata transaction (Wallet)",permalink:"/docs/transaction-metadata/how-to-create-a-metadata-transaction-wallet"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Use case",id:"use-case",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Query UTXO",id:"query-utxo",children:[]},{value:"Submit to blockchain",id:"submit-to-blockchain",children:[]}],d={toc:c};function p(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This guide assumes that you have a basic understanding of ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-wallet")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli"),", how to use it and that you have installed it into your system. Otherwise, we recommend reading ",(0,o.kt)("a",{parentName:"p",href:"../get-started/installing-cardano-node"},"Installing cardano-node"),", ",(0,o.kt)("a",{parentName:"p",href:"../get-started/running-cardano"},"Running cardano-node"),", and ",(0,o.kt)("a",{parentName:"p",href:"../integrate-cardano/creating-wallet-faucet"},"Exploring Cardano Wallets")," guides first."),(0,o.kt)("p",{parentName:"div"},"This guide also assumes that you have ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-wallet")," running in the background and connected to the ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," network."))),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This article will explore how we can utilize the ",(0,o.kt)("strong",{parentName:"p"},"Transaction Metadata")," feature of the ",(0,o.kt)("strong",{parentName:"p"},"Cardano")," blockchain. More specifically, how we can insert and retrieve metadata that we have stored in the blockchain for a decentralized application using ",(0,o.kt)("strong",{parentName:"p"},"Transaction Metadata"),"."),(0,o.kt)("h2",{id:"use-case"},"Use case"),(0,o.kt)("p",null,"Let's imagine a decentralized ",(0,o.kt)("strong",{parentName:"p"},"To-Do List Application")," that stores and retrieve its metadata not from centralized servers or storage but instead from the ",(0,o.kt)("strong",{parentName:"p"},"Cardano blockchain"),". First, let's check the diagram below to see how something like this could theoretically work:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(8554).Z})),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The diagram is heavily simplified and is not recommended to deploy in production."))),(0,o.kt)("p",null,"Here, we see a ",(0,o.kt)("strong",{parentName:"p"},"front-end")," application the user interacts with and is responsible for inserting and retrieving the metadata to/from the ",(0,o.kt)("strong",{parentName:"p"},"back-end")," server. The ",(0,o.kt)("strong",{parentName:"p"},"back-end")," server is responsible for communicating to the ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node")," by creating ",(0,o.kt)("strong",{parentName:"p"},"transactions")," and querying the blockchain for the ",(0,o.kt)("strong",{parentName:"p"},"metadata")," information required by the ",(0,o.kt)("strong",{parentName:"p"},"front-end"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"front-end")," application is not necessarily tied to the specific ",(0,o.kt)("strong",{parentName:"p"},"back-end")," API and could switch to another API as long as it ultimately communicates to the ",(0,o.kt)("strong",{parentName:"p"},"Cardano")," network."),(0,o.kt)("p",null,"How do you actually create ",(0,o.kt)("strong",{parentName:"p"},"transaction metadata")," in the ",(0,o.kt)("strong",{parentName:"p"},"Cardano")," blockchain, you ask? We'll let's get our hands dirty!"),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"To create a transaction metadata using the ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli"),", you must first create a ",(0,o.kt)("strong",{parentName:"p"},"payment key-pair")," and a ",(0,o.kt)("strong",{parentName:"p"},"wallet address")," if you haven't already."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," Create Payment Keys ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli address key-gen \\\n--verification-key-file payment.vkey \\\n--signing-key-file payment.skey\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," Create Wallet Address ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli address build \\\n--payment-verification-key-file payment.vkey \\\n--out-file payment.addr \\\n--testnet-magic 1097911063\n")),(0,o.kt)("p",null,"Now that you have a ",(0,o.kt)("strong",{parentName:"p"},"wallet address"),", you can now request some ",(0,o.kt)("inlineCode",{parentName:"p"},"tAda")," funds from the ",(0,o.kt)("a",{parentName:"p",href:"../integrate-cardano/testnet-faucet"},"testnet faucet"),". "),(0,o.kt)("p",null,"Once you have some funds, we can now create the sample metadata that we want to store into the blockchain."),(0,o.kt)("p",null,"We start by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.json")," file with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "1337": {\n        "name": "hello world",\n        "completed": 0\n    }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Based on our theoretical ",(0,o.kt)("strong",{parentName:"p"},"To-Do List")," application, this ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," shape could be a way to insert / update entries into our list. We choose an arbitrary number (",(0,o.kt)("inlineCode",{parentName:"p"},"1337"),") as the key; we are basically saying that all metadata that will be inserted with that key is related to the ",(0,o.kt)("strong",{parentName:"p"},"To-Do List")," application data. Although we don't have control over what will be inserted with that metadata key since ",(0,o.kt)("strong",{parentName:"p"},"Cardano")," is an open platform."))),(0,o.kt)("p",null,"Now that we have our ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," data, we can create a transaction and embed the metadata into the transaction. Ultimately storing it into the ",(0,o.kt)("strong",{parentName:"p"},"Cardano")," blockchain forever."),(0,o.kt)("h2",{id:"query-utxo"},"Query UTXO"),(0,o.kt)("p",null,"The next step is to query the available ",(0,o.kt)("strong",{parentName:"p"},"UTXO")," from our ",(0,o.kt)("strong",{parentName:"p"},"wallet address"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli query utxo --testnet-magic 1097911063 --address $(cat payment.addr)\n")),(0,o.kt)("p",null,"You should see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"                           TxHash                                 TxIx        Amount\n--------------------------------------------------------------------------------------\ndfb99f8f103e56a856e04e087255dbaf402f3801acb71a6baf423a1054d3ccd5     0        1749651926 lovelace\n")),(0,o.kt)("p",null,"Here we can see that our ",(0,o.kt)("strong",{parentName:"p"},"wallet address")," contains some spendable ",(0,o.kt)("inlineCode",{parentName:"p"},"lovelace")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"TxHash: dfb99f8f103e56a856e04e087255dbaf402f3801acb71a6baf423a1054d3ccd5")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TxIndex: 0"),". We can then use it to pay for the transaction fee when we store our data on the blockchain."),(0,o.kt)("h2",{id:"submit-to-blockchain"},"Submit to blockchain"),(0,o.kt)("p",null,"Next, we create a draft transaction with the metadata embedded into it using the ",(0,o.kt)("inlineCode",{parentName:"p"},"TxHash")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TxIndex")," result from our last query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{2}","{2}":!0},"cardano-cli transaction build-raw \\\n--tx-in dfb99f8f103e56a856e04e087255dbaf402f3801acb71a6baf423a1054d3ccd5#0 \\\n--tx-out $(cat payment.addr)+0 \\\n--metadata-json-file metadata.json \\\n--fee 0 \\\n--out-file tx.draft\n")),(0,o.kt)("p",null,"Then we calculate the transaction fee like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli transaction calculate-min-fee \\\n--tx-body-file tx.draft \\\n--tx-in-count 1 \\\n--tx-out-count 1 \\\n--witness-count 1 \\\n--byron-witness-count 0 \\\n--testnet-magic 1097911063 \\\n--protocol-params-file protocol.json\n")),(0,o.kt)("p",null,"You should see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"171793 Lovelace\n")),(0,o.kt)("p",null,"With that, We build the final transaction with the total amount of our wallet minus the calculated fee as the total output amount. ",(0,o.kt)("inlineCode",{parentName:"p"},"1749651926 - 171793 = 1749480133")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{3}","{3}":!0},"cardano-cli transaction build-raw \\\n--tx-in dfb99f8f103e56a856e04e087255dbaf402f3801acb71a6baf423a1054d3ccd5#0 \\\n--tx-out $(cat payment.addr)+1749480133 \\\n--metadata-json-file metadata.json \\\n--fee 171793 \\\n--out-file tx.draft\n")),(0,o.kt)("p",null,"We then sign the transaction using our ",(0,o.kt)("strong",{parentName:"p"},"payment signing key"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli transaction sign \\             \n--tx-body-file tx.draft \\\n--signing-key-file payment.skey \\\n--testnet-magic 1097911063 \\\n--out-file tx.signed \n")),(0,o.kt)("p",null,"Finally, we submit the signed transaction to the blockchain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli transaction submit \\\n--tx-file tx.signed \\    \n--testnet-magic 1097911063\n")),(0,o.kt)("p",null,"Congratulations, you are now able to submit ",(0,o.kt)("strong",{parentName:"p"},"Cardano")," transactions with metadata embedded into them. \ud83c\udf89\ud83c\udf89\ud83c\udf89"),(0,o.kt)("p",null,"Up next, we discuss how to retrieve metadata that we have stored in the ",(0,o.kt)("strong",{parentName:"p"},"Cardano")," blockchain. ",(0,o.kt)("strong",{parentName:"p"},"@TODO")))}p.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})},8554:function(e,t,a){"use strict";t.Z=a.p+"assets/images/todo-list-app-45f9667e8173e1fe60c0ce49c5e5f679.png"}}]);