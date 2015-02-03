angular.module('phonecatAnimations', ['ngAnimate']);

angular.module('phonecatApp', [
  'ngRoute',

  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
]);

