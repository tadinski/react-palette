import e from"node-vibrant";import t from"lodash.camelcase";import r from"lodash.invoke";import a from"react";var n=function(a){try{return Promise.resolve(e.from(a).getPalette()).then(function(e){return Object.keys(e).reduce(function(a,n){var o;return Object.assign({},a,((o={})[t(n)]=r(e,[n,"getHex"]),o))},{})})}catch(e){return Promise.reject(e)}},o={loading:!0,data:{},error:void 0};function c(e,t){switch(t.type){case"getPalette":return o;case"resolvePalette":return Object.assign({},e,{data:t.payload,loading:!1});case"rejectPalette":return Object.assign({},e,{error:t.payload,loading:!1})}}function i(e){var t=a.useReducer(c,o),r=t[0],i=t[1];return a.useEffect(function(){var t=!0;return!t||i({type:"getPalette"}),n(e).then(function(e){!t||i({type:"resolvePalette",payload:e})}).catch(function(e){!t||i({type:"rejectPalette",payload:e})}),function(){t=!1}},[e]),r}var u=function(e){var t=e.children,r=i(e.src);return a.createElement(a.Fragment,null,t(r))};export default u;export{n as getPalette,u as Palette,i as usePalette};
//# sourceMappingURL=react-palette.mjs.map
