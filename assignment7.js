const fetch = require("node-fetch");
const countriesData = function() {
    console.log(" Getting countries from each letter of english")
    return fetch('https://raw.githubusercontent.com/shbhm-dev/VSassignment/master/countries.json')
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            } else {
                console.log("Fetched all the countries (Status Done)")
                return res.json()
            }
        }).catch(err) {
            console.log(err)
        }

}
const countryCapital = function(country) {
    return fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            } else {
                return res.json()
            }
        }).catch(err) {
            console.log(err)
        }

}

const getWeather = function(city) {

    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb7743ba2dadf8737bea780049092ce6`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            } else {

                return res.json()
            }
        })
}

const getCountriesData = async function() {
    const data = await countriesData()

    const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    const countries = Object.keys(data)


    for (const alphabet of alphabets) {
        try {
            if (countries.some((country) => country[0] == alphabet)) {
                // console.log(aphabet)
            } else {
                throw new Error(`‘No country found from alphabet ${alphabet}`)
            }
        } catch (err) {
            console.log(err)
        }
    }



    getCountryCapital(countries, data)

}
const getCountryCapital = async function(countries, data) {

    let totalCapitals = 0
    for (const country of countries) {
        const capitals = await countryCapital(country)

        try {

            if (data[country].some((capital) => capital == capitals[0].capital)) {
                // console.log(capitals[0].capital, country)
                const weatherData = await getWeather(capitals[0].capital)
                console.log(`${capitals[0].capital} weather is`)
                console.log(weatherData.weather)
                totalCapitals++

            } else {

                throw new Error("Capital not found")
            }
        } catch (err) {
            console.log(err)
        }
    }
    console.log(` Finished getting weather information for ${totalCapitals} out of ${capitals.length}`)
}

getCountriesData()