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

        // OPDRACHT 6 Languages

        // EINDE opdracht 6 languages

        // OPDRACHT 7 Toevoegen aan DOM
        // eerst de vlag
        const resultFlagImage = result.data[0].flag;
        const resultingFlag = document.createElement("img");
        resultingFlag.src = resultFlagImage;
        document.getElementById('resultHeader').appendChild(resultingFlag);

        // Dan de naam van het land
        const resultCountryName = result.data[0].name;
        const resultingCountry = document.createElement("span");
        resultingCountry.setAttribute("id","resultCountryName")
        resultingCountry.textContent = resultCountryName;
        document.getElementById("resultHeader").appendChild(resultingCountry);

        // Dan een mooie lijn toevoegen
        // alle benodigde info verzamelen
        const resultSituationStatement = 3;
        const resultCurrencyStatement = 4;
        const resultLanguageStatement = 5;
        // const resultNode = document.createElement("p");
        // const extraText = document.createTextNode(result.data[0].currencies[0].name);
        //
        // resultNode.appendChild(extraText);
        // document.getElementById("resultingdiv").appendChild(resultNode);
        // EINDE oprdacht 7 toevoegen aan DOM
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', function (event){
    console.log(event);
    findCountryData(event);
});
