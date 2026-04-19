import{k as f,i as a,j as m}from"./ConstantsUtil-DpxHML9F.js";import{c as p}from"./index-C5C0jAJ3.js";import"./index-C-z0C75j.js";import"./formatUnits-D9YWQa9u.js";import"./index-BHl_UkdY.js";import"./index-BGuTm_YK.js";import"./if-defined-Dyj4RK0N.js";import"./index-CH3pOI5o.js";import"./index-C1tTd3sZ.js";import"./index-DdUc_R02.js";const d=f`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,e,i,r){var n=arguments.length,t=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,r);else for(var s=o.length-1;s>=0;s--)(l=o[s])&&(t=(n<3?l(t):n>3?l(e,i,t):l(e,i))||t);return n>3&&t&&Object.defineProperty(e,i,t),t};let c=class extends a{render(){return m`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=d;c=u([p("w3m-transactions-view")],c);export{c as W3mTransactionsView};
