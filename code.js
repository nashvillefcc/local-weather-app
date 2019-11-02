



document.querySelector("#theTemp").innerHTML = "100";
let locationText = document.querySelector("#location")


// Returns a promise containing the user's latitude and longitude
function getUserCoordinates() {
  if (navigator.geolocation) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (position) {
        resolve(success(position));
      }, reject);
    });
  } else {
    return Promise.reject("Geolocation is not available on this device");
  }

  function success(position) {
    return {
      lat: position.coords.latitude,
      long: position.coords.longitude
    };
  }
}

function getTheWeather() {
  getUserCoordinates()
    .then(position => {
      console.log(position);
      // hitTheWeatherApi(position) // TODO!
      locationText.innerHTML = "<span>" + position.lat + "</span> <span>" + position.long + "</span> "
    })
    .catch(err => {
      locationText.innerHTML = err.message; 
    });
}

getTheWeather();

