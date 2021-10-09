(this["webpackJsonpgoit-react-hw-02-phonebook2"]=this["webpackJsonpgoit-react-hw-02-phonebook2"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(11),i=n.n(c),s=(n(17),n(10)),l=n(3),o=n(5),u=n(6),b=n(8),m=n(7),d=(n(18),n(2)),j=n(12),h=n(0),f=function(e){var t=Object(d.a)({},e);return Object(h.jsxs)("div",{className:"mb-3",children:[t.label&&Object(h.jsx)("label",{htmlFor:t.id,className:"form-label",children:t.label}),Object(h.jsx)("input",Object(d.a)({},t))]})},O={name:"name",type:"text",className:"form-control",id:"inputName",ariaDescribedby:"nameHelp",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,label:"Name"},p={name:"number",type:"tel",className:"form-control",id:"inputTelephone",pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,label:"Number"},g=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.value,r=n.name;e.setState(Object(l.a)({},r,a))},e.handleSubmit=function(t){t.preventDefault();var n=Object(j.generate)(),a=e.state,r={id:n,name:a.name,number:a.number};e.props.onSubmit(r),e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-control mb-3",children:[Object(h.jsx)(f,Object(d.a)(Object(d.a)({},O),{},{value:t,onChange:this.handleChange})),Object(h.jsx)(f,Object(d.a)(Object(d.a)({},p),{},{value:n,onChange:this.handleChange})),Object(h.jsx)("div",{class:"col-12",children:Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add contact"})})]})})}}]),n}(a.Component),v=function(e){var t=e.data,n=e.onDelete,a=t.map((function(e){var t=e.name,a=e.id,r=e.number;return Object(h.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-start ",children:[t,": ",r,Object(h.jsx)("button",{onClick:function(){return n(a)},type:"submit",className:"btn btn-primary align-items-end btn-sm",children:"Delete"})]},a)}));return Object(h.jsx)(h.Fragment,{children:a})},x=function(e){var t=e.data,n=e.onDelete;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Contacts"}),Object(h.jsx)("ul",{className:"list-group d-grid gap-2 d-md-flex justify-content-center",children:Object(h.jsx)(v,{data:t,onDelete:n})})]})},C=function(e){var t=e.onChange,n=e.filter;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Find contacts by name:"}),Object(h.jsx)("div",{className:"form-control col-md-6",children:Object(h.jsx)("input",{className:"form-control col-md-3",onChange:t,name:"filter",value:n,type:"text"})})]})},y=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.handleFilter=function(){var t=e.state,n=t.filter;return t.contacts.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},e.handleChange=function(t){var n=t.target,a=n.value,r=n.name;e.setState(Object(l.a)({},r,a))},e.handleSubmit=function(t){e.setState((function(e){var n=e.contacts,a=n.find((function(e){return e.name===t.name}));if(!a)return{contacts:[].concat(Object(s.a)(n),[t]),name:"",number:""};alert("".concat(a.name," is already in contacts"))}))},e.handleDelete=function(t){e.setState((function(e){var n=e.contacts;return{contacts:Object(s.a)(n).filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.handleChange,t=this.handleSubmit,n=this.handleFilter,a=this.handleDelete,r=this.state,c=r.contacts,i=r.filter;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"App-header",children:"Phonebook"}),Object(h.jsx)(g,{onSubmit:t}),Object(h.jsx)(C,{onChange:e,data:c,filter:i}),Object(h.jsx)(x,{data:n(),onDelete:a})]})}}]),n}(a.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(28);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),N()}},[[29,1,2]]]);
//# sourceMappingURL=main.7f36d14d.chunk.js.map