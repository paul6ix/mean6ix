angular.module('meanHotel', ['ngRoute'])
    .config(config)
    .controller('Hotelcontroller', Hotelcontroller);
 function config($routeProvider) {
     $routeProvider
         .when('/', {
             templateUrl : 'angular-app/hotel.html',
             controller : Hotelcontroller,
             controllerAs: 'mh'
         });

 }
function Hotelcontroller($http) {
    var mh = this;
    mh.title = 'Mean Hotel App';
     $http.get('/api/hotels').then(function (res) {
         console.log(res);
         mh.hotels = res.data;


     });


}