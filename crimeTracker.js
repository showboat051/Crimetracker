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