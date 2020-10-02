
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#messageOne')
const msgTwo = document.querySelector('#messageTwo')
const msgThree = document.querySelector('#messageThree')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    msgOne.textContent = 'Loading...'
    msgTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msgOne.textContent = data.error
            } else {
                msgOne.textContent = 'Location: ' + data.location
                const temp = data.forecast.temp
                const weather = data.forecast.weather
                msgTwo.textContent = 'Temp: '+ temp + ' degree'
                msgThree.textContent = 'Weather: '+ weather  
            }
        })
    })
})