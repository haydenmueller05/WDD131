import recipes from "./recipes.mjs";

// Choose one random recipe
function chooseRandomRecipe(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

// RENDER TAGS
function tagsTemplate(tags) {
  return tags
    .map(tag => `<span class="tag">${tag}</span>`)
    .join("");
}

// RENDER RATING (stars)
function ratingTemplate(rating) {
  const full = "⭐".repeat(rating);
  const empty = "☆".repeat(5 - rating);

  return `
    <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
      <span aria-hidden="true">${full}${empty}</span>
    </span>
  `;
}

// RENDER FULL RECIPE CARD
function recipeTemplate(recipe) {
  return `
  <article class="recipe-card">
    <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">

    <div class="recipe-content">
      ${tagsTemplate(recipe.tags)}

      <h2 class="recipe-title">${recipe.name}</h2>

      ${ratingTemplate(recipe.rating)}

      <p class="description">${recipe.description}</p>
    </div>
  </article>
  `;
}

// PLACE RECIPE IN THE PAGE
function renderRandomRecipe() {
  const random = chooseRandomRecipe(recipes);
    const container = document.querySelector("main");

  container.innerHTML = recipeTemplate(random);
}

renderRandomRecipe();