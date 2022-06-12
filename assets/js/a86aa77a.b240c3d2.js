"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[706],{3905:function(r,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var t=n(7294);function o(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function a(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function i(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function s(r,e){if(null==r)return{};var n,t,o=function(r,e){if(null==r)return{};var n,t,o={},a=Object.keys(r);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||(o[n]=r[n]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(o[n]=r[n])}return o}var l=t.createContext({}),c=function(r){var e=t.useContext(l),n=e;return r&&(n="function"==typeof r?r(e):i(i({},e),r)),n},u=function(r){var e=c(r.components);return t.createElement(l.Provider,{value:e},r.children)},f={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(r,e){var n=r.components,o=r.mdxType,a=r.originalType,l=r.parentName,u=s(r,["components","mdxType","originalType","parentName"]),p=c(n),h=o,d=p["".concat(l,".").concat(h)]||p[h]||f[h]||a;return n?t.createElement(d,i(i({ref:e},u),{},{components:n})):t.createElement(d,i({ref:e},u))}));function h(r,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof r||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=r,s.mdxType="string"==typeof r?r:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},227:function(r,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:8,title:"Errors"},l=void 0,c={unversionedId:"smart-contracts/example/errors",id:"smart-contracts/example/errors",title:"Errors",description:"We will define errors thrown by the lending contract at end of traits/lending.rs",source:"@site/docs/smart-contracts/example/errors.md",sourceDirName:"smart-contracts/example",slug:"/smart-contracts/example/errors",permalink:"/smart-contracts/example/errors",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/example/errors.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Errors"},sidebar:"tutorialSidebar",previous:{title:"Lending impls",permalink:"/smart-contracts/example/impls"},next:{title:"Lending contract",permalink:"/smart-contracts/example/contract"}},u={},f=[{value:"Define errors",id:"define-errors",level:2},{value:"Implement conversion from OpenBrush errors",id:"implement-conversion-from-openbrush-errors",level:2}],p={toc:f};function h(r){var e=r.components,n=(0,o.Z)(r,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We will define errors thrown by the lending contract at end of ",(0,a.kt)("inlineCode",{parentName:"p"},"traits/lending.rs"),"\nbecause only that contract returns its own errors. But if you have more than one error definition,\nbetter to create a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"traits/errors.rs")," file for them(or a directory ",(0,a.kt)("inlineCode",{parentName:"p"},"traits/errors/"),").\nIn that file(directory) you can define the errors that will be returned by your contracts,\nand implement conversion between different errors.\nIn the project, we implement the conversion for some errors from OpenBrush."),(0,a.kt)("h2",{id:"define-errors"},"Define errors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'/// Enum of errors raised by our lending smart contract\n#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]\n#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]\npub enum LendingError {\n    PSP22Error(PSP22Error),\n    PSP34Error(PSP34Error),\n    AccessControlError(AccessControlError),\n    PausableError(PausableError),\n\n    /// This error will be thrown when the lender does not have enough allowance\n    /// to transfer the lending asset to the contract\n    InsufficientAllowanceToLend,\n    /// This error will be thrown when the lender tries to lend more amount of asset than they own\n    InsufficientBalanceToLend,\n    /// This error will be thrown when the borrower does not have enough allowance\n    /// to transfer the borrowed asset to the contract\n    InsufficientAllowanceToRepay,\n    /// This error will be thrown when the borrower tries to repay more amount of asset than they own\n    InsufficientBalanceToRepay,\n    /// This error will be thrown when the borrower does not have enough allowance\n    /// to transfer the collateral asset to the contract\n    InsufficientAllowanceForCollateral,\n    /// This error will be thrown when the borrower tries to use more amount of asset as collateral than they own\n    InsufficientCollateralBalance,\n    // This error will be thrown if the amount of borrowed assets is greater than or equal to the liquidation price of deposited collateral\n    AmountNotSupported,\n    // This error will be thrown if the user wants to borrow or withdraw more assets than there currently are in the contract\n    InsufficientBalanceInContract,\n    /// This error will be thrown if the user tries to lend or borrow asset which is not supported by the lending contract\n    /// or if a user tries to use an usupported asset as a collateral\n    AssetNotSupported,\n    /// This error will be thrown if the user tries to allow an asset which is already allowed\n    AssetSupported,\n    /// This error will be thrown if the user tries to repay a loan he does not own\n    NotTheOwner,\n    /// This error will be thrown if the loan we try to liquidate was already liquidated\n    LoanLiquidated,\n    /// This error will be thrown if the loan we try to liquidate is not below liquidation price\n    CanNotBeLiquidated,\n    /// This error will be thrown if an user wants to disallow lending of an asset which is still present in the contract\n    AssetsInTheContract,\n}\n')),(0,a.kt)("h2",{id:"implement-conversion-from-openbrush-errors"},"Implement conversion from OpenBrush errors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl From<AccessControlError> for LendingError {\n    fn from(access: AccessControlError) -> Self {\n        LendingError::AccessControlError(access)\n    }\n}\n\nimpl From<PausableError> for LendingError {\n    fn from(access: PausableError) -> Self {\n        LendingError::PausableError(access)\n    }\n}\n\nimpl From<PSP22Error> for LendingError {\n    fn from(error: PSP22Error) -> Self {\n        LendingError::PSP22Error(error)\n    }\n}\n\nimpl From<PSP34Error> for LendingError {\n    fn from(error: PSP34Error) -> Self {\n        LendingError::PSP34Error(error)\n    }\n}\n")))}h.isMDXComponent=!0}}]);