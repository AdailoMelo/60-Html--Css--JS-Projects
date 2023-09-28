const apiKey = "cc664eacd75249199f064a1ea03d93c4";

async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`);
    
    const data = await response.json();

    return data; 
}

const recipes = getRecipes();

recipes.then(result => {
    for (recipe of result.recipes){
        let ingredients = recipe.extendedIngredients
            .map(ingredient => ingredient.original)
            .join(", ");
        
        document.querySelector('.recipe-list').innerHTML += createRecipe(recipe.image, recipe.title, ingredients, recipe.sourceUrl);
    }
});


function createRecipe(imgAddress, recipeName, recipeIngredients, recipeAddress){
    return `
            <li class="recipe-item">
                <img src="${imgAddress}" alt="Food image" class="recipe-image">
                <h2 class="recipe">${recipeName}</h2>
                <p class="ingredients">
                    <strong>Ingredients:</strong> ${recipeIngredients}
                </p>
                <a href="${recipeAddress}" rel="external" target="_blank">View recipe</a>
            </li>
    `;
}

