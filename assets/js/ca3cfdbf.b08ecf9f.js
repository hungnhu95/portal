(self.webpackChunkdevportal=self.webpackChunkdevportal||[]).push([[5115],{4137:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=l(a),p=r,h=c["".concat(d,".").concat(p)]||c[p]||m[p]||i;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7713:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return l},default:function(){return m}});var n=a(2122),r=a(9756),i=(a(7294),a(4137)),s={id:"transaction-metadata",title:"Transaction Metadata",sidebar_label:"Transaction Metadata",description:"Transaction Metadata with Cardano Serialization Lib",image:"./img/og-developer-portal.png"},o=void 0,d={unversionedId:"get-started/cardano-serialization-lib/transaction-metadata",id:"get-started/cardano-serialization-lib/transaction-metadata",isDocsHomePage:!1,title:"Transaction Metadata",description:"Transaction Metadata with Cardano Serialization Lib",source:"@site/docs/get-started/cardano-serialization-lib/transaction-metadata.md",sourceDirName:"get-started/cardano-serialization-lib",slug:"/get-started/cardano-serialization-lib/transaction-metadata",permalink:"/docs/get-started/cardano-serialization-lib/transaction-metadata",editUrl:"https://github.com/cardano-foundation/developer-portal/edit/staging/docs/get-started/cardano-serialization-lib/transaction-metadata.md",tags:[],version:"current",lastUpdatedBy:"Tommy",lastUpdatedAt:1627481382,formattedLastUpdatedAt:"7/28/2021",frontMatter:{id:"transaction-metadata",title:"Transaction Metadata",sidebar_label:"Transaction Metadata",description:"Transaction Metadata with Cardano Serialization Lib",image:"./img/og-developer-portal.png"},sidebar:"someSidebar",previous:{title:"Generating Transactions",permalink:"/docs/get-started/cardano-serialization-lib/generating-transactions"},next:{title:"Technical Concepts",permalink:"/docs/get-started/technical-concepts"}},l=[{value:"Transaction Metadata format",id:"transaction-metadata-format",children:[]},{value:"Metadata limitations",id:"metadata-limitations",children:[]},{value:"Direct use",id:"direct-use",children:[]},{value:"JSON conversion",id:"json-conversion",children:[]},{value:"Using a CDDL Subset",id:"using-a-cddl-subset",children:[]},{value:"Raw Bytes Encoding",id:"raw-bytes-encoding",children:[]}],u={toc:l};function m(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"transaction-metadata-format"},"Transaction Metadata format"),(0,i.kt)("p",null,"Transaction after the Shelley hardfork can contain arbitrary transaction meta (",(0,i.kt)("strong",{parentName:"p"},"note:")," this is NOT the same as pool metadata)"),(0,i.kt)("p",null,"Transaction metadata takes the form of a map of metadatums, which are recursive JSON-like structures."),(0,i.kt)("p",null,"It is defined in ",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc8610"},"CDDL"),", a schema grammar for representing ",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7049"},"CBOR")," binary encoding as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"transaction_metadatum =\n    { * transaction_metadatum => transaction_metadatum }\n  / [ * transaction_metadatum ]\n  / int\n  / bytes .size (0..64)\n  / text .size (0..64)\n\ntransaction_metadatum_label = uint\n\ntransaction_metadata =\n  { * transaction_metadatum_label => transaction_metadatum }\n")),(0,i.kt)("p",null,"For each use we use a metadatum label specific to our use into the ",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionMetadatum")," map. If we had a JSON object such as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "receiver_id": "SJKdj34k3jjKFDKfjFUDfdjkfd",\n  "sender_id": "jkfdsufjdk34h3Sdfjdhfduf873",\n  "comment": "happy birthday",\n  "tags": [0, 264, -1024, 32]\n}\n')),(0,i.kt)("p",null,"There are 4 ways we can achieve this with different trade-offs:"),(0,i.kt)("p",null,"1) Directly use: using the Metadata-related structures used in the library\n2) JSON conversion: conversion to/from JSON using our utility functions\n3) CDDL subset: writing a CDDL spec of this structure that is representable by that recursive metadatum CDDL\n4) Raw bytes: encoding raw-bytes using our utility functions."),(0,i.kt)("p",null,"Each section will give examples of how to encode a similar structure. Understanding CDDL is only necessary for the last 2 options, but it is fairly simple to understand."),(0,i.kt)("p",null,"If your metadata schema is fixed and will be used frequently you should consider the CDDL spec option.\nIf your schema is not often used or used from many languages, the JSON option can be good as it is low set-up and fairly tech agnostic.\nIf your schema is very dynamic or non-existent, the direct use or JSON options are likely best.\nThe raw bytes option is only recommended if your data does not conform to the metadata format."),(0,i.kt)("h2",{id:"metadata-limitations"},"Metadata limitations"),(0,i.kt)("p",null,"These limitations are mentioned in the CDDL definition, but are worth also mentioning in prose:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Strings must be at most 64 bytes when UTF-8 encoded."),(0,i.kt)("li",{parentName:"ul"},"Bytestrings are hex-encoded, with a maximum length of 64 bytes.")),(0,i.kt)("h2",{id:"direct-use"},"Direct use"),(0,i.kt)("p",null,"Upsides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flexible"),(0,i.kt)("li",{parentName:"ul"},"Readable by other methods")),(0,i.kt)("p",null,"Downsides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can be quite tedious to write"),(0,i.kt)("li",{parentName:"ul"},"Structural validation must be done by hand (partially)")),(0,i.kt)("p",null,"As the metadatum structure is fairly expressive, we can directly use it using the structs in the metadata module of this library. These directly represent the types given in the CDDL. Namely:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TransactionMetadatum - Can represent one of those 5 variant types."),(0,i.kt)("li",{parentName:"ul"},"MetadataMap - The map variant that maps from metadatums to other metadatums. This is unordered and indexed by metadatums. This is like an object in JSON."),(0,i.kt)("li",{parentName:"ul"},"MetadataList - An ordered list indexed starting at 0. This is like an array in JSON.")),(0,i.kt)("p",null,"The variants for numbers, bytes and text are not specific to metadata and are directly used with the general ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," type representing a signed or unsigned number, byte arrays accepting byte arrays/",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer"),", and strings being JS strings."),(0,i.kt)("p",null,"We could construct the JSON example above with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const map = CardanoWasm.MetadataMap.new();\nmap.insert(\n  CardanoWasm.TransactionMetadatum.new_text("receiver_id"),\n  CardanoWasm.TransactionMetadatum.new_text("SJKdj34k3jjKFDKfjFUDfdjkfd"),\n);\nmap.insert(\n  CardanoWasm.TransactionMetadatum.new_text("sender_id"),\n  CardanoWasm.TransactionMetadatum.new_text("jkfdsufjdk34h3Sdfjdhfduf873"),\n);\nmap.insert(\n  CardanoWasm.TransactionMetadatum.new_text("comment"),\n  CardanoWasm.TransactionMetadatum.new_text("happy birthday"),\n);\nconst tags = CardanoWasm.MetadataList.new();\ntags.add(CardanoWasm.TransactionMetadatum.new_int(CardanoWasm.Int.new(CardanoWasm.BigNum.from_str("0"))));\ntags.add(CardanoWasm.TransactionMetadatum.new_int(CardanoWasm.Int.new(CardanoWasm.BigNum.from_str("264"))));\ntags.add(CardanoWasm.TransactionMetadatum.new_int(CardanoWasm.Int.new_negative(CardanoWasm.BigNum.from_str("1024"))));\ntags.add(CardanoWasm.TransactionMetadatum.new_int(CardanoWasm.Int.new(CardanoWasm.BigNum.from_str("32"))));\nmap.insert(\n  CardanoWasm.TransactionMetadatum.new_text("tags"),\n  CardanoWasm.TransactionMetadatum.new_list(tags),\n);\nconst metadatum = CardanoWasm.TransactionMetadatum.new_map(map);\n')),(0,i.kt)("p",null,"We could then parse the information back as such:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'try {\n  const map = metadatum.as_map();\n  const receiver = map.get(CardanoWasm.TransactionMetadatum.new_text("receiver_id"));\n  const sender = map.get(CardanoWasm.TransactionMetadatum.new_text("sender_id"));\n  const comment = map.get(CardanoWasm.TransactionMetadatum.new_text("comment"));\n  const tags = map.get(CardanoWasm.TransactionMetadatum.new_text("tags"));\n} catch (e) {\n  // structure did not match\n}\n')),(0,i.kt)("p",null,"For decoding in a more exploratory manner we can check the types first as such:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function parseMetadata(metadata) {\n  // we must check the type first to know how to handle it\n  switch (metadata.kind()) {\n    case CardanoWasm.TransactionMetadatumKind.MetadataMap:\n      const mapRet = new Map();\n      const map = metadata.as_map();\n      const keys = maps.keys();\n      for (var i = 0; i < keys.len(); i += 1) {\n        const key = keys.get(i);\n        const value = parseMetadata(map.get(key);\n        mapRet.set(key, value);\n      }\n      return mapRet;\n    case CardanoWasm.TransactionMetadatumKind.MetadataList:\n      let arrRet = [];\n      const arr = metadata.as_list();\n      for (var i = 0; i < arr.len(); i += 1) {\n        const elem = parseMetadata(arr.get(i));\n        arrRet.push(elem);\n      }\n      return arrRet;\n    case CardanoWasm.TransactionMetadatumKind.Int:\n      const x = metadata.as_int();\n      // If the integer is too big as_i32() returns undefined\n      // to handle larger numbers we need to use x.as_positive() / x.as_negative() and\n      // convert from BigNums after checking x.is_positive() first\n      return x.as_i32();\n    case CardanoWasm.TransactionMetadatumKind.Bytes:\n      return Buffer.from(metadata.as_bytes());\n    case CardanoWasm.TransactionMetadatumKind.Text:\n      return metadata.as_text();\n  }\n}\n")),(0,i.kt)("p",null,"which recursively parses the ",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionMetadatum")," struct and transforms it into a JS ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," / JS ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," structure by manually checking the types."),(0,i.kt)("h2",{id:"json-conversion"},"JSON conversion"),(0,i.kt)("p",null,"Upsides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flexible"),(0,i.kt)("li",{parentName:"ul"},"Readable by other methods"),(0,i.kt)("li",{parentName:"ul"},"Lowest set-up work involved")),(0,i.kt)("p",null,"Downsides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Does not support negative integers between ",(0,i.kt)("inlineCode",{parentName:"li"},"-2^64 + 1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"-2^63")," (serde_json library restriction)"),(0,i.kt)("li",{parentName:"ul"},"Structural validation must be done by hand"),(0,i.kt)("li",{parentName:"ul"},"Can use more space as string keyed maps are likely to be used more than arrays would be in the CDDL solutions")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const obj = {\n  receiver_id: "SJKdj34k3jjKFDKfjFUDfdjkfd",\n  sender_id: "jkfdsufjdk34h3Sdfjdhfduf873",\n  comment: "happy birthday",\n  tags: [0, 264, -1024, 32]\n};\nconst metadata = CardanoWasm.encode_json_str_to_metadatum(JSON.stringify(obj), CardanoWasm.MetadataJsonSchema.NoConversions);\nconst metadataString = CardanoWasm.decode_metadatum_to_json_str(metadata, CardanoWasm.MetadataJsonSchema.NoConversions);\n')),(0,i.kt)("p",null,"To support an extended set of metadata we also support 3 additional modes for JSON conversion following IOHK's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/blob/master/cardano-api/src/Cardano/Api/TxMetadata.hs"},"cardano-node JSON schemas"),"."),(0,i.kt)("p",null,"The three modes are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NoConversions")," - Faithfully converts between the minimal shared feature set between JSON and Metadata"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BasicConversions")," - Adds additional support for byte(as hex strings)/integers (as strings) keys / byte (as hex strings) values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DetailedSchema")," - Can convert almost all metadata into a specific JSON schema but is very verbose on the JSON side.")),(0,i.kt)("p",null,"Details on the formats can be found in our library's metadata module or in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cardano-node")," file linked above. ",(0,i.kt)("inlineCode",{parentName:"p"},"DetailedSchema")," is likely most useful if you need to parse any possible kind of metadata into JSON specifically, possibly to display or for debugging.\nFor most reasonable schemas ",(0,i.kt)("inlineCode",{parentName:"p"},"NoConversions")," should suffice, or ",(0,i.kt)("inlineCode",{parentName:"p"},"BasicConversions")," if byte/string keys and byte values are needed.\nIf you are in charge of your own schema and you do not need arbitrary keys, it is recommended not to use ",(0,i.kt)("inlineCode",{parentName:"p"},"DetailedSchema")," as it is significantly more complicated to use."),(0,i.kt)("p",null,"The additions of ",(0,i.kt)("inlineCode",{parentName:"p"},"BasicConversions")," are demonstrated below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "0x8badf00d": "0xdeadbeef",\n  "9": 5,\n  "obj": {\n    "a":[\n      {\n        "5": 2\n      },\n      {\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"which creates a map with 3 elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"4 byte bytestring (0x8badf00d) => 4 byte bytestring (0xdeadbeef)"),(0,i.kt)("li",{parentName:"ul"},"int (9) => int (5)"),(0,i.kt)("li",{parentName:"ul"},'string ("obj") => object (string ("a") => list ',"[ object (int (5) => int (2)), object (empty) ]",")")),(0,i.kt)("p",null,'All bytestrings must be prefixed with "0x" or they will be treated as regular strings.\nAll strings that parse as an integer such as "125" will be treated as a metadata integer.'),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DetailedSchema")," is here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"map":[\n  {\n    "k":{"bytes":"8badf00d"},\n    "v":{"bytes":"deadbeef"}\n  },\n  {\n    "k":{"int":9},\n    "v":{"int":5}\n  },\n  {\n    "k":{"string":"obj"},\n    "v":{"map":[\n      {\n        "k":{"string":"a"},\n        "v":{"list":[\n          {"map":[\n            {\n              "k":{"int":5},\n              "v":{"int":2}\n            }\n          ]},\n          {"map":[\n          ]}\n        ]}\n      }\n    ]}\n  }\n]}\n')),(0,i.kt)("p",null,"All values are represented as an object with 1 field with the key tagging the type and the value being the value itself.\nThis is the exact same metadata as the ",(0,i.kt)("inlineCode",{parentName:"p"},"BasicConversions"),' example which should illustrate that it is much more verbose to use this format,\nbut it can represent every kind of metadata possible, including non-string/byte/int keys.\nDo note that byte strings do not start with "0x", unlike with ',(0,i.kt)("inlineCode",{parentName:"p"},"BasicConversions"),"."),(0,i.kt)("p",null,"This additional freedom in keys can be seen here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"map":[\n  {\n    "k":{"list":[\n      {"map": [\n        {\n          "k": {"int": 5},\n          "v": {"int": 7}\n        },\n        {\n          "k": {"string": "hello"},\n          "v": {"string": "world"}\n        }\n      ]},\n      {"bytes": "ff00ff00"}\n    ]},\n    "v":{"int":5}\n  }\n]}\n')),(0,i.kt)("p",null,"has a 1-element map with a value of just 5, but with a very complicated key consisting of a list with 2 elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'a 2-element map (5 => 7, "hello" => "world")'),(0,i.kt)("li",{parentName:"ul"},"a bytestring (0xFF00FF00)")),(0,i.kt)("p",null,"Most reasonable metadata formats, however, likely do not use map/key/compound keys and thus this is more of a fringe use or when all possible metadata must be examined from JSON (almost) without exception.\nDue to library implementation details it can still fail to decode if there is a very negative number between ",(0,i.kt)("inlineCode",{parentName:"p"},"-2^64 + 1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-2^63"),"."),(0,i.kt)("h2",{id:"using-a-cddl-subset"},"Using a CDDL Subset"),(0,i.kt)("p",null,"Upsides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Automatic structural typing in deserialization"),(0,i.kt)("li",{parentName:"ul"},"Readable by other methods"),(0,i.kt)("li",{parentName:"ul"},"Possible reduced space due to array structs not serializing keys")),(0,i.kt)("p",null,"Downsides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Requires additional set-up")),(0,i.kt)("p",null,"For static or relatively static types this is probably the best choice, especially if you care about structural validation or need the binary types or more complex keys."),(0,i.kt)("p",null,"As we saw in the other examples, most reasonable structures can be encoded using the standard metadata CDDL as it is almost a superset of JSON outside of true/false/null. Not only this, but if we represent a struct using an array in CDDL such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"foo = [\n  receiver_id: text,\n  sender_id: text,\n  comment: text,\n  tags: [*int]\n]\n")),(0,i.kt)("p",null,"there is space savings as the keys are not stored as it is represented as an ordered array of 4 elements instead of a direct map encoding of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'foo = {\n  receiver_id: text,\n  sender_id: text,\n  comment: text,\n  tags": [*int]\n}\n')),(0,i.kt)("p",null,"which would serialize the keys as strings inside the resulting CBOR. Using these CDDL definitions for the example JSON structure we had results in sizes of 89 bytes for the array definition and 124 bytes for the map one. Using the JSON encoding would also result in a metadata size of 124 bytes. Maps however do have the advantage of easy optional fields and a more readable metadata for external users who don't have access to the CDDL as the field names will be stored directly."),(0,i.kt)("p",null,"After you have created your CDDL definition, if you need to check that your CDDL conforms to the metadata CDDL we have a tool located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/tools/metadata-cddl-checker/")," directory. Move to this directory and put your CDDL in a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"input.cddl")," there first, then run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cargo build\ncargo run\n")),(0,i.kt)("p",null,"Once we have the CDDL file and it has passed metadata format validation we can use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Emurgo/cddl-codegen"},"cddl-codegen")," tool that we used to initially generate the serialization/deserialization/structural code for the core Shelley structures from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger-specs/blob/master/shelley/chain-and-ledger/shelley-spec-ledger-test/cddl-files/shelley.cddl"},"shelley cddl spec"),"."),(0,i.kt)("p",null,"Assuming we are in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cddl-codegen")," root directory and have created a ",(0,i.kt)("inlineCode",{parentName:"p"},"input.cddl")," file in that directory containing the CDDL we wish to generate we can build and code-generate with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cargo build\ncargo run\n")),(0,i.kt)("p",null,"which should generate a wasm-convertible rust library for parsing our CDDL definition in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/export/")," directory.\nAfter this we need to generate a wasm package from the rust code by running the following (you can do ",(0,i.kt)("inlineCode",{parentName:"p"},"--target=browser")," too)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd export\nwasm-pack build --target=nodejs\nwasm-pack pack\n")),(0,i.kt)("p",null,"which should give you the library as a package in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/pkg/")," directory."),(0,i.kt)("p",null,"Once we have imported the library we can then use it as such:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const tags = OurMetadataLib.Ints.new();\n// if we have smaller (32-bit signed) numbers we can construct easier\ntags.add(OurMetadataLib.Int.new_i32(0));\n// but for bigger (>= 2^32) numbers we must use BigNum and specify the sign ourselves\ntags.add(OurMetadataLib.Int.new(CardanoWasm.Int.from_str("264")));\n// and for negative large (< -2^32) numbers (here we construct -1024)\ntags.add(OurMetadataLib.Int.new_negative(CardanoWasm.Int.from_str("1024")));\ntags.add(OurMetadataLib.Int.new_i32(32));\nconst map = OurMetadataLib.Foo.new("SJKdj34k3jjKFDKfjFUDfdjkfd", "jkfdsufjdk34h3Sdfjdhfduf873", "happy birthday", tags)\nlet metadata;\ntry {\n  metadata = CardanoWasm.TransactionMetadata.from_bytes(map.to_bytes());\n} catch (e) {\n  // this should never happen if OurMetadataLib was generated from compatible CDDL with the metadata definition\n}\n')),(0,i.kt)("p",null,"likewise you can parse the metadata back very simply with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"let cddlMetadata;\ntry {\n  cddlMetadata = OurMetadataLib.Foo.from_bytes(metadata.to_bytes());\n} catch (e) {\n  // this should never happen if OurMetadataLib was generated from compatible CDDL with the metadata definition\n}\n// we can now directly access the fields with cddlMetadata.receiver_id(), etc\n")),(0,i.kt)("p",null,"If we take advantage of the additional primitives not defined in CDDL but defined for ",(0,i.kt)("inlineCode",{parentName:"p"},"cddl-codegen"),", then we can specify precisions of ",(0,i.kt)("inlineCode",{parentName:"p"},"u32"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"u64"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"i64"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"i32")," for specifying 32 or 64 bits instead of just a general purpose ",(0,i.kt)("inlineCode",{parentName:"p"},"uint"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"nint"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"int"),".\nIf you know your metadata will always be within one of these ranges it can be much more convenient to work with, and if you have signed data this will also make it easier to work with instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," class that CDDL ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," might generate, since that is either an up to 64-bit positive or an up to 64 negative numbers.\nThis is particularly useful here as lists of CDDL primitives can be exposed directly as ",(0,i.kt)("inlineCode",{parentName:"p"},"Vec<T>")," to wasm from rust, but when we have ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," (converts to ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," struct) or ",(0,i.kt)("inlineCode",{parentName:"p"},"uint")," (converts to ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNum")," struct) a separate structure like that ",(0,i.kt)("inlineCode",{parentName:"p"},"Ints")," one used above is used. Using the 32-bit versions allows direct js ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," conversions to/from wasm."),(0,i.kt)("p",null,"If we simply change the ",(0,i.kt)("inlineCode",{parentName:"p"},"tags")," field to ",(0,i.kt)("inlineCode",{parentName:"p"},"tags: [+i32]")," our code becomes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// notice how we can directly work with js numbers here now!\n// but remember they must fit into a 32-bit number now - no 64-bit numbers like are allowed in the metadata\nconst tags = [0, 264, -1024, 32];\nconst map = OurMetadataLib.Foo.new("SJKdj34k3jjKFDKfjFUDfdjkfd", "jkfdsufjdk34h3Sdfjdhfduf873", "happy birthday", tags)\n')),(0,i.kt)("p",null,"and deserializaing likewise is much simpler as ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.tags()")," will return a JS array or numbers rather than a rust-wasm struct that must be accessed via the wasm boundary."),(0,i.kt)("h2",{id:"raw-bytes-encoding"},"Raw Bytes Encoding"),(0,i.kt)("p",null,"Upsides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can store arbitrary data"),(0,i.kt)("li",{parentName:"ul"},"Potential space-savings if the data is compressed")),(0,i.kt)("p",null,"Downsides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Not readable by other methods - must be decoded using this method"),(0,i.kt)("li",{parentName:"ul"},"Requires additional set-up")),(0,i.kt)("p",null,"While most data would likely conform to the metadata CDDL subset (or JSON), if your data does not fit there then this encoding style will be necessary."),(0,i.kt)("p",null,"If you still want to take advantage of CDDL type-checking it is possible to create a library just as in the CDDL subset section but without running the checker tool. This could be useful if you are using CDDL outside of the metadata CDDL structure. Otherwise, you can store whatever bytes you want."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note"),": To conform with the 64-byte limitation on metadata binary values, this method will split the bytes into 64-byte chunks"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const bytes = /* whatever method you want - you can use the CDDL solution in the 3rd option here */\nconst metadata = CardanoWasm.encode_arbitrary_bytes_as_metadatum(bytes);\nconst decoded_bytes = CardanoWasm.decode_arbitrary_bytes_from_metadatum(metadata);\nassertEquals(bytes, decoded_bytes);\n")))}m.isMDXComponent=!0}}]);