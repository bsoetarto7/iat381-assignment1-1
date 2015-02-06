flightinfoApp.controller('DropdownCtrl', function($scope, InfoService) {
// ----------------------- Number of Adults ------------------------ 
    $scope.Adults = [
      {name:'1'},
      {name:'2'},
      {name:'3'},
      {name:'4'}
    ];
    

    if(!InfoService.getnumberOfAdutls()){
      $scope.myAdults = $scope.Adults[0];
    }
    else{
      for (i = 0; i < $scope.Adults.length; i++){
        if ($scope.Adults[i].name === InfoService.getnumberOfAdutls()){
          $scope.myAdults = $scope.Adults[i];
        }
      }

    }

    $scope.changeAdults = function() { 
      InfoService.addnumberOfAdutls(String($scope.myAdults.name));
    }



// ----------------------- Type of Class ------------------------ 
    $scope.FlightClass=[
      {name:'Economy'},
      {name:'Business'},
      {name:'First Class'}
    ];
    
    if(!InfoService.getflightClassType()){
      $scope.myClass = $scope.FlightClass[0]; 
    }
    else{
      for (i = 0; i < $scope.FlightClass.length; i++){
        if ($scope.FlightClass[i].name === InfoService.getflightClassType()){
          $scope.myClass = $scope.FlightClass[i];
        }
      }

    }

    $scope.changeClass = function() { 
      InfoService.addflightClassType(String($scope.myClass.name));
    }


// ----------------------- Type of Stops ------------------------ 
    $scope.FlightStop=[
      {name:'Non-Stop'},
      {name:'One-Stop'},
      {name:'Two-Stop'}
    ];
     

    if(!InfoService.getnumberOfStops()){
      $scope.myStop = $scope.FlightStop[0]; 
    }
    else{
      for (i = 0; i < $scope.FlightStop.length; i++){
        if ($scope.FlightStop[i].name === InfoService.getnumberOfStops()){
          $scope.myStop = $scope.FlightStop[i];
        }
      }

    }

    $scope.changeStop = function() { 
      InfoService.addnumberOfStops(String($scope.myStop.name));
      console.log(InfoService.getnumberOfStops())
    }

// ----------------------- Number of Adults ------------------------ 
    $scope.Kids = [
      {name:'1'},
      {name:'2'},
      {name:'3'},
      {name:'4'}
    ];
    

    if(!InfoService.getnumberOfKids()){
      $scope.myKids = $scope.Kids[0];
    }
    else{
      for (i = 0; i < $scope.Kids.length; i++){
        if ($scope.Kids[i].name === InfoService.getnumberOfKids()){
          $scope.myKids = $scope.Kids[i];
        }
      }

    }

    $scope.changeKids = function() { 
      InfoService.addnumberOfKids(String($scope.myKids.name));
      console.log(InfoService.getnumberOfKids());
    }
    
});


