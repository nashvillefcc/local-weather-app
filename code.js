<<<<<<< HEAD


let title = document.querySelector('div h1'); 
console.log(title)



console.log("hello there")

if ("geolocation" in navigator) {
    /* geolocation is available */
    console.log("geo ready")
} else {
    /* geolocation IS NOT available */
    console.log("geo no go")
}

navigator.geolocation.getCurrentPosition(function (position) {

    let locationName = document.querySelector('#locationName')

    console.log(position.coords.latitude, position.coords.longitude)
    const latitude = position.coords.latitude; 
    const longitude = position.coords.longitude; 
    locationName.innerHTML = '<p>' + latitude + '</p><p>' + longitude + '</p>'; 
});

=======
document.querySelector("#theTemp").innerHTML = "100";

// TODO: geolocation stuff
navigator.geolocation.getCurrentPosition(function(position) {
  console.table(position.coords.latitude, position.coords.longitude);
});
>>>>>>> develop
