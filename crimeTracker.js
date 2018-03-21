$(document).ready(function(){


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

//getlocation
$("#getLocation").onclick = function() {
  var startPos;
  var nudge = document.getElementById("nudge");

  var showNudgeBanner = function() {
    nudge.style.display = "block";
  };

  var hideNudgeBanner = function() {
    nudge.style.display = "none";
  };

  var nudgeTimeoutId = setTimeout(showNudgeBanner, 5000);

  var geoSuccess = function(position) {
    hideNudgeBanner();
    // We have the location, don't display banner
    clearTimeout(nudgeTimeoutId);

    // Do magic with location
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };
  var geoError = function(error) {
    switch(error.code) {
      case error.TIMEOUT:
        // The user didn't accept the callout
        showNudgeBanner();
        break;
    }
  };

  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};
//end get location


});
  //Google geolocation API
//   $.ajax({
//     url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBPv_oeAKVz-UvKJX8HbJfyemZrjwmQJCk",
//     method: "GET"
//   })

//Map code 1
// function initMap() {
//     var location = new google.maps.LatLng(32.7791, 96.8003);

//     var mapCanvas = document.getElementById("googleMap");

//     var mapOptions = {
//         center: location,
//         zoom: 16,
//         panControl: false,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     }
//     var map = new google.maps.Map(mapCanvas, mapOptions);
// }

// google.maps.event.addDomListner(window, 'load', initMap);

// var mapOptions = {
//                 center: new google.maps.LatLng(28.1823294, -82.352912),
//                 zoom: 9,
//                 mapTypeId: google.maps.MapTypeId.HYBRID,
//                 scrollwheel: false,
//                 draggable: false,
//                 panControl: true,
//                 zoomControl: true,
//                 mapTypeControl: true,
//                 scaleControl: true,
//                 streetViewControl: true,
//                 overviewMapControl: true,
//                 rotateControl: true,
//             };
// var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        
// google.maps.event.addDomListener(window, 'load', initialize);

//second map code
//Get location from button


function initMap(){
var mapOptions = {
    center: new google.maps.LatLng(28.1823294, -82.352912),
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    scrollwheel: false,
    draggable: false,
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    overviewMapControl: true,
    rotateControl: true,
};
var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initMap);


  //Dallas open data
  $.ajax({
    url: "https://www.dallasopendata.com/resource/are8-xahz.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "wuP78c3lOV3O8eisU6WoBMfQ8P"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});

