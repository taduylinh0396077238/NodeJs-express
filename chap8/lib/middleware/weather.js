const getWeatherData = () => [
    {
        location: {
            name: 'Portland',
        },
        forecastUrl: 'http://api.weather.gov/gridpoints/PQR/112,103/forecast',
        iconUrl: 'http://api.weather.gov/icons/land/day/tsra,40?size=medium',
        weather: 'Chance Shower And Thunderstorms',
        temp: '59 F'
    },
    {
        location: {
            name: 'Bend',
        },
        forecastUrl: 'http://api.weather.gov/gridpoints/PDT/34,40/forecast',
        iconUrl: 'http://api.weather.gov/icons/land/day/tsra_sct,50?size=medium',
        weather: 'Scattered Shower And Thunderstorms',
        temp: '51 F'
    },
    {
        location: {
            name: 'Manzanita',
        },
        forecastUrl: 'http://api.weather.gov/gridpoints/PQR/73,120/forecast',
        iconUrl: 'http://api.weather.gov/icons/land/day/tsra,90?size=medium',
        weather: 'Shower And Thunderstorms',
        temp: '55 F'
    },
]

const weatherMiddleware = (req, res, next) => {
    if (!res.locals.partials) res.locals.partials = {}
    res.locals.partials.weatherContext = getWeatherData()
    next()
}

module.exports = weatherMiddleware