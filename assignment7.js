const fetch = require("node-fetch");

/**
 * function that fetches all the country details
 * @param --
 * @return -- promise
 */

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
            })
    }
    /**
     * function that fetches teh capital of the country
     * @param -- country (Type : String) for which the caital is to be found
     * @return -- promise
     */

const countryCapital = function(country) {
        return fetch(`https://restcountries.eu/rest/v2/name/${country}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                } else {
                    return res.json()
                }
            })

    }
    /**
     * function that fetches weather capital of the country
     * @param -- capital (Type : String) for which the weather is to be found
     * @return -- promise
     */

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

/**
 * Async function that fetches  country  starting from 26 letters of english from the countries.json and if there is no country with a specific alphabet, throw an error which will result in printing to console ‘No country found from alphabet <alphabet>.’ and the program should continue.
 * @param -- --
 * @return -- promise
 */


const getCountriesData = async function() {
        const data = await countriesData()
        let alphabetAscii = 65
        const countries = Object.keys(data)

        while (alphabetAscii <= 90) {
            try {
                if (countries.some((country) => country[0] == String.fromCharCode(alphabetAscii))) {
                    // console.log(aphabet)
                } else {
                    throw new Error(`‘No country found from alphabet ${String.fromCharCode(alphabetAscii)}`)
                }
            } catch (err) {
                console.log(err)
            }
            alphabetAscii++
        }



        getCountryCapital(countries, data)

    }
    /**
     * Async function that   check whether that city exists in the countries.json for that country or not.
     *  If it does not exist, throwing an error
     * If it exists, then  get the weather information for that city
     * @param -- countries(Array of strings) jsonData(JSON)
     * @return -- promise
     */
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