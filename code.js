// Get current coordinates, hit weather API, and display current temperature:

navigator.geolocation.getCurrentPosition(function(position) {     //Gets user's lat and long
  console.table(position.coords.latitude, position.coords.longitude);

let lat=(position.coords.latitude);                //Need to validate to range -90 to +90?
let long=(position.coords.longitude);              //Need to validate to range 0 to 180?
const appID='5b5aa6e0a28e190a4cde7796024ad114';    //OpenWeather api app ID
const url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&AppID='+appID;   //Constructs valid url request

fetch(url)
.then(data=>{return data.json()})                  //Returns a promise
.then(res=>{                                       //Gives promise a handle (res)
  let fTemp = (((res.main.temp)-273.15)*9/5+32);   //Converts JSON object element res.main.temp from K° to F°
  console.log(fTemp);
  document.querySelector("#theTemp").innerHTML = (Math.round(fTemp));   //Rounds and displays current temperature
})  
.catch(err=>console.log(err))

//Note: Need to add API call for city. Format is:  const Url='https://api.openweathermap.org/data/2.5/weather?q=Nashville,TNuk&APPID=5b5aa6e0a28e190a4cde7796024ad114';

});




