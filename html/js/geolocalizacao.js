const success = pos => console.log(pos.coords.latitude, pos.coords.longitude)

const error = err => console.log(err)

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 10000
})