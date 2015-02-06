flightinfoApp.controller('TypeaheadCtrl', function($scope, InfoService) {

  $scope.selected = undefined;
  $scope.states = ['YVR - Vancouver International Airport', 'HKG - Hong Kong International Airport', 'SEA - Seattle International Airport'];

  $scope.$from='From';
  $scope.$destination='Destination';

  if (InfoService.getFromInfo()) {
    $scope.$from = InfoService.getFromInfo();
  }

  if (InfoService.getDestinationInfo()) {
    $scope.$destination = InfoService.getDestinationInfo();
  }

  $scope.onSelect = function ($item) {
    InfoService.addFromInfo($item);
  };

  $scope.onSelect2 = function ($item) {
    InfoService.addDestinationInfo($item);
  };

});