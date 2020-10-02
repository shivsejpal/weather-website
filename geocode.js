const request = require('request')

//converting location to coordinates
const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic2hpdnNlanBhbDI4IiwiYSI6ImNrZjZnMGx2bjBzaWszMHFkZG9wbnl0cnAifQ.eBndb-KAIFi3bmIuk8nStA&limit=1'
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location service!', undefined)
    } else if ( body.message) {
      callback('Something went wrong', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to to find location. Try another search', undefined)
    } else {
      callback(undefined, {
        lat: body.features[0].center[1],
        lon: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}


module.exports = geocode