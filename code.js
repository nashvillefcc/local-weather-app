

let title = document.querySelector('div h1'); 
console.log(title)



console.log("hello there")

//geolocation

if ("geolocation" in navigator) {
    /* geolocation is available */
    console.log("geo ready")
} else {
    /* geolocation IS NOT available */
    console.log("geo no go")
}

navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position)

    console.log(position.coords.latitude, position.coords.longitude)
    const latitudePosition = position.coords.latitude; 
    const longitudePosition = position.coords.longitude; 
    findCity(latitudePosition, longitudePosition); 
    //set position to innerHTML
    
    //TO DO 
    //use latitude and longitude in maps API to find nearest city
    //find city function
    
});

document.querySelector("#theTemp").innerHTML = "100";

// TODO: geolocation stuff
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