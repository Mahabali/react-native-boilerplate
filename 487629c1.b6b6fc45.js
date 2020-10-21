(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{61:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var a=t(2),r=(t(0),t(74));const o={slug:"/AddALangTranslation",title:"Add a lang translation"},i={unversionedId:"3_Guides/3_4_AddALangTranslation",id:"3_Guides/3_4_AddALangTranslation",isDocsHomePage:!1,title:"Add a lang translation",description:"The boilerplate includes an i18n feature to store and translate String data.",source:"@site/docs/3_Guides/3_4_AddALangTranslation.md",slug:"/AddALangTranslation",permalink:"/react-native-boilerplate/docs/AddALangTranslation",editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/docs/docs/3_Guides/3_4_AddALangTranslation.md",version:"current",sidebar:"docs",previous:{title:"Add a store",permalink:"/react-native-boilerplate/docs/AddAStore"},next:{title:"Beta build",permalink:"/react-native-boilerplate/docs/BetaBuild"}},l=[{value:"Add a new language",id:"add-a-new-language",children:[]}],c={rightToc:l};function u({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The boilerplate includes an i18n feature to store and translate String data.\nThe package used is ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.i18next.com/"}),"i18next")," you can use their documentation for not included functionnalities."),Object(r.b)("h2",{id:"add-a-new-language"},"Add a new language"),Object(r.b)("p",null,"All languages files are located in ",Object(r.b)("inlineCode",{parentName:"p"},"src/Translations/resources"),". By default, there is the ",Object(r.b)("inlineCode",{parentName:"p"},"en.js")," file.\nTo add a new language just ",Object(r.b)("inlineCode",{parentName:"p"},"cp en.js fr.js")," and export it in : ",Object(r.b)("inlineCode",{parentName:"p"},"src/Translations/resources/index")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"export { default as en } from './en'\nexport { default as fr } from './fr'\n")),Object(r.b)("p",null,"Now you can translate all keys of the ",Object(r.b)("inlineCode",{parentName:"p"},"fr.js")," file :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"export default {\n  welcome: 'Bienvenue sur le React Native Boilerplate de TheCodingMachine',\n  actions: {\n    continue: 'Continuer',\n  },\n  example: {\n    helloUser: 'Je suis un faux utilisateur, mon nom est {{name}}',\n    labels: {\n      userId: \"Entrer un id d'utilisateur\",\n    },\n  },\n}\n")),Object(r.b)("p",null,"That's it ! Now you can change the language with ",Object(r.b)("inlineCode",{parentName:"p"},"i18n.changeLanguage('fr')")))}u.isMDXComponent=!0},74:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),s=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),b=a,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return t?r.a.createElement(f,l(l({ref:n},u),{},{components:t})):r.a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);