flightinfoApp.service('InfoService', function() {
  var FromInfoitems ='';
  var DestinationInfoItems='';

  var LeavingDate='';
  var ReturningDate='';

  var KeepLeavingDate='';
  var KeepReturningDate='';

  var flightClassType='';

  var numberOfStops='';

  var numberOfAdutls='';

  var numberOfKids='';

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
  var addLeavingInfo = function(newObj,newObj2) {
    LeavingDate=newObj;
    KeepLeavingDate = newObj2;
  }

  var getLeavingInfo = function(){
    return LeavingDate;
  }
  var getKeepLeavingInfo = function(){
    return KeepLeavingDate;
  }


  // Returning Variables
  var addReturningInfo = function(newObj,newObj2) {
    ReturningDate=newObj;
    KeepReturningDate=newObj2;
  }

  var getReturningInfo = function(){
    return ReturningDate;
  }
  var getKeepReturningInfo = function(){
    return KeepReturningDate;
  }

  // Flight class
  var addflightClassType = function(newObj) {
    flightClassType=newObj;
  }
  var getflightClassType = function() {
    return flightClassType;
  }

  // Number of stops
  var addnumberOfStops = function(newObj) {
    numberOfStops=newObj;
  }
  var getnumberOfStops = function() {
    return numberOfStops;
  }

  // Number of Adults
  var addnumberOfAdutls = function(newObj){
    numberOfAdutls = newObj;
  }

  var getnumberOfAdutls = function(){
    return numberOfAdutls;
  }

  // Number of Kids
  var addnumberOfKids = function(newObj){
    numberOfKids = newObj;
  }

  var getnumberOfKids = function(){
    return numberOfKids;
  }




  return {
    addFromInfo: addFromInfo,
    getFromInfo: getFromInfo,

    addDestinationInfo: addDestinationInfo,
    getDestinationInfo: getDestinationInfo,

    addLeavingInfo: addLeavingInfo,
    getLeavingInfo: getLeavingInfo,
    getKeepLeavingInfo: getKeepLeavingInfo,

    addReturningInfo: addReturningInfo,
    getReturningInfo: getReturningInfo,
    getKeepReturningInfo: getKeepReturningInfo,

    addflightClassType: addflightClassType,
    getflightClassType: getflightClassType,

    addnumberOfStops: addnumberOfStops,
    getnumberOfStops: getnumberOfStops,

    addnumberOfAdutls: addnumberOfAdutls,
    getnumberOfAdutls: getnumberOfAdutls,

    addnumberOfKids: addnumberOfKids,
    getnumberOfKids: getnumberOfKids

  };

});