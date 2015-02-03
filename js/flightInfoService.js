flightinfoApp.service('InfoService', function() {
  var FromInfoitems ='';
  var DestinationInfoItems='';

  var LeavingDate='';
  var ReturningDate='';

  // From Variables
  var addFromInfo = function(newObj) {
      FromInfoitems=newObj;
  }

  var getFromInfo = function(){
      return FromInfoitems;
  }

  // Destination variables
  var addDestinationInfo = function(newObj) {
      DestinationInfoItems=newObj;
  }

  var getDestinationInfo = function(){
      return DestinationInfoItems;
  }


  // Leaving Variables
  var addLeavingInfo = function(newObj) {
      LeavingDate=newObj;
  }

  var getLeavingInfo = function(){
      return LeavingDate;
  }


  // Returning Variables
  var addReturningInfo = function(newObj) {
      ReturningDate=newObj;
  }

  var getReturningInfo = function(){
      return ReturningDate;
  }




  return {
    addFromInfo: addFromInfo,
    getFromInfo: getFromInfo,
    addDestinationInfo: addDestinationInfo,
    getDestinationInfo: getDestinationInfo,
    addLeavingInfo: addLeavingInfo,
    getLeavingInfo: getLeavingInfo,
    addReturningInfo: addReturningInfo,
    getReturningInfo: getReturningInfo

  };

});