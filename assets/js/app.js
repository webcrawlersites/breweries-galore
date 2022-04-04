// const searchBtn = document.getElementById('recipe-search-button');

// const getRecipeData = (ingredient) => {
//     const recipeApi = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=19d876a131904f91975514c3c6880781&ingredients=${ingredient}`;

//     fetch(recipeApi)
//     .then(res => {
//         if(res.ok) {
//             console.log(res.json());
//         } else {
//             console.log('Error!');
//         }
//     })
//     .then(data => {
//         return console.log(data);
//     });
// }

// searchBtn.addEventListener('click', function(e) {
//     e.preventDefault;
//     let searchQuery = document.getElementById('recipe-input').value;
    
//     getRecipeData(searchQuery);
// });