const searchBtn = document.getElementById('beer-search-button');
const breweryContainer = document.getElementById('brewery-container');

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

searchBtn.addEventListener('click', function() {
    if (breweryContainer.firstChild) {
        breweryContainer.innerHTML = '';
    }
    let searchQuery = document.getElementById('city-input').value;
    
    getBeerData(searchQuery);
});