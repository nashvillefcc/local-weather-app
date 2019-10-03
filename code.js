document.querySelector("#theTemp").innerHTML = "100";

// TODO: geolocation stuff
navigator.geolocation.getCurrentPosition(function(position) {
  console.table(position.coords.latitude, position.coords.longitude);
});
