const apikey = "5790f736648948228485f8b7a384c7ce"; 
const cuisineLocal = document.getElementById("cuisineLocal");

const searchBtn = document.querySelector("#search");
const recipeTitle = document.getElementById("recipe-name");
const recipePhoto = document.getElementById("img-photo")
const mainContainer = document.getElementById("return-container");


const randomNumber = () => {
   const number = Math.floor(Math.random() * 15);
   return number
}

const getRecipe = async(cuisineLocal) => {
   

    const apiRecipeURL = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisineLocal}&number=100&apiKey=${apikey}&lang=pt_br`

    const res = await fetch(apiRecipeURL);
    const data = await res.json();
    
    return data;
}

const showRecipe = async(cuisineLocal) => {
    mainContainer.style.display = "flex";
    
    const number = randomNumber();

    const data = await getRecipe(cuisineLocal);

    recipeTitle.textContent = data.results[number].title;
    recipePhoto.setAttribute("src",  data.results[number].image)

    console.log(data) 
}

searchBtn.addEventListener("click", () => {
    console.log(cuisineLocal.value);
    const local = cuisineLocal.value
    showRecipe(local);
})