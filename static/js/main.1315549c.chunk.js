(window.webpackJsonptodolist=window.webpackJsonptodolist||[]).push([[0],{54:function(e,t,n){e.exports=n(73)},59:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),l=n.n(r),c=(n(59),n(108)),i=n(106),s=n(110),u=n(119),m=n(111),d=n(44),f=n.n(d),p=Object(i.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),h=function(){var e=p();return o.a.createElement(c.a,{position:"static"},o.a.createElement(s.a,null,o.a.createElement(u.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(f.a,null)),o.a.createElement(m.a,{variant:"h6",className:e.title},"TodoList")))},b=n(9),E=n(13),g=n(25),O=n(14),v=n(32),y=n(33),w=n(35),j=n(118),S=n(45),x=n.n(S),k=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o)))).state={text:""},n.handleSubmit=function(e){e.preventDefault(),n.state.text.length>0&&(n.props.onSubmit({id:x.a.generate(),name:n.state.text,complete:!1}),n.setState({text:""}))},n.handleChange=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value))},n}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement(j.a,{label:"Add a todo...",margin:"normal",style:{width:"100%"},name:"text",onChange:this.handleChange,value:this.state.text}))}}]),t}(o.a.Component),C=n(114),D=n(115),P=n(112),T=n(113),N=n(116),J=n(120),B=n(46),I=n.n(B),W=function(e){return o.a.createElement(P.a,null,o.a.createElement(T.a,{style:e.todo.complete?{textDecoration:"line-through"}:{}},e.todo.name),o.a.createElement(T.a,null,o.a.createElement(J.a,{checked:e.todo.complete,onChange:function(){e.onComplete(e.todo.id)}})),o.a.createElement(T.a,null,o.a.createElement(u.a,{"aria-label":"delete",onClick:function(){e.onDelete(e.todo.id)}},o.a.createElement(I.a,{fontSize:"small"}))))},A=function(e){return o.a.createElement(C.a,{style:{maxWidth:1e3}},o.a.createElement(D.a,null,o.a.createElement(P.a,null,o.a.createElement(T.a,null,"Name"),o.a.createElement(T.a,{style:{width:20}}),o.a.createElement(T.a,{style:{width:20}}))),o.a.createElement(N.a,null,e.todos.map((function(t){return o.a.createElement(W,{key:t.id,todo:t,onComplete:e.onComplete,onDelete:e.onDelete})}))))};function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var z=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[]},n.addTodo=function(e){var t=e.id,a=e.name,o=e.complete;n.setState({todos:[{id:t,name:a,complete:o}].concat(Object(E.a)(n.state.todos))},(function(){localStorage.setItem("todos",JSON.stringify(n.state.todos))}))},n.deleteTodo=function(e){n.setState({todos:n.state.todos.filter((function(t){return t.id!==e}))})},n.completeTodo=function(e){n.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{complete:!t.complete}):t}))}}),(function(){localStorage.setItem("todos",JSON.stringify(n.state.todos))}))},n}return Object(w.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todos"));e&&this.setState({todos:e})}},{key:"render",value:function(){var e=this.state.todos.reduce((function(e,t){return t.complete?e:e+1}),0);return o.a.createElement("div",null,o.a.createElement(k,{onSubmit:this.addTodo}),o.a.createElement(A,{todos:this.state.todos,onComplete:this.completeTodo,onDelete:this.deleteTodo}),o.a.createElement("p",null,"Todos left : ",e))}}]),t}(o.a.Component),L=n(117);var M=function(){return o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement(L.a,{maxWidth:"sm"},o.a.createElement("div",{className:"container"},o.a.createElement(z,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.1315549c.chunk.js.map