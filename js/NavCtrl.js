flightinfoApp.controller('NavCtrl', function ($scope) {
  $scope.NavBar = [
    // {'name': 'Home',
    //  'LinkName': 'home',
 	  // 'Arrow':' -> '},
    {'name': 'Flight Info',
     'LinkName': 'page2',
 		'Arrow':' -> '},
    {'name': 'Ticket Info',
     'LinkName': 'page3',
 		'Arrow':''}
  ];
});