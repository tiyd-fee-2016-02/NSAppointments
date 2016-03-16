var routeApp = angular.module("routeApp", ['ngRoute']);

console.log('works');

routeApp.config(function($routeProvider){
   $routeProvider
      .when('/',{
         templateUrl: 'landing-page.html'
      })
      .when('/NewAppointmentPage',{
         templateUrl: 'new-appointment-page.html'
      })
      // .when('landing-page',{
      //    templateUrl: 'landing-page.html',
      // })

});
   //
   //
   //
   // routeApp.controller("routeAppController", function($routeProvider){
   // console.log('hello, world');

// });
