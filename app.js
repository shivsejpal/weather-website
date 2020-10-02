const request = require('request')
const geocode = require('./geocode')
const forecast = require('./forecast')

let address = process.argv[2]

// checking the user input
if (!address) {
  return console.log('Please provide an address')
}


// Getting Forecast Results 
geocode(address, (error, { location, lat, lon }) => {
  if (error) {
    return console.log('Error: ' + error)
  } 
  forecast(lat, lon, (error, forecastData) => { 
    if (error) {
      return console.log('Error: ' + error)
    }   
    console.log('Location: ' + location)
    console.log(forecastData)
  })
})