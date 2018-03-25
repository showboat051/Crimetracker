// $(document).ready(function(){

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC-awVmIVddxV7Waz0HxaiBt_TXQYJ6xlw",
  authDomain: "crimetracker-1521301503240.firebaseapp.com",
  databaseURL: "https://crimetracker-1521301503240.firebaseio.com",
  projectId: "crimetracker-1521301503240",
  storageBucket: "",
  messagingSenderId: "648921276790"
};
firebase.initializeApp(config);

var database = firebase.database();

//Google geolocation API
$.ajax({
  url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBPv_oeAKVz-UvKJX8HbJfyemZrjwmQJCk",
  method: "POST"
})


//Google Maps Basic Map Function
function initMap() {
  // Create a map object and specify the DOM element for display.
  var dallas = { lat: 32.7791, lng: -96.8003 };
  var map = new google.maps.Map(document.getElementById('map'), {
    center: dallas,
    zoom: 10
  });
  // var input = document.getElementById("search")    
  // var searchBox = new google.maps.places.SearchBox((input));

  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

//BEGIN MAP MARKERS
/*Quick notes:
1. This is intended to create pins on the street addresses of crimes.
2. We will need to use the Google GeoLocate API to convert addresses into coords, then feed those into the {position} object
3. The {content} object is a little popup modal onClick(marker). I think we could put the Description and Address of the crimes
*/
//This will be an array of markers, where we will feed in coords from the Dallas Open Data API
// var openData = "https://www.dallasopendata.com/api/views/tbnj-w5hb/rows.json?accessType=DOWNLOAD"

// var markers = {};
// var address;
// addMarker({
//     coords:{lat:38.8403, lng:-97.6114},
//     iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
//     //this content will be overwrittten by the if() statement in the addMarker function
//     content:'<h1>test/h1>'
//     });

// function addMarker(carts){
//     var marker = new google.maps.Marker({
//     position:carts.coords,
//     map: map,
//     icon: {
//         path: google.maps.SymbolPath.CIRCLE,
//         scale: 8
//     }
//     });

//     //check for custom icon to prevent undefined
//     if(carts.iconImage){
//         marker.setIcon(carts.iconImage);
//     }

//     //check content to prevent undefined
//     if(carts.content){
//         var infoWindow = new google.maps.InfoWindow({
//             //here, we will have to feed in two fields from the Dallas Open Data API
//             content:'<h2>Title</h2><br><h3>address</h3>'
//         });

//         marker.addListener('click', function(){
//             infoWindow.open(map, marker);
//         });
//     }
// }
//END MAP MARKERS

//Creating additional rows for table for data
// var createRow = function(data) {
//   var tBody = $("tbody");
//   var tRow = $("<tr>");
//   // var dateTd = $("<td>").text(data.date_time);
//   // var crimeTd = $("<td").text(data.nature_of_call);
//   // var locationTd = $("<td>").text(data.block.location);
//   console.log(dateTd);
//   console.log(crimeTd);
//   console.log(locationTd);

// //   //Append table data to table row
//   tRow.append(dateTd, crimeTd, locationTd);
//   tBody.append(tRow);
// };
//

//Dallas open data

$.ajax({ url: "https://www.dallasopendata.com/resource/are8-xahz.json", type: "GET", 
data: { 
  "$limit": 5000, 
  "$$app_token": "wuP78c3lOV3O8eisU6WoBMfQ8" 
  }, 
}).done(function(data) { 
  alert("Retrieved " + data.length + " records from the dataset!"); 
  console.log(data); 

  for(i = 0; i< data.length; i++) {
    var street = data[i].location;
    if (data[i].block) {
      var block = data[i].block;
      var address = block + " " + street;
    } else {
      var address = street;
    }

  var newDiv = $("<tr>").html("<td>" + data[i].date_time + "</td>"+ "<td>"+ data[i].nature_of_call + "</td>" + "<td>" + address + "</td>");
  
  $(".table-hover").append(newDiv)

 
  }
}).fail(function (err) { console.log(err); 

});

//need to add on click for location

