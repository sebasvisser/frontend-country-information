const button = document.getElementById("find-button");

async function findCountryData(event) {
    try {
        const name = "bhutan";
        const result = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
        // dev log
        console.log(result);
        // einde devlog

        // OPDRACHT 2 Stadsinfo loggen
        const countryName = result.data[0].name;
        const population = result.data[0].population;
        const subAreaName = result.data[0].subregion;
        console.log(`${countryName} is situated in ${subAreaName}. It has a population of ${population} people.`)
        // EINDE Stadsinfo loggen

        // OPDRACHT 3 hoofdstad loggen
        const city = result.data[0].capital;
        console.log(`The capital is ${city}`);
        // EINDE hoofdstad loggen

        // OPDRACHT 4 Currencies loggen

        if (result.data[0].currencies.length === 1) {
            const currency = result.data[0].currencies[0].name;
            console.log(` and you can pay with ${currency}`);
        } else if (result.data[0].currencies.length === 2) {
            const currencyOne = result.data[0].currencies[0].name;
            const currencyTwo = result.data[0].currencies[1].name;
            console.log(` and you can pay with ${currencyOne} and ${currencyTwo}`);
        } else {
            console.log("Hier kun je echt met veel verschillende valuta betalen...")
        }
        // EINDE opdracht 4 Currencies loggen

    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', function (event){
    findCountryData(event);
});
