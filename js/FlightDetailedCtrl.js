flightinfoApp.controller('FlightDetailedCtrl', function ($scope, InfoService) {
  // geting the information from the service
  $scope.flightInfo = InfoService.getFilter();
  $scope.message = InfoService.messageDisplay();
    if(!InfoService.messageDisplay()){
        $scope.myValue = true;
    }

  // splite the items and display them later
  $scope.inputDepartLocation = String(InfoService.getFromInfo()).split("-")[0];
  $scope.inputArriveLocation = String(InfoService.getDestinationInfo()).split("-")[0];

  // have the option to have the ordering
  $scope.orderProp = 'Air_line';
  $scope.orderProp = 'leaving';
  $scope.orderProp = 'price';

  // the add the information from favorate button to the service
  $scope.getFavourites = function($item){
    InfoService.addFavourites($item);
  };
});