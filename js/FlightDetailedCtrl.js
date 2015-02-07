flightinfoApp.controller('FlightDetailedCtrl', function ($scope, InfoService) {
  $scope.flightInfo = InfoService.getFilter();
  $scope.message = InfoService.messageDisplay();
    if(!InfoService.messageDisplay()){
        $scope.myValue = true;
    }

  $scope.inputDepartLocation = String(InfoService.getFromInfo()).split("-")[0];
  $scope.inputArriveLocation = String(InfoService.getDestinationInfo()).split("-")[0];
 
  $scope.inputLeavingTime = InfoService.getLeavingInfo();
  $scope.inputReturningTime = InfoService.getReturningInfo();

  $scope.orderProp = 'Air_line';
  $scope.orderProp = 'leaving';
  $scope.orderProp = 'price';

  $scope.getFavourites = function($item){
    InfoService.addFavourites($item);
  };
});