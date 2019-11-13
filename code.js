let lat=0;                             
let long=0; 
const appID='';                 //OpenWeather api app ID
const url='';                   //Constructs valid weather url reque
const cityURL='';               //Construct valid Nominatim maps city url request

document.querySelector("#theTemp").innerHTML = "100";
let locationText = document.querySelector("#location");

let LocationObject = class {
  constructor(latitude, longitude) {
    this.longitude = longitude; 
    this.latitude = latitude; 
  }
} 

// Returns a promise containing the user's latitude and longitude
function getUserCoordinates() {
    if (navigator.geolocation)     {
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
      
      lat = position.latitude;
      long = position.longitude;  
      appID ='5b5aa6e0a28e190a4cde7796024ad114';                                                      //OpenWeather api app ID
      url ='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&AppID='+appID;   //Constructs valid weather url reque
      cityURL ='https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+lat+'&lon='+long;     //Construct valid Nominatim maps city url request
      
      })
      
      .then(fetch(url))                                               //Gets current weather data from api
      .then(data=>{return data.json()})                               //Returns a promise
      .then(res=>{                                                    //Gives promise a handle (res)
        
        let fTemp = (((res.main.temp)-273.15)*9/5+32);                //Converts JSON object element res.main.temp from K° to F°
        console.log(fTemp);
        document.querySelector("#theTemp").innerHTML = (Math.round(fTemp));   //Rounds and displays current temperature
      
        let fIcon = (res.weather[0].icon);
        console.log(fIcon);
        document.getElementById("theIcon").src = "http://openweathermap.org/img/wn/"+fIcon+"@2x.png"; //Inserts URL for correct icon image into the HTML
      
        let fDesc = (res.weather[0].description);
        console.log(fDesc);
        document.querySelector("#theDesc").innerHTML = fDesc;          //Displays the correct weather description
      
        })
      
      .catch(err=>console.log(err))
      
      /*fetch(cityURL)
      .then(cityData=>{return cityData.json()})
      .then(res=>{
      
        console.log(cityURL);
        
      
        let fCity = (res.address.town);   
        let fState = (res.address.state);
        let fCityState = fCity+", "+fState;
        document.querySelector("#theCity").innerHTML = fCityState;   //Displays city and state name (based on the provided lat and long)
      
      })  
        
      .catch(err=>console.log(err))
      
      });  
      
      var dt = new Date();
      document.getElementById("dateTime").innerHTML = dt.toLocaleString();
      */

})
    .catch(err => {
      locationText.innerHTML = err.message; 
    })
})

getTheWeather();

