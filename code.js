

let title = document.querySelector('div h1'); 
console.log(title) 


//geolocation


function getCoordinates() {
    function success(position) {
        const latitudePosition = position.coords.latitude;
        const longitudePosition = position.coords.longitude;
        console.log(latitudePosition, longitudePosition) 
    }

    function error() {
        console.log("unable to retrieve location")
    }

    if (!navigator.geolocation) {
        /* geolocation is available */
        console.log("Geolocation not supported")
        
    } else {
        /* geolocation IS NOT available */
        console.log("Geo is supported")
        navigator.geolocation.getCurrentPosition(success, error)
    }

}

getCoordinates();



document.querySelector("#theTemp").innerHTML = "100";



