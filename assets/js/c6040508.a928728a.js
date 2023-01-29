"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[614],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},f=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),p=d(n),c=i,h=p["".concat(s,".").concat(c)]||p[c]||u[c]||l;return n?o.createElement(h,r(r({ref:t},f),{},{components:n})):o.createElement(h,r({ref:t},f))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,r[1]=a;for(var d=2;d<l;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const l={},r="OSD Profiles",a={unversionedId:"development/OSD Profiles",id:"development/OSD Profiles",title:"OSD Profiles",description:"An OSD Profile is a screen or page of OSD elements. Three OSD Profiles are supported, i.e. you can configure 3 different OSD Profiles or pages each with their own OSD elements. Elements may also be on all 3 profiles. The OSD can still be turned on or off as before via an AUX channel. Hence users who don't want this feature are not affected by its availability. With no profiles are configured for elements, all elements are visible, i.e. OSD Profile 1 is the default profile. Keep in mind that if an element is used, it must be in the same position on all OSD Profiles in which it is visible. It is not possible to configure an element to be in a different location on a different profile.",source:"@site/docs/development/OSD Profiles.md",sourceDirName:"development",slug:"/development/OSD Profiles",permalink:"/docs/development/OSD Profiles",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"Modes",permalink:"/docs/development/Modes"},next:{title:"Oneshot",permalink:"/docs/development/Oneshot"}},s={},d=[{value:"Configuration",id:"configuration",level:2},{value:"OSD Configuration",id:"osd-configuration",level:6},{value:"OPTION 1: Configure an adjustment range to change OSD Profile from your radio",id:"option-1-configure-an-adjustment-range-to-change-osd-profile-from-your-radio",level:6},{value:"OPTION 2: Use the CLI to select an OSD Profile (i.e. not selecting the OSD Profile with your radio)",id:"option-2-use-the-cli-to-select-an-osd-profile-ie-not-selecting-the-osd-profile-with-your-radio",level:6},{value:"CONFIGURE OSD PROFILES",id:"configure-osd-profiles",level:6},{value:"OSD PROFILE CONFIG VALUES",id:"osd-profile-config-values",level:6},{value:"Note:",id:"note",level:2},{value:"Use",id:"use",level:2},{value:"Useful OSD Profile CLI commands",id:"useful-osd-profile-cli-commands",level:2}],f={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"osd-profiles"},"OSD Profiles"),(0,i.kt)("p",null,"An OSD Profile is a screen or page of OSD elements. Three OSD Profiles are supported, i.e. you can configure 3 different OSD Profiles or pages each with their own OSD elements. Elements may also be on all 3 profiles. The OSD can still be turned on or off as before via an AUX channel. Hence users who don't want this feature are not affected by its availability. With no profiles are configured for elements, all elements are visible, i.e. OSD Profile 1 is the default profile. Keep in mind that if an element is used, it must be in the same position on all OSD Profiles in which it is visible. It is not possible to configure an element to be in a different location on a different profile."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Currently (Configurator 10.4.0) OSD Profiles can only be configured via the CLI. Layout your OSD using the configurator and save. Elements in the same position but on different profiles will overlap in the configurator at this stage. OSD Profiles can either be selected via an adjustment range (Adjustments tab, after enabling Expert Mode) or by setting the osd_profile parameter with the set command in the CLI. The selected OSD Profile can either be controlled from a switch on your radio or you can configure different profiles and select the one you want by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"set osd_profile=2")," command in the CLI and saving."),(0,i.kt)("h6",{id:"osd-configuration"},"OSD Configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure your OSD via the OSD tab in the configurator, i.e. element layout, font etc. as before.")),(0,i.kt)("h6",{id:"option-1-configure-an-adjustment-range-to-change-osd-profile-from-your-radio"},"OPTION 1: Configure an adjustment range to change OSD Profile from your radio"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Turn on Expert mode - see top right of configurator screen "Enable Expert Mode".'),(0,i.kt)("li",{parentName:"ol"},"The OSD Profile selection is performed using an adjustment configured via the Adjustments tab.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Enable an adjustment. ("If enabled")'),(0,i.kt)("li",{parentName:"ul"},'Select the AUX channel to be used to change OSD Profile. ("when channel")'),(0,i.kt)("li",{parentName:"ul"},'Set the range to cover the entire range of the selected AUX channel. ("is in ranges")'),(0,i.kt)("li",{parentName:"ul"},'For the action select "RC Rate Adjustment". ("then apply") This will be configured in the CLI since OSD Profiles is not supported by Configurator 10.4.0 and earlier. "RC Rate Adjustment" is only selected to make the configuration in the CLI a little easier below.'),(0,i.kt)("li",{parentName:"ul"},'Select the "via channel" to match the selected AUX channel of above. ("when channel").'),(0,i.kt)("li",{parentName:"ul"},"Save"))),(0,i.kt)("li",{parentName:"ol"},"Open the CLI and type ",(0,i.kt)("inlineCode",{parentName:"li"},"adjrange")," followed by enter."),(0,i.kt)("li",{parentName:"ol"},"Copy the adjrange configured in step 2. above and paste it in the command window. Change the '1' following the range of the channel to '29' and press enter. Type ",(0,i.kt)("inlineCode",{parentName:"li"},"save")," and press enter. The configured adjrange will now be saved and the FC will reboot."),(0,i.kt)("li",{parentName:"ol"},"Configure the AUX channel on your radio. When this channel is changed the selected OSD Profile will change displaying all the elements configured for the selected profile. Note that elements are assigned to profile 1 by default. To revert back to not using OSD Profiles, go to the CLI and select and type ",(0,i.kt)("inlineCode",{parentName:"li"},"set osd_profile=1")," press enter, followed by ",(0,i.kt)("inlineCode",{parentName:"li"},"save")," and enter. Keep in mind that elements configured to be only visible on profile 2 and 3 will need to reconfigured and will not be visible on profile 1.")),(0,i.kt)("h6",{id:"option-2-use-the-cli-to-select-an-osd-profile-ie-not-selecting-the-osd-profile-with-your-radio"},"OPTION 2: Use the CLI to select an OSD Profile (i.e. not selecting the OSD Profile with your radio)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the CLI."),(0,i.kt)("li",{parentName:"ol"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"get osd_profile")," followed by enter to display the currently selected profile."),(0,i.kt)("li",{parentName:"ol"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"set osd_profile=x")," where x is the profile number 1,2 or 3 and press enter."),(0,i.kt)("li",{parentName:"ol"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"save")," followed by enter to save the selected profile.")),(0,i.kt)("h6",{id:"configure-osd-profiles"},"CONFIGURE OSD PROFILES"),(0,i.kt)("p",null,"The steps below are only required if using The Configurator 10.4.0 or earlier."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the CLI.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find the name of the element to be configured, all elements can be displayed using the ",(0,i.kt)("inlineCode",{parentName:"p"},"dump")," command or ",(0,i.kt)("inlineCode",{parentName:"p"},"get osd")," command. Element names end in ","_","pos.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Take the current value of the element, apply the OSD Profile config and set its new value using the ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," command. The OSD Profile config value is described below."),(0,i.kt)("p",{parentName:"li"},"eg. osd_vbat_pos = 6560\n",(0,i.kt)("inlineCode",{parentName:"p"},"set osd_vbat_pos = 31136"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"save"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Repeat steps 2 & 3 for every element to be configured."))),(0,i.kt)("h6",{id:"osd-profile-config-values"},"OSD PROFILE CONFIG VALUES"),(0,i.kt)("p",null,"The OSD Profile config is stored in the higher order bits, bits 11, 12 & 13 of an OSD element, eg. osd_vbat_pos. This means the initial value, after being configured in the OSD tab needs to be adjusted to add the OSD Profile configuration of the element. To calculate the new value, take the current (initially configured value) of the OSD element and convert it to HEX. Determine which OSD Profiles this element should be visible on and select the corresponding HEX value from the table below. Perform an OR operation between the initial OSD element value (in HEX) and the HEX value from the table. Convert the result to decimal and set the OSD element to this value using the ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," command in the CLI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Binary Value    HEX Value    Profile Configuration   Description\n13 12 11\n 0  0  1        0x0800   -   1                       Visible in OSD Profile 1\n 0  1  0        0x1000   -   2                       Visible in OSD Profile 2\n 0  1  1        0x1800   -   1 and 2                 Visible in OSD Profile 1 and 2 only\n 1  0  0        0x2000   -   3                       Visible in OSD Profile 3 only\n 1  0  1        0x2800   -   1 and 3                 Visible in OSD Profile 1 and 3 only\n 1  1  0        0x3000   -   2 and 3                 Visible in OSD Profile 2 and 3 only\n 1  1  1        0x3800   -   1, 2 and 3              Visible in all OSD Profiles\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"osd_vbat_pos = 6560"),(0,i.kt)("li",{parentName:"ol"},"Convert 6560 to HEX results in 19A0 (HEX) (All these operations can be done with the windows calculator in programmer mode)"),(0,i.kt)("li",{parentName:"ol"},"We want this element to be visible on OSD Profile 2 & 3 and hence select the HEX value 0x3000 from the table above."),(0,i.kt)("li",{parentName:"ol"},"OR the two HEX values together 19A0 OR 3000 = 39A0"),(0,i.kt)("li",{parentName:"ol"},"Convert 39A0 (HEX) to decimal results in 14752."),(0,i.kt)("li",{parentName:"ol"},"In the CLI, ",(0,i.kt)("inlineCode",{parentName:"li"},"set osd_vbat_pos = 14752")," enter and ",(0,i.kt)("inlineCode",{parentName:"li"},"save")," enter.")),(0,i.kt)("h2",{id:"note"},"Note:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'If using Configurator 10.4.0 or earlier, when changing an adjustment on the Adjustments tab, the "then apply" item (29) for OSD Profile will also be cleared, i.e. set to 0 and would have to be re-configured via the CLI, e.g. ',(0,i.kt)("inlineCode",{parentName:"li"},"adjrange 0 0 8 900 2100 29 8 0 0")),(0,i.kt)("li",{parentName:"ol"},"OSD Profile selection is not active if the CLI is open, in other words if you change the value of osd_profile while the CLI is open, nothing will change, the selected OSD Profile will remain as is.")),(0,i.kt)("h2",{id:"use"},"Use"),(0,i.kt)("p",null,"After completing the above configuration, you should be able to select the active OSD Profile from your radio or via the CLI. The profile can be selected/changed at any time while on the ground or in mid flight."),(0,i.kt)("h2",{id:"useful-osd-profile-cli-commands"},"Useful OSD Profile CLI commands"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get osd_profile {enter}")," >> displays the currently selected OSD Profile in the CLI."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"set osd_profile= {number, 1-3}")," selects the OSD Profile."))}p.isMDXComponent=!0}}]);