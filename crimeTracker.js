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

  // Google geolocation API
  // $.ajax({
  //   url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBPv_oeAKVz-UvKJX8HbJfyemZrjwmQJCk",
  //   method: "POST"
  // }).then(function(response){

  // })

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