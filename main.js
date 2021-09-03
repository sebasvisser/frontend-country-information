const button = document.getElementById("find-button");

async function findCountryData(event) {
    try {
        const name = event;
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
    // nieuwe array-variabele aanmaken met de languages
        // op basis van lengte een if statement doorlopen
        // bij 3 of hoger, zin in 2 delen, taal 1 en 2 meteen, taal 3 en meer via forloopje

        let spokenLanguagesSentence; //verzamelvariabele
        const spokenLanguages = result.data[0].languages;
        if (spokenLanguages.length === 1) {
            const languageSpoken = result.data[0].languages[0].name;
            spokenLanguagesSentence = `They speak ${languageSpoken}.`;
        } else if (spokenLanguages.length === 2) {
            const languageSpokenOne = result.data[0].languages[0].name;
            const languageSpokenTwo = result.data[0].language[1].name;
            spokenLanguagesSentence = `They speak ${languageSpokenOne} and ${languageSpokenTwo}.`;
        }else if (spokenLanguages.length > 2) {
            console.log("2 of meer talen")
        }else {
            console.error("No languages?")
        }
        console.log(spokenLanguagesSentence);

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

        // Regel 1
        const resultBodyLineOne = `${countryName} is situated in ${subAreaName}. It has a population of ${population} people.`;
        const lineOne = document.createElement("p");
        lineOne.textContent = resultBodyLineOne;
        document.getElementById("resultBody").appendChild(lineOne);

        // Regel 2
        let resultBodyLineTwo;
        if (result.data[0].currencies.length === 1) {
            const currency = result.data[0].currencies[0].name;
            resultBodyLineTwo = `The capital is ${city} and you can pay with ${currency}`;
        } else if (result.data[0].currencies.length === 2) {
            const currencyOne = result.data[0].currencies[0].name;
            const currencyTwo = result.data[0].currencies[1].name;
            resultBodyLineTwo = `The capital is ${city} and you can pay with ${currencyOne} and ${currencyTwo}.`;
        }
        const lineTwo = document.createElement("p");
        lineTwo.textContent = resultBodyLineTwo;
        document.getElementById("resultBody").appendChild(lineTwo);

        // Regel 3
        let resultBodyLineThree ;
        // IF STATEMENT MET FOR-LOOP voor de talen
        resultBodyLineThree = "ze spreken talen";
        const lineThree = document.createElement("p");
        lineThree.textContent = resultBodyLineThree;
        document.getElementById("resultBody").appendChild(lineThree);
        // EINDE oprdacht 7 toevoegen aan DOM
    } catch (error) {
        console.log(error);
        const errorMessage = `Het land ${event} bestaat niet`;
        console.error(errorMessage);
        const resultingError = document.createElement("p");
        resultingError.textContent = errorMessage;
        document.getElementById("resultHeader").appendChild(resultingError);
    }
}

async function clearResults() {
    try {
        console.log("Ik wil opruimen")
        const headerToClear = document.getElementById("resultHeader");
        while (headerToClear.firstChild) {
            headerToClear.removeChild(headerToClear.lastChild);
        }
        const bodyToClear = document.getElementById("resultBody");
        while (bodyToClear.firstChild) {
            bodyToClear.removeChild(bodyToClear.lastChild);
        }
    } catch (error){
        console.log("Nothing to Clear")
    }
}

button.addEventListener('click', function (event){
    const inputFieldSays = document.getElementById("searchfield").value;
    findCountryData(inputFieldSays);
    clearResults();
    document.getElementById("searchfield").value = ``;
});

const inputField = document.getElementById("searchfield");
inputField.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const inputFieldSays = document.getElementById("searchfield").value;
        findCountryData(inputFieldSays);
        clearResults();
        document.getElementById("searchfield").value = ``;
    }
});
