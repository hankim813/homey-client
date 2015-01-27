"use strict";angular.module("homey",["ngAnimate","ui.router","ngStorage"]).factory("AuthInterceptor",["$q","$injector",function(a,b){return{request:function(c){var d=b.get("AuthToken"),e=d.get();return c.headers=c.headers||{},e&&(c.headers.Authorization="Bearer "+e),c||a.when(c)}}}]).config(["$stateProvider","$urlRouterProvider","$httpProvider",function(a,b,c){c.interceptors.push("AuthInterceptor"),b.otherwise("/"),a.state("/",{url:"/",templateUrl:"/views/main.html",controller:"MainController",controllerAs:"app"}).state("home",{url:"/home",resolve:{fetchUser:["userFactory","userService","$localStorage",function(a,b,c){return b.user||a.saveUserToService(c.userId).then(function(){return b.user},function(a){console.log(a)})}],fetchAppointments:["apptFactory","apptService","$localStorage",function(a,b,c){return b.appointments||a.saveApptsToService(c.userId).then(function(){return b.appointments},function(a){console.log(a)})}]},templateUrl:"/views/home.html",controller:"HomeController",controllerAs:"home"})}]).run(["$rootScope","$location","$localStorage","AuthFactory",function(a,b,c,d){var e=c.spId,f=c.userId;d.check(),d.isLogged?(f&&b.path("/home"),e&&b.path("/dashboard")):b.path("/"),a.$on("$stateChangeStart",function(a,c){d.isLogged!==!0||!f||"/login"!==c.url&&"/register"!==c.url&&"/"!==c.url?d.isLogged!==!0||!e||"/serviceProviders/login"!==c.url&&"/serviceProviders/register"!==c.url&&"/"!==c.url?d.isLogged===!1&&b.path("/"):b.path("/dashboard"):b.path("/home")})}]),angular.module("homey").config(["$stateProvider",function(a){a.state("userLogin",{url:"/users/login",templateUrl:"/login/userLogin.html",controller:"UserLoginController",controllerAs:"auth"}).state("userRegister",{url:"/users/register",templateUrl:"/login/userRegister.html",controller:"UserLoginController",controllerAs:"auth"}).state("serviceProviderLogin",{url:"/serviceProviders/login",templateUrl:"/login/serviceProviderLogin.html",controller:"ServiceProviderLoginController",controllerAs:"spAuth"}).state("serviceProviderRegister",{url:"/serviceProviders/register",templateUrl:"/login/serviceProviderRegister.html",controller:"ServiceProviderLoginController",controllerAs:"spAuth"})}]),angular.module("homey").config(["$stateProvider",function(a){a.state("profile",{url:"/profile",resolve:{user:["userService",function(a){return a.user}]},templateUrl:"/users/profile.html",controller:"UserController",controllerAs:"user"}).state("edit",{url:"/edit",resolve:{user:["userService",function(a){return a.user}]},templateUrl:"/users/edit.html",controller:"EditController",controllerAs:"edit"})}]),angular.module("homey").config(["$stateProvider",function(a){a.state("appointments",{url:"/appointments",resolve:{appointments:["apptService",function(a){return a.appointments}]},templateUrl:"/appointments/index.html",controller:"AppointmentController",controllerAs:"appt"}).state("newAppointment",{url:"/appointments/new",templateUrl:"/appointments/new.html",controller:"NewAppointmentController",controllerAs:"appt"})}]),angular.module("homey").config(["$stateProvider",function(a){a.state("newAppointment.homeCleaning",{url:"/home-cleaning",views:{homeCleaning:{templateUrl:"/bookings/services/home-cleaning.html",controller:"HomeCleaningController",controllerAs:"hc"}}})}]),angular.module("homey").config(["$stateProvider",function(a){a.state("dashboard",{url:"/dashboard",resolve:{fetchServiceProvider:["spFactory","spService","$localStorage",function(a,b,c){return b.sp||a.saveSPToService(c.spId).then(function(){return b.sp},function(a){console.log(a)})}]},templateUrl:"/serviceProviders/dashboard.html",controller:"serviceProviderController",controllerAs:"sp"}).state("editServiceProvider",{url:"/serviceProvider/edit",templateUrl:"/serviceProviders/edit.html",controller:"serviceProviderEditController",controllerAs:"spEdit"})}]),angular.module("homey").controller("MainController",["fbFactory",function(a){var b=this;a.initialize(),b.fbLogin=a.fbLogin}]),angular.module("homey").controller("HomeController",["$state","userLoginFactory",function(a,b){var c=this;c.logout=b.logout}]),angular.module("homey").controller("UserLoginController",["$state","userLoginFactory",function(a,b){var c=this;c.userForm={},c.register=function(){b.register(c.userForm).then(function(){c.userForm={},a.go("home")},function(a){console.log(a)})},c.login=function(){b.login(c.userForm).then(function(){c.userForm={},a.go("home")},function(a){console.log(a)})}}]).controller("ServiceProviderLoginController",["$state","spLoginFactory",function(a,b){var c=this;c.spForm={},c.register=function(){b.register(c.spForm).then(function(){c.spForm={},a.go("dashboard")},function(a){console.log(a)})},c.login=function(){b.login(c.spForm).then(function(){c.spForm={},a.go("dashboard")},function(a){console.log(a)})}}]),angular.module("homey").controller("UserController",["$state","user","userService","userFactory",function(a,b,c,d){var e=this;e.info=b,e.info.genderType=0===e.info.gender?"Male":"Female",e["delete"]=function(){d.deleteUser(e.info.id).then(function(){a.go("/")},function(a){console.log(a)})}}]).controller("EditController",["$state","user","userService","userFactory",function(a,b,c,d){var e=this;e.editForm=b,e.editUser=function(){console.log(e.editForm),d.edit(e.editForm).then(function(){e.editForm={},a.go("profile")},function(a){console.log(a)})}}]),angular.module("homey").controller("AppointmentController",["appointments","apptFactory","userService",function(a,b,c){var d=this;d.user=c.user,d.appointments=a,d.pay=b.pay,d.cancel=b.cancel,d.complete=b.complete}]).controller("NewAppointmentController",["apptFactory","userService",function(a,b){var c=this;c.user=b.user,c.book=a.book}]),angular.module("homey").controller("HomeCleaningController",["bookingFactory",function(a){var b=this;b.formData={serviceDate:"1990-12-31T23:59:60Z"},b.laundry=!1,b.submitData=function(){a.create(b.formData)},b.showLaundry=function(){b.laundry=!0},b.cancelLaundry=function(){b.laundry=!1,delete b.formData.loads,delete b.formData.ironed}}]),angular.module("homey").controller("serviceProviderController",["$state","spService","spFactory","spLoginFactory",function(a,b,c,d){var e=this;e.info=b.sp,e.info.genderType=0===e.info.gender?"Male":"Female",e["delete"]=function(){c["delete"](e.info.id).then(function(){a.go("/")},function(a){console.log(a)})},e.logout=d.logout}]).controller("serviceProviderEditController",["$state","spService","spFactory",function(a,b,c){var d=this;d.editForm=b.sp,d.submitData=function(){c.edit(d.editForm).then(function(){d.editForm={},a.go("dashboard")},function(a){console.log(a)})}}]),angular.module("homey").factory("ajaxFactory",["$http","$q",function(a,b){return{request:function(c,d,e){var f=b.defer();switch(d){case"get":!function(){a.get(c).success(function(a){f.resolve(a)}).error(function(a){f.reject(a.error)})}();break;case"post":!function(){a.post(c,e).success(function(a){f.resolve(a)}).error(function(a){f.reject(a.error)})}();break;case"put":!function(){a.put(c).success(function(a){f.resolve(a)}).error(function(a){f.reject(a.error)})}()}return f.promise}}}]),angular.module("homey").factory("AuthFactory",["$localStorage",function(a){var b={isLogged:!1,check:function(){a.token&&(a.userId||a.spId||a.adminId)?this.isLogged=!0:(this.isLogged=!1,a.userId&&delete a.userId,a.spId&&delete a.spId,a.adminId&&delete a.adminId,delete a.token)}};return b}]),angular.module("homey").factory("fbFactory",["userLoginFactory","$state",function(a,b){return{initialize:function(){window.fbAsyncInit=function(){FB.init({appId:"836908086372942",xfbml:!0,version:"v2.2"})},function(a,b,c){var d,e=a.getElementsByTagName(b)[0];a.getElementById(c)||(d=a.createElement(b),d.id=c,d.src="//connect.facebook.net/en_US/sdk.js",e.parentNode.insertBefore(d,e))}(document,"script","facebook-jssdk")},fbLogin:function(){FB.login(function(c){"connected"===c.status?FB.api("/me",function(c){a.fbLogin(c).then(function(){b.go("home")},function(a){console.log(a)})}):console.log("not_authorized"===c.status?"Please log in locally.":"Yo, log in brotha.")},{scope:"public_profile,email"})}}}]),angular.module("homey").factory("userLoginFactory",["$http","$q","$localStorage","$state","AuthToken","AuthFactory","userService",function(a,b,c,d,e,f,g){return{register:function(c){var d=b.defer();return a.post("http://localhost:3000/api/register",c).success(function(a){e.set(a),f.isLogged=!0,d.resolve(a.user)}).error(function(a){d.reject(a.error)}),d.promise},login:function(c){var d=b.defer();return a.post("http://localhost:3000/api/login",{email:c.email,password:c.password}).success(function(a){e.set(a),f.isLogged=!0,d.resolve(a.user)}).error(function(a){d.reject(a.error)}),d.promise},logout:function(){delete c.token,delete c.userId,f.isLogged=!1,g={},d.go("/")},fbLogin:function(c){var d=b.defer();return a.post("http://localhost:3000/api/fb",c).success(function(a){e.set(a),f.isLogged=!0,d.resolve(a.user)}).error(function(a){console.log(a.error),d.reject(a.error)}),d.promise}}}]).factory("spLoginFactory",["$http","$q","$localStorage","$state","AuthToken","AuthFactory","spService",function(a,b,c,d,e,f,g){return{register:function(c){var d=b.defer();return a.post("http://localhost:3000/api/serviceProviders/register",c).success(function(a){e.set(a),f.isLogged=!0,d.resolve(a.sp)}).error(function(a){d.reject(a.error)}),d.promise},login:function(c){var d=b.defer();return a.post("http://localhost:3000/api/serviceProviders/login",{email:c.email,password:c.password}).success(function(a){e.set(a),f.isLogged=!0,d.resolve(a.sp)}).error(function(a){d.reject(a.error)}),d.promise},logout:function(){delete c.token,delete c.spId,f.isLogged=!1,g={},d.go("/")}}}]),angular.module("homey").factory("userFactory",["$http","$q","$localStorage","userService",function(a,b,c,d){return{saveUserToService:function(c){var e=b.defer();return a.get("http://localhost:3000/api/users/"+c).success(function(a){d.user=a,e.resolve(a)}).error(function(a){e.reject(a)}),e.promise},deleteUser:function(d){var e=b.defer();return a["delete"]("http://localhost:3000/api/users/"+d+"/delete").success(function(a){delete c.token,delete c.userId,e.resolve(a)}).error(function(a){e.reject(a)}),e.promise},edit:function(c){var e=b.defer();return a.put("http://localhost:3000/api/users/edit",{id:c.id,email:c.email,first_name:c.first_name,last_name:c.last_name,gender:c.gender,age:c.age,phone:c.phone}).success(function(a){d.user=a,e.resolve(a.user)}).error(function(a){e.reject(a.error)}),e.promise}}}]),angular.module("homey").factory("apptFactory",["$http","$q","$localStorage","ajaxFactory","apptService",function(a,b,c,d,e){function f(a){console.log("saving....");var b="http://localhost:3000/api/users/"+a+"/appointments";return e.appointments=d.request(b,"get")}function g(a){var b="http://localhost:3000/api/users/"+a+"/appointments";d.request(b,"post").then(function(){f(c.userId)},function(a){console.log(a)})}function h(a){var b="http://localhost:3000/api/appointments/"+a+"/pay";d.request(b,"put").then(function(){f(c.userId)},function(a){console.log(a)})}function i(a){var b="http://localhost:3000/api/appointments/"+a+"/complete";d.request(b,"put").then(function(){f(c.userId)},function(a){console.log(a)})}function j(a){var b="http://localhost:3000/api/appointments/"+a+"/cancel";d.request(b,"put").then(function(){f(c.userId)},function(a){console.log(a)})}return{saveApptsToService:f,book:g,pay:h,complete:i,cancel:j}}]),angular.module("homey").factory("bookingFactory",["$http","$localStorage","$state","ajaxFactory","apptFactory",function(a,b,c,d,e){function f(a){var f="http://localhost:3000/api/appointments/bookings/homeCleanings";d.request(f,"post",a).then(function(){e.saveApptsToService(b.userId).then(function(){c.go("appointments")},function(a){console.log(a)})},function(a){console.log(a)})}return{create:f}}]),angular.module("homey").factory("spFactory",["$http","$q","$localStorage","spService",function(a,b,c,d){return{saveSPToService:function(c){var e=b.defer();return a.get("http://localhost:3000/api/serviceProviders/"+c).success(function(a){d.sp=a,e.resolve(a)}).error(function(a){e.reject(a)}),e.promise},"delete":function(d){var e=b.defer();return a["delete"]("http://localhost:3000/api/serviceProviders/"+d+"/delete").success(function(a){delete c.token,delete c.spId,e.resolve(a)}).error(function(a){e.reject(a)}),e.promise},edit:function(c){var e=b.defer();return a.put("http://localhost:3000/api/serviceProviders/"+c.id+"/edit",{email:c.email,first_name:c.first_name,last_name:c.last_name,gender:c.gender,age:c.age,phone:c.phone,birthday:c.birthday,address:c.address,service:c.service,years_experience:c.years_experience}).success(function(a){d.sp=a,e.resolve(a.sp)}).error(function(a){e.reject(a.error)}),e.promise}}}]),angular.module("homey").factory("AuthToken",["$localStorage",function(a){return{set:function(b){a.token=b.token,b.userId?a.userId=b.userId:b.spId?a.spId=b.spId:a.adminId=b.adminId},get:function(){return a.token}}}]),angular.module("homey").factory("userService",[function(){return{}}]),angular.module("homey").factory("apptService",[function(){return{}}]),angular.module("homey").factory("spService",[function(){return{}}]);