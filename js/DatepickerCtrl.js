flightinfoApp.controller('DatepickerCtrl', function ($scope, InfoService) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  // $scope.disabled = function(date, mode) {
  //   return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  // };

  $scope.change = function() {
    var item = (String($scope.dt)).split(" ");
    var Fitem = item[2] + item[1]  + item[3];
    InfoService.addLeavingInfo(Fitem);

  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {

    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };
  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[1];


});

flightinfoApp.directive('datepickerPopup', function (dateFilter, datepickerPopupConfig) {
  return {
    restrict: 'A',
    priority: 1,
    require: 'ngModel',
    link: function(scope, element, attr, ngModel) {
      var dateFormat = attr.datepickerPopup || datepickerPopupConfig.datepickerPopup;
      ngModel.$formatters.push(function (value) {
        return dateFilter(value, dateFormat);
      });
    }
  };
});