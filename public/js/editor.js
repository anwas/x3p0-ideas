(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,a=window.wp.i18n,r=["core/group","core/paragraph"],n="has-color-var-",l={default:(0,a.__)("Default","x3p0-ideas"),neutral:(0,a.__)("Neutral","x3p0-ideas"),primary:(0,a.__)("Primary","x3p0-ideas")},s=["base","subtle","muted","contrast","emphasis"],o=window.wp.blockEditor,i=window.wp.tokenList;var c=e.n(i);const d=(e,t="",a="",r="")=>{const n=new(c())(e);return a&&n.remove(r?r+a:a),t&&n.add(r?r+t:t),n.value},p=(e,t,a)=>d(e,"default"===t?"":t,a,n),m=window.wp.primitives,u=(0,t.createElement)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(m.Path,{d:"M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"})),v=window.wp.components,_=({attributes:{className:e},setAttributes:r})=>{const i=(()=>{const e=(0,o.useSetting)("color.palette");let t={};return Object.keys(l).forEach((a=>{t[a]={},s.forEach((r=>{const n="default"===a?r:`${a}-${r}`,l=e.find((({slug:e})=>e==n));l&&(t[a][r]=l.color)}))})),t})(),d=(e=>{const t=new(c())(e),a=Object.keys(l).find((e=>t.contains(n+e)));return void 0!==a?a:""})(e),m=Object.keys(l).map(((a,n)=>((a,n)=>{const o=(e=>s.filter((t=>!!i[e][t])).map(((a,r)=>(0,t.createElement)(v.Flex,{key:r},(0,t.createElement)(v.ColorIndicator,{colorValue:i[e][a]})))))(a),c="default"===a?"":a;return(0,t.createElement)(v.MenuItem,{key:n,role:"menuitemradio",isSelected:d===c,isPressed:d===c,className:`x3p0-color-variations-button-${a}`,onClick:()=>r({className:p(e,c,d)})},(0,t.createElement)(v.__experimentalHStack,null,(0,t.createElement)(v.__experimentalZStack,{key:`x3p0-color-indicators-${n}`,offset:-8,isLayered:!1},o),(0,t.createElement)(v.FlexItem,{key:`x3p0-color-name-${n}`},l[a])))})(a,`primary-${n}`)));return(0,t.createElement)(v.Dropdown,{className:"x3p0-color-variations-dropdown",contentClassName:"x3p0-color-variations-dropdown-content",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:r})=>(0,t.createElement)(v.ToolbarButton,{icon:u,label:(0,a.__)("Color Variation","x3p0-ideas"),onClick:r,"aria-expanded":e,isPressed:!!d}),renderContent:()=>(0,t.createElement)(v.MenuGroup,{className:"x3p0-color-variations-menu-group",label:(0,a.__)("Select a color variation","x3p0-ideas")},m)})},g=["core/post-featured-image","core/image","core/avatar"],h="gradient-",x=["vivid-cyan-blue-to-vivid-purple","light-green-cyan-to-vivid-green-cyan","luminous-vivid-amber-to-luminous-vivid-orange","luminous-vivid-orange-to-vivid-red","very-light-gray-to-cyan-bluish-gray","cool-to-warm-spectrum","blush-light-purple","blush-bordeaux","luminous-dusk","pale-ocean","electric-grass","midnight","emerald","eternal-constance","fabled-sunset","magic-lake","mohave","near-moon","oahu","powerpuff","rocket-power","seashore","shy-rainbow","sky-sea","solid-stone","superman","true-sunset","violet-jaguar","white-rainbow","winter-neva"],b=(e,t,a)=>d(e,x.includes(t)?t:"",a,h),w=({attributes:{className:e},setAttributes:r,clientId:n})=>{const{gradients:l,theme:s,default:i}=(()=>{let e=(0,o.useSetting)("color.gradients.theme"),a=(0,o.useSetting)("color.gradients.default");return{gradients:(0,t.useMemo)((()=>(e&&e.forEach(((t,a)=>{x.includes(t.slug)||e.splice(a,1)})),a&&a.forEach(((e,t)=>{x.includes(e.slug)||a.splice(t,1)})),[...a||[],...e||[]]))),theme:e,default:a}})(),d=(e=>{const t=new(c())(e),a=x.find((e=>t.contains(h+e)));return void 0!==a?a:""})(e),p=e=>{return t=((e,t)=>{const a=(0,o.getGradientSlugByValue)(t,e);return a?`var:preset|gradient|${a}`:e})(e,l),t&&t.startsWith("var:preset|gradient|")?t.replace("var:preset|gradient|",""):null;var t},m={label:(0,a.__)("Gradient Outline","x3p0-ideas"),gradientValue:d?(0,o.getGradientValueBySlug)(l,d):null,onGradientChange:t=>r({className:b(e,p(t),d)}),isShownByDefault:!0,disableCustomColors:!0,disableCustomGradients:!0,hasColorsOrGradients:!1,gradients:[{name:(0,a.__)("Theme","x3p0-ideas"),gradients:s||[]},{name:(0,a.__)("Default","x3p0-ideas"),gradients:i||[]}]};return(0,t.createElement)(o.__experimentalColorGradientSettingsDropdown,{settings:[m],panelId:n,__experimentalIsRenderedInSidebar:!0,__experimentalHasMultipleOrigins:!0})},E=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M324.758-294.578q13.934 0 23.684-9.68 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.653 23.615 9.653Zm0-152.153q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615t-9.777-23.684q-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.711t9.681 23.588q9.68 9.654 23.615 9.654Zm0-152.961q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.749-23.711-9.749-13.935 0-23.588 9.776-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.654 23.615 9.654Zm119.896 300.229h222.845v-55.96H444.654v55.96Zm0-152.961h222.845v-55.96H444.654v55.96Zm0-152.153h222.845v-55.96H444.654v55.96ZM215.448-147.271q-28.346 0-48.262-19.915-19.915-19.916-19.915-48.262v-529.104q0-28.346 19.915-48.262 19.916-19.915 48.262-19.915h529.104q28.346 0 48.262 19.915 19.915 19.916 19.915 48.262v529.104q0 28.346-19.915 48.262-19.916 19.915-48.262 19.915H215.448Zm.091-55.96h528.922q4.615 0 8.462-3.846 3.846-3.847 3.846-8.462v-528.922q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.922q0 4.615 3.846 8.462 3.847 3.846 8.462 3.846Zm-12.308-553.538v553.538-553.538Z"})),k=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M184.192-384.923v-36.923h353.847v36.923H184.192Zm0-153.846v-36.923h592v36.923h-592Z"})),f=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"m499.269-560.154-33.308-33.308 34.731-84.653H379.654l-44.423-44.039h426.923v44.308H549.077l-49.808 117.692Zm272.923 424.77L454.5-453.846l-92.923 219.077h-48.539l107.885-252.654L127.077-780.5l26.461-25.962 644.616 644.616-25.962 26.462Z"})),y=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M215.539-148.078q-28.257 0-48.263-20.006-20.005-20.006-20.005-48.263v-528.114q0-28.257 20.005-48.263 20.006-20.005 48.263-20.005h528.922q28.257 0 48.263 20.005 20.005 20.006 20.005 48.263v251.692q-13.641-5.694-27.647-9.732-14.005-4.037-28.313-6.653v-235.307q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.114q0 4.616 3.846 8.462 3.847 3.847 8.462 3.847h239.094q2.29 15.307 6.527 29.196 4.237 13.889 10.532 26.764H215.539Zm-12.308-98.383v42.423-552.731 247.547-2.932 265.693Zm90.808-53.002h163.626q2.605-14.307 7.105-28.249 4.499-13.942 10.576-27.711H294.039v55.96Zm0-152.961h257.347q23.423-19.192 49.653-32.383 26.23-13.192 56.46-19.423v-4.154h-363.46v55.96Zm0-152.961h371.922v-55.96H294.039v55.96ZM717.631-69.809q-72.553 0-123.476-50.868-50.923-50.869-50.923-123.422 0-72.554 50.869-123.477 50.868-50.922 123.422-50.922 72.553 0 123.476 50.868 50.923 50.869 50.923 123.422 0 72.554-50.869 123.477-50.868 50.922-123.422 50.922Zm-16.938-58.268h34.576v-99.192h99.192v-33.769h-99.192v-99.192h-34.576v99.192H601.5v33.769h99.193v99.192Z"})),C=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M84.846-6.961v-111.921h790.308v111.92H84.846Zm467.038-450L449.499-559.346 301.192-410.038q-3.654 3.461-3.654 8.462 0 5 3.654 8.462l85.152 84.653q3.462 3.461 8.463 3.461 5 0 8.462-3.461l148.615-148.5Zm-62.347-142.115 102.077 102.269 187.731-187.615q3.462-3.462 3.462-8.751t-3.462-8.943l-84.999-84.999q-3.654-3.462-8.943-3.462-5.288 0-8.75 3.462L489.537-599.076Zm-59.691-20.076 181.537 181.536-168.077 168.192q-20.577 20.577-49.153 20.577-28.577 0-49.154-20.577l-4.962-4.962-37.423 36.578h-145.69l109.961-110.653-4.192-4.385q-20.577-20.384-20.789-49.173-.211-28.788 20.366-49.365l167.576-167.768Zm0 0 209.077-208.885q19.884-20.077 48-19.673 28.115.404 47.692 20.481l84.652 85.152q20.077 20.577 20.077 48.596 0 28.019-20.077 48.096L611.383-437.616 429.846-619.152Z"})),N=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,t.createElement)("path",{d:"M216.27-772.116v-55.96h527.46v55.96H216.27ZM480.023-136.27q-110.192 0-186.972-76.758-76.781-76.757-76.781-186.949 0-110.192 76.758-186.972 76.757-76.781 186.949-76.781 110.192 0 186.972 76.758 76.781 76.757 76.781 186.949 0 110.192-76.758 186.972-76.757 76.781-186.949 76.781ZM480-203.73q81.635 0 138.953-57.317Q676.27-318.365 676.27-400t-57.317-138.953Q561.635-596.27 480-596.27t-138.953 57.317Q283.73-481.635 283.73-400t57.317 138.953Q398.365-203.73 480-203.73Z"})),S=["core/list"],q="has-marker-",B=[{value:"arrow",label:(0,a.__)("Arrow","x3p0-ideas")},{value:"dash",label:(0,a.__)("Dash","x3p0-ideas")},{value:"disc",label:(0,a.__)("Disc","x3p0-ideas")},{value:"circle",label:(0,a.__)("Circle","x3p0-ideas")},{value:"square",label:(0,a.__)("Square","x3p0-ideas")}],A=[{value:"decimal",label:(0,a.__)("Decimal","x3p0-ideas")},{value:"decimal-leading-zero",label:(0,a.__)("Leading Zero","x3p0-ideas")}],T=[...B,...A],Z=(e,t,a)=>d(e,t,a,q),M={value:"",label:(0,a.__)("Default","x3p0-ideas")},D=({attributes:{className:e,ordered:r},setAttributes:n})=>{const l=(0,t.useMemo)((()=>(e=>{const t=new(c())(e),a=T.find((e=>t.contains(q+e.value)));return void 0!==a?a.value:""})(e)),[e]),s=(0,t.useMemo)((()=>r?[M,...A]:[M,...B]),[r]);(0,t.useEffect)((()=>{var t;(l&&r&&(t=l,!A.find((e=>e.value===t)))||!r&&!(e=>B.find((t=>t.value===e)))(l))&&n({className:Z(e,"",l)})}),[r]);const o=s.map(((a,r)=>{var s;const o=null!==(s=a.value)&&void 0!==s?s:"default",i=(0,t.createElement)(v.FlexItem,{key:`x3p0-marker-name-${r}`,className:"x3p0-marker-name"},(0,t.createElement)("ul",{className:"x3p0-list-marker-list"},(0,t.createElement)("li",{className:`x3p0-marker-${o}`},a.label)));return(0,t.createElement)(v.MenuItem,{key:r,role:"menuitemradio",isSelected:l===o,isPressed:l===o,className:`x3p0-color-markers-button-${o}`,onClick:()=>n({className:Z(e,a.value,l)})},i)}));return(0,t.createElement)(v.Dropdown,{className:"x3p0-list-markers-dropdown",contentClassName:"x3p0-list-markers-dropdown-content",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:r})=>(0,t.createElement)(v.ToolbarButton,{icon:E,label:(0,a.__)("List Marker","x3p0-ideas"),onClick:r,"aria-expanded":e,isPressed:!!l}),renderContent:()=>(0,t.createElement)(v.MenuGroup,{className:"x3p0-list-markers-menu-group",label:(0,a.__)("Select a list marker","x3p0-ideas")},o)})},H=["core/separator"],I="has-icon-",F=[{value:"❦",gradient:""},{value:"🫠",gradient:"mohave"},{value:"🌼",gradient:"mohave"},{value:"☀️",gradient:"true-sunset"},{value:"🪶",gradient:"shy-rainbow"},{value:"🔥",gradient:"luminous-vivid-amber-to-luminous-vivid-orange"},{value:"🍃",gradient:"emerald"},{value:"☕",gradient:"rocket-power"},{value:"🍻",gradient:"rocket-power"},{value:"🪷",gradient:"blush-light-purple"},{value:"🎸",gradient:"blush-bordeaux"},{value:"✏️",gradient:"mohave"},{value:"🚀",gradient:"superman"},{value:"☘️",gradient:"emerald"},{value:"⭐",gradient:"luminous-dusk"},{value:"🌻",gradient:"true-sunset"},{value:"⛱️",gradient:"powerpuff"}],O=window.wp.hooks,P=()=>(0,O.applyFilters)("x3p0SeparatorIcons",F),G=(e,t,a)=>d(e,t,a,I),L=(0,t.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(m.Path,{d:"M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"})),R=({attributes:{className:e},setAttributes:r})=>{const n=P(),l=(e=>{const t=new(c())(e),a=P().find((e=>t.contains(I+e.value)));return void 0!==a?a.value:""})(e),s=(0,t.createElement)(v.BaseControl,{label:(0,a.__)("Icons","x3p0-ideas")},(0,t.createElement)("div",{className:"x3p0-separator-icons-control__description"},(0,a.__)("Pick an icon to super-charge your separator. Need more icons?","x3p0-ideas")+" ",(0,t.createElement)("a",{href:"#",target:"_blank"},(0,a.__)("Learn how to add your own →","x3p0-ideas"))),(0,t.createElement)(v.__experimentalGrid,{columns:"6"},n.map(((a,n)=>((a,n)=>{var s;return(0,t.createElement)(v.Button,{key:n,isPressed:l===a.value,className:"x3p0-separator-icons-control__button",onClick:()=>(t=>r({className:G(e,l===t.value?"":t.value,l),gradient:l!==t.value&&t?.gradient?t?.gradient:void 0}))(a)},null!==(s=a.label)&&void 0!==s?s:a.value)})(a,n)))));return(0,t.createElement)(v.Dropdown,{className:"x3p0-separator-icons-control",contentClassName:"x3p0-separator-icons-control__popover",popoverProps:{headerTitle:(0,a.__)("Separator Icons","x3p0-ideas"),variant:"toolbar"},paddingSize:"large",renderToggle:({isOpen:e,onToggle:r})=>(0,t.createElement)(v.ToolbarButton,{icon:L,label:(0,a.__)("Separator Icon","x3p0-ideas"),onClick:r,"aria-expanded":e,isPressed:!!l}),renderContent:()=>s})},$=["core/heading","core/paragraph"],j="has-text-shadow-",V=[{value:"none",label:(0,a.__)("None","x3p0-ideas")},{value:"sm",label:(0,a.__)("Small","x3p0-ideas")},{value:"md",label:(0,a.__)("Medium","x3p0-ideas")},{value:"lg",label:(0,a.__)("Large","x3p0-ideas")}],z=(e,t,a)=>d(e,t,a,j),Q={key:"default",name:(0,a.__)("Default","x3p0-ideas"),value:""},U=({attributes:{className:e},setAttributes:r})=>{const n=(0,t.useMemo)((()=>(e=>{const t=new(c())(e),a=V.find((e=>t.contains(j+e.value)));return void 0!==a?a.value:""})(e)),[e]),l=[Q,...V.map((e=>({key:e.value,name:e.label,value:e.value})))];return(0,t.createElement)("div",{className:"x3p0-text-shadow-control"},(0,t.createElement)(v.CustomSelectControl,{label:(0,a.__)("Text Shadow","x3p0-ideas"),options:l,value:l.find((e=>e.value===n)),onChange:({selectedItem:t})=>r({className:z(e,t.value,n)}),size:"__unstable-large",__nextHasNoMarginBottom:!0,__nextUnconstrainedWidth:!0}))},W={"color-variations":e=>a=>r.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,a),(0,t.createElement)(o.BlockControls,{group:"other"},(0,t.createElement)(_,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,a),"gradient-background":e=>a=>g.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,a),(0,t.createElement)(o.InspectorControls,{group:"color"},(0,t.createElement)(w,{attributes:a.attributes,setAttributes:a.setAttributes,clientId:a.clientId}))):(0,t.createElement)(e,a),"list-markers":e=>a=>S.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,a),(0,t.createElement)(o.BlockControls,{group:"other"},(0,t.createElement)(D,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,a),"separator-icons":e=>a=>H.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,a),(0,t.createElement)(o.BlockControls,{group:"other"},(0,t.createElement)(R,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,a),"text-shadow":e=>a=>$.includes(a.name)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,a),(0,t.createElement)(o.InspectorControls,{group:"typography"},(0,t.createElement)(U,{attributes:a.attributes,setAttributes:a.setAttributes}))):(0,t.createElement)(e,a)};Object.keys(W).forEach((e=>(0,O.addFilter)("editor.BlockEdit",`x3p0/ideas/${e}`,W[e])));const J={"core/button":{"hand-drawn":(0,a.__)("Hand Drawn","x3p0-ideas")},"core/cover":{"polygon-slant-down-sm":(0,a.__)("Slant Down: Small","x3p0-ideas"),"polygon-slant-down-md":(0,a.__)("Slant Down: Medium","x3p0-ideas"),"polygon-slant-up-sm":(0,a.__)("Slant Up: Small","x3p0-ideas"),"polygon-slant-up-md":(0,a.__)("Slant Up: Medium","x3p0-ideas"),stretch:(0,a.__)("Stretch","x3p0-ideas")},"core/details":{spoiler:(0,a.__)("Spoiler","x3p0-ideas")},"core/gallery":{classic:(0,a.__)("Classic","x3p0-ideas")},"core/heading":{"clip-text":(0,a.__)("Clip Text","x3p0-ideas"),"text-wrap-balance":(0,a.__)("Wrap: Balance","x3p0-ideas")},"core/image":{borderless:(0,a.__)("Borderless","x3p0-ideas"),"hand-drawn":(0,a.__)("Hand-Drawn","x3p0-ideas"),polaroid:(0,a.__)("Polaroid","x3p0-ideas"),tape:(0,a.__)("Tape","x3p0-ideas"),"tape-corners":(0,a.__)("Tape: Corners","x3p0-ideas")},"core/list":{"gap-snug":(0,a.__)("Gap: Snug","x3p0-ideas"),"gap-normal":(0,a.__)("Gap: Normal","x3p0-ideas"),"gap-relaxed":(0,a.__)("Gap: Relaxed","x3p0-ideas"),"gap-loose":(0,a.__)("Gap: Loose","x3p0-ideas")},"core/paragraph":{indent:(0,a.__)("Indent","x3p0-ideas"),intro:(0,a.__)("Intro","x3p0-ideas"),"lead-in":(0,a.__)("Lead-in","x3p0-ideas"),lede:(0,a.__)("Lede","x3p0-ideas")},"core/post-template":{flex:(0,a.__)("Flexible","x3p0-ideas")},"core/pullquote":{brackets:(0,a.__)("Brackets","x3p0-ideas"),"clip-text":(0,a.__)("Clip Text","x3p0-ideas"),"hand-drawn":(0,a.__)("Hand Drawn","x3p0-ideas"),"mark-top":(0,a.__)("Mark: Top","x3p0-ideas")},"core/search":{sm:(0,a.__)("Small","x3p0-ideas")},"core/separator":{dashed:(0,a.__)("Dashed","x3p0-ideas"),dotted:(0,a.__)("Dotted","x3p0-ideas"),double:(0,a.__)("Double","x3p0-ideas"),"hand-drawn":(0,a.__)("Hand Drawn","x3p0-ideas")},"core/social-links":{"hand-drawn":(0,a.__)("Hand Drawn","x3p0-ideas"),outline:(0,a.__)("Outline","x3p0-ideas")},"core/table-of-contents":{chapters:(0,a.__)("Chapters","x3p0-ideas"),"chapters-and-subs":(0,a.__)("Chapters with Sub-headings","x3p0-ideas"),"marker-unordered":(0,a.__)("Unordered","x3p0-ideas")}},K=window.wp.domReady;var X=e.n(K);const Y=window.wp.blocks;X()((()=>{(0,Y.unregisterBlockStyle)("core/separator","dots"),Object.keys(J).forEach((e=>Object.keys(J[e]).forEach((t=>(0,Y.registerBlockStyle)(e,{name:t,label:J[e][t]})))))})),(0,Y.registerBlockVariation)("core/spacer",{name:"x3p0/theme-spacer",title:(0,a.__)("Spacer (Theme)","x3p0-ideas"),isDefault:!0,keywords:["space","spacer","spacing"],attributes:{height:"var:preset|spacing|plus-3"},isActive:e=>e.height.includes("var:preset|spacing|")});const ee=window.wp.richText,te="x3p0/abbr",ae={name:te,title:(0,a.__)("Abbreviation","x3p0-ideas"),tagName:"abbr",className:null,edit:function({isActive:e,onChange:r,value:n,contentRef:l}){const[s,i]=(0,t.useState)(!1),c=()=>i((e=>!e));return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.RichTextToolbarButton,{icon:k,title:(0,a.__)("Abbreviation","x3p0-ideas"),isActive:e,onClick:()=>e?r((0,ee.removeFormat)(n,te)):c()}),s&&(0,t.createElement)(ne,{value:n,onChange:r,onClose:c,contentRef:l}))}},re=ae;function ne({value:e,contentRef:r,onChange:n,onClose:l}){const s=(0,ee.useAnchor)({editableContentElement:r.current,settings:ae}),[o,i]=(0,t.useState)(""),c=(0,t.createElement)(v.TextControl,{label:(0,a.__)("Add title for abbreviation","x3p0-ideas"),value:o,onChange:e=>i(e),help:(0,a.__)("Expand on the definition for the abbreviation when a full description is not present in the content.","x3p0-ideas")}),d=(0,t.createElement)("form",{className:"x3p0-rich-text-format-abbr__popover-form",onSubmit:t=>{t.preventDefault(),n((0,ee.applyFormat)(e,{type:te,attributes:{title:o}})),l()}},c);return(0,t.createElement)(v.Popover,{className:"x3p0-rich-text-format-abbr__popover",anchor:s,placement:"top",onClose:l,variant:"toolbar"},d)}const le="x3p0/del",se={name:le,title:(0,a.__)("Delete","x3p0-ideas"),tagName:"del",className:null,edit:({isActive:e,onChange:r,value:n})=>(0,t.createElement)(o.RichTextToolbarButton,{icon:f,title:(0,a.__)("Delete","x3p0-ideas"),isActive:e,onClick:()=>r((0,ee.toggleFormat)(n,{type:le}))})},oe="x3p0/ins",ie={name:oe,title:(0,a.__)("Insert","x3p0-ideas"),tagName:"ins",className:null,edit:({isActive:e,onChange:r,value:n})=>(0,t.createElement)(o.RichTextToolbarButton,{icon:y,title:(0,a.__)("Insert","x3p0-ideas"),isActive:e,onClick:()=>r((0,ee.toggleFormat)(n,{type:oe}))})},ce="x3p0/mark",de={name:ce,title:(0,a.__)("Mark","x3p0-ideas"),tagName:"mark",className:null,edit:({isActive:e,onChange:r,value:n})=>(0,t.createElement)(o.RichTextToolbarButton,{icon:C,title:(0,a.__)("Mark","x3p0-ideas"),isActive:e,onClick:()=>r((0,ee.toggleFormat)(n,{type:ce}))})},pe="x3p0/overline";[re,se,ie,de,{name:pe,title:(0,a.__)("Overline","x3p0-ideas"),tagName:"span",className:"has-overline",edit:({isActive:e,onChange:r,value:n})=>(0,t.createElement)(o.RichTextToolbarButton,{icon:N,title:(0,a.__)("Overline","x3p0-ideas"),isActive:e,onClick:()=>r((0,ee.toggleFormat)(n,{type:pe}))})}].forEach((({name:e,...t})=>(0,ee.registerFormatType)(e,t)))})();