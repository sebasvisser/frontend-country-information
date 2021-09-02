const button = document.getElementById("find-button");

async function findCountryData(event) {
    try {
        const name = "belgium";
        const result = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
        console.log(result);

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


    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', function (event){
    console.log("hoi");
    findCountryData(event);
});
