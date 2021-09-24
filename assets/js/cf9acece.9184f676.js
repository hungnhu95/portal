(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[7094],{4137:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=d(a),f=r,m=k["".concat(p,".").concat(f)]||k[f]||c[f]||o;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6582:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=a(2122),r=a(9756),o=(a(7294),a(4137)),i={id:"register-stake-pool-metadata",title:"Register a Stake Pool with Metadata",sidebar_label:"Register a stake pool with metadata",description:"Stake pool course: Register a stake pool with metadata.",image:"./img/og-developer-portal.png"},l=void 0,p={unversionedId:"stake-pool-course/handbook/register-stake-pool-metadata",id:"stake-pool-course/handbook/register-stake-pool-metadata",isDocsHomePage:!1,title:"Register a Stake Pool with Metadata",description:"Stake pool course: Register a stake pool with metadata.",source:"@site/docs/stake-pool-course/handbook/register-stake-pool-metadata.md",sourceDirName:"stake-pool-course/handbook",slug:"/stake-pool-course/handbook/register-stake-pool-metadata",permalink:"/docs/stake-pool-course/handbook/register-stake-pool-metadata",editUrl:"https://github.com/cardano-foundation/developer-portal/edit/staging/docs/stake-pool-course/handbook/register-stake-pool-metadata.md",tags:[],version:"current",lastUpdatedBy:"katomm",lastUpdatedAt:1625336488,formattedLastUpdatedAt:"7/4/2021",frontMatter:{id:"register-stake-pool-metadata",title:"Register a Stake Pool with Metadata",sidebar_label:"Register a stake pool with metadata",description:"Stake pool course: Register a stake pool with metadata.",image:"./img/og-developer-portal.png"},sidebar:"someSidebar",previous:{title:"Configure topology files",permalink:"/docs/stake-pool-course/handbook/configure-topology-files"},next:{title:"Monitoring a node with Prometheus",permalink:"/docs/stake-pool-course/handbook/apply-logging-prometheus"}},d=[],s={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Make sure you have access to:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"File"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Content"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"payment.vkey")),(0,o.kt)("td",{parentName:"tr",align:"left"},"payment verification key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"payment.skey")),(0,o.kt)("td",{parentName:"tr",align:"left"},"payment signing key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"stake.vkey")),(0,o.kt)("td",{parentName:"tr",align:"left"},"staking verification key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"stake.skey")),(0,o.kt)("td",{parentName:"tr",align:"left"},"staking signing key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"stake.addr")),(0,o.kt)("td",{parentName:"tr",align:"left"},"registered stake address")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"payment.addr")),(0,o.kt)("td",{parentName:"tr",align:"left"},"funded address linked to ",(0,o.kt)("inlineCode",{parentName:"td"},"stake"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cold.vkey")),(0,o.kt)("td",{parentName:"tr",align:"left"},"cold verification key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cold.skey")),(0,o.kt)("td",{parentName:"tr",align:"left"},"cold signing key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cold.counter")),(0,o.kt)("td",{parentName:"tr",align:"left"},"issue counter")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"node.cert")),(0,o.kt)("td",{parentName:"tr",align:"left"},"operational certificate")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"kes.vkey")),(0,o.kt)("td",{parentName:"tr",align:"left"},"KES verification key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"kes.skey")),(0,o.kt)("td",{parentName:"tr",align:"left"},"KES signing key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"vrf.vkey")),(0,o.kt)("td",{parentName:"tr",align:"left"},"VRF verification key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"vrf.skey")),(0,o.kt)("td",{parentName:"tr",align:"left"},"VRF signing key")))),(0,o.kt)("p",null,"Registering your stake pool requires:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create JSON file with your metadata and store it in the node and in a url you maintain"),(0,o.kt)("li",{parentName:"ul"},"Get the hash of your JSON file"),(0,o.kt)("li",{parentName:"ul"},"Generate the stake pool registration certificate"),(0,o.kt)("li",{parentName:"ul"},"Create a delegation certificate pledge"),(0,o.kt)("li",{parentName:"ul"},"Submit the certificates to the blockchain")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WARNING:")," Generating the ",(0,o.kt)("strong",{parentName:"p"},"stake pool registration certificate")," and the ",(0,o.kt)("strong",{parentName:"p"},"delegation certificate")," requires the ",(0,o.kt)("strong",{parentName:"p"},"cold keys"),". So, when doing this on mainnet you may want to generate these certificates in your local machine taking the proper security measures to avoid exposing your cold keys to the internet."),(0,o.kt)("h4",{id:"create-a-json-file-with-your-pools-metadata"},"Create a JSON file with your pool's metadata"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n"name": "TestPool",\n"description": "The pool that tests all the pools",\n"ticker": "TEST",\n"homepage": "https://teststakepool.com"\n}\n')),(0,o.kt)("p",null,"Store the file in a url you control. For example ",(0,o.kt)("a",{parentName:"p",href:"https://git.io/JJWdJ"},"https://teststakepool.com/poolMetadata.json")," You can use a GIST in github to store the definition and git.io to make it short. Ensure that the URL is less than 65 characters long."),(0,o.kt)("p",null,"Example:\nGist-URL ",(0,o.kt)("a",{parentName:"p",href:"https://gist.githubusercontent.com/carloslodelar/38c7482070627092a427583cae8fa470/raw/7fddda4d258bf685d24ea3510fbde295b3920188/clrpool.json"},"https://gist.githubusercontent.com/carloslodelar/38c7482070627092a427583cae8fa470/raw/7fddda4d258bf685d24ea3510fbde295b3920188/clrpool.json"),"\nGit.IO-URL ",(0,o.kt)("a",{parentName:"p",href:"https://git.io/JJWdJ"},"https://git.io/JJWdJ")),(0,o.kt)("h4",{id:"get-the-hash-of-your-metadata-json-file"},"Get the hash of your metadata JSON file:"),(0,o.kt)("p",null,"This validates that the JSON fits the required schema, if it does, you will get the hash of your file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cardano-cli stake-pool metadata-hash --pool-metadata-file pool_Metadata.json\n\n>6bf124f217d0e5a0a8adb1dbd8540e1334280d49ab861127868339f43b3948af\n")),(0,o.kt)("h4",{id:"generate-stake-pool-registration-certificate"},"Generate Stake pool registration certificate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cardano-cli stake-pool registration-certificate \\\n--cold-verification-key-file cold.vkey \\\n--vrf-verification-key-file vrf.vkey \\\n--pool-pledge <AMOUNT TO PLEDGE IN LOVELACE> \\\n--pool-cost <POOL COST PER EPOCH IN LOVELACE> \\\n--pool-margin <POOL COST PER EPOCH IN PERCENTAGE> \\\n--pool-reward-account-verification-key-file stake.vkey \\\n--pool-owner-stake-verification-key-file stake.vkey \\\n--mainnet \\\n--pool-relay-ipv4 <RELAY NODE PUBLIC IP> \\\n--pool-relay-port <RELAY NODE PORT> \\\n--metadata-url https://git.io/JJWdJ \\\n--metadata-hash <POOL METADATA HASH> \\\n--out-file pool-registration.cert\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"cold-verification-key-file"),(0,o.kt)("td",{parentName:"tr",align:"left"},"verification ",(0,o.kt)("em",{parentName:"td"},"cold")," key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"vrf-verification-key-file"),(0,o.kt)("td",{parentName:"tr",align:"left"},"verification ",(0,o.kt)("em",{parentName:"td"},"VRS")," key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"pool-pledge"),(0,o.kt)("td",{parentName:"tr",align:"left"},"pledge lovelace")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"pool-cost"),(0,o.kt)("td",{parentName:"tr",align:"left"},"operational costs per epoch lovelace")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"pool-margin"),(0,o.kt)("td",{parentName:"tr",align:"left"},"operator margin")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"pool-reward-account-verification-key-file"),(0,o.kt)("td",{parentName:"tr",align:"left"},"verification staking key for the rewards")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"pool-owner-staking-verification-key-file"),(0,o.kt)("td",{parentName:"tr",align:"left"},"verification staking keys for the pool owners")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"pool-relay-ipv4"),(0,o.kt)("td",{parentName:"tr",align:"left"},"relay node ip address")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"pool-relay-port"),(0,o.kt)("td",{parentName:"tr",align:"left"},"port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"metadata-url"),(0,o.kt)("td",{parentName:"tr",align:"left"},"url of your json file")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"metadata-hash"),(0,o.kt)("td",{parentName:"tr",align:"left"},"the hash of pools json metadata file")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"out-file"),(0,o.kt)("td",{parentName:"tr",align:"left"},"output file to write the certificate to")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You can use a different key for the rewards, and can provide more than one owner key if there were multiple owners who share the pledge.")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"pool-registration.cert")," file should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"type: CertificateShelley\ndescription: Stake Pool Registration Certificate\ncborHex:\n18b58a03582062d632e7ee8a83769bc108e3e42a674d8cb242d7375fc2d97db9b4dd6eded6fd5820\n48aa7b2c8deb8f6d2318e3bf3df885e22d5d63788153e7f4040c33ecae15d3e61b0000005d21dba0\n001b000000012a05f200d81e820001820058203a4e813b6340dc790f772b3d433ce1c371d5c5f5de\n46f1a68bdf8113f50e779d8158203a4e813b6340dc790f772b3d433ce1c371d5c5f5de46f1a68bdf\n8113f50e779d80f6\n")),(0,o.kt)("h4",{id:"generate-delegation-certificate-pledge"},"Generate delegation certificate pledge"),(0,o.kt)("p",null,"To honor your pledge, create a ",(0,o.kt)("em",{parentName:"p"},"delegation certificate"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cardano-cli stake-address delegation-certificate \\\n--stake-verification-key-file stake.vkey \\\n--cold-verification-key-file cold.vkey \\\n--out-file delegation.cert\n")),(0,o.kt)("p",null,"This creates a delegation certificate which delegates funds from all stake addresses associated with key ",(0,o.kt)("inlineCode",{parentName:"p"},"stake.vkey")," to the pool belonging to cold key ",(0,o.kt)("inlineCode",{parentName:"p"},"cold.vkey"),". If there are many staking keys as pool owners in the first step, we need delegation certificates for all of them."),(0,o.kt)("h4",{id:"submit-the-pool-certificate-and-delegation-certificate-to-the-blockchain"},"Submit the pool certificate and delegation certificate to the blockchain"),(0,o.kt)("p",null,"To submit the ",(0,o.kt)("inlineCode",{parentName:"p"},"pool registration certificate")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"delegation certificates")," to the blockchain by including them in one or more transactions. We can use one transaction for multiple certificates, the certificates will be applied in order."),(0,o.kt)("h4",{id:"draft-the-transaction"},"Draft the transaction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cardano-cli transaction build-raw \\\n--tx-in <TxHash>#<TxIx> \\\n--tx-out $(cat payment.addr)+0 \\\n--invalid-hereafter 0 \\\n--fee 0 \\\n--out-file tx.draft \\\n--certificate-file pool-registration.cert \\\n--certificate-file delegation.cert\n")),(0,o.kt)("h4",{id:"calculate-the-fees"},"Calculate the fees"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cardano-cli transaction calculate-min-fee \\\n--tx-body-file tx.draft \\\n--tx-in-count 1 \\\n--tx-out-count 1 \\\n--witness-count 3 \\\n--byron-witness-count 0 \\\n--mainnet \\\n--protocol-params-file protocol.json\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"> 184685\n")),(0,o.kt)("p",null,"Registering a stake pool requires a deposit. This amount is specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"protocol.json"),". For example, for Shelley Mainnet we have:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"poolDeposit": 500000000\n')),(0,o.kt)("h4",{id:"calculate-the-change-for---tx-out"},"Calculate the change for --tx-out"),(0,o.kt)("p",null,"All amounts in Lovelace"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"expr <UTxO BALANCE> - <poolDeposit> - <TRANSACTION FEE>\n")),(0,o.kt)("h4",{id:"build-the-transaction"},"Build the transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cardano-cli transaction build-raw \\\n--tx-in <TxHash>#<TxIx> \\\n--tx-out $(cat payment.addr)+<CHANGE IN LOVELACE> \\\n--invalid-hereafter <TTL> \\\n--fee <TRANSACTION FEE> \\\n--out-file tx.raw \\\n--certificate-file pool-registration.cert \\\n--certificate-file delegation.cert\n")),(0,o.kt)("h4",{id:"sign-the-transaction"},"Sign the transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cardano-cli transaction sign \\\n--tx-body-file tx.raw \\\n--signing-key-file payment.skey \\\n--signing-key-file stake.skey \\\n--signing-key-file cold.skey \\\n--mainnet \\\n--out-file tx.signed\n")),(0,o.kt)("h4",{id:"submit-the-transaction"},"Submit the transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cardano-cli transaction submit \\\n--tx-file tx.signed \\\n--mainnet\n")),(0,o.kt)("h4",{id:"verify-that-your-stake-pool-registration-was-successful"},"Verify that your stake pool registration was successful."),(0,o.kt)("p",null,"Get Pool ID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cardano-cli stake-pool id --cold-verification-key-file cold.vkey --output-format "hex"\n')),(0,o.kt)("p",null,"Check for the presence of your poolID in the network ledger state, with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cardano-cli query ledger-state --mainnet | grep publicKey | grep <poolId>\n")))}c.isMDXComponent=!0}}]);