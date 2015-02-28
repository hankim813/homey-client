"use strict";angular.module("homey",["ngAnimate","ui.router","ngStorage","ui.bootstrap.datetimepicker","angularMoment"]).factory("AuthInterceptor",["$q","$injector",function(a,b){return{request:function(c){var d=b.get("AuthToken"),e=d.get();return c.headers=c.headers||{},e&&(c.headers.Authorization="Bearer "+e),c||a.when(c)}}}]).config(["$stateProvider","$urlRouterProvider","$httpProvider",function(a,b,c){c.interceptors.push("AuthInterceptor"),b.otherwise("/"),a.state("/",{url:"/",templateUrl:"/views/main.html",controller:"MainController",controllerAs:"app"}).state("home",{url:"/home",resolve:{fetchUser:["userFactory","userService","$localStorage",function(a,b,c){return b.user||a.saveUserToService(c.userId).then(function(){return b.user},function(a){console.log(a)})}],fetchAppointments:["apptFactory","apptService","$localStorage",function(a,b,c){return b.appointments||a.saveApptsToService(c.userId).then(function(){return b.appointments},function(a){console.log(a)})}],fetchAddresses:["addressFactory","addressService","$localStorage",function(a,b,c){return b.addresses||a.saveAddressesToService(c.userId).then(function(){return b.addresses},function(a){console.log(a)})}]},templateUrl:"/views/home.html",controller:"HomeController",controllerAs:"home"})}]).run(["$rootScope","$location","$localStorage","AuthFactory",function(a,b,c,d){var e=c.spId,f=c.userId,g=c.adminId;d.check(),d.isLogged?(f&&b.path("/home"),e&&b.path("/sp/dashboard"),g&&b.path("/admin/dashboard")):b.path("/"),a.$on("$stateChangeStart",function(a,c){d.isLogged!==!0||!f||"/login"!==c.url&&"/register"!==c.url&&"/"!==c.url?d.isLogged!==!0||!e||"/serviceProviders/login"!==c.url&&"/serviceProviders/register"!==c.url&&"/"!==c.url?d.isLogged!==!0||!g||"/admin/login"!==c.url&&"/admin/register"!==c.url&&"/"!==c.url?d.isLogged===!1&&b.path("/"):b.path("/admin/dashboard"):b.path("/sp/dashboard"):b.path("/home")})}]),angular.module("homey").config(["$stateProvider",function(a){a.state("userLogin",{url:"/users/login",templateUrl:"/login/userLogin.html",controller:"UserLoginController",controllerAs:"auth"}).state("userRegister",{url:"/users/register",templateUrl:"/login/userRegister.html",controller:"UserLoginController",controllerAs:"auth"}).state("serviceProviderLogin",{url:"/serviceProviders/login",templateUrl:"/login/serviceProviderLogin.html",controller:"ServiceProviderLoginController",controllerAs:"spAuth"}).state("serviceProviderRegister",{url:"/serviceProviders/register",templateUrl:"/login/serviceProviderRegister.html",controller:"ServiceProviderLoginController",controllerAs:"spAuth"}).state("adminLogin",{url:"/admin/login",templateUrl:"/login/adminLogin.html",controller:"AdminLoginController",controllerAs:"adminAuth"}).state("adminRegister",{url:"/admin/register",templateUrl:"/login/adminRegister.html",controller:"AdminLoginController",controllerAs:"adminAuth"})}]),angular.module("homey").config(["$stateProvider",function(a){a.state("profile",{url:"/profile",resolve:{user:["userService",function(a){return a.user}]},templateUrl:"/users/profile.html",controller:"UserController",controllerAs:"user"}).state("edit",{url:"/edit",resolve:{user:["userService",function(a){return a.user}]},templateUrl:"/users/edit.html",controller:"EditController",controllerAs:"edit"})}]),angular.module("homey").config(["$stateProvider",function(a){a.state("appointments",{url:"/appointments",resolve:{appointments:["apptService",function(a){return a.appointments}]},templateUrl:"/appointments/index.html",controller:"AppointmentController",controllerAs:"appt"}).state("newAppointment",{url:"/appointments/new",resolve:{serviceType:function(){return""},addresses:["addressService",function(a){return a.addresses}]},templateUrl:"appointments/new.html",controller:"BookingController",controllerAs:"book"})}]),angular.module("homey").config(["$stateProvider",function(a){a.state("newAppointment.homeCleaning",{url:"/home-cleaning",resolve:{serviceType:function(){return"home-cleanings"},addresses:["addressService",function(a){return a.addresses}]},views:{service:{templateUrl:"bookings/services/home-cleaning.html",controller:"HomeCleaningController",controllerAs:"hc"}}}).state("newAppointment.officeCleaning",{url:"/office-cleaning",resolve:{serviceType:function(){return"office-cleanings"},addresses:["addressService",function(a){return a.addresses}]},views:{service:{templateUrl:"bookings/services/office-cleaning.html",controller:"OfficeCleaningController",controllerAs:"oc"}}}).state("newAppointment.carWash",{url:"/car-wash",resolve:{serviceType:function(){return"car-washes"},addresses:["addressService",function(a){return a.addresses}]},views:{service:{templateUrl:"bookings/services/car-wash.html",controller:"CarWashController",controllerAs:"car"}}}).state("newAppointment.driver",{url:"/driver",resolve:{serviceType:function(){return"drivers"},addresses:["addressService",function(a){return a.addresses}]},views:{service:{templateUrl:"bookings/services/driver.html",controller:"DriverController",controllerAs:"driver"}}}).state("newAppointment.security",{url:"/security",resolve:{serviceType:function(){return"securities"},addresses:["addressService",function(a){return a.addresses}]},views:{service:{templateUrl:"bookings/services/security.html",controller:"SecurityController",controllerAs:"sc"}}}).state("newAppointment.chef",{url:"/chef",resolve:{serviceType:function(){return"chefs"},addresses:["addressService",function(a){return a.addresses}]},views:{service:{templateUrl:"bookings/services/chef.html",controller:"ChefController",controllerAs:"chef"}}}).state("newAppointment.gardening",{url:"/gardening",resolve:{serviceType:function(){return"gardenings"},addresses:["addressService",function(a){return a.addresses}]},views:{service:{templateUrl:"bookings/services/gardening.html",controller:"GardeningController",controllerAs:"gardening"}}}).state("newAppointment.contractor",{url:"/contractor",resolve:{serviceType:function(){return"contractors"},addresses:["addressService",function(a){return a.addresses}]},views:{service:{templateUrl:"bookings/services/contractor.html",controller:"BookingController",controllerAs:"book"}}})}]),angular.module("homey").config(["$stateProvider",function(a){a.state("spDashboard",{url:"/sp/dashboard",resolve:{fetchServiceProvider:["spFactory","spService","$localStorage",function(a,b,c){return b.sp||a.saveSPToService(c.spId).then(function(){return b.sp},function(a){console.log(a)})}]},templateUrl:"/serviceProviders/dashboard.html",controller:"serviceProviderController",controllerAs:"sp"}).state("editServiceProvider",{url:"/serviceProvider/edit",templateUrl:"/serviceProviders/edit.html",controller:"serviceProviderEditController",controllerAs:"spEdit"})}]),angular.module("homey").config(["$stateProvider",function(a){a.state("adminDashboard",{url:"/admin/dashboard",resolve:{fetchAdmin:["adminFactory","adminService","$localStorage",function(a,b,c){return b.admin||a.saveAdminToService(c.adminId).then(function(){return b.admin},function(a){console.log(a)})}],fetchUpcoming:["adApptFactory","adApptService",function(a,b){return b.upcoming||a.saveUpcomingToService().then(function(){return b.upcoming},function(a){console.log(a)})}],fetchPast:["adApptFactory","adApptService",function(a,b){return b.past||a.savePastToService().then(function(){return b.past},function(a){console.log(a)})}],fetchUnassigned:["adApptFactory","adApptService",function(a,b){return b.unassigned||b.saveUnassignedToService().then(function(){return b.unassigned},function(a){console.log(a)})}]},templateUrl:"/admin/dashboard.html",controller:"AdminController",controllerAs:"admin"}).state("editAdmin",{url:"/admin/edit",templateUrl:"/admin/edit.html",controller:"AdminEditController",controllerAs:"adminEdit"})}]),angular.module("homey").config(["$stateProvider",function(a){a.state("discounts",{url:"/discounts",templateUrl:"discounts/new.html",controller:"DiscountController",controllerAs:"dc"})}]),angular.module("homey").config(["$stateProvider",function(a){a.state("edit.addresses",{url:"/addresses",resolve:{addresses:["addressService",function(a){return a.addresses}]},views:{addresses:{templateUrl:"addresses/index.html",controller:"AddressController",controllerAs:"address"}}}).state("edit.addresses.new",{url:"/addresses/new",views:{newAddress:{templateUrl:"addresses/new.html",controller:"NewAddressController",controllerAs:"newAddress"}}}).state("newAppointment.homeCleaning.newAddress",{url:"/addresses/new",views:{newAddress:{templateUrl:"addresses/new.html",controller:"NewAddressController",controllerAs:"newAddress"}}}).state("newAppointment.officeCleaning.newAddress",{url:"/addresses/new",views:{newAddress:{templateUrl:"addresses/new.html",controller:"NewAddressController",controllerAs:"newAddress"}}}).state("newAppointment.carWash.newAddress",{url:"/addresses/new",views:{newAddress:{templateUrl:"addresses/new.html",controller:"NewAddressController",controllerAs:"newAddress"}}}).state("newAppointment.driver.newAddress",{url:"/addresses/new",views:{newAddress:{templateUrl:"addresses/new.html",controller:"NewAddressController",controllerAs:"newAddress"}}}).state("newAppointment.security.newAddress",{url:"/addresses/new",views:{newAddress:{templateUrl:"addresses/new.html",controller:"NewAddressController",controllerAs:"newAddress"}}}).state("newAppointment.chef.newAddress",{url:"/addresses/new",views:{newAddress:{templateUrl:"addresses/new.html",controller:"NewAddressController",controllerAs:"newAddress"}}}).state("newAppointment.gardening.newAddress",{url:"/addresses/new",views:{newAddress:{templateUrl:"addresses/new.html",controller:"NewAddressController",controllerAs:"newAddress"}}}).state("newAppointment.contractor.newAddress",{url:"/addresses/new",views:{newAddress:{templateUrl:"addresses/new.html",controller:"NewAddressController",controllerAs:"newAddress"}}})}]),angular.module("homey").config(["$stateProvider",function(a){a.state("payments",{url:"/payments",templateUrl:"/stripe/new.html",controller:"StripeController",controllerAs:"stripe"})}]),angular.module("homey").controller("MainController",["fbFactory",function(a){var b=this;a.initialize(),b.fbLogin=a.fbLogin}]),angular.module("homey").controller("HomeController",["$state","userLoginFactory",function(a,b){var c=this;c.logout=b.logout}]),angular.module("homey").controller("UserLoginController",["$state","userLoginFactory",function(a,b){var c=this;c.userForm={},c.register=function(){b.register(c.userForm).then(function(){c.userForm={},a.go("home")},function(a){console.log(a)})},c.login=function(){b.login(c.userForm).then(function(){c.userForm={},a.go("home")},function(a){console.log(a)})}}]).controller("ServiceProviderLoginController",["$state","spLoginFactory",function(a,b){var c=this;c.spForm={},c.register=function(){b.register(c.spForm).then(function(){c.spForm={},a.go("spDashboard")},function(a){console.log(a)})},c.login=function(){b.login(c.spForm).then(function(){c.spForm={},a.go("spDashboard")},function(a){console.log(a)})}}]).controller("AdminLoginController",["$state","adminLoginFactory",function(a,b){var c=this;c.adminForm={},c.register=function(){b.register(c.adminForm).then(function(){c.adminForm={},a.go("adminDashboard")},function(a){console.log(a)})},c.login=function(){b.login(c.adminForm).then(function(){c.adminForm={},a.go("adminDashboard")},function(a){console.log(a)})}}]),angular.module("homey").controller("UserController",["$state","user","userService","userFactory",function(a,b,c,d){var e=this;e.info=b,e.info.genderType=0===e.info.gender?"Male":"Female",e["delete"]=function(){d.deleteUser().then(function(){a.go("/")},function(a){console.log(a)})}}]).controller("EditController",["$state","user","userService","userFactory",function(a,b,c,d){var e=this;e.editForm=b,e.editUser=function(){d.edit(e.editForm).then(function(){e.editForm={},a.go("profile")},function(a){console.log(a)})}}]),angular.module("homey").controller("AppointmentController",["$filter","appointments","apptFactory","userService",function(a,b,c,d){var e=this;e.user=d.user,e.appointments=b,e.upcoming=a("upcomingFilter")(e.appointments),e.past=a("pastFilter")(e.appointments),e.pay=c.pay,e.cancel=c.cancel,e.complete=c.complete}]),angular.module("homey").controller("HomeCleaningController",["bookingFactory","serviceType","addresses","addressFactory",function(a,b,c,d){function e(){h.laundry=!0}function f(){h.laundry=!1,delete h.formData.loads,delete h.formData.ironed}function g(a){1===a?(h.formData.bedrooms=2,h.formData.bathrooms=2,h.formData.kitchens=1,h.formData.livingrooms=1):2===a&&(h.formData.bedrooms=3,h.formData.bathrooms=3,h.formData.kitchens=1,h.formData.livingrooms=1)}var h=this;h.addresses=c,h.destroyAddy=d.destroy,h.formData={bedrooms:0,bathrooms:0,kitchens:0,livingrooms:0,loads:0,ironed:0},h.laundry=!1,h.flatRate=g,h.showLaundry=e,h.cancelLaundry=f,h.serviceType=b,h.submitData=a.create}]).controller("OfficeCleaningController",["bookingFactory","serviceType","addresses","addressFactory",function(a,b,c,d){var e=this;e.addresses=c,e.serviceType=b,e.submitData=a.create,e.destroyAddy=d.destroy}]).controller("CarWashController",["bookingFactory","serviceType","addresses","addressFactory",function(a,b,c,d){var e=this;e.addresses=c,e.serviceType=b,e.submitData=a.create,e.destroyAddy=d.destroy}]).controller("DriverController",["bookingFactory","serviceType","addresses","addressFactory",function(a,b,c,d){function e(){for(var a=0;a<g.formData.providers;a++)g.formData.cars.push({});g.ifCars=!0}function f(a){g.formData.cars.splice(a,1),g.formData.providers=g.formData.cars.length}var g=this;g.addresses=c,g.formData={cars:[]},g.ifCars=!1,g.addCars=e,g.removeCar=f,g.serviceType=b,g.submitData=a.create,g.destroyAddy=d.destroy}]).controller("SecurityController",["bookingFactory","serviceType","addresses","addressFactory",function(a,b,c,d){function e(){for(var a=0;a<g.formData.providers;a++)g.formData.guards.push({});g.ifGuards=!0}function f(a){g.formData.guards.splice(a,1),g.formData.providers=g.formData.guards.length}var g=this;g.addresses=c,g.formData={guards:[]},g.ifGuards=!1,g.serviceType=b,g.addGuards=e,g.removeGuard=f,g.submitData=a.create,g.destroyAddy=d.destroy}]).controller("ChefController",["bookingFactory","serviceType","$window","addresses","addressFactory",function(a,b,c,d,e){var f=this;f.addresses=d,f.Math=c.Math,f.formData={serving_size:0},f.serviceType=b,f.submitData=a.create,f.destroyAddy=e.destroy}]).controller("GardeningController",["bookingFactory","serviceType","$window","addresses","addressFactory",function(a,b,c,d,e){function f(){return i.formData.type=i.formData.type.trim(),","===i.formData.type.slice(-1)?i.formData.type=i.formData.type.slice(0,-1):void 0}function g(a){i.formData.type+=i.services[a].name+", ",i.services[a].checked=!0}function h(){f(),a.create(i.formData,b)}var i=this;i.addresses=d,i.Math=c.Math,i.formData={acres:0,type:""},i.services=[{name:"Grass Cutting",checked:!1},{name:"Hedge Trimming",checked:!1},{name:"Pruning",checked:!1},{name:"Plant Watering",checked:!1},{name:"Other (Please specify in notes)",checked:!1}],i.submitData=h,i.addService=g,i.destroyAddy=e.destroy}]).controller("BookingController",["bookingFactory","serviceType","addresses","addressFactory",function(a,b,c,d){var e=this;e.addresses=c,e.services=[{name:"Home Cleaning",state:"newAppointment.homeCleaning"},{name:"Office Cleaning",state:"newAppointment.officeCleaning"},{name:"Car Wash",state:"newAppointment.carWash"},{name:"Driver",state:"newAppointment.driver"},{name:"Security",state:"newAppointment.security"},{name:"Personal Chef",state:"newAppointment.chef"},{name:"Gardening",state:"newAppointment.gardening"},{name:"Contractor Job",state:"newAppointment.contractor"}],e.destroyAddy=d.destroy,e.submitData=function(){a.create(e.formData,b)}}]),angular.module("homey").controller("serviceProviderController",["$state","spService","spFactory","spLoginFactory",function(a,b,c,d){var e=this;e.info=b.sp,e.info.genderType=0===e.info.gender?"Male":"Female",e["delete"]=function(){c["delete"]().then(function(){a.go("/")},function(a){console.log(a)})},e.logout=d.logout}]).controller("serviceProviderEditController",["$state","spService","spFactory",function(a,b,c){var d=this;d.editForm=b.sp,d.submitData=function(){c.edit(d.editForm).then(function(){d.editForm={},a.go("spDashboard")},function(a){console.log(a)})}}]),angular.module("homey").controller("AdminController",["$state","adminService","adminFactory","adminLoginFactory","adApptService",function(a,b,c,d,e){var f=this;f.info=b.admin,f.info.genderType=0===f.info.gender?"Male":"Female",f.upcoming=e.upcoming,f.past=e.past,f.unassigned=e.unassigned,f["delete"]=function(){c["delete"]().then(function(){a.go("/")},function(a){console.log(a)})},f.logout=d.logout}]).controller("AdminEditController",["$state","adminService","adminFactory",function(a,b,c){var d=this;d.editForm=b.admin,d.submitData=function(){c.edit(d.editForm).then(function(){d.editForm={},a.go("adminDashboard")},function(a){console.log(a)})}}]),angular.module("homey").controller("DiscountController",["discountFactory",function(a){function b(){a.generateDiscountCode(c.formData)}var c=this;c.submitData=b}]),angular.module("homey").controller("AddressController",["addresses","addressFactory",function(a,b){var c=this;c.destroy=b.destroy,c.formData={},c.all=a}]).controller("NewAddressController",["addressFactory",function(a){var b=this;b.create=a.create}]),angular.module("homey").controller("StripeController",["stripeFactory",function(a){function b(b,c){200==b?a.chargeCustomer(c.id):(console.log("response",c.error.message),console.log("status",b),console.log("failure"))}function c(){Stripe.setPublishableKey("pk_live_n41TBlX0lvSs04xM9Kh983ai"),Stripe.card.createToken(e,b)}var d=this,e=$("#payment-form");d.createStripeToken=c}]),angular.module("homey").factory("ajaxFactory",["$http","$q",function(a,b){return{request:function(c,d,e){var f=b.defer();switch(d){case"get":!function(){a.get(c).success(function(a){f.resolve(a)}).error(function(a){f.reject(a.error)})}();break;case"post":!function(){a.post(c,e).success(function(a){f.resolve(a)}).error(function(a){f.reject(a.error)})}();break;case"put":!function(){a.put(c,e).success(function(a){f.resolve(a)}).error(function(a){f.reject(a.error)})}();break;case"delete":!function(){a["delete"](c).success(function(a){f.resolve(a)}).error(function(a){f.reject(a.error)})}()}return f.promise}}}]),angular.module("homey").factory("AuthFactory",["$localStorage",function(a){var b={isLogged:!1,check:function(){a.token&&(a.userId||a.spId||a.adminId)?this.isLogged=!0:(this.isLogged=!1,a.userId&&delete a.userId,a.spId&&delete a.spId,a.adminId&&delete a.adminId,delete a.token)}};return b}]),angular.module("homey").factory("fbFactory",["userLoginFactory","$state",function(a,b){return{initialize:function(){window.fbAsyncInit=function(){FB.init({appId:"836908086372942",xfbml:!0,version:"v2.2"})},function(a,b,c){var d,e=a.getElementsByTagName(b)[0];a.getElementById(c)||(d=a.createElement(b),d.id=c,d.src="//connect.facebook.net/en_US/sdk.js",e.parentNode.insertBefore(d,e))}(document,"script","facebook-jssdk")},fbLogin:function(){FB.login(function(c){"connected"===c.status?FB.api("/me",function(c){a.fbLogin(c).then(function(){b.go("home")},function(a){console.log(a)})}):console.log("not_authorized"===c.status?"Please log in locally.":"Yo, log in brotha.")},{scope:"public_profile,email"})}}}]),angular.module("homey").factory("userLoginFactory",["$http","$q","$localStorage","$state","AuthToken","AuthFactory","userService",function(a,b,c,d,e,f,g){return{register:function(c){var d=b.defer();return a.post("http://localhost:3000/api/register",c).success(function(a){e.set(a),f.isLogged=!0,d.resolve(a)}).error(function(a){d.reject(a.error)}),d.promise},login:function(c){var d=b.defer();return a.post("http://localhost:3000/api/login",{email:c.email,password:c.password}).success(function(a){e.set(a),f.isLogged=!0,d.resolve(a)}).error(function(a){d.reject(a.error)}),d.promise},logout:function(){delete c.token,delete c.userId,f.isLogged=!1,delete g.user,d.go("/")},fbLogin:function(c){var d=b.defer();return a.post("http://localhost:3000/api/fb",c).success(function(a){e.set(a),f.isLogged=!0,d.resolve(a)}).error(function(a){console.log(a.error),d.reject(a.error)}),d.promise}}}]).factory("spLoginFactory",["$http","$q","$localStorage","$state","AuthToken","AuthFactory","spService",function(a,b,c,d,e,f,g){return{register:function(c){var d=b.defer();return a.post("http://localhost:3000/api/serviceProviders/register",c).success(function(a){e.set(a),f.isLogged=!0,d.resolve(a)}).error(function(a){d.reject(a.error)}),d.promise},login:function(c){var d=b.defer();return a.post("http://localhost:3000/api/serviceProviders/login",{email:c.email,password:c.password}).success(function(a){e.set(a),f.isLogged=!0,d.resolve(a)}).error(function(a){d.reject(a.error)}),d.promise},logout:function(){delete c.token,delete c.spId,f.isLogged=!1,delete g.sp,d.go("/")}}}]).factory("adminLoginFactory",["$http","$q","$localStorage","$state","AuthToken","AuthFactory","adminService",function(a,b,c,d,e,f,g){return{register:function(c){var d=b.defer();return a.post("http://localhost:3000/api/admins/register",c).success(function(a){e.set(a),f.isLogged=!0,d.resolve(a)}).error(function(a){d.reject(a.error)}),d.promise},login:function(c){var d=b.defer();return a.post("http://localhost:3000/api/admins/login",{email:c.email,password:c.password}).success(function(a){e.set(a),f.isLogged=!0,d.resolve(a)}).error(function(a){d.reject(a.error)}),d.promise},logout:function(){delete c.token,delete c.adminId,f.isLogged=!1,delete g.admin,d.go("/")}}}]),angular.module("homey").factory("userFactory",["$http","$q","$localStorage","userService",function(a,b,c,d){return{saveUserToService:function(c){var e=b.defer();return a.get("http://localhost:3000/api/users/"+c).success(function(a){d.user=a,d.user.birthday=new Date(a.birthday),e.resolve(a)}).error(function(a){e.reject(a)}),e.promise},deleteUser:function(d){var e=b.defer();return a["delete"]("http://localhost:3000/api/users/"+d+"/delete").success(function(a){delete c.token,delete c.userId,e.resolve(a)}).error(function(a){e.reject(a)}),e.promise},edit:function(c){var e=b.defer();return a.put("http://localhost:3000/api/users/edit",{id:c.id,email:c.email,first_name:c.first_name,last_name:c.last_name,gender:c.gender,age:c.age,phone:c.phone}).success(function(a){d.user=a,e.resolve(a.user)}).error(function(a){e.reject(a.error)}),e.promise}}}]),angular.module("homey").factory("apptFactory",["$localStorage","ajaxFactory","apptService",function(a,b,c){function d(a){var d="http://localhost:3000/api/users/"+a+"/appointments";return c.appointments=b.request(d,"get")}function e(c){var e="http://localhost:3000/api/users/"+c+"/appointments";b.request(e,"post").then(function(){d(a.userId)},function(a){console.log(a)})}function f(c){var e="http://localhost:3000/api/appointments/"+c+"/pay";b.request(e,"put").then(function(){d(a.userId)},function(a){console.log(a)})}function g(c){var e="http://localhost:3000/api/appointments/"+c+"/complete";b.request(e,"put").then(function(){d(a.userId)},function(a){console.log(a)})}function h(c){var e="http://localhost:3000/api/appointments/"+c+"/cancel";b.request(e,"put").then(function(){d(a.userId)},function(a){console.log(a)})}return{saveApptsToService:d,book:e,pay:f,complete:g,cancel:h}}]).factory("adApptFactory",["$localStorage","ajaxFactory","adApptService",function(a,b,c){function d(){var a="http://localhost:3000/api/appointments/upcoming";return c.upcoming=b.request(a,"get")}function e(){var a="http://localhost:3000/api/appointments/past";return c.past=b.request(a,"get")}function f(){var a="http://localhost:3000/api/appointments/unassigned";return c.unassigned=b.request(a,"get")}return{saveUpcomingToService:d,savePastToService:e,saveUnassignedToService:f}}]),angular.module("homey").factory("bookingFactory",["$http","$localStorage","$state","ajaxFactory","apptFactory",function(a,b,c,d,e){function f(a,f){var g="http://localhost:3000/api/appointments/bookings/"+f;d.request(g,"post",a).then(function(){e.saveApptsToService(b.userId).then(function(){c.go("appointments")},function(a){console.log(a)})},function(a){console.log(a)})}return{create:f}}]),angular.module("homey").factory("spFactory",["$http","$q","$localStorage","spService",function(a,b,c,d){return{saveSPToService:function(c){var e=b.defer();return a.get("http://localhost:3000/api/serviceProviders/"+c).success(function(a){d.sp=a,d.sp.birthday=new Date(a.birthday),e.resolve(a)}).error(function(a){e.reject(a)}),e.promise},"delete":function(d){var e=b.defer();return a["delete"]("http://localhost:3000/api/serviceProviders/"+d+"/delete").success(function(a){delete c.token,delete c.spId,e.resolve(a)}).error(function(a){e.reject(a)}),e.promise},edit:function(c){var e=b.defer();return a.put("http://localhost:3000/api/serviceProviders/"+c.id+"/edit",{email:c.email,first_name:c.first_name,last_name:c.last_name,gender:c.gender,age:c.age,phone:c.phone,birthday:c.birthday,address:c.address,service:c.service,years_experience:c.years_experience}).success(function(a){d.sp=a,e.resolve(a.sp)}).error(function(a){e.reject(a.error)}),e.promise}}}]),angular.module("homey").factory("adminFactory",["$http","$q","$localStorage","adminService",function(a,b,c,d){return{saveAdminToService:function(c){var e=b.defer();return a.get("http://localhost:3000/api/admins/"+c).success(function(a){d.admin=a,d.admin.birthday=new Date(a.birthday),e.resolve(a)}).error(function(a){e.reject(a)}),e.promise},"delete":function(d){var e=b.defer();return a["delete"]("http://localhost:3000/api/admins/"+d+"/delete").success(function(a){delete c.token,delete c.adminId,e.resolve(a)}).error(function(a){e.reject(a)}),e.promise},edit:function(c){var e=b.defer();return a.put("http://localhost:3000/api/admins/"+c.id+"/edit",{email:c.email,first_name:c.first_name,last_name:c.last_name,gender:c.gender,birthday:c.birthday,phone:c.phone}).success(function(a){d.admin=a,e.resolve(a)}).error(function(a){e.reject(a.error)}),e.promise}}}]),angular.module("homey").factory("discountFactory",["ajaxFactory","$state",function(a,b){function c(c){var d="http://localhost:3000/api/admins/"+c.admin_id+"/discounts";a.request(d,"post",c).then(function(){b.go("adminDashboard")},function(a){console.log(a)})}return{generateDiscountCode:c}}]),angular.module("homey").factory("addressFactory",["$localStorage","$state","ajaxFactory","addressService",function(a,b,c,d){function e(d){var e="http://localhost:3000/api/addresses";c.request(e,"post",d).then(function(){h(a.userId).then(function(){b.reload()},function(a){console.log(a)})},function(a){console.log(a)})}function f(d,e){var f="http://localhost:3000/api/addresses/"+d+"/edit";c.request(f,"put",e).then(function(){h(a.userId).then(function(){b.reload()},function(a){console.log(a)})},function(a){console.log(a)})}function g(d){var e="http://localhost:3000/api/addresses/"+d+"/delete";c.request(e,"delete").then(function(){h(a.userId).then(function(){b.reload()},function(a){console.log(a)})},function(a){console.log(a)})}function h(a){var b="http://localhost:3000/api/users/"+a+"/addresses";return d.addresses=c.request(b,"get")}return{create:e,saveAddressesToService:h,edit:f,destroy:g}}]),angular.module("homey").factory("stripeFactory",["ajaxFactory",function(a){function b(b){var c="http://localhost:3000/api/charges/stripe";a.request(c,"post",{stripeToken:b}).then(function(a){console.log(a)},function(a){console.log(a)})}return{chargeCustomer:b}}]),angular.module("homey").factory("AuthToken",["$localStorage",function(a){return{set:function(b){a.token=b.token,b.userId?a.userId=b.userId:b.spId?a.spId=b.spId:b.adminId&&(a.adminId=b.adminId)},get:function(){return a.token}}}]),angular.module("homey").factory("userService",[function(){return{}}]),angular.module("homey").factory("apptService",[function(){return{}}]).factory("adApptService",[function(){return{}}]),angular.module("homey").factory("spService",[function(){return{}}]),angular.module("homey").factory("adminService",[function(){return{}}]).factory("adApptService",[function(){return{}}]),angular.module("homey").factory("addressService",[function(){return{}}]),angular.module("homey").filter("upcomingFilter",[function(){return function(a){var b=[],c=Date.now();if(a&&a.length>0)for(var d=0;d<a.length;d++){var e=new Date(a[d].service_date);e>=c&&b.push(a[d])}return b}}]).filter("pastFilter",[function(){return function(a){var b=[],c=Date.now();if(a&&a.length>0)for(var d=0;d<a.length;d++){var e=new Date(a[d].service_date);c>=e&&b.push(a[d])}return b}}]);