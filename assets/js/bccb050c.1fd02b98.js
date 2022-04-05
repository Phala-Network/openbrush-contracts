"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[697],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:3,title:"Proxy"},l=void 0,p={unversionedId:"smart-contracts/proxy",id:"smart-contracts/proxy",isDocsHomePage:!1,title:"Proxy",description:"This example shows how you can use the implementation of proxy to to implement proxy pattern for upgradeable contracts.",source:"@site/docs/smart-contracts/proxy.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/proxy",permalink:"/smart-contracts/proxy",editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/proxy.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Proxy"},sidebar:"tutorialSidebar",previous:{title:"Ownable",permalink:"/smart-contracts/ownable"},next:{title:"Diamond Standard",permalink:"/smart-contracts/diamond"}},s=[{value:"Step 1: Include dependencies",id:"step-1-include-dependencies",children:[]},{value:"Step 2: Add imports and enable unstable feature",id:"step-2-add-imports-and-enable-unstable-feature",children:[]},{value:"Step 3: Define storage",id:"step-3-define-storage",children:[]},{value:"Step 4: Inherit logic",id:"step-4-inherit-logic",children:[]},{value:"Step 5: Define constructor",id:"step-5-define-constructor",children:[]},{value:"Step 6: Define forward function",id:"step-6-define-forward-function",children:[]},{value:"Step 6: Customize your contract",id:"step-6-customize-your-contract",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how you can use the implementation of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/upgradability/proxy"},"proxy")," to to implement proxy pattern for upgradeable contracts."),(0,a.kt)("h2",{id:"step-1-include-dependencies"},"Step 1: Include dependencies"),(0,a.kt)("p",null,"Include ",(0,a.kt)("inlineCode",{parentName:"p"},"brush")," as dependency in the cargo file or you can use ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,a.kt)("inlineCode",{parentName:"a"},"Cargo.toml"))," template.\nAfter you need to enable default implementation of Proxy via ",(0,a.kt)("inlineCode",{parentName:"p"},"brush")," features."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'brush = { tag = "v1.5.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["proxy"] }\n')),(0,a.kt)("h2",{id:"step-2-add-imports-and-enable-unstable-feature"},"Step 2: Add imports and enable unstable feature"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"brush::contract")," macro instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,a.kt)("strong",{parentName:"p"},"everything")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"brush::contracts::ownable")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"brush::contracts::proxy")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[brush::contract]\npub mod my_proxy {\n    use brush::{\n        contracts::{\n            ownable::*,\n            proxy::*,\n        },\n        modifiers,\n    };\n...\n')),(0,a.kt)("h2",{id:"step-3-define-storage"},"Step 3: Define storage"),(0,a.kt)("p",null,"Declare storage struct and declare the field related to ",(0,a.kt)("inlineCode",{parentName:"p"},"ProxyStorage")," trait. Then you need to derive the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProxyStorage")," trait and mark the corresponding field with the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ProxyStorageField]")," attribute. Deriving this trait allows you to reuse the default implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"Proxy"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_storage::traits::SpreadAllocate;\n\n#[ink(storage)]\n#[derive(Default, SpreadAllocate, ProxyStorage)]\npub struct ProxyContract {\n    #[ProxyStorageField]\n    proxy: ProxyData,\n}\n")),(0,a.kt)("h2",{id:"step-4-inherit-logic"},"Step 4: Inherit logic"),(0,a.kt)("p",null,"Inherit implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Proxy")," trait and of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ownable")," trait. You can customize (override) methods in this ",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl Ownable for ProxyContract {}\n\nimpl Proxy for ProxyContract {}\n")),(0,a.kt)("h2",{id:"step-5-define-constructor"},"Step 5: Define constructor"),(0,a.kt)("p",null,"Define the constructor and initialize the owner with the contract initiator. Your basic version of ",(0,a.kt)("inlineCode",{parentName:"p"},"Proxy")," contract is ready!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl ProxyContract {\n    #[ink(constructor)]\n    pub fn new(forward_to: Hash) -> Self {\n        ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n            let caller = instance.env().caller();\n            instance._init_with_forward_to(forward_to);\n            instance._init_with_owner(caller);\n        })\n    }\n}\n")),(0,a.kt)("h2",{id:"step-6-define-forward-function"},"Step 6: Define forward function"),(0,a.kt)("p",null,"Define the forward function to make delegate calls of upgradeable contract through proxy contract."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl ProxyContract {\n    #[ink(constructor)]\n    pub fn new(forward_to: Hash) -> Self {\n        ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n            let caller = instance.env().caller();\n            instance._init_with_forward_to(forward_to);\n            instance._init_with_owner(caller);\n        })\n    }\n\n    #[ink(message, payable, selector = _)]\n    pub fn forward(&self) {\n        ProxyInternal::_fallback(self);\n    }\n}\n")),(0,a.kt)("h2",{id:"step-6-customize-your-contract"},"Step 6: Customize your contract"),(0,a.kt)("p",null,"Generally, proxy doesn't need other functionality, but if you need something you can customize it by adding proxy logic. We will add a ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy_function")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"ProxyContract")," implemenation."),(0,a.kt)("p",null,"You can check an example of the usage of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/proxy"},"Proxy"),"."))}d.isMDXComponent=!0}}]);