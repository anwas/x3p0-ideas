(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var i in a)e.o(a,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:a[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,a=window.wp.i18n,i={name:"x3p0/comment",label:(0,a.__)("Comment Data","x3p0-ideas"),getValues({bindings:e}){const t={parentLink:(0,a.__)("In reply to Comment Author","x3p0-ideas")},i={};for(const[a,s]of Object.entries(e)){const e=s.args?.key||a;i[a]=t?.[e]||e}return i},canUserEditValue:()=>!1},s={name:"x3p0/post",label:(0,a.__)("Post Data","x3p0-ideas"),getValues({bindings:e}){const t={readingTime:(0,a.sprintf)((0,a.__)("%d Minutes","x3p0-ideas"),0)},i={};for(const[a,s]of Object.entries(e)){const e=s.args?.key||a;i[a]=t?.[e]||e}return i},canUserEditValue:()=>!1},n=window.wp.coreData,r={name:"x3p0/theme",label:(0,a.__)("Theme Data","x3p0-ideas"),getValues({select:e,bindings:t}){const i=e(n.store).getCurrentTheme(),s={helloDolly:(0,a.__)("🎺 🎶...","x3p0-ideas"),link:`<a href="${i.theme_uri.rendered}" class="theme-name theme-name--link">${i.name.rendered}</a>`,name:i.name.rendered,paginationLabel:(0,a.sprintf)((0,a.__)("Page %1$s / %2$s:","x3p0-ideas"),3,7),superpower:(0,a.__)("Powered by WordPress, crazy ideas, and passion.","x3p0-ideas"),url:i.theme_uri.rendered},r={};for(const[e,a]of Object.entries(t)){const t=a.args?.key||e;r[e]=s?.[t]||t}return r},canUserEditValue:()=>!1};(0,t.registerBlockBindingsSource)(i),(0,t.registerBlockBindingsSource)(s),(0,t.registerBlockBindingsSource)(r);const o=window.wp.hooks;(0,o.addFilter)("editor.PostFeaturedImage.imageSize","x3p0/ideas/featured-image-size",(()=>"x3p0-wide"));const l=window.wp.element,c=window.wp.blockEditor,p=window.wp.tokenList;var d=e.n(p);const m=(e,t="",a="",i="",s="")=>{const n=new(d())(e);return a&&n.remove(i+a+s),t&&n.add(i+t+s),n.value},h=["core/avatar","core/image","core/post-featured-image"],g="has-",v="-gradient-background",x=(e,t,a)=>m(e,t,a,g,v),u=window.ReactJSXRuntime,w=({attributes:{className:e},setAttributes:t,clientId:i})=>{const{gradients:s,gradientOptions:n}=(()=>{const e=(0,c.__experimentalUseMultipleOriginColorsAndGradients)(),t=(0,l.useMemo)((()=>e.gradients.map((e=>[...e.gradients||[]])).flat()));return{gradientOptions:e.gradients,gradients:t}})(),r=((e,t)=>{const a=new(d())(e),i=t.find((e=>a.contains(g+e.slug+v)));return void 0!==i?i.slug:""})(e,s),o=e=>{return t=((e,t)=>{const a=(0,c.getGradientSlugByValue)(t,e);return a?`var:preset|gradient|${a}`:e})(e,s),t&&t.startsWith("var:preset|gradient|")?t.replace("var:preset|gradient|",""):null;var t},p={label:(0,a.__)("Gradient Outline","x3p0-ideas"),gradientValue:r?(0,c.getGradientValueBySlug)(s,r):null,onGradientChange:a=>t({className:x(e,o(a),r)}),isShownByDefault:!0,disableCustomColors:!0,disableCustomGradients:!0,hasColorsOrGradients:!1,gradients:n};return(0,u.jsx)(c.__experimentalColorGradientSettingsDropdown,{settings:[p],panelId:i,__experimentalIsRenderedInSidebar:!0,__experimentalHasMultipleOrigins:!0})},_=(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",children:(0,u.jsx)("path",{d:"M324.758-294.578q13.934 0 23.684-9.68 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.653 23.615 9.653Zm0-152.153q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615t-9.777-23.684q-9.777-9.75-23.711-9.75-13.935 0-23.588 9.777-9.654 9.777-9.654 23.711t9.681 23.588q9.68 9.654 23.615 9.654Zm0-152.961q13.934 0 23.684-9.681 9.75-9.681 9.75-23.615 0-13.935-9.777-23.685-9.777-9.749-23.711-9.749-13.935 0-23.588 9.776-9.654 9.777-9.654 23.712 0 13.934 9.681 23.588 9.68 9.654 23.615 9.654Zm119.896 300.229h222.845v-55.96H444.654v55.96Zm0-152.961h222.845v-55.96H444.654v55.96Zm0-152.153h222.845v-55.96H444.654v55.96ZM215.448-147.271q-28.346 0-48.262-19.915-19.915-19.916-19.915-48.262v-529.104q0-28.346 19.915-48.262 19.916-19.915 48.262-19.915h529.104q28.346 0 48.262 19.915 19.915 19.916 19.915 48.262v529.104q0 28.346-19.915 48.262-19.916 19.915-48.262 19.915H215.448Zm.091-55.96h528.922q4.615 0 8.462-3.846 3.846-3.847 3.846-8.462v-528.922q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.922q0 4.615 3.846 8.462 3.847 3.846 8.462 3.846Zm-12.308-553.538v553.538-553.538Z"})}),b=(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",children:(0,u.jsx)("path",{d:"M184.192-384.923v-36.923h353.847v36.923H184.192Zm0-153.846v-36.923h592v36.923h-592Z"})}),k=(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",children:(0,u.jsx)("path",{d:"m422-232 207-248H469l29-227-185 267h139l-30 208Zm-78.92 129.69 40-277.69h-185l329.61-475.77h49.23L537.31-540H757.3L392.31-102.31h-49.23ZM471-470Z"})}),y=(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",children:(0,u.jsx)("path",{d:"M554.769-577.538v-33.539q32.231-17.038 69.415-25.442 37.183-8.404 75.816-8.404 21.417 0 41.805 2.457 20.387 2.458 41.58 7.856v33.841q-20.423-6.192-40.209-8.404-19.786-2.212-43.099-2.212-38.661 0-75.984 8.424-37.324 8.423-69.324 25.423Zm0 218.461v-35.077q30.693-17.038 69.03-25.75 38.338-8.711 76.201-8.711 21.417 0 41.805 2.73 20.387 2.731 41.58 8.193v33.846q-20.443-6.192-40.223-8.712-19.779-2.519-43.1-2.519-38.682 0-76.024 9.385-37.342 9.384-69.269 26.615Zm0-108.461v-35.077q32.231-17.039 69.415-25.443 37.183-8.404 75.816-8.404 21.417 0 41.805 2.423 20.387 2.424 41.58 7.885v33.846q-20.443-6.192-40.223-8.711-19.779-2.519-43.1-2.519-38.682 0-76.024 9.5t-69.269 26.5ZM262.001-319.692q52.23 0 101.73 12.038 49.5 12.039 98.115 39.192v-388.769q-42.692-30.923-95.245-46.692-52.553-15.769-104.834-15.769-35.407 0-62.323 4.307-26.916 4.308-59.444 16.079-9.231 3.077-13.077 8.846-3.846 5.77-3.846 12.693v356.844q0 10.769 7.692 15.769T147.692-304q21.193-7.385 49.81-11.538 28.617-4.154 64.499-4.154Zm236.768 51.23q48.694-27.153 97.885-39.192 49.191-12.038 101.25-12.038 35.75 0 64.481 4.154 28.73 4.153 49.923 11.538 9.231 3.846 16.923-1.154 7.692-5 7.692-15.769v-356.923q0-6.923-3.846-12.308-3.846-5.384-13.077-9.231-32.5-11.076-59.425-15.692-26.926-4.615-62.421-4.615-52.385 0-104.539 15.769-52.153 15.769-94.846 46.825v388.636ZM480-214.769q-48.654-32.654-104.038-50.327-55.385-17.673-114.116-17.673-29.97 0-58.87 4.865-28.899 4.866-56.683 15.401-21.909 8.465-41.024-5.429-19.115-13.893-19.115-38.375v-376.77q0-14.962 8.115-27.404t22.192-17.827q34.579-14.423 71.44-21.365 36.861-6.943 73.945-6.943 58.387 0 113.905 16.981T480-690.462q48.731-32.192 104.249-49.173 55.518-16.981 113.905-16.981 37.084 0 73.945 6.943 36.861 6.942 71.44 21.365 14.077 5.385 22.192 17.827 8.115 12.442 8.115 27.404v376.77q0 24.482-20.653 37.606-20.654 13.124-44.101 4.659-27.015-9.765-54.578-14.246-27.563-4.481-56.36-4.481-58.731 0-114.116 17.673Q528.654-247.423 480-214.769ZM292.461-499.385Z"})}),j=(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",children:(0,u.jsx)("path",{d:"M400-320h160q17 0 28.5-11.5T600-360v-80h-80v40h-80v-160h80v40h80v-80q0-17-11.5-28.5T560-640H400q-17 0-28.5 11.5T360-600v240q0 17 11.5 28.5T400-320Zm80 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"})}),q=(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",children:(0,u.jsx)("path",{d:"m499.269-560.154-33.308-33.308 34.731-84.653H379.654l-44.423-44.039h426.923v44.308H549.077l-49.808 117.692Zm272.923 424.77L454.5-453.846l-92.923 219.077h-48.539l107.885-252.654L127.077-780.5l26.461-25.962 644.616 644.616-25.962 26.462Z"})}),Z=(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",children:(0,u.jsx)("path",{d:"M215.539-148.078q-28.257 0-48.263-20.006-20.005-20.006-20.005-48.263v-528.114q0-28.257 20.005-48.263 20.006-20.005 48.263-20.005h528.922q28.257 0 48.263 20.005 20.005 20.006 20.005 48.263v251.692q-13.641-5.694-27.647-9.732-14.005-4.037-28.313-6.653v-235.307q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H215.539q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v528.114q0 4.616 3.846 8.462 3.847 3.847 8.462 3.847h239.094q2.29 15.307 6.527 29.196 4.237 13.889 10.532 26.764H215.539Zm-12.308-98.383v42.423-552.731 247.547-2.932 265.693Zm90.808-53.002h163.626q2.605-14.307 7.105-28.249 4.499-13.942 10.576-27.711H294.039v55.96Zm0-152.961h257.347q23.423-19.192 49.653-32.383 26.23-13.192 56.46-19.423v-4.154h-363.46v55.96Zm0-152.961h371.922v-55.96H294.039v55.96ZM717.631-69.809q-72.553 0-123.476-50.868-50.923-50.869-50.923-123.422 0-72.554 50.869-123.477 50.868-50.922 123.422-50.922 72.553 0 123.476 50.868 50.923 50.869 50.923 123.422 0 72.554-50.869 123.477-50.868 50.922-123.422 50.922Zm-16.938-58.268h34.576v-99.192h99.192v-33.769h-99.192v-99.192h-34.576v99.192H601.5v33.769h99.193v99.192Z"})}),C=(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",children:(0,u.jsx)("path",{d:"m120-200 180-280-180-280h522l198 280-198 280H120Z"})}),f=(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",children:(0,u.jsx)("path",{d:"M84.846-6.961v-111.921h790.308v111.92H84.846Zm467.038-450L449.499-559.346 301.192-410.038q-3.654 3.461-3.654 8.462 0 5 3.654 8.462l85.152 84.653q3.462 3.461 8.463 3.461 5 0 8.462-3.461l148.615-148.5Zm-62.347-142.115 102.077 102.269 187.731-187.615q3.462-3.462 3.462-8.751t-3.462-8.943l-84.999-84.999q-3.654-3.462-8.943-3.462-5.288 0-8.75 3.462L489.537-599.076Zm-59.691-20.076 181.537 181.536-168.077 168.192q-20.577 20.577-49.153 20.577-28.577 0-49.154-20.577l-4.962-4.962-37.423 36.578h-145.69l109.961-110.653-4.192-4.385q-20.577-20.384-20.789-49.173-.211-28.788 20.366-49.365l167.576-167.768Zm0 0 209.077-208.885q19.884-20.077 48-19.673 28.115.404 47.692 20.481l84.652 85.152q20.077 20.577 20.077 48.596 0 28.019-20.077 48.096L611.383-437.616 429.846-619.152Z"})}),T=(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",children:(0,u.jsx)("path",{d:"M216.27-772.116v-55.96h527.46v55.96H216.27ZM480.023-136.27q-110.192 0-186.972-76.758-76.781-76.757-76.781-186.949 0-110.192 76.758-186.972 76.757-76.781 186.949-76.781 110.192 0 186.972 76.758 76.781 76.757 76.781 186.949 0 110.192-76.758 186.972-76.757 76.781-186.949 76.781ZM480-203.73q81.635 0 138.953-57.317Q676.27-318.365 676.27-400t-57.317-138.953Q561.635-596.27 480-596.27t-138.953 57.317Q283.73-481.635 283.73-400t57.317 138.953Q398.365-203.73 480-203.73Z"})}),B=(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",children:(0,u.jsx)("path",{d:"m56.35-214.04 208.34-530.31h62.77l208.35 530.31H468.5l-53.96-143.04H176.27l-54.96 143.04H56.35Zm139.49-198.34h198.12l-95.88-252.01h-4.77l-97.47 252.01Zm412.35-39.74v-55.96h295.96v55.96H608.19Z"})}),A=(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",children:(0,u.jsx)("path",{d:"M57.15-214.04 265.5-744.35h62.77l208.34 530.31h-67.3l-54.22-143.04H177.08l-54.97 143.04H57.15Zm139.5-198.34h198.12L298.8-664.39h-4.68l-97.47 252.01ZM729-333.73v-118.39H610.62v-55.96H729v-118.38h55.96v118.38h118.39v55.96H784.96v118.39H729Z"})}),H=(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",children:(0,u.jsx)("path",{d:"M370.116-847.578v-55.96h219.768v55.96H370.116Zm82 436.654h55.96v-218.96h-55.96v218.96Zm28.012 302.846q-68.718 0-129.327-26.212-60.608-26.211-105.843-71.534-45.236-45.323-71.461-105.903-26.226-60.58-26.226-129.216 0-68.481 26.226-129.061 26.225-60.58 71.461-105.845 45.235-45.265 105.791-71.477Q411.304-773.537 480-773.537q61.384 0 115.019 20.635 53.635 20.634 100.099 57.634l48.15-48.23 39.422 39.422-48.23 48.23q36.692 45.577 57.481 99.615 20.788 54.039 20.788 115.423 0 68.651-26.214 129.167-26.214 60.515-71.429 105.79-45.214 45.275-105.727 71.524-60.513 26.249-129.231 26.249Zm.03-55.96q114.727 0 195.669-81.1 80.942-81.101 80.942-195.827 0-114.727-81.1-195.67-81.1-80.942-195.827-80.942t-195.669 81.1q-80.942 81.1-80.942 195.827t81.1 195.669q81.1 80.943 195.827 80.943ZM480-440.808Z"})}),N=(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",children:(0,u.jsx)("path",{d:"M448.89-136.46V-350.5h55.96v78.89h319.19v55.96H504.85v79.19h-55.96Zm-313.24-79.19v-55.96h217.27v55.96H135.65Zm161.31-158.08v-78.69H135.65v-55.96h161.31v-79.2h55.96v213.85h-55.96Zm151.93-78.69v-55.96h375.15v55.96H448.89Zm157.88-158.39v-214.04h55.96v79.2h161.31v55.96H662.73v78.88h-55.96Zm-471.12-78.88v-55.96h375.16v55.96H135.65Z"})}),M=["core/archives","core/categories","core/list","core/page-list"],S="has-marker-",F=[{value:"disc",label:(0,a.__)("Disc","x3p0-ideas")},{value:"circle",label:(0,a.__)("Circle","x3p0-ideas")},{value:"square",label:(0,a.__)("Square","x3p0-ideas")},{value:"none",label:(0,a.__)("None","x3p0-ideas")}],V=[{value:"decimal",label:(0,a.__)("Decimal","x3p0-ideas")},{value:"leading-zero",label:(0,a.__)("Leading Zero","x3p0-ideas")},{value:"upper-alpha",label:(0,a.__)("Alphabetical: Uppercase","x3p0-ideas")},{value:"lower-alpha",label:(0,a.__)("Alphabetical: Lowercase","x3p0-ideas")},{value:"upper-roman",label:(0,a.__)("Roman: Uppercase","x3p0-ideas")},{value:"lower-roman",label:(0,a.__)("Roman: Lowercase","x3p0-ideas")},{value:"none",label:(0,a.__)("None","x3p0-ideas")}],D=[...F,...V],L=(e,t,a)=>m(e,t,a,S),R=window.wp.components,P={value:"",label:(0,a.__)("Default","x3p0-ideas")},O=({attributes:{className:e,ordered:t},setAttributes:i})=>{const s=(0,l.useMemo)((()=>(e=>{const t=new(d())(e),a=D.find((e=>t.contains(S+e.value)));return void 0!==a?a.value:""})(e)),[e]),n=(0,l.useMemo)((()=>t?[P,...V]:[P,...F]),[t]);(0,l.useEffect)((()=>{var a;(s&&t&&(a=s,!V.find((e=>e.value===a)))||!t&&!(e=>F.find((t=>t.value===e)))(s))&&i({className:L(e,"",s)})}),[t]);const r=(e,t)=>{const a=e.value?e.value:"default";return(0,u.jsx)(R.FlexItem,{className:"x3p0-list-marker-selector__content",children:(0,u.jsx)("ul",{className:`x3p0-list-marker-selector__list has-marker-${a}`,children:(0,u.jsx)("li",{children:e.label})})},`x3p0-marker-name-${t}`)},o=(0,u.jsx)(R.MenuGroup,{className:"x3p0-list-marker-selector",label:(0,a.__)("Select a list marker","x3p0-ideas"),children:n.map(((t,a)=>((t,a)=>(0,u.jsx)(R.MenuItem,{role:"menuitemradio",className:"x3p0-list-marker-selector__button",isSelected:s===t.value,isPressed:s===t.value,onClick:()=>i({className:L(e,t.value,s)}),children:r(t,a)},a))(t,a)))});return(0,u.jsx)(R.Dropdown,{className:"x3p0-list-marker-dropdown",contentClassName:"x3p0-list-marker-popover",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:t})=>(0,u.jsx)(R.ToolbarButton,{className:"x3p0-list-marker__button",icon:_,label:(0,a.__)("List Marker","x3p0-ideas"),onClick:t,"aria-expanded":e,isPressed:!!s}),renderContent:()=>o})};(0,o.addFilter)("editor.BlockEdit","x3p0-ideas-gradient-background",(e=>t=>h.includes(t.name)?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(e,{...t}),(0,u.jsx)(c.InspectorControls,{group:"color",children:(0,u.jsx)(w,{attributes:t.attributes,setAttributes:t.setAttributes,clientId:t.clientId})})]}):(0,u.jsx)(e,{...t}))),(0,o.addFilter)("editor.BlockEdit","x3p0-ideas-list-marker",(e=>t=>M.includes(t.name)?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(e,{...t}),(0,u.jsx)(c.BlockControls,{group:"other",children:(0,u.jsx)(O,{attributes:t.attributes,setAttributes:t.setAttributes})})]}):(0,u.jsx)(e,{...t})));const I=window.wp.domReady;var G=e.n(I);G()((()=>{(0,t.unregisterBlockStyle)("core/separator","dots"),(0,t.unregisterBlockStyle)("core/social-links","pill-shape"),(0,t.unregisterBlockStyle)("core/tag-cloud","outline")}));const z=window.wp.primitives,E=(0,u.jsx)(z.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)(z.Path,{d:"M18 4H6c-1.1 0-2 .9-2 2v12.9c0 .6.5 1.1 1.1 1.1.3 0 .5-.1.8-.3L8.5 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H7.9l-2.4 2.4V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v9z"})}),$={block:"core/paragraph",variation:{name:"x3p0/comment-parent-link",title:(0,a.__)("Comment Parent Link","x3p0-ideas"),description:(0,a.__)("Displays a link to the comment parent.","x3p0-ideas"),category:"widgets",keywords:["comment","parent"],icon:E,scope:[],ancestor:"core/comment-template",attributes:{metadata:{bindings:{content:{source:"x3p0/comment",args:{key:"parentLink"}}}},placeholder:(0,a.__)("In reply to Comment Author","x3p0-ideas")},isActive:["metadata.bindings.content.source","metadata.bindings.content.args.key"]}},Q={block:"core/paragraph",variation:{name:"x3p0/pagination-label",title:(0,a.__)("Pagination Label","x3p0-ideas"),description:(0,a.__)("Displays the pagination current and total pages.","x3p0-ideas"),category:"theme",icon:C,scope:["inserter"],attributes:{metadata:{bindings:{content:{source:"x3p0/theme",args:{key:"paginationLabel"}}}},placeholder:(0,a.sprintf)((0,a.__)("Page %1$s / %2$s:","x3p0-ideas"),3,7),className:"pagination-label"},isActive:["metadata.bindings.content.source","metadata.bindings.content.args.key"]}},U=(0,u.jsx)(z.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,u.jsx)(z.Path,{d:"m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"})}),W={block:"core/post-terms",variation:{name:"x3p0/post-format",title:(0,a.__)("Format","x3p0-ideas"),icon:U,description:(0,a.__)("Displays the assigned post format.","x3p0-ideas"),scope:["block","inserter","transform"],attributes:{term:"post_format"},isActive:["term"]}},J={block:"core/paragraph",variation:{name:"x3p0/post-reading-time",title:(0,a.__)("Reading Time","x3p0-ideas"),description:(0,a.__)("Displays the estimated time to read the post.","x3p0-ideas"),category:"theme",keywords:["time","read","reading"],icon:H,scope:["inserter"],attributes:{metadata:{bindings:{content:{source:"x3p0/post",args:{key:"readingTime"}}}},placeholder:(0,a.__)("Reading Time","x3p0-ideas")},example:{},isActive:["metadata.bindings.content.source","metadata.bindings.content.args.key"]}},X={block:"core/paragraph",variation:{name:"x3p0/site-copyright",title:(0,a.__)("Site Copyright","x3p0-ideas"),description:(0,a.__)("Displays the site copyright date.","x3p0-ideas"),category:"widgets",keywords:["copyright"],icon:j,scope:["inserter"],attributes:{metadata:{bindings:{content:{source:"x3p0/site",args:{key:"copyright"}}}},content:(0,a.sprintf)(
// Translators: %s is the copyright year.
// Translators: %s is the copyright year.
(0,a.__)("Copyright © %s","x3p0-ideas"),(new Date).getFullYear())},isActive:["metadata.bindings.content.source","metadata.bindings.content.args.key"]}},Y={block:"core/paragraph",variation:{name:"x3p0/superpower",title:(0,a.__)("Superpower","x3p0-ideas"),description:(0,a.__)('Displays a random "powered by" message on your site.',"x3p0-ideas"),category:"widgets",keywords:["superpower","footer"],icon:k,scope:["inserter"],attributes:{metadata:{bindings:{content:{source:"x3p0/theme",args:{key:"superpower"}}}},content:(0,a.__)("Powered by WordPress, crazy ideas, and passion.","x3p0-ideas")},isActive:["metadata.bindings.content.source","metadata.bindings.content.args.key"]}},K=(0,u.jsx)(z.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,u.jsx)(z.Path,{d:"M4 20h8v-1.5H4V20zM18.9 3.5c-.6-.6-1.5-.6-2.1 0l-7.2 7.2c-.4-.1-.7 0-1.1.1-.5.2-1.5.7-1.9 2.2-.4 1.7-.8 2.2-1.1 2.7-.1.1-.2.3-.3.4l-.6 1.1H6c2 0 3.4-.4 4.7-1.4.8-.6 1.2-1.4 1.3-2.3 0-.3 0-.5-.1-.7L19 5.7c.5-.6.5-1.6-.1-2.2zM9.7 14.7c-.7.5-1.5.8-2.4 1 .2-.5.5-1.2.8-2.3.2-.6.4-1 .8-1.1.5-.1 1 .1 1.3.3.2.2.3.5.2.8 0 .3-.1.9-.7 1.3z"})}),ee={block:"core/paragraph",variation:{name:"x3p0/theme-link",title:(0,a.__)("Theme Link","x3p0-ideas"),description:(0,a.__)("Displays a link to the active theme's homepage.","x3p0-ideas"),category:"widgets",keywords:["theme","link"],icon:K,scope:["inserter"],attributes:{metadata:{bindings:{content:{source:"x3p0/theme",args:{key:"link"}}}}},isActive:["metadata.bindings.content.source","metadata.bindings.content.args.key"]}},te={block:"core/spacer",variation:{name:"x3p0/theme-spacer",title:(0,a.__)("Spacer","x3p0-ideas"),isDefault:!0,keywords:["space","spacer","spacing"],isActive:["height"],attributes:{height:"var:preset|spacing|plus-8"}}};(0,t.registerBlockVariation)($.block,$.variation),(0,t.registerBlockVariation)(Q.block,Q.variation),(0,t.registerBlockVariation)(W.block,W.variation),(0,t.registerBlockVariation)(J.block,J.variation),(0,t.registerBlockVariation)(X.block,X.variation),(0,t.registerBlockVariation)(Y.block,Y.variation),(0,t.registerBlockVariation)(ee.block,ee.variation),(0,t.registerBlockVariation)(te.block,te.variation);const ae=window.wp.richText,ie="x3p0/abbr",se={name:ie,title:(0,a.__)("Abbreviation","x3p0-ideas"),tagName:"abbr",className:null,edit:function({isActive:e,onChange:t,value:i,contentRef:s}){const[n,r]=(0,l.useState)(!1),o=()=>r((e=>!e));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.RichTextToolbarButton,{icon:b,title:(0,a.__)("Abbreviation","x3p0-ideas"),isActive:e,onClick:()=>e?t((0,ae.removeFormat)(i,ie)):o()}),n&&(0,u.jsx)(re,{value:i,onChange:t,onClose:o,contentRef:s})]})}},ne=se;function re({value:e,contentRef:t,onChange:i,onClose:s}){const n=(0,ae.useAnchor)({editableContentElement:t.current,settings:se}),[r,o]=(0,l.useState)(""),c=(0,u.jsx)(R.TextControl,{label:(0,a.__)("Add title for abbreviation","x3p0-ideas"),value:r,onChange:e=>o(e),help:(0,a.__)("Expand on the definition for the abbreviation when a full description is not present in the content.","x3p0-ideas")}),p=(0,u.jsx)("form",{className:"x3p0-format-abbr-popover__form",onSubmit:t=>{t.preventDefault(),i((0,ae.applyFormat)(e,{type:ie,attributes:{title:r}})),s()},children:c});return(0,u.jsx)(R.Popover,{className:"x3p0-format-abbr-popover",anchor:n,placement:"top",onClose:s,variant:"toolbar",children:p})}const oe="x3p0/big",le={name:oe,title:(0,a.__)("Big","x3p0-ideas"),tagName:"span",className:"has-larger-text",edit:({isActive:e,onChange:t,value:i})=>(0,u.jsx)(c.RichTextToolbarButton,{icon:A,title:(0,a.__)("Big","x3p0-ideas"),isActive:e,onClick:()=>t((0,ae.toggleFormat)(i,{type:oe}))})},ce="x3p0/cite",pe={name:ce,title:(0,a.__)("Cite","x3p0-ideas"),tagName:"cite",className:null,edit:({isActive:e,onChange:t,value:i})=>(0,u.jsx)(c.RichTextToolbarButton,{icon:y,title:(0,a.__)("Cite","x3p0-ideas"),isActive:e,onClick:()=>t((0,ae.toggleFormat)(i,{type:ce}))})},de="x3p0/del",me={name:de,title:(0,a.__)("Delete","x3p0-ideas"),tagName:"del",className:null,edit:({isActive:e,onChange:t,value:i})=>(0,u.jsx)(c.RichTextToolbarButton,{icon:q,title:(0,a.__)("Delete","x3p0-ideas"),isActive:e,onClick:()=>t((0,ae.toggleFormat)(i,{type:de}))})},he="x3p0/ins",ge={name:he,title:(0,a.__)("Insert","x3p0-ideas"),tagName:"ins",className:null,edit:({isActive:e,onChange:t,value:i})=>(0,u.jsx)(c.RichTextToolbarButton,{icon:Z,title:(0,a.__)("Insert","x3p0-ideas"),isActive:e,onClick:()=>t((0,ae.toggleFormat)(i,{type:he}))})},ve="x3p0/mark",xe={name:ve,title:(0,a.__)("Highlight","x3p0-ideas"),tagName:"mark",className:null,edit:({isActive:e,onChange:t,value:i})=>(0,u.jsx)(c.RichTextToolbarButton,{icon:f,title:(0,a.__)("Highlight","x3p0-ideas"),isActive:e,onClick:()=>t((0,ae.toggleFormat)(i,{type:ve}))})},ue="x3p0/overline",we={name:ue,title:(0,a.__)("Overline","x3p0-ideas"),tagName:"span",className:"has-overline",edit:({isActive:e,onChange:t,value:i})=>(0,u.jsx)(c.RichTextToolbarButton,{icon:T,title:(0,a.__)("Overline","x3p0-ideas"),isActive:e,onClick:()=>t((0,ae.toggleFormat)(i,{type:ue}))})},_e="x3p0/small",be={name:_e,title:(0,a.__)("Small","x3p0-ideas"),tagName:"small",className:null,edit:({isActive:e,onChange:t,value:i})=>(0,u.jsx)(c.RichTextToolbarButton,{icon:B,title:(0,a.__)("Small","x3p0-ideas"),isActive:e,onClick:()=>t((0,ae.toggleFormat)(i,{type:_e}))})},ke="x3p0/span",ye={name:ke,title:(0,a.__)("Custom","x3p0-ideas"),tagName:"span",className:"x3p0-span",edit:function({isActive:e,onChange:t,value:i,contentRef:s}){const[n,r]=(0,l.useState)(!1),o=()=>r((e=>!e));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.RichTextToolbarButton,{icon:N,title:(0,a.__)("Custom","x3p0-ideas"),isActive:e,onClick:()=>e?t((0,ae.removeFormat)(i,ke)):o()}),n&&(0,u.jsx)(qe,{value:i,onChange:t,onClose:o,contentRef:s})]})}},je=ye;function qe({value:e,contentRef:t,onChange:i,onClose:s}){const n=(0,ae.useAnchor)({editableContentElement:t.current,settings:ye}),[r,o]=(0,l.useState)(""),c=(0,u.jsx)(R.TextControl,{label:(0,a.__)("Add CSS class(es)","x3p0-ideas"),value:r,onChange:e=>o(e),help:(0,a.__)("Apply one or more custom CSS classes to the element.","x3p0-ideas")}),p=(0,u.jsx)("form",{className:"x3p0-format-span-popover__form",onSubmit:t=>{t.preventDefault(),i((0,ae.applyFormat)(e,{type:ke,attributes:{class:r.replace(/[^A-Za-z0-9_-]/g,"")}})),s()},children:c});return(0,u.jsx)(R.Popover,{className:"x3p0-format-span-popover",anchor:n,placement:"top",onClose:s,variant:"toolbar",children:p})}(0,ae.registerFormatType)(ne.name,ne),(0,ae.registerFormatType)(le.name,le),(0,ae.registerFormatType)(pe.name,pe),(0,ae.registerFormatType)(me.name,me),(0,ae.registerFormatType)(ge.name,ge),(0,ae.registerFormatType)(xe.name,xe),(0,ae.registerFormatType)(we.name,we),(0,ae.registerFormatType)(be.name,be),(0,ae.registerFormatType)(je.name,je),G()((()=>{(0,ae.unregisterFormatType)("core/text-color")}))})();