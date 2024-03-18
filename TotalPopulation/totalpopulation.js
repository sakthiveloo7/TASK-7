
const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

req.onload = function () {
    if (req.status === 200) {
        const countriesData = JSON.parse(req.responseText);

      
        const totalPopulation = countriesData.reduce((acc, country) => {
            if (country.population) {
                acc=acc+country.population;
            }
            return acc;
        }, 0);

        console.log("Total Population:", totalPopulation);
    } else {
        console.error("Error fetching data. Status:", req.status);
    }
};
