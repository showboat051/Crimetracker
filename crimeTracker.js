
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
  

//Google Maps Basic Map Function
function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 32.8412, lng: -96.7845 },
      zoom: 10
  });
  infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
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



  //Dallas open data
  $.ajax({
    url: "https://www.dallasopendata.com/resource/are8-xahz.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "wuP78c3lOV3O8eisU6WoBMfQ8P"
    },
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});

