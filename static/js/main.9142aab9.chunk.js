(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(17),i=n.n(s),c=(n(37),n(30)),o=n(2),u=n.n(o),l=n(3),p=n(9),d=n(10),m=n(12),f=n(11),h=n(13),v=(n(41),n(42),n(44),n(5)),k=n.n(v),g="https://sheltered-meadow-71214.herokuapp.com",E=n(14),b=(n(65),n(18)),w=n.n(b),y=n(107),O=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(s)))).state={isEdit:!1,details:"",showDetails:!1},n.edit=function(){var e=Object(l.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({isEdit:!n.state.isEdit});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.handleCheck=function(e){n.props.editTask({id:n.props.id,doneyet:!n.props.doneyet})},n.handleDelete=function(e){n.props.deleteTask(n.props)},n.handleEdit=function(e){console.log(e,Object(E.a)(Object(E.a)(n)));var t=n.input.value,a=n.description.value;console.log(" description val ",{title:t,description:a}),n.props.editTask(n.props,{title:t,description:a}),n.setState({isEdit:!n.state.isEdit})},n.showDetails=function(){n.setState({details:n.props.description,showDetails:!n.state.showDetails})},n.renderTitle=function(){return n.state.isEdit?r.a.createElement("input",{ref:function(e){return n.input=e},className:"edit-title",type:"text",defaultValue:n.props.title,autoFocus:!0}):r.a.createElement("p",{className:n.props.doneyet?"title-crossed":"title",onDoubleClick:n.props.doneyet?null:n.edit},n.props.title)},n.renderDescription=function(){return n.state.isEdit?r.a.createElement("p",null,r.a.createElement("input",{ref:function(e){return n.description=e},className:"edit-description",type:"text",defaultValue:n.props.description})):r.a.createElement("p",{onDoubleClick:n.props.doneyet?null:function(){return n.edit}},n.props.description)},n.renderCheckIcon=function(){return n.props.doneyet?r.a.createElement("i",{className:"fas fa-check check-icon"}):null},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"item-container"},r.a.createElement("div",{className:"completed-check-box",onClick:this.handleCheck},this.renderCheckIcon()),r.a.createElement("div",{className:"title-container"},this.renderTitle()),r.a.createElement("div",{className:"delete-btn",onClick:this.handleDelete},r.a.createElement("i",{className:"fas fa-times delete-icon"})),r.a.createElement("div",{className:"details-btn",onClick:this.showDetails},r.a.createElement("i",{className:"fas fa-ellipsis-v description-icon"}))),r.a.createElement("div",{className:"details "+(this.state.showDetails?"show":"hidden")},this.state.isEdit?r.a.createElement("div",{className:"save-btn",onClick:this.handleEdit},r.a.createElement("i",{className:"fas fa-save description-icon"})):r.a.createElement("div",{className:"save-btn",onClick:this.edit},r.a.createElement("i",{className:"fas fa-edit description-icon"})),this.renderDescription(),r.a.createElement(y.a,{to:{pathname:"/details/".concat(this.props.id),state:{description:this.props.description,title:this.props.title,id:this.props.id}}}," ...more ")))}}]),t}(a.Component),x=(n(79),function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(){var e=Object(l.a)(u.a.mark(function e(t){var a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=n.title.value,r=n.description.value,n.props.postTask({description:r,title:a}),n.title.value="",n.description.value="";case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todos.map(function(t){return r.a.createElement(O,{key:t._id,description:t.description,title:t.title,deleteTask:e.props.deleteTask,editTask:e.props.editTask,doneyet:t.doneyet,id:t._id})});return r.a.createElement("div",null,r.a.createElement("h1",{className:"site-header"},"Todos"),r.a.createElement("div",{className:"row"},r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("input",{id:"input-title",className:"input-title",type:"text",autoComplete:"off",ref:function(t){e.title=t},placeholder:"Add a todo..."}),r.a.createElement("input",{id:"input-description",className:"input-description",type:"textarea",ref:function(t){e.description=t},placeholder:"Add a description..."}),"                                                        ",r.a.createElement("input",{className:"btn",id:"submit",type:"submit",value:"submit"}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.props.myTasks},"My Tasks"),r.a.createElement("button",{onClick:this.props.getTasks},"All Tasks"),r.a.createElement("p",{className:"app-description"},"Double click to Edit."),r.a.createElement("div",{className:"todo-container"},r.a.createElement(w.a,{transitionName:"example",transitionEnterTimeout:500,transitionLeaveTimeout:300},t)))))}}]),t}(a.Component)),j=n(27),T=n.n(j);k.a.defaults.withCredentials=!0;var N=function(){var e=Object(l.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k.a.post("".concat(g,"/api/signup"),t).then(function(e){return e.data}).catch(function(e){return{error:!0,message:e.response.data.message}}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k.a.post("".concat(g,"/api/login"),t).then(function(e){return e.data}).catch(function(e){return{error:!0,message:e.response.data.message}}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k.a.post("".concat(g,"/api/logOut")).then(function(e){return e.data}).catch(function(e){return{error:!0,message:e.response.data.message}}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k.a.get("".concat(g,"/api/loggedin")).then(function(e){return e.data}).catch(function(e){return{error:!0,message:e.response.data.message}}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();k.a.defaults.withCredentials=!0;var I=function(){var e=Object(l.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k.a.post("".concat(g,"/api/tasks/create"),t).then(function(e){return e.data}).catch(function(e){return{error:!0,message:e.response.data.message}}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(u.a.mark(function e(t,n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k.a.post("".concat(g,"/api/tasks/edit/").concat(t),n).then(function(e){return e.data}).catch(function(e){return{error:!0,message:e.response.data.message}}));case 1:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),_=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={todos:[],loggedIn:!1,status:{error:!1,message:""},name:null,pass:null,user:{},loading:!0},n.myTasks=Object(l.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({todos:n.state.todos.filter(function(e){return e.owner===n.state.user._id})});case 1:case"end":return e.stop()}},e,this)})),n.getTasks=Object(l.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(g,"/api/tasks"));case 2:t=e.sent,n.setState({todos:t.data.reverse(),loading:!1});case 4:case"end":return e.stop()}},e,this)})),n.deleteTask=function(){var e=Object(l.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("id",t.id),e.next=3,k.a.post("".concat(g,"/api/tasks/delete/").concat(t.id));case 3:e.sent,n.setState({todos:n.state.todos.filter(function(e){return e._id!==t.id})});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.postTask=function(){var e=Object(l.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.doneyet=!1,e.next=3,I(t);case 3:a=e.sent,n.setState({todos:Object(c.a)(n.state.todos).concat([a]).reverse()});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.editTask=function(){var e=Object(l.a)(u.a.mark(function e(t,a,r){var s,i,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(" val ",a,r),s={},s=a?{description:a.description,title:a.title,doneyet:t.doneyet}:{doneyet:t.doneyet},e.next=5,A(t.id,s);case 5:i=e.sent,c=n.state.todos.map(function(e,n){return e._id!==i._id?e:(e.doneyet=t.doneyet,a&&(e.description=a.description,e.title=a.title),e)}),n.setState({todos:c});case 8:case"end":return e.stop()}},e,this)}));return function(t,n,a){return e.apply(this,arguments)}}(),n.logIn=Object(l.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C({username:n.state.name,password:n.state.pass});case 2:(t=e.sent).error?n.setState({status:t}):n.setState({user:t,loggedIn:!0,status:{error:!1,message:""}});case 4:case"end":return e.stop()}},e,this)})),n.signUp=Object(l.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N({username:n.state.name,password:n.state.pass});case 2:(t=e.sent).error?n.setState({status:t}):n.setState({user:t,loggedIn:!0,status:{error:!1,message:""}});case 4:case"end":return e.stop()}},e,this)})),n.logOut=Object(l.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:n.setState({loggedIn:!1,user:null,name:"",pass:""});case 3:case"end":return e.stop()}},e,this)})),n.loggedIn=Object(l.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:(t=e.sent).error?n.setState({status:t}):n.setState({user:t,loggedIn:!0,status:{error:!1,message:""}});case 4:case"end":return e.stop()}},e,this)})),n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getTasks(),this.loggedIn()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},this.state.loading?r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(T.a,{type:"Plane",color:"#00BFFF",height:"100",width:"100"})):r.a.createElement("div",{className:"App-content"},this.state.status.error?r.a.createElement("p",null," ",this.state.status.message):"",this.state.loggedIn&&!this.state.status.error?r.a.createElement("span",null,r.a.createElement("p",{id:"user"},"Welcome ",this.state.user.username," !"),r.a.createElement("button",{id:"logout",onClick:this.logOut},"LogOut"),r.a.createElement(x,{todos:this.state.todos,postTask:this.postTask,editTask:this.editTask,deleteTask:this.deleteTask,myTasks:this.myTasks,getTasks:this.getTasks})):r.a.createElement("div",null,r.a.createElement("p",null,"Not logged in..."),r.a.createElement("div",null,r.a.createElement("input",{type:"text",ref:function(t){return e.name=t},onChange:function(){return e.setState({name:e.name.value})}})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",ref:function(t){return e.pass=t},onChange:function(){return e.setState({pass:e.pass.value})}})),r.a.createElement("button",{onClick:this.logIn},"LogIn"),r.a.createElement("button",{onClick:this.signUp},"signUp"))))}}]),t}(a.Component),F=function(e){var t=e.location.state,n=t.title,a=t.description,s=t.id;return r.a.createElement("div",null,"Title: ",n,",",r.a.createElement("br",null)," Description: ",a,",",r.a.createElement("br",null)," Id: ",s)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(109),L=n(108);i.a.render(r.a.createElement(function(){return r.a.createElement(B.a,null,r.a.createElement("div",null,r.a.createElement(L.a,{exact:!0,path:"/",component:_}),r.a.createElement(L.a,{exact:!0,path:"/details/:id",component:F})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},32:function(e,t,n){e.exports=n(106)},37:function(e,t,n){},41:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},42:function(e,t,n){},65:function(e,t,n){},79:function(e,t,n){}},[[32,2,1]]]);
//# sourceMappingURL=main.9142aab9.chunk.js.map