(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.hooks;(0,t.addFilter)("editor.PostFeaturedImage.imageSize","x3p0/ideas/featured-image-size",(()=>"x3p0-16x9-lg")),(0,t.addFilter)("blocks.registerBlockType","x3p0/ideas/block/footnotes",((e,t)=>("core/footnotes"!==t||(e.supports.inserter=!0),e)));const a=window.wp.element,r=window.wp.i18n,n=["core/group","core/paragraph"],l="has-color-var-",o={default:(0,r.__)("Default","x3p0-ideas"),neutral:(0,r.__)("Neutral","x3p0-ideas"),primary:(0,r.__)("Primary","x3p0-ideas"),secondary:(0,r.__)("Secondary","x3p0-ideas"),tertiary:(0,r.__)("Tertiary","x3p0-ideas"),positive:(0,r.__)("Positive","x3p0-ideas"),negative:(0,r.__)("Negative","x3p0-ideas")},s=["base","subtle","muted","contrast","emphasis"],i=window.wp.blockEditor,c=window.wp.tokenList;var d=e.n(c);const p=(e,t="",a="",r="",n="")=>{const l=new(d())(e);return a&&l.remove(r+a+n),t&&l.add(r+t+n),l.value},m=(e,t,a)=>p(e,"default"===t?"":t,a,l),u=window.wp.primitives,_=(0,a.createElement)(u.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(u.Path,{d:"M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"})),v=window.wp.components,x=({attributes:{className:e},setAttributes:t})=>{const n=(()=>{const e=(0,i.useSetting)("color.palette");let t={};return Object.keys(o).forEach((a=>{let r={};s.forEach((t=>{const n="default"===a?t:`${a}-${t}`,l=e.find((({slug:e})=>e==n));l&&(r[t]=l.color)})),0<Object.keys(r).length&&(t[a]=r)})),t})(),c=(e=>{const t=new(d())(e),a=Object.keys(o).find((e=>t.contains(l+e)));return void 0!==a?a:""})(e),p=(0,a.createElement)(v.MenuGroup,{className:"x3p0-color-var-picker",label:(0,r.__)("Select a color variation","x3p0-ideas")},Object.keys(n).map(((r,l)=>((r,l)=>{const s=(e=>Object.values(n[e]).map(((e,t)=>(0,a.createElement)(v.Flex,{key:t},(0,a.createElement)(v.ColorIndicator,{colorValue:e})))))(r),i="default"===r?"":r;return(0,a.createElement)(v.MenuItem,{key:l,role:"menuitemradio",className:"x3p0-color-var-picker__button",isSelected:c===i,isPressed:c===i,onClick:()=>t({className:m(e,i,c)})},(0,a.createElement)(v.__experimentalHStack,null,(0,a.createElement)(v.__experimentalZStack,{key:`x3p0-color-var-indicator-${l}`,offset:-8,isLayered:!1},s),(0,a.createElement)(v.FlexItem,{key:`x3p0-color-var-name-${l}`},o[r])))})(r,`primary-${l}`))));return(0,a.createElement)(v.Dropdown,{className:"x3p0-color-var-dropdown",contentClassName:"x3p0-color-var-popover",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:t})=>(0,a.createElement)(v.ToolbarButton,{className:"x3p0-color-var-dropdown__button",icon:_,label:(0,r.__)("Color Variation","x3p0-ideas"),onClick:t,"aria-expanded":e,isPressed:!!c}),renderContent:()=>p})},g=["core/avatar","core/image","core/post-featured-image"],h="has-",b="-gradient-background",w=(e,t,a)=>p(e,t,a,h,b),E=({attributes:{className:e},setAttributes:t,clientId:n})=>{const{gradients:l,gradientOptions:o}=(()=>{const e=(0,i.__experimentalUseMultipleOriginColorsAndGradients)(),t=(0,a.useMemo)((()=>e.gradients.map((e=>[...e.gradients||[]])).flat()));return{gradientOptions:e.gradients,gradients:t}})(),s=((e,t)=>{const a=new(d())(e),r=t.find((e=>a.contains(h+e.slug+b)));return void 0!==r?r.slug:""})(e,l),c=e=>{return t=((e,t)=>{const a=(0,i.getGradientSlugByValue)(t,e);return a?`var:preset|gradient|${a}`:e})(e,l),t&&t.startsWith("var:preset|gradient|")?t.replace("var:preset|gradient|",""):null;var t},p={label:(0,r.__)("Gradient Outline","x3p0-ideas"),gradientValue:s?(0,i.getGradientValueBySlug)(l,s):null,onGradientChange:a=>t({className:w(e,c(a),s)}),isShownByDefault:!0,disableCustomColors:!0,disableCustomGradients:!0,hasColorsOrGradients:!1,gradients:o};return(0,a.createElement)(i.__experimentalColorGradientSettingsDropdown,{settings:[p],panelId:n,__experimentalIsRenderedInSidebar:!0,__experimentalHasMultipleOrigins:!0})},k=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,a.createElement)("path",{d:"M324.758-294.578q13.934 0 23.684-9.68 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.653 23.615 9.653Zm0-152.153q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615t-9.777-23.684q-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.711t9.681 23.588q9.68 9.654 23.615 9.654Zm0-152.961q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.749-23.711-9.749-13.935 0-23.588 9.776-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.654 23.615 9.654Zm119.896 300.229h222.845v-55.96H444.654v55.96Zm0-152.961h222.845v-55.96H444.654v55.96Zm0-152.153h222.845v-55.96H444.654v55.96ZM215.448-147.271q-28.346 0-48.262-19.915-19.915-19.916-19.915-48.262v-529.104q0-28.346 19.915-48.262 19.916-19.915 48.262-19.915h529.104q28.346 0 48.262 19.915 19.915 19.916 19.915 48.262v529.104q0 28.346-19.915 48.262-19.916 19.915-48.262 19.915H215.448Zm.091-55.96h528.922q4.615 0 8.462-3.846 3.846-3.847 3.846-8.462v-528.922q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.922q0 4.615 3.846 8.462 3.847 3.846 8.462 3.846Zm-12.308-553.538v553.538-553.538Z"})),f=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,a.createElement)("path",{d:"M184.192-384.923v-36.923h353.847v36.923H184.192Zm0-153.846v-36.923h592v36.923h-592Z"})),y=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,a.createElement)("path",{d:"m499.269-560.154-33.308-33.308 34.731-84.653H379.654l-44.423-44.039h426.923v44.308H549.077l-49.808 117.692Zm272.923 424.77L454.5-453.846l-92.923 219.077h-48.539l107.885-252.654L127.077-780.5l26.461-25.962 644.616 644.616-25.962 26.462Z"})),C=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,a.createElement)("path",{d:"M215.539-148.078q-28.257 0-48.263-20.006-20.005-20.006-20.005-48.263v-528.114q0-28.257 20.005-48.263 20.006-20.005 48.263-20.005h528.922q28.257 0 48.263 20.005 20.005 20.006 20.005 48.263v251.692q-13.641-5.694-27.647-9.732-14.005-4.037-28.313-6.653v-235.307q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.114q0 4.616 3.846 8.462 3.847 3.847 8.462 3.847h239.094q2.29 15.307 6.527 29.196 4.237 13.889 10.532 26.764H215.539Zm-12.308-98.383v42.423-552.731 247.547-2.932 265.693Zm90.808-53.002h163.626q2.605-14.307 7.105-28.249 4.499-13.942 10.576-27.711H294.039v55.96Zm0-152.961h257.347q23.423-19.192 49.653-32.383 26.23-13.192 56.46-19.423v-4.154h-363.46v55.96Zm0-152.961h371.922v-55.96H294.039v55.96ZM717.631-69.809q-72.553 0-123.476-50.868-50.923-50.869-50.923-123.422 0-72.554 50.869-123.477 50.868-50.922 123.422-50.922 72.553 0 123.476 50.868 50.923 50.869 50.923 123.422 0 72.554-50.869 123.477-50.868 50.922-123.422 50.922Zm-16.938-58.268h34.576v-99.192h99.192v-33.769h-99.192v-99.192h-34.576v99.192H601.5v33.769h99.193v99.192Z"})),N=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,a.createElement)("path",{d:"M84.846-6.961v-111.921h790.308v111.92H84.846Zm467.038-450L449.499-559.346 301.192-410.038q-3.654 3.461-3.654 8.462 0 5 3.654 8.462l85.152 84.653q3.462 3.461 8.463 3.461 5 0 8.462-3.461l148.615-148.5Zm-62.347-142.115 102.077 102.269 187.731-187.615q3.462-3.462 3.462-8.751t-3.462-8.943l-84.999-84.999q-3.654-3.462-8.943-3.462-5.288 0-8.75 3.462L489.537-599.076Zm-59.691-20.076 181.537 181.536-168.077 168.192q-20.577 20.577-49.153 20.577-28.577 0-49.154-20.577l-4.962-4.962-37.423 36.578h-145.69l109.961-110.653-4.192-4.385q-20.577-20.384-20.789-49.173-.211-28.788 20.366-49.365l167.576-167.768Zm0 0 209.077-208.885q19.884-20.077 48-19.673 28.115.404 47.692 20.481l84.652 85.152q20.077 20.577 20.077 48.596 0 28.019-20.077 48.096L611.383-437.616 429.846-619.152Z"})),S=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},(0,a.createElement)("path",{d:"M216.27-772.116v-55.96h527.46v55.96H216.27ZM480.023-136.27q-110.192 0-186.972-76.758-76.781-76.757-76.781-186.949 0-110.192 76.758-186.972 76.757-76.781 186.949-76.781 110.192 0 186.972 76.758 76.781 76.757 76.781 186.949 0 110.192-76.758 186.972-76.757 76.781-186.949 76.781ZM480-203.73q81.635 0 138.953-57.317Q676.27-318.365 676.27-400t-57.317-138.953Q561.635-596.27 480-596.27t-138.953 57.317Q283.73-481.635 283.73-400t57.317 138.953Q398.365-203.73 480-203.73Z"})),q=["core/list"],I="has-marker-",A=[{value:"arrow",label:(0,r.__)("Arrow","x3p0-ideas")},{value:"dash",label:(0,r.__)("Dash","x3p0-ideas")},{value:"disc",label:(0,r.__)("Disc","x3p0-ideas")},{value:"circle",label:(0,r.__)("Circle","x3p0-ideas")},{value:"square",label:(0,r.__)("Square","x3p0-ideas")}],B=[{value:"decimal",label:(0,r.__)("Decimal","x3p0-ideas")},{value:"leading-zero",label:(0,r.__)("Leading Zero","x3p0-ideas")},{value:"upper-alpha",label:(0,r.__)("Alphabetical: Uppercase","x3p0-ideas")},{value:"lower-alpha",label:(0,r.__)("Alphabetical: Lowercase","x3p0-ideas")},{value:"upper-roman",label:(0,r.__)("Roman: Uppercase","x3p0-ideas")},{value:"lower-roman",label:(0,r.__)("Roman: Lowercase","x3p0-ideas")}],M=[...A,...B],T=(e,t,a)=>p(e,t,a,I),Z={value:"",label:(0,r.__)("Default","x3p0-ideas")},F=({attributes:{className:e,ordered:t},setAttributes:n})=>{const l=(0,a.useMemo)((()=>(e=>{const t=new(d())(e),a=M.find((e=>t.contains(I+e.value)));return void 0!==a?a.value:""})(e)),[e]),o=(0,a.useMemo)((()=>t?[Z,...B]:[Z,...A]),[t]);(0,a.useEffect)((()=>{var a;(l&&t&&(a=l,!B.find((e=>e.value===a)))||!t&&!(e=>A.find((t=>t.value===e)))(l))&&n({className:T(e,"",l)})}),[t]);const s=(0,a.createElement)(v.MenuGroup,{className:"x3p0-list-marker-selector",label:(0,r.__)("Select a list marker","x3p0-ideas")},o.map(((t,r)=>((t,r)=>(0,a.createElement)(v.MenuItem,{key:r,role:"menuitemradio",className:"x3p0-list-marker-selector__button",isSelected:l===t.value,isPressed:l===t.value,onClick:()=>n({className:T(e,t.value,l)})},((e,t)=>{const r=e.value?e.value:"default";return(0,a.createElement)(v.FlexItem,{key:`x3p0-marker-name-${t}`,className:"x3p0-list-marker-selector__content"},(0,a.createElement)("ul",{className:`x3p0-list-marker-selector__list has-marker-${r}`},(0,a.createElement)("li",null,e.label)))})(t,r)))(t,r))));return(0,a.createElement)(v.Dropdown,{className:"x3p0-list-marker-dropdown",contentClassName:"x3p0-list-marker-popover",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:t})=>(0,a.createElement)(v.ToolbarButton,{className:"x3p0-list-marker__button",icon:k,label:(0,r.__)("List Marker","x3p0-ideas"),onClick:t,"aria-expanded":e,isPressed:!!l}),renderContent:()=>s})},D=["core/separator"],H="has-icon-",O=[{value:"❦",gradient:""},{value:"🫠",gradient:"mohave"},{value:"🌼",gradient:"mohave"},{value:"☀️",gradient:"true-sunset"},{value:"🪶",gradient:"shy-rainbow"},{value:"🔥",gradient:"luminous-vivid-amber-to-luminous-vivid-orange"},{value:"🍃",gradient:"emerald"},{value:"☕",gradient:"oahu"},{value:"🍻",gradient:"happy-memories"},{value:"🪷",gradient:"blush-light-purple"},{value:"🎸",gradient:"blush-bordeaux"},{value:"✏️",gradient:"mohave"},{value:"🚀",gradient:"superman"},{value:"☘️",gradient:"emerald"},{value:"⭐",gradient:"luminous-dusk"},{value:"🌻",gradient:"true-sunset"},{value:"⛱️",gradient:"powerpuff"}],P=()=>Array.from((0,t.applyFilters)("x3p0.ideas.blockEdit.separatorIcons",new Set(O))),L=(e,t,a)=>p(e,t,a,H),G=(0,a.createElement)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(u.Path,{d:"M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"})),R=({attributes:{className:e},setAttributes:t})=>{const n=P(),l=(e=>{const t=new(d())(e),a=P().find((e=>t.contains(H+e.value)));return void 0!==a?a.value:""})(e),o=(0,a.createElement)(v.BaseControl,{className:"x3p0-sep-icons-picker",label:(0,r.__)("Icons","x3p0-ideas")},(0,a.createElement)("div",{className:"x3p0-sep-icons-picker__description"},(0,r.__)("Pick an icon to super-charge your separator. Need more icons?","x3p0-ideas")+" ",(0,a.createElement)("a",{href:"#",target:"_blank"},(0,r.__)("Learn how to add your own →","x3p0-ideas"))),(0,a.createElement)(v.__experimentalGrid,{className:"x3p0-sep-icons-picker__grid",columns:"6"},n.map(((r,n)=>((r,n)=>{var o;return(0,a.createElement)(v.Button,{key:n,isPressed:l===r.value,className:"x3p0-sep-icons-picker__button",onClick:()=>(a=>t({className:L(e,l===a.value?"":a.value,l),gradient:l!==a.value&&a?.gradient?a?.gradient:void 0}))(r)},null!==(o=r.label)&&void 0!==o?o:r.value)})(r,n)))));return(0,a.createElement)(v.Dropdown,{className:"x3p0-sep-icons-dropdown",contentClassName:"x3p0-sep-icons-popover",popoverProps:{headerTitle:(0,r.__)("Separator Icons","x3p0-ideas"),variant:"toolbar"},renderToggle:({isOpen:e,onToggle:t})=>(0,a.createElement)(v.ToolbarButton,{className:"x3p0-sep-icons-dropdown__button",icon:G,label:(0,r.__)("Separator Icon","x3p0-ideas"),onClick:t,"aria-expanded":e,isPressed:!!l}),renderContent:()=>o})},z=["core/heading","core/paragraph"],j="has-text-shadow-",$=[{value:"none",label:(0,r.__)("None","x3p0-ideas")},{value:"sm",label:(0,r.__)("Small","x3p0-ideas")},{value:"md",label:(0,r.__)("Medium","x3p0-ideas")},{value:"lg",label:(0,r.__)("Large","x3p0-ideas")}],V=()=>(0,t.applyFilters)("x3p0.ideas.blockEdit.textShadows",$),U=(e,t,a)=>p(e,t,a,j),W={key:"default",name:(0,r.__)("Default","x3p0-ideas"),value:""},Q=({attributes:{className:e},setAttributes:t})=>{const n=(0,a.useMemo)((()=>(e=>{const t=new(d())(e),a=V().find((e=>t.contains(j+e.value)));return void 0!==a?a.value:""})(e)),[e]),l=[W,...V().map((e=>({key:e.value,name:e.label,value:e.value})))];return(0,a.createElement)("div",{className:"x3p0-text-shadow"},(0,a.createElement)(v.CustomSelectControl,{label:(0,r.__)("Text Shadow","x3p0-ideas"),options:l,value:l.find((e=>e.value===n)),onChange:({selectedItem:a})=>t({className:U(e,a.value,n)}),size:"__unstable-large",__nextHasNoMarginBottom:!0,__nextUnconstrainedWidth:!0}))},J={"color-variations":e=>t=>n.includes(t.name)?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(e,t),(0,a.createElement)(i.BlockControls,{group:"other"},(0,a.createElement)(x,{attributes:t.attributes,setAttributes:t.setAttributes}))):(0,a.createElement)(e,t),"gradient-background":e=>t=>g.includes(t.name)?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(e,t),(0,a.createElement)(i.InspectorControls,{group:"color"},(0,a.createElement)(E,{attributes:t.attributes,setAttributes:t.setAttributes,clientId:t.clientId}))):(0,a.createElement)(e,t),"list-markers":e=>t=>q.includes(t.name)?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(e,t),(0,a.createElement)(i.BlockControls,{group:"other"},(0,a.createElement)(F,{attributes:t.attributes,setAttributes:t.setAttributes}))):(0,a.createElement)(e,t),"separator-icons":e=>t=>D.includes(t.name)?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(e,t),(0,a.createElement)(i.BlockControls,{group:"other"},(0,a.createElement)(R,{attributes:t.attributes,setAttributes:t.setAttributes}))):(0,a.createElement)(e,t),"text-shadow":e=>t=>z.includes(t.name)?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(e,t),(0,a.createElement)(i.InspectorControls,{group:"typography"},(0,a.createElement)(Q,{attributes:t.attributes,setAttributes:t.setAttributes}))):(0,a.createElement)(e,t)};Object.keys(J).forEach((e=>(0,t.addFilter)("editor.BlockEdit",`x3p0/ideas/${e}`,J[e])));const K={"core/archives":{horizontal:(0,r.__)("Horizontal","x3p0-ideas")},"core/button":{"hand-drawn":(0,r.__)("Hand Drawn","x3p0-ideas")},"core/categories":{horizontal:(0,r.__)("Horizontal","x3p0-ideas")},"core/columns":{"reverse-stack":(0,r.__)("Reverse Mobile Stack","x3p0-ideas")},"core/comment-author-name":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/comment-date":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/comment-edit-link":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/comment-reply-link":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/cover":{"polygon-slant-down-sm":(0,r.__)("Slant Down: Small","x3p0-ideas"),"polygon-slant-down-md":(0,r.__)("Slant Down: Medium","x3p0-ideas"),"polygon-slant-up-sm":(0,r.__)("Slant Up: Small","x3p0-ideas"),"polygon-slant-up-md":(0,r.__)("Slant Up: Medium","x3p0-ideas"),stretch:(0,r.__)("Stretch","x3p0-ideas")},"core/footnotes":{pull:(0,r.__)("Pull","x3p0-ideas")},"core/gallery":{classic:(0,r.__)("Classic","x3p0-ideas")},"core/heading":{"clip-text":(0,r.__)("Clip Text","x3p0-ideas"),"text-wrap-balance":(0,r.__)("Wrap: Balance","x3p0-ideas")},"core/image":{borderless:(0,r.__)("Borderless","x3p0-ideas"),"hand-drawn":(0,r.__)("Hand-Drawn","x3p0-ideas"),polaroid:(0,r.__)("Polaroid","x3p0-ideas"),tape:(0,r.__)("Tape","x3p0-ideas"),"tape-corners":(0,r.__)("Tape: Corners","x3p0-ideas")},"core/list":{"gap-snug":(0,r.__)("Gap: Snug","x3p0-ideas"),"gap-normal":(0,r.__)("Gap: Normal","x3p0-ideas"),"gap-relaxed":(0,r.__)("Gap: Relaxed","x3p0-ideas"),"gap-loose":(0,r.__)("Gap: Loose","x3p0-ideas")},"core/loginout":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/paragraph":{indent:(0,r.__)("Indent","x3p0-ideas"),intro:(0,r.__)("Intro","x3p0-ideas"),"lead-in":(0,r.__)("Lead-in","x3p0-ideas"),lede:(0,r.__)("Lede","x3p0-ideas")},"core/post-author-name":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/post-comments-count":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/post-comments-form":{icons:(0,r.__)("Icons","x3p0-ideas")},"core/post-comments-link":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/post-date":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/post-template":{flex:(0,r.__)("Flexible","x3p0-ideas"),"featured-col-span-all":(0,r.__)("Featured: Full Width","x3p0-ideas")},"core/post-terms":{button:(0,r.__)("Button","x3p0-ideas"),icon:(0,r.__)("Icon","x3p0-ideas")},"core/post-time-to-read":{icon:(0,r.__)("Icon","x3p0-ideas")},"core/pullquote":{"hand-drawn":(0,r.__)("Hand Drawn","x3p0-ideas"),"mark-top":(0,r.__)("Mark: Top","x3p0-ideas")},"core/search":{icon:(0,r.__)("Icon","x3p0-ideas"),sm:(0,r.__)("Small","x3p0-ideas")},"core/separator":{dashed:(0,r.__)("Dashed","x3p0-ideas"),dotted:(0,r.__)("Dotted","x3p0-ideas"),double:(0,r.__)("Double","x3p0-ideas"),"hand-drawn":(0,r.__)("Hand Drawn","x3p0-ideas")},"core/social-links":{"hand-drawn":(0,r.__)("Hand Drawn","x3p0-ideas"),outline:(0,r.__)("Outline","x3p0-ideas")},"core/site-title":{normalize:(0,r.__)("Normalize","x3p0-ideas")},"core/table-of-contents":{chapters:(0,r.__)("Chapters","x3p0-ideas"),"chapters-and-subs":(0,r.__)("Chapters With Sub-headings","x3p0-ideas"),"marker-unordered":(0,r.__)("Unordered","x3p0-ideas"),pull:(0,r.__)("Pull","x3p0-ideas")},"core/tag-cloud":{flat:(0,r.__)("Flat","x3p0-ideas")}},X=window.wp.domReady;var Y=e.n(X);const ee=window.wp.blocks;Y()((()=>{(0,ee.unregisterBlockStyle)("core/separator","dots"),Object.keys(K).forEach((e=>Object.keys(K[e]).forEach((t=>(0,ee.registerBlockStyle)(e,{name:t,label:K[e][t]})))))})),(0,ee.registerBlockVariation)("core/spacer",{name:"x3p0/theme-spacer",title:(0,r.__)("Spacer","x3p0-ideas"),isDefault:!0,keywords:["space","spacer","spacing"],attributes:{height:"var:preset|spacing|plus-3"},isActive:e=>e.height.includes("var:preset|spacing|")});const te=window.wp.richText,ae="x3p0/abbr",re={name:ae,title:(0,r.__)("Abbreviation","x3p0-ideas"),tagName:"abbr",className:null,edit:function({isActive:e,onChange:t,value:n,contentRef:l}){const[o,s]=(0,a.useState)(!1),c=()=>s((e=>!e));return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.RichTextToolbarButton,{icon:f,title:(0,r.__)("Abbreviation","x3p0-ideas"),isActive:e,onClick:()=>e?t((0,te.removeFormat)(n,ae)):c()}),o&&(0,a.createElement)(le,{value:n,onChange:t,onClose:c,contentRef:l}))}},ne=re;function le({value:e,contentRef:t,onChange:n,onClose:l}){const o=(0,te.useAnchor)({editableContentElement:t.current,settings:re}),[s,i]=(0,a.useState)(""),c=(0,a.createElement)(v.TextControl,{label:(0,r.__)("Add title for abbreviation","x3p0-ideas"),value:s,onChange:e=>i(e),help:(0,r.__)("Expand on the definition for the abbreviation when a full description is not present in the content.","x3p0-ideas")}),d=(0,a.createElement)("form",{className:"x3p0-format-abbr-popover__form",onSubmit:t=>{t.preventDefault(),n((0,te.applyFormat)(e,{type:ae,attributes:{title:s}})),l()}},c);return(0,a.createElement)(v.Popover,{className:"x3p0-format-abbr-popover",anchor:o,placement:"top",onClose:l,variant:"toolbar"},d)}const oe="x3p0/del",se={name:oe,title:(0,r.__)("Delete","x3p0-ideas"),tagName:"del",className:null,edit:({isActive:e,onChange:t,value:n})=>(0,a.createElement)(i.RichTextToolbarButton,{icon:y,title:(0,r.__)("Delete","x3p0-ideas"),isActive:e,onClick:()=>t((0,te.toggleFormat)(n,{type:oe}))})},ie="x3p0/ins",ce={name:ie,title:(0,r.__)("Insert","x3p0-ideas"),tagName:"ins",className:null,edit:({isActive:e,onChange:t,value:n})=>(0,a.createElement)(i.RichTextToolbarButton,{icon:C,title:(0,r.__)("Insert","x3p0-ideas"),isActive:e,onClick:()=>t((0,te.toggleFormat)(n,{type:ie}))})},de="x3p0/mark",pe={name:de,title:(0,r.__)("Mark","x3p0-ideas"),tagName:"mark",className:null,edit:({isActive:e,onChange:t,value:n})=>(0,a.createElement)(i.RichTextToolbarButton,{icon:N,title:(0,r.__)("Mark","x3p0-ideas"),isActive:e,onClick:()=>t((0,te.toggleFormat)(n,{type:de}))})},me="x3p0/overline";[ne,se,ce,pe,{name:me,title:(0,r.__)("Overline","x3p0-ideas"),tagName:"span",className:"has-overline",edit:({isActive:e,onChange:t,value:n})=>(0,a.createElement)(i.RichTextToolbarButton,{icon:S,title:(0,r.__)("Overline","x3p0-ideas"),isActive:e,onClick:()=>t((0,te.toggleFormat)(n,{type:me}))})}].forEach((({name:e,...t})=>(0,te.registerFormatType)(e,t)))})();