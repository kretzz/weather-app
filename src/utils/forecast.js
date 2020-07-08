const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1f02457f37dcc339a7306b232b56fdaa&query='+latitude+','+longitude

    request({url, json: true}, (error, {body}) => {
        if(error)  {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location!', undefined)
        } else {
            callback(
                    undefined, 
                    body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + 
                    ' degress out. It feels like ' + body.current.feelslike+' degrees.\nThere is a ' 
                    + body.current.precip + '% chance of rain. The Humidity is '+body.current.humidity)
        }
    })
}

module.exports = forecast