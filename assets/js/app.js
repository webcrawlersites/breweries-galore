const searchBtn = document.getElementById('beer-search-button');
const breweryContainer = document.getElementById('brewery-container');
let searchQuery = document.getElementById('city-input');


// Fetch data from Brewery API
const getBeerData = (cityName) => {
    const beerApi = `https://api.openbrewerydb.org/breweries?by_city=${encodeURIComponent(cityName)}`;
    fetch(beerApi)
    .then(res => {
        if(res.ok) {
            return res.json();
        } else {
            console.log('Error!');
        }
    })
    .then(res => {
        res.forEach(brewery => {
            createBreweryCard(brewery.name, brewery.street, brewery.city, brewery.postal_code, brewery.website_url, brewery.phone);
        });
    })
    .catch((error) => {
        console.log(error)
    });
}

// Create the Brewery Card
const createBreweryCard = (name, street, city, zip, website, phone) => {
    let breweryCard = `
    <div class="brewery-card">
        <h2>${name}</h2>
        <ul>
            <li><span class="info-title">Address:</span> ${street}, ${city}, ${zip}</li>
            <li><span class="info-title">Phone Number:</span> ${phone == null || phone == undefined ? 'n/a' : phone}</li>
            <li><span class="info-title">Website:</span> ${website == null || website == undefined ? 'n/a' : website}</li>
        </ul>
    </div>
    `;
    breweryContainer.insertAdjacentHTML('beforeend', breweryCard);

}


// button event listener
searchBtn.addEventListener('click', function() {
    if (breweryContainer.firstChild) {
        breweryContainer.innerHTML = '';
    }
    let queryValue = searchQuery.value;
    
    getBeerData(queryValue);
});


// Keyboard event listener
document.addEventListener("keyup", function(event) {

    if (event.keyCode == 13) {

        if (breweryContainer.firstChild) {
            breweryContainer.innerHTML = '';
        }
        let queryValue = searchQuery.value;
        
        getBeerData(queryValue);
    }

});



