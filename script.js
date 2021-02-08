// Event handler
document.getElementById("search").addEventListener("click", () => {
    let foodName = document.getElementById("foodNameInput").value;
    document.getElementById("foodNameInput").value = "";
    document.getElementById("foods").innerHTML = "";
    document.getElementById("unorderedList").innerHTML = "";
    document.getElementById("foodDetail").innerHTML = "";
    if (foodName === "" || foodName === " ") alert("space/empty-string was found");
    else searchFood(foodName);
})

//Takes input from user & calls api
const searchFood = foodName => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(res => res.json())
        .then(data => {
            storeResult = data;
            if (data.meals === null) alert("No food with this name was found");
            else displayFoodItem(data.meals);
        });
}

// display search result
const displayFoodItem = foods => {
    const foodsDiv = document.getElementById("foods");
    foods.map((food, i) => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food';
        foodDiv.setAttribute("onclick", `foodIngredients(storeResult.meals[${i}])`);
        const foodInfo = `
            <img src="${food.strMealThumb}" class = "foodImg">
            <h3 class = "foodName">${food.strMeal}</h3>
        `
        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
    });
}

// shows detail
const foodIngredients = food => {
    document.getElementById("unorderedList").innerHTML = "";
    const foodInfo = document.getElementById("foodDetail");
    const ul = document.getElementById("unorderedList");
    for (let i = 1; i < 21; i++) {
        const Measure = food[`strMeasure${i}`];
        const Ingredient = food[`strIngredient${i}`];
        const foodDetail = `
            <img src="${food.strMealThumb}" class="detailImg">
            <h3 >${food.strMeal}</h3>
            <h5>Ingredients</h5>   
        `
        foodInfo.innerHTML = foodDetail;
        const li = document.createElement('li');
        li.innerText = `${Measure} ${Ingredient}`;
        if (Measure === " " || Ingredient === " ");
        else if (Measure === "" || Ingredient === "");
        else if (Measure === null || Ingredient === null);
        else ul.appendChild(li);
    }
}