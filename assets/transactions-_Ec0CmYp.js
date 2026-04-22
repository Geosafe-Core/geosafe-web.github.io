import{k as f,i as a,j as m}from"./ConstantsUtil-BYoA7e9Y.js";import{c as p}from"./index-BoacgqvY.js";import"./index-SOJMBNty.js";import"./formatUnits-D9YWQa9u.js";import"./index-BNQGmZwL.js";import"./index-CNZC6hvJ.js";import"./if-defined-BglwOrJp.js";import"./index-D3tUvDMJ.js";import"./index-Ddf8WG69.js";import"./index-DiUtIJUo.js";const d=f`
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
