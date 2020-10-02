const request = require('request')

// collecting wether information
const forecast = (lat, lon, callback) => {
  const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=2ee5366eb606516cc5957f7d44f9c27d&units=metric'
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to wether service!', undefined)
    } else if (body.message) {
      callback('Something went wrong! please try again or Wrong location', undefined)
    } else {
      callback(undefined, {
        temp: body.main.temp,
        weather: body.weather[0].main
      })
    }
  })
}


module.exports = forecast