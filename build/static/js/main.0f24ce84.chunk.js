(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(35),s=a.n(i),c=(a(73),a(11)),o=a(4),l=a(5),m=a(7),u=a(6),p=a(8),d=function(){return r.a.createElement("header",{className:"top"},r.a.createElement("h4",null,"Pizza World"))};function h(e){return(e/100).toLocaleString("en-UK",{style:"currency",currency:"GBP"})}var v=a(21),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).renderOrder=function(e){var t=a.props.items[e],n=a.props.order[e],i=t&&"available"===t.status,s={classNames:"order",key:e,timeout:{enter:500,exit:500}};return t?i?r.a.createElement(v.CSSTransition,s,r.a.createElement("li",{key:e},r.a.createElement("span",null,r.a.createElement(v.TransitionGroup,{component:"span",className:"count"},r.a.createElement(v.CSSTransition,{classNames:"count",key:n,timeout:{enter:500,exit:500}},r.a.createElement("span",null,n))),"pc ",t.name,h(n*t.price),r.a.createElement("button",{onClick:function(){return a.props.removeFromOrder(e)}},"\xd7")))):r.a.createElement(v.CSSTransition,s,r.a.createElement("li",{key:e},"Sorry ",t?t.name:"item"," is no longer available")):null},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce(function(t,a){var n=e.props.items[a],r=e.props.order[a];return n&&"available"===n.status?t+r*n.price:t},0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Order"),r.a.createElement(v.TransitionGroup,{component:"ul",className:"order"},t.map(this.renderOrder)),r.a.createElement("div",{className:"total"},"Total:",r.a.createElement("strong",null,h(a))))}}]),t}(r.a.Component),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).nameRef=r.a.createRef(),a.priceRef=r.a.createRef(),a.statusRef=r.a.createRef(),a.descRef=r.a.createRef(),a.imageRef=r.a.createRef(),a.createItem=function(e){e.preventDefault();var t={name:a.nameRef.current.value,price:parseFloat(a.priceRef.current.value),status:a.statusRef.current.value,desc:a.descRef.current.value,image:a.imageRef.current.value};a.props.addItem(t),e.currentTarget.reset()},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"item-edit",onSubmit:this.createItem},r.a.createElement("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),r.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),r.a.createElement("select",{name:"status",ref:this.statusRef},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"Desc"}),r.a.createElement("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"Image"}),r.a.createElement("button",{type:"submit"},"+ Add Item"))}}]),t}(r.a.Component),g=a(36),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){console.log(e.currentTarget.value);var t=Object(c.a)({},a.props.item,Object(g.a)({},e.currentTarget.name,e.currentTarget.value));a.props.updateItem(a.props.index,t)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"item-edit"},r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.props.item.name}),r.a.createElement("input",{type:"text",name:"price",onChange:this.handleChange,value:this.props.item.price}),r.a.createElement("select",{type:"text",name:"status",onChange:this.handleChange,value:this.props.item.status},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",onChange:this.handleChange,value:this.props.item.desc}),r.a.createElement("input",{type:"text",name:"image",onChange:this.handleChange,value:this.props.item.image}),r.a.createElement("button",{onClick:function(){return e.props.deleteItem(e.props.index)}},"Remove Item"))}}]),t}(r.a.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory"),r.a.createElement(b,{addItem:this.props.addItem}),Object.keys(this.props.items).map(function(t){return r.a.createElement(O,{key:t,index:t,item:e.props.items[t],updateItem:e.props.updateItem,deleteItem:e.props.deleteItem})}))}}]),t}(r.a.Component),E={pizza1:{name:"Cheese",image:"/images/cheese.jpg",desc:"Everyone\u2019s favorite white pizza. Only the best blend of cheese used.",price:1224,status:"available"},pizza2:{name:"Chilli",image:"/images/chilli.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:1200,status:"available"},pizza3:{name:"Margaritta",image:"/images/margaritta.jpg",desc:"Hand made cheese from Italy with the best tomatoes",price:1684,status:"unavailable"},pizza4:{name:"Mushroom",image:"/images/mushroom.jpg",desc:"4 types of mushrooms with our special garlic sauce. ",price:1129,status:"available"},pizza5:{name:"Parmesam",image:"/images/parmesam.jpg",desc:"All time favorite classic now with organic cheese",price:914,status:"available"},pizza6:{name:"Pepperoni",image:"/images/peperoni.jpg",desc:"All time best seller and crows favorite.",price:1453,status:"available"},pizza7:{name:"Stone baked",image:"/images/stone.jpg",desc:"For serious pizza lovers made by our head chef",price:1843,status:"available"},pizza8:{name:"Tomato",image:"/images/tomatoe.jpg",desc:"Tomatoes, cheese and crust, thats it.",price:825,status:"available"},pizza9:{name:"Vegetable",image:"/images/vegetable.jpg",desc:"Our vegetarian option with seasonal vegetables and cream souce",price:1350,status:"available"}},j=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.image,n=t.name,i=t.price,s=t.desc,c="available"===t.status;return r.a.createElement("li",{className:"menu-item"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("h3",{className:"item-name"},n,r.a.createElement("span",{className:"price"},h(i))),r.a.createElement("p",null,s),r.a.createElement("button",{disabled:!c,onClick:function(){return e.props.addToOrder(e.props.index)}},c?"Add To Order":"Sold Out!"))}}]),t}(r.a.Component),I=a(66),C=a.n(I),z=a(67),k=a.n(z).a.initializeApp({apiKey:"AIzaSyAVzlUv3pKUnJ-pHUOc1ZeznXeavCRZCAY",authDomain:"inventory-ivo.firebaseapp.com",databaseURL:"https://inventory-ivo.firebaseio.com"}),w=C.a.createClass(k.database()),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={items:{},order:{}},a.addItem=function(e){var t=Object(c.a)({},a.state.items);t["item".concat(Date.now())]=e,a.setState({items:t})},a.updateItem=function(e,t){var n=Object(c.a)({},a.state.items);n[e]=t,a.setState({items:n})},a.deleteItem=function(e){var t=Object(c.a)({},a.state.items);t[e]=null,a.setState({items:t})},a.loadSampleItems=function(){a.setState({items:E})},a.addToOrder=function(e){var t=Object(c.a)({},a.state.order);t[e]=t[e]+1||1,a.setState({order:t})},a.removeFromOrder=function(e){var t=Object(c.a)({},a.state.order);delete t[e],a.setState({order:t})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.ref=w.syncState("state",{context:this,state:"items"})}},{key:"componentWillUnmount",value:function(){w.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"menu"},r.a.createElement(d,null),r.a.createElement("button",{onClick:this.loadSampleItems},"Load Sample Items"),r.a.createElement("ul",{className:"menu-items"},Object.keys(this.state.items).map(function(t){return r.a.createElement(j,{key:t,index:t,details:e.state.items[t],addToOrder:e.addToOrder})}))),r.a.createElement(f,{items:this.state.items,order:this.state.order,removeFromOrder:this.removeFromOrder}),r.a.createElement(y,{addItem:this.addItem,updateItem:this.updateItem,deleteItem:this.deleteItem,items:this.state.items}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,a){e.exports=a(137)},73:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.0f24ce84.chunk.js.map