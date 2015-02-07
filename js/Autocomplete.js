flightinfoApp.controller('TypeaheadCtrl', function($scope, InfoService) {

  $scope.selected = undefined;
  $scope.states = ['YVR - Vancouver International Airport', 'HKG - Hong Kong International Airport', 
'YUL - Montreal-Pierre Elliott Trudeau International Airport', 'YMQ - Montreal Airport',
'SAN - San Diego International Airport', 'YEG - Edmonton International Airport', 'SEA - Seattle-Tacoma International Airport',
'SFO - San Francisco International Airport', 'SJC - Norman Y. Mineta San Jose International Airport',
'SBP - San Luis Obispo County Regional Airport', 'YWG - Winnipeg James Armstrong Richardson International Airport',
'YZF - Yellowknife Airport', 'YTZ - Toronto/City Centre Airport', 'PIE - St. Petersburg-Clearwater International Airport',
'GON - Groton-New London Airport', 'IND - Indianapolis International Airport', 'YXU - London International Airport',
'MHT - Manchester-Boston Regional Airport', 'MHK - Manhattan Regional Airport',
'MLB - Melbourne International Airport', 'MIA - Miami International Airport', 'YYZ - Toronto Pearson International Airport',
'OAK - Oakland International Airport', 'PAH - Barkley Regional Airport', 'PDX - Portland International Airport'
,'SEA - Seattle International Airport'];
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