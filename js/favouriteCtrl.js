flightinfoApp.controller('FavouriteCtrl', function ($scope, InfoService) {
	// get information from the service page 
	$scope.message='';
	$scope.flightInfo= InfoService.getFavourites();

	// check the list see if there is nothing in the list,
	// show the user additional steps need to be add 
	if(InfoService.getFavourites().length == 0){
		$scope.message = "There is nothing in your favourite list";
	}

	$scope.orderProp = 'Air_line';
	$scope.orderProp = 'leaving';
	$scope.orderProp = 'price';

    if(!$scope.message){
         $scope.myValue= true;
    }
    
    // remove items when the cross button is clicked
	$scope.removeFavourites = function($item){
    	InfoService.removeFavourites($item);
    	if(InfoService.getFavourites().length == 0){
			$scope.message = "There is nothing in your favourite list";
            $scope.myValue= false;
		}

  	};
});