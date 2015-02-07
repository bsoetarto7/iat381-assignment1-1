flightinfoApp.controller('FavouriteCtrl', function ($scope, InfoService) {
	$scope.message='';
	$scope.flightInfo= InfoService.getFavourites();
	if(InfoService.getFavourites().length == 0){
		$scope.message = "There is nothing in your favourite list";
	}

	$scope.orderProp = 'Air_line';
	$scope.orderProp = 'leaving';
	$scope.orderProp = 'price';

    if(!$scope.message){
         $scope.myValue= true;
    }
    
	$scope.removeFavourites = function($item){
    	InfoService.removeFavourites($item);
    	if(InfoService.getFavourites().length == 0){
			$scope.message = "There is nothing in your favourite list";
            $scope.myValue= false;
		}

  	};
});