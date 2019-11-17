let LocationObject = class {
  constructor(latitude, longitude) {
    this.longitude = longitude;
    this.latitude = latitude;
  }
};

// Returns a promise containing a LocationObject
function getUserCoordinates() {
  if (navigator.geolocation) {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(function(position) {
        resolve(success(position));
      }, reject);
    });
  } else {
    return Promise.reject("Geolocation is not available on this device");
  }

  function success(position) {
    let location = new LocationObject(
      position.coords.latitude,
      position.coords.longitude
    );
    return location;
  }
}

function getTheWeather() {
  getUserCoordinates()
    .then(locationObject => {
      //OpenWeather api app ID
      const appID = "5b5aa6e0a28e190a4cde7796024ad114";
      //Constructs valid weather url request
      return `https://api.openweathermap.org/data/2.5/weather?lat=${locationObject.latitude}&lon=${locationObject.longitude}&AppID=${appID}`;
    })
    .then(url => {
      return fetch(url);
    }) //Gets current weather data from api
    .then(data => {
      return data.json();
    }) //Returns a promise
    .then(res => { //Gives promise a handle (res)
      console.log(res);

      //Display local temperature
      let fTemp = ((res.main.temp - 273.15) * 9) / 5 + 32; //Converts JSON object element res.main.temp from K° to F°
      document.querySelector("#theTemp").innerHTML = Math.round(fTemp); //Rounds and displays current temperature
      
      //Display weather image
      let iconUrl = `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
      console.log(iconUrl);

      //Display weather description

      //Display location description
      
    })
    .catch(err => console.log(err));
}

getTheWeather();
