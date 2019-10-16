

let title = document.querySelector('div h1'); 
console.log(title) 

// function findCity(latitudePosition, longitudePosition) {
//     console.log('https://us1.locationiq.com/v1/reverse.php?key=9f7d27c683c49c&lat=' + latitudePosition + '&lon=' + longitudePosition + '&format=json')
//     let searchURL = 'https://api.weather.gov/points/' + latitudePosition + longitudePosition;
//     //apiSearch(searchURL)
//     console.log(latitudePosition, longitudePosition)
//     fetch(searchURL)
//         .then(res => res.json())
//         .then(res => {
//             console.log(res)
//             displayCity(res)
//         })
//         .catch(function (error) {
//             console.log(error)
//         });

// }

console.log("hello there")

//geolocation

if ("geolocation" in navigator) {
    /* geolocation is available */
    console.log("geo ready")
} else {
    /* geolocation IS NOT available */
    console.log("geo no go")
    alert("Unable to display weather without location data.Please refresh to allow location services on your browser")
}

navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position)

    console.log(position.coords.latitude, position.coords.longitude)
    const latitudePosition = position.coords.latitude; 
    const longitudePosition = position.coords.longitude; 
    
    findCity(latitudePosition, longitudePosition); 
    findWeather(latitudePosition, longitudePosition)
    //set position to innerHTML
    
    //TO DO 
    //use latitude and longitude in maps API to find nearest city
    //find city function
    //do something if there is no location enabled
    
});

document.querySelector("#theTemp").innerHTML = "100";


navigator.geolocation.getCurrentPosition(function(position) {
  console.table(position.coords.latitude, position.coords.longitude);
  
});

function findCity(latitudePosition, longitudePosition) {
    console.log('https://us1.locationiq.com/v1/reverse.php?key=9f7d27c683c49c&lat=' +  latitudePosition + '&lon=' + longitudePosition + '&format=json')
    let searchURL = 'https://us1.locationiq.com/v1/reverse.php?key=9f7d27c683c49c&lat=' + latitudePosition + '&lon=' + longitudePosition + '&format=json'; 
    //apiSearch(searchURL)
    console.log(latitudePosition, longitudePosition)
    fetch(searchURL)
        .then(res=> res.json())
        .then(res => {
            console.log(res)
            displayCity(res)
        })
        .catch(function (error) {
            console.log(error)
        });  
}
// latitudeText.innerHTML = latitude; 
// longitudeText.innerHTML = longitude; 

//api fetch

// $.ajax(searchURL).done(function (response) {
//     console.log(response)
// })

//passes in foundCityName and updates location
function displayCity(res){
    cityName = res.display_name; 
    let location = document.querySelector('#location')
    location.innerHTML = res.display_name; 
}

 


// function findWeather(latitudePosition, longitudePosition) {
//     fetch(settings)
//         .then(res => res.json())
//         .then(res => {console.log(res)
//         })
// }

