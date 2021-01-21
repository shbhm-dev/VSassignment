const countriesData = function() {
    return fetch('https://drive.google.com/file/d/1-gSjAgF8Is4Xht_axsLy8ADhYMuhLxhx/view?usp=sharing')
        .then(res => res)

}

const getCountriesData = async function() {
    const data = await countriesData()
    console.log(data)
}
getCountriesData() clear