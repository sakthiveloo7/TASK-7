const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

req.onload = function () {
    if (req.status === 200) {
        const countries = JSON.parse(req.responseText);

        
        const usDollarCountry = countries.filter(country => {
            return country.currencies && country.currencies.USD;
        });

        if (usDollarCountry.length > 0) {
            console.log("Country that uses US dollars as currency:", usDollarCountry[0].name.common);
        } else {
            console.log("No country found that uses US dollars as currency.");
        }
    } else {
        console.error("Failed to fetch data from the API.");
    }
};