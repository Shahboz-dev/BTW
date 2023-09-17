let map; 

function getClientLoc(){
    const success = (position) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;

        return {lat :lat , lng:lng}
    }

    const error = () => {
        alert("Error occured")
    }

    navigator.geolocation.getCurrentPosition(success, error)
}
function initMap(){

    map = new google.maps.Map(document.getElementById('map'),
    {
        center:{lat:40.48972, lng: 68.78417},
        zoom:17,
    })
}

window.initMap() = initMap()