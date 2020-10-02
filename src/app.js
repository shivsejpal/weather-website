const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

//Deefine paths for express
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to server
app.use(express.static(publicDirectoryPath))

const name = 'Shivang Sejpal'

//setup static directory to serve
app.get('', (req, res) => {
  res.render('index', {
    title: 'Wheather',
    name
  })
})


app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name,
    age: '21'
  })
})
app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'Enter the Location in the Location search bar and click on search to get information',
    name
  })
})

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address'
    })
  }
  
  geocode(req.query.address, (error, { location, lat, lon } = {}) => {
    if (error) {
      return res.send ({ error })
    }
    forecast(lat, lon, (error, forecastData) => {
      if (error) {
        return res.send({ error })
      }
      res.send({
        forecast: forecastData,
        location,
        address: req.query.address
      })
    })
  })

})  

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name,
    errorMessage: 'Help article not Found!'
  })
})
app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name,
    errorMessage: 'Page Not Found.'
  })
})  

app.listen(3000, () => {
  console.log('server is up on port 3000')
})