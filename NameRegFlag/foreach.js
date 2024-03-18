const req= new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload=function(){
    if(req.status===200){
        const countriesData = JSON.parse(req.responseText);

        countriesData.forEach((country) => {
            
            const name = country.name.common;
            const capital = country.capital[0];
            const flag = country.flags.png;

            
            console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
        });
    } else {
        console.error(`Error fetching data. Status Code: ${req.status}`);
    }
    }