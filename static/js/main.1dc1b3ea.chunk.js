(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__2b9rj",input:"Filter_input__3lN0j"}},11:function(t,e,n){},13:function(t,e,n){t.exports={contactList:"ContactList_contactList__iJb61"}},2:function(t,e,n){t.exports={inputForm:"ContactForm_inputForm__3o4-T",label:"ContactForm_label__2JurP",submitBtn:"ContactForm_submitBtn__3iO8k"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),s=n.n(r),o=n(14),i=n(9),l=n(4),u=n(5),b=n(7),d=n(6),h=n(3),m=n(2),j=n.n(m),p=n(0),f=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",id:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:"",id:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:j.a.inputForm,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:j.a.label,children:[Object(p.jsx)("span",{children:"Name"}),Object(p.jsx)("input",{className:j.a.input,type:"text",name:"name",value:this.state.name,placeholder:"i.e. James Bond",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleInputChange})]}),Object(p.jsxs)("label",{className:j.a.label,children:["Number",Object(p.jsx)("input",{className:j.a.input,type:"tel",name:"number",value:this.state.number,placeholder:"i.e. 007-00-00",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleInputChange})]}),Object(p.jsx)("button",{className:j.a.submitBtn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component);f.defaultProps={value:""};var O=f,v=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteContact;return Object(p.jsxs)("li",{children:[Object(p.jsxs)("span",{children:[n,":"]}),Object(p.jsx)("span",{children:a}),Object(p.jsx)("button",{type:"button",onClick:function(){return c(e)},children:"Delete"})]},e)},C=n(13),x=n.n(C),g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:x.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsx)(v,{name:a,number:c,onDeleteContact:n,id:e},e)}))})},N=n(10),_=n.n(N),y=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:_.a.label,children:[" ","Find contacts by name",Object(p.jsx)("input",{className:_.a.input,type:"text",value:e,placeholder:"enter name",onChange:n})]})};y.defaultProps={value:""};var S=y,w=n(23),k=(n(11),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addNewContact=function(e){var n=e.name.toLowerCase(),a=t.state.contacts.find((function(t){return t.name.toLowerCase()===n})),c=Object(i.a)(Object(i.a)({},e),{},{id:Object(w.a)()});a?alert("".concat(a.name," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(o.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{className:"title",children:"Phonebook"}),Object(p.jsx)(O,{onSubmit:this.addNewContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(S,{value:this.state.filter,onChange:this.changeFilter}),Object(p.jsx)(g,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component));k.defaultProps={contacts:[]};var F=k;n(20);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.1dc1b3ea.chunk.js.map