
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

//database log initial values
var zipSearch = "";
var category = "";


//Log location and crime category search to Firebase
$(document).on('click', "#search", function queryData(QueryData, ZIPcode, time){
  //prevents refreshing page
  event.preventDefault();

  var firebaseServer = "https://crimetracker-1521301503240.firebaseio.com/"

  zipSearch = $("#address").val().trim();

    firebase.database().ref().push({
      ZIPcode: zipSearch,
      time: firebase.database.ServerValue.TIMESTAMP
    });

  });

//Google Maps Basic Map Function
function initMap() {
  // Create a map object and specify the DOM element for display.
  var dallas = {lat: 32.7791, lng: -96.8003};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: dallas,
    zoom: 10
  });

  var geocoder = new google.maps.Geocoder();
 
  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

  function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
     if (status === 'OK') {
       resultsMap.setCenter(results[0].geometry.location);
       var marker = new google.maps.Marker({
         map: resultsMap,
         position: results[0].geometry.location
       });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
       }
    });
  }

// Geolocation  
//   infoWindow = new google.maps.InfoWindow;

//   // Try HTML5 geolocation.
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };

//       infoWindow.setPosition(pos);
//       infoWindow.setContent('Location found.');
//       infoWindow.open(map);
//       map.setCenter(pos);
//     }, function () {
//       handleLocationError(true, infoWindow, map.getCenter());
//     });
//   } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
//     'Error: The Geolocation service failed.' :
//     'Error: Your browser doesn\'t support geolocation.');
//   infoWindow.open(map);
// }

//Dallas open data

$.ajax({ url: "https://www.dallasopendata.com/resource/are8-xahz.json", type: "GET", 
data: { 
  "$limit": 5000, 
  "$$app_token": "wuP78c3lOV3O8eisU6WoBMfQ8" 
  }, 
}).done(function(data) { 
  console.log("Retrieved " + data.length + " records from the dataset!"); 
  console.log(data); 

  for(i = 0; i< data.length; i++) {
    var street = data[i].location;
    if (data[i].block) {
      var block = data[i].block;
      var address = block + " " + street +" " +"Dallas, TX";
    } else {
      var address = street + " "+"Dallas, TX";
    }

  var newDiv = $("<tr>").html("<td>" + data[i].date_time + "</td>"+ "<td>"+ data[i].nature_of_call + "</td>" + "<td>" + address + "</td>");
  var tBody = $("tbody")
  tBody.append(newDiv);
  $(".table-hover").append(tBody)
 
  }
}).fail(function (err) { 
  console.log(err); 
});

// Back to Top Button at bottom of page
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

//When user clicks td the location should upload to the map
// $("<td>").click(function()
// {
//   $("address").text("address");
//  geocodeAddress()
// });