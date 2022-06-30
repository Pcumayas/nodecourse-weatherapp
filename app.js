const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=8336946becd653cf5a0cc0a400c04936&query=37.8267,-122.4233'

request({url: url, json:true}, (error, response) => {
    console.log(response.body.current)
})