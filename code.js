



document.querySelector("#theTemp").innerHTML = "100";
let locationText = document.querySelector("#location")

let LocationObject = class {
  constructor(latitude, longitude) {
    this.longitude = longitude; 
    this.latitude = latitude; 
  }
} 


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
    let location = new LocationObject(position.coords.latitude, position.coords.longitude)
    return location; 
  }
}

function getTheWeather() {
  getUserCoordinates()
    .then(position => {
      // hitTheWeatherApi(position) // TODO!
      locationText.innerHTML = "<span>" + position.latitude + "</span> <span>" + position.longitude + "</span>"
    })
    .catch(err => {
      locationText.innerHTML = err.message; 
    });
}

getTheWeather();

