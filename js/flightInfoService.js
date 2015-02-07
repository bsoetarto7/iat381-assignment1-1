flightinfoApp.service('InfoService', function() {
  var flightInfo = [
  {    'Flight': 'AC997',
  'leaving': 0910,
  'returning:': 1030,
  'price': 2000,
  'Air_line': 'Air Canada',
  'image': 'AirCanada.png',

  airPortL : 'YVR ',
  airPortR : 'HKG ',

  'leavingFlightNo': 'AC999',
  'departLocationL' : 'Vancouver',
  'arriveLocationL' : 'Hong Kong',
  'arrivelTimeL': 1745,

  'returningFlightNo' : 'AC979',
  'departLocationR' : 'Hong Kong',
  'arriveLocationR' : 'Vancouver',
  'arrivelTimeR': 1025

},
{'Flight': 'DL4849',
'leaving': 1010,
'returning': 1030,
'price': 1900,
'Air_line': 'Delta Air Lines',
'image': 'Delta.png',

airPortL : 'YVR ',
airPortR : 'HKG ',

'leavingFlightNo': 'DL4849',
'departLocationL' : 'Vancouver',
'arriveLocationL' : 'Hong Kong',
'arrivelTimeL': 1245,

'returningFlightNo' : 'DL9379',
'departLocationR' : 'Hong Kong',
'arriveLocationR' : 'Vancouver',
'arrivelTimeR': 1025
},
{'Flight': 'WS3255',
'leaving': 1010,
'returning': 1030,
'price': 2100,
'Air_line': 'WestJet',
'image': 'WestJet.png',

airPortL : 'YVR ',
airPortR : 'HKG ',

'leavingFlightNo': 'Ws3255',
'departLocationL' : 'Vancouver',
'arriveLocationL' : 'Hong Kong',
'arrivelTimeL': 1745,

'returningFlightNo' : 'Ws3479',
'departLocationR' : 'Hong Kong',
'arriveLocationR' : 'Vancouver',
'arrivelTimeR': 1025
},
{'Flight': 'CX838',
'leaving': 1940,
'returning': 1030,
'snippet': 'The Next, Next Generation tablet.',
'price': 2800,
'Air_line': 'Cathay Pacific Airways',
'image': 'CathayPacific.png',


airPortL : 'YVR ',
airPortR : 'HKG ',

'leavingFlightNo': 'CX839',
'departLocationL' : 'Vancouver',
'arriveLocationL' : 'Hong Kong',
'arrivelTimeL': 2145,

'returningFlightNo' : 'CX888',
'departLocationR' : 'Hong Kong',
'arriveLocationR' : 'Vancouver',
'arrivelTimeR': 1025
},
      
      
{ 'Flight': 'AC997',
  'leaving': 0910,
  'returning:': 1030,
  'price': 2000,
  'Air_line': 'Air Canada',
  'image': 'AirCanada.png',

  airPortL : 'YVR ',
  airPortR : 'NYC ',

  'leavingFlightNo': 'AC999',
  'departLocationL' : 'Vancouver',
  'arriveLocationL' : 'New York',
  'arrivelTimeL': 1745,

  'returningFlightNo' : 'AC979',
  'departLocationR' : 'New York',
  'arriveLocationR' : 'Vancouver',
  'arrivelTimeR': 1025

},
{'Flight': 'DL4849',
'leaving': 1010,
'returning': 1030,
'price': 1900,
'Air_line': 'Delta Air Lines',
'image': 'Delta.png',

airPortL : 'YVR ',
airPortR : 'NYC ',

'leavingFlightNo': 'DL4849',
'departLocationL' : 'Vancouver',
'arriveLocationL' : 'New York',
'arrivelTimeL': 1245,

'returningFlightNo' : 'DL9379',
'departLocationR' : 'New York',
'arriveLocationR' : 'Vancouver',
'arrivelTimeR': 1025
},
{'Flight': 'WS3255',
'leaving': 1010,
'returning': 1030,
'price': 2100,
'Air_line': 'WestJet',
'image': 'WestJet.png',

airPortL : 'YVR ',
airPortR : 'NYC ',

'leavingFlightNo': 'Ws3255',
'departLocationL' : 'Vancouver',
'arriveLocationL' : 'New York',
'arrivelTimeL': 1745,

'returningFlightNo' : 'Ws3479',
'departLocationR' : 'New York',
'arriveLocationR' : 'Vancouver',
'arrivelTimeR': 1025
},
{'Flight': 'CX838',
'leaving': 1940,
'returning': 1030,
'snippet': 'The Next, Next Generation tablet.',
'price': 2800,
'Air_line': 'Cathay Pacific Airways',
'image': 'CathayPacific.png',


airPortL : 'YVR ',
airPortR : 'NYC ',

'leavingFlightNo': 'CX839',
'departLocationL' : 'Vancouver',
'arriveLocationL' : 'New York',
'arrivelTimeL': 2145,

'returningFlightNo' : 'CX888',
'departLocationR' : 'New York',
'arriveLocationR' : 'Vancouver',
'arrivelTimeR': 1025
},
      
  {    'Flight': 'AC997',
  'leaving': 0910,
  'returning:': 1030,
  'price': 2000,
  'Air_line': 'Air Canada',
  'image': 'AirCanada.png',

  airPortL : 'YVR ',
  airPortR : 'YUL ',

  'leavingFlightNo': 'AC999',
  'departLocationL' : 'Vancouver',
  'arriveLocationL' : 'Montreal',
  'arrivelTimeL': 1745,

  'returningFlightNo' : 'AC979',
  'departLocationR' : 'Montreal',
  'arriveLocationR' : 'Vancouver',
  'arrivelTimeR': 1025

},
{'Flight': 'DL4849',
'leaving': 1010,
'returning': 1030,
'price': 1900,
'Air_line': 'Delta Air Lines',
'image': 'Delta.png',

airPortL : 'YVR ',
airPortR : 'YUL ',

'leavingFlightNo': 'DL4849',
'departLocationL' : 'Vancouver',
'arriveLocationL' : 'Montreal',
'arrivelTimeL': 1245,

'returningFlightNo' : 'DL9379',
'departLocationR' : 'Montreal',
'arriveLocationR' : 'Vancouver',
'arrivelTimeR': 1025
},
{'Flight': 'WS3255',
'leaving': 1010,
'returning': 1030,
'price': 2100,
'Air_line': 'WestJet',
'image': 'WestJet.png',

airPortL : 'YVR ',
airPortR : 'YUL ',

'leavingFlightNo': 'Ws3255',
'departLocationL' : 'Vancouver',
'arriveLocationL' : 'Montreal',
'arrivelTimeL': 1745,

'returningFlightNo' : 'Ws3479',
'departLocationR' : 'Montreal',
'arriveLocationR' : 'Vancouver',
'arrivelTimeR': 1025
},
{'Flight': 'CX838',
'leaving': 1940,
'returning': 1030,
'snippet': 'The Next, Next Generation tablet.',
'price': 2800,
'Air_line': 'Cathay Pacific Airways',
'image': 'CathayPacific.png',


airPortL : 'YVR ',
airPortR : 'YUL ',

'leavingFlightNo': 'CX839',
'departLocationL' : 'Vancouver',
'arriveLocationL' : 'Montreal',
'arrivelTimeL': 2145,

'returningFlightNo' : 'CX888',
'departLocationR' : 'Montreal',
'arriveLocationR' : 'Vancouver',
'arrivelTimeR': 1025
},
      
      
      
      
  {    'Flight': 'AC997',
  'leaving': 0910,
  'returning:': 1030,
  'price': 2000,
  'Air_line': 'Air Canada',
  'image': 'AirCanada.png',

  airPortL : 'YEG ',
  airPortR : 'YUL ',

  'leavingFlightNo': 'AC999',
  'departLocationL' : 'Edmonton',
  'arriveLocationL' : 'Montreal',
  'arrivelTimeL': 1745,

  'returningFlightNo' : 'AC979',
  'departLocationR' : 'Montreal',
  'arriveLocationR' : 'Edmonton',
  'arrivelTimeR': 1025

},
{'Flight': 'DL4849',
'leaving': 1010,
'returning': 1030,
'price': 1900,
'Air_line': 'Delta Air Lines',
'image': 'Delta.png',

airPortL : 'YEG ',
airPortR : 'YUL ',

'leavingFlightNo': 'DL4849',
'departLocationL' : 'Edmonton',
'arriveLocationL' : 'Montreal',
'arrivelTimeL': 1245,

'returningFlightNo' : 'DL9379',
'departLocationR' : 'Montreal',
'arriveLocationR' : 'Edmonton',
'arrivelTimeR': 1025
},
{'Flight': 'WS3255',
'leaving': 1010,
'returning': 1030,
'price': 2100,
'Air_line': 'WestJet',
'image': 'WestJet.png',

airPortL : 'YEG ',
airPortR : 'YUL ',

'leavingFlightNo': 'Ws3255',
'departLocationL' : 'Edmonton',
'arriveLocationL' : 'Montreal',
'arrivelTimeL': 1745,

'returningFlightNo' : 'Ws3479',
'departLocationR' : 'Montreal',
'arriveLocationR' : 'Edmonton',
'arrivelTimeR': 1025
},
{'Flight': 'CX838',
'leaving': 1940,
'returning': 1030,
'snippet': 'The Next, Next Generation tablet.',
'price': 2800,
'Air_line': 'Cathay Pacific Airways',
'image': 'CathayPacific.png',


airPortL : 'YEG ',
airPortR : 'YUL ',

'leavingFlightNo': 'CX839',
'departLocationL' : 'Edmonton',
'arriveLocationL' : 'Montreal',
'arrivelTimeL': 2145,

'returningFlightNo' : 'CX888',
'departLocationR' : 'Montreal',
'arriveLocationR' : 'Edmonton',
'arrivelTimeR': 1025
},
      

  {    'Flight': 'AC997',
  'leaving': 0910,
  'returning:': 1030,
  'price': 2000,
  'Air_line': 'Air Canada',
  'image': 'AirCanada.png',

  airPortL : 'YEG ',
  airPortR : 'HKG ',

  'leavingFlightNo': 'AC999',
  'departLocationL' : 'Edmonton',
  'arriveLocationL' : 'Hong Kong',
  'arrivelTimeL': 1745,

  'returningFlightNo' : 'AC979',
  'departLocationR' : 'Hong Kong',
  'arriveLocationR' : 'Edmonton',
  'arrivelTimeR': 1025

},
{'Flight': 'DL4849',
'leaving': 1010,
'returning': 1030,
'price': 1900,
'Air_line': 'Delta Air Lines',
'image': 'Delta.png',

airPortL : 'YEG ',
airPortR : 'HKG ',

'leavingFlightNo': 'DL4849',
'departLocationL' : 'Edmonton',
'arriveLocationL' : 'Hong Kong',
'arrivelTimeL': 1245,

'returningFlightNo' : 'DL9379',
'departLocationR' : 'Hong Kong',
'arriveLocationR' : 'Edmonton',
'arrivelTimeR': 1025
},
      
      
      
      
  {    'Flight': 'AC997',
  'leaving': 0910,
  'returning:': 1030,
  'price': 2000,
  'Air_line': 'Air Canada',
  'image': 'AirCanada.png',

  airPortL : 'OAK ',
  airPortR : 'SAN ',

  'leavingFlightNo': 'AC999',
  'departLocationL' : 'Oakland',
  'arriveLocationL' : 'San Diego',
  'arrivelTimeL': 1745,

  'returningFlightNo' : 'AC979',
  'departLocationR' : 'San Diego',
  'arriveLocationR' : 'Oakland',
  'arrivelTimeR': 1025

},
{'Flight': 'DL4849',
'leaving': 1010,
'returning': 1030,
'price': 1900,
'Air_line': 'Delta Air Lines',
'image': 'Delta.png',

airPortL : 'OAK ',
airPortR : 'SAN ',

'leavingFlightNo': 'DL4849',
'departLocationL' : 'Oakland',
'arriveLocationL' : 'San Diego',
'arrivelTimeL': 1245,

'returningFlightNo' : 'DL9379',
'departLocationR' : 'San Diego',
'arriveLocationR' : 'Oakland',
'arrivelTimeR': 1025
},
      
      
      
  {    'Flight': 'AC997',
  'leaving': 0910,
  'returning:': 1030,
  'price': 2000,
  'Air_line': 'Air Canada',
  'image': 'AirCanada.png',

  airPortL : 'YWG ',
  airPortR : 'SAN ',

  'leavingFlightNo': 'AC999',
  'departLocationL' : 'Winnipeg',
  'arriveLocationL' : 'San Diego',
  'arrivelTimeL': 1745,

  'returningFlightNo' : 'AC979',
  'departLocationR' : 'San Diego',
  'arriveLocationR' : 'Winnipeg',
  'arrivelTimeR': 1025

},
{'Flight': 'DL4849',
'leaving': 1010,
'returning': 1030,
'price': 1900,
'Air_line': 'Delta Air Lines',
'image': 'Delta.png',

airPortL : 'YWG ',
airPortR : 'SAN ',

'leavingFlightNo': 'DL4849',
'departLocationL' : 'Winnipeg',
'arriveLocationL' : 'San Diego',
'arrivelTimeL': 1245,

'returningFlightNo' : 'DL9379',
'departLocationR' : 'San Diego',
'arriveLocationR' : 'Winnipeg',
'arrivelTimeR': 1025
},
      
      
  {    'Flight': 'AC997',
  'leaving': 0910,
  'returning:': 1030,
  'price': 2000,
  'Air_line': 'Air Canada',
  'image': 'AirCanada.png',

  airPortL : 'HKG ',
  airPortR : 'SAN ',

  'leavingFlightNo': 'AC999',
  'departLocationL' : 'Hong Kong',
  'arriveLocationL' : 'San Diego',
  'arrivelTimeL': 1745,

  'returningFlightNo' : 'AC979',
  'departLocationR' : 'San Diego',
  'arriveLocationR' : 'Hong Kong',
  'arrivelTimeR': 1025

},
{'Flight': 'DL4849',
'leaving': 1010,
'returning': 1030,
'price': 1900,
'Air_line': 'Delta Air Lines',
'image': 'Delta.png',

airPortL : 'HKG ',
airPortR : 'SAN ',

'leavingFlightNo': 'DL4849',
'departLocationL' : 'Hong Kong',
'arriveLocationL' : 'San Diego',
'arrivelTimeL': 1245,

'returningFlightNo' : 'DL9379',
'departLocationR' : 'San Diego',
'arriveLocationR' : 'Hong Kong',
'arrivelTimeR': 1025
},
      
      
];


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

var favouritesList=[];

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

  var errorMessage = '';
  var checkInput = function(){

    errorMessage = '';
    if(FromInfoitems === '' && DestinationInfoItems ===''){
      errorMessage = 'Please enter the departing and destination location for suggestions.';
    }else if(FromInfoitems == ''){
      errorMessage = 'Please enter the departing location for suggestions.';
    }else if(DestinationInfoItems ==''){
      errorMessage = 'Please enter the destination location for suggestions.';
    }
  }


  var getFilter = function(){
    checkInput();

    if (errorMessage ==''){
      var arr =[];
      for (var i = 0; i < flightInfo.length; i++) {
        if (flightInfo[i].airPortL == String(FromInfoitems).split("-")[0]
          && flightInfo[i].airPortR == String(DestinationInfoItems).split("-")[0]) {
                arr.push(flightInfo[i]); // equivalent to specifi List<whatever>#add
            }
          }
      // console.log(arr);

      if(arr.length == 0) errorMessage ='Sorry no match found, please try other location.';
      else return arr;
  }
}

var messageDisplay = function(){
  return errorMessage;
}

var addFavourites = function(newObj){
  var noFound = true;
  for(var i = 0; i< favouritesList.length; i++){
    if(newObj === favouritesList[i]){
      noFound = false;
    }
  }

  if(noFound) favouritesList.push(newObj);
}

var removeFavourites = function(newObj){
  for(var i = 0; i< favouritesList.length; i++){
    if(newObj === favouritesList[i]){
      favouritesList.splice(i, 1);
      break;
    }
  }
}



var getFavourites = function(){
  return favouritesList;
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
  getnumberOfKids: getnumberOfKids,

  getFilter: getFilter,
  messageDisplay: messageDisplay,

  addFavourites: addFavourites,
  removeFavourites: removeFavourites,
  getFavourites: getFavourites

};

});