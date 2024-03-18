
const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

req.onload = function () {
    const countriesData = JSON.parse(this.response);

    
    const countriesWithPopulationLessThan2Lakhs = countriesData.filter(country => {
        return country.population && country.population < 200000;
    });

    
    console.log(countriesWithPopulationLessThan2Lakhs);
};
