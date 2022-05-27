"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[898],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},601:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],p={sidebar_position:7,title:"PSP22 Capped"},i=void 0,s={unversionedId:"smart-contracts/PSP22/Extensions/capped",id:"smart-contracts/PSP22/Extensions/capped",isDocsHomePage:!1,title:"PSP22 Capped",description:"This example shows how you can implement a PSP22 contract with a supply cap, analogue to ERC20Capped.",source:"@site/docs/smart-contracts/PSP22/Extensions/capped.md",sourceDirName:"smart-contracts/PSP22/Extensions",slug:"/smart-contracts/PSP22/Extensions/capped",permalink:"/smart-contracts/PSP22/Extensions/capped",editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/PSP22/Extensions/capped.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"PSP22 Capped"},sidebar:"tutorialSidebar",previous:{title:"PSP22 Pausable",permalink:"/smart-contracts/PSP22/Extensions/pausable"},next:{title:"PSP22 Token Timelock",permalink:"/smart-contracts/PSP22/Utils/token-timelock"}},l=[{value:"Step 1: Include dependencies",id:"step-1-include-dependencies",children:[]},{value:"Step 2: Add imports and enable unstable feature",id:"step-2-add-imports-and-enable-unstable-feature",children:[]},{value:"Step 3: Define storage",id:"step-3-define-storage",children:[]},{value:"Step 4: Define constructor and contract functions",id:"step-4-define-constructor-and-contract-functions",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can implement a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp22"},"PSP22")," contract with a supply cap, analogue to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Capped.sol"},"ERC20Capped"),"."),(0,o.kt)("h2",{id:"step-1-include-dependencies"},"Step 1: Include dependencies"),(0,o.kt)("p",null,"Include ",(0,o.kt)("inlineCode",{parentName:"p"},"brush")," as dependency in the cargo file or you can use ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,o.kt)("inlineCode",{parentName:"a"},"Cargo.toml"))," template.\nAfter you need to enable default implementation of PSP22 via ",(0,o.kt)("inlineCode",{parentName:"p"},"brush")," features."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'brush = { tag = "v1.7.1", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["psp22"] }\n')),(0,o.kt)("h2",{id:"step-2-add-imports-and-enable-unstable-feature"},"Step 2: Add imports and enable unstable feature"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"brush::contract")," macro instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,o.kt)("strong",{parentName:"p"},"everything")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"brush::contracts::psp22"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[brush::contract]\npub mod my_psp22_capped {\n    use brush::contracts::psp22::*;\n    use ink_prelude::string::String;\n    use ink_storage::traits::SpreadAllocate;\n...\n')),(0,o.kt)("h2",{id:"step-3-define-storage"},"Step 3: Define storage"),(0,o.kt)("p",null,"Declare the storage struct and the field related to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22Storage")," trait, derive the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22Storage")," trait and mark the corresponding field with the ",(0,o.kt)("inlineCode",{parentName:"p"},"#[PSP22StorageField]")," attribute. Also add the storage variable for cap."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, SpreadAllocate, PSP22Storage)]\npub struct MyPSP22Capped {\n    #[PSP22StorageField]\n    psp22: PSP22Data,\n    cap: Balance,\n}\n")),(0,o.kt)("h2",{id:"step-4-define-constructor-and-contract-functions"},"Step 4: Define constructor and contract functions"),(0,o.kt)("p",null,"Define constructor, inherit ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22"),", and override the basic functions for capped implementation. Your ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22Capped")," contract is ready!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'impl PSP22 for MyPSP22Capped {}\n\nimpl MyPSP22Capped {\n    /// Constructor which mints `initial_supply` of the token to sender\n    /// Will set the token\'s cap to `cap`\n    #[ink(constructor)]\n    pub fn new(inital_supply: Balance, cap: Balance) -> Self {\n        ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n            assert!(instance.init_cap(cap).is_ok());\n            assert!(instance._mint(instance.env().caller(), inital_supply).is_ok());\n        })\n    }\n\n    /// Expose the `_mint` function\n    #[ink(message)]\n    pub fn mint(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {\n        self._mint(account, amount)\n    }\n\n    #[ink(message)]\n    /// Returns the token\'s cap\n    pub fn cap(&self) -> Balance {\n        self.cap\n    }\n\n    /// Overrides the `_mint` function to check for cap overflow before minting tokens\n    /// Performs `PSP22::_mint` after the check succeeds\n    fn _mint(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {\n        if (self.total_supply() + amount) > self.cap() {\n            return Err(PSP22Error::Custom(String::from("Cap exceeded")))\n        }\n        PSP22Internal::_mint(self, account, amount)\n    }\n\n    /// Initializes the token\'s cap\n    fn init_cap(&mut self, cap: Balance) -> Result<(), PSP22Error> {\n        if cap <= 0 {\n            return Err(PSP22Error::Custom(String::from("Cap must be above 0")))\n        }\n        self.cap = cap;\n        Ok(())\n    }\n}\n')),(0,o.kt)("p",null,"You can check an implementation example of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/psp22_extensions/capped"},"PSP22 Capped"),"."),(0,o.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22/psp22"},"PSP22"),"."))}d.isMDXComponent=!0}}]);