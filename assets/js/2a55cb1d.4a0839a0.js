"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=l.createContext({}),u=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return l.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||s[m]||a;return n?l.createElement(h,r(r({ref:t},d),{},{components:n})):l.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<a;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var l=n(87462),o=(n(67294),n(3905));const a={},r="Building in Mac OS X",i={unversionedId:"documentation/development/Building in Mac OS X",id:"documentation/development/Building in Mac OS X",title:"Building in Mac OS X",description:"Building in Mac OS X can be accomplished in just a few steps:",source:"@site/docs/documentation/development/Building in Mac OS X.md",sourceDirName:"documentation/development",slug:"/documentation/development/Building in Mac OS X",permalink:"/docs/documentation/development/Building in Mac OS X",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building in Fedora 35",permalink:"/docs/documentation/development/Building in Fedora"},next:{title:"Building in Ubuntu",permalink:"/docs/documentation/development/Building in Ubuntu"}},c={},u=[{value:"Install general development tools (clang, make, git)",id:"install-general-development-tools-clang-make-git",level:2},{value:"Checkout Betaflight sourcecode through git",id:"checkout-betaflight-sourcecode-through-git",level:2},{value:"Install ARM GCC compiler",id:"install-arm-gcc-compiler",level:2},{value:"Build the code",id:"build-the-code",level:2},{value:"Updating to the latest source",id:"updating-to-the-latest-source",level:2}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-in-mac-os-x"},"Building in Mac OS X"),(0,o.kt)("p",null,"Building in Mac OS X can be accomplished in just a few steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install general development tools (clang, make, git)"),(0,o.kt)("li",{parentName:"ul"},"Checkout Betaflight sourcecode through git"),(0,o.kt)("li",{parentName:"ul"},"Install ARM GCC compiler"),(0,o.kt)("li",{parentName:"ul"},"Build the code")),(0,o.kt)("h2",{id:"install-general-development-tools-clang-make-git"},"Install general development tools (clang, make, git)"),(0,o.kt)("p",null,"Open up a terminal and run ",(0,o.kt)("inlineCode",{parentName:"p"},"make"),". If it is installed already, you should see a message like this, which means that you\nalready have the required development tools installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make: *** No targets specified and no makefile found.  Stop.\n")),(0,o.kt)("p",null,'If it isn\'t installed yet, you might get a popup like this. If so, click the "install" button to install the commandline\ndeveloper tools:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Prompt to install developer tools",src:n(67383).Z,width:"575",height:"287"})),(0,o.kt)("p",null,"If you just get an error like this instead of a helpful popup prompt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-bash: make: command not found\n")),(0,o.kt)("p",null,"Try running ",(0,o.kt)("inlineCode",{parentName:"p"},"xcode-select --install")," instead to trigger the popup."),(0,o.kt)("p",null,"If that doesn't work, you'll need to install the XCode development environment ",(0,o.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/xcode/id497799835"},"from the App Store"),'. After\ninstallation, open up XCode and enter its preferences menu. Go to the "downloads" tab and install the\n"command line tools" package.'),(0,o.kt)("h2",{id:"checkout-betaflight-sourcecode-through-git"},"Checkout Betaflight sourcecode through git"),(0,o.kt)("p",null,"Enter your development directory and clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/betaflight/betaflight"},"Betaflight repository"),' using the "HTTPS clone URL" which is shown on\nthe right side of the Betaflight GitHub page, like so:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/betaflight/betaflight.git\n")),(0,o.kt)("p",null,'This will download the entire betaflight repository for you into a new folder called "betaflight".'),(0,o.kt)("h2",{id:"install-arm-gcc-compiler"},"Install ARM GCC compiler"),(0,o.kt)("p",null,"To install the needed compiler you just need to enter the betaflight directory and run ",(0,o.kt)("inlineCode",{parentName:"p"},"make arm_sdk_install")),(0,o.kt)("h2",{id:"build-the-code"},"Build the code"),(0,o.kt)("p",null,"Enter the betaflight directory and run ",(0,o.kt)("inlineCode",{parentName:"p"},"make TARGET=BETAFLIGHTF4")," to build firmware for the BETAFLIGHTF4. When the build completes,\nthe .hex firmware should be available as ",(0,o.kt)("inlineCode",{parentName:"p"},"obj/betaflight_3.5.2_BETAFLIGHTF4.hex")," for you to flash using the Betaflight\nConfigurator."),(0,o.kt)("h2",{id:"updating-to-the-latest-source"},"Updating to the latest source"),(0,o.kt)("p",null,"If you want to erase your local changes and update to the latest version of the Betaflight source, enter your\nbetaflight directory and run these commands to first erase your local changes, fetch and merge the latest\nchanges from the repository, then rebuild the firmware:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git reset --hard\ngit pull\n\nmake clean TARGET=BETAFLIGHTF4\nmake TARGET=BETAFLIGHTF4\n")))}p.isMDXComponent=!0},67383:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/mac-prompt-tools-install-6cbc469e8601d43563450f2148de9b76.png"}}]);