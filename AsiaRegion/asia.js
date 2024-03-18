const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

req.onload = function () {
    if (req.status === 200) {
        const countriesData = JSON.parse(req.responseText);

        
        const asiaCountries = countriesData.filter(country => {
            return country.region === "Asia";
        });

    
        asiaCountries.forEach(country => {
            console.log(country.name.common);
        });
    } else {
        console.error("Error fetching data. Status:", req.status);
    }
};