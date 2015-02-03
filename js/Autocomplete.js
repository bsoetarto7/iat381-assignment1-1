flightinfoApp.controller('TypeaheadCtrl', function($scope, InfoService) {

  $scope.selected = undefined;
  $scope.states = ['YVR - Vancouver International Airport', 'HKG - Hong Kong International Airport', 'SEA - Seattle International Airport'];

  $scope.onSelect = function ($item) {
    $scope.$item = $item;
    InfoService.addFromInfo($item);
  };

  $scope.onSelect2 = function ($item) {
    $scope.$item = $item;
    InfoService.addDestinationInfor($item);
  };

});