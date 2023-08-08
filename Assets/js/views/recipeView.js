import { Fraction } from "fractional";

class RecipeView {
  #parentEl = document.querySelector(".recipe-content");
  #recipe;

  render(data) {
    this.#recipe = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentEl.insertAdjacentHTML("beforeend", markup);
  }

  #generateMarkup() {
    return `<div class="content-container">
    <div class="content-img">
    <img src="${this.#recipe.image}" alt="Recipe Image" />
    </div>

    <div class="content-details">
    <h1 class="content-details-title">${this.#recipe.title}</h1>
    <div>
        <i class="fa-solid fa-clock"></i>
        <p class="content-details-cooking_time">${
          this.#recipe.cookingTime
        } MINUTES</p>
    </div>
    <div>
        <i class="fa-solid fa-bowl-rice"></i>
        <p class="content-details-ingredients">${
          this.#recipe.ingredients.length
        } INGREDIENTS</p>
    </div>
    <div>
        <i class="fa-solid fa-circle-plus servings-plus"></i>
        <p class="content-details-ingredients">${
          this.#recipe.servings
        } SERVINGS</p>
        <i class="fa-solid fa-circle-minus servings-minus"></i>
    </div>
    <div>
        <i class="fa-solid fa-utensils"></i>
        <p class="content-details-designer">
        Designed By
        <a href="${
          this.#recipe.sourceUrl
        }" target ="_blank" class="designer-link">${this.#recipe.publisher}</a>
        </p>
    </div>
    </div>

    <div class="content-ingredients">
      <h1 class="content-ingredients-title">Ingredients :</h1>
      <div class="content-ingredients-items">
      ${this.#recipe.ingredients.map(this.#generateMarkupIngredient).join("")}
      </div>          
    </div>

    <div class="content-bookmark">
    <i class="fa-solid fa-bookmark"></i>
    </div>
    </div> `;
  }

  #clear() {
    this.#parentEl.innerHTML = "";
  }

  renderSpinner() {
    const markup = `
    <div class="spinner">
    </div>
    `;

    this.#parentEl.innerHTML = "";
    this.#parentEl.insertAdjacentHTML("beforeend", markup);
  }

  #generateMarkupIngredient(ing) {
    return `
    <p class="ingredient-item">
        <i class="fa-solid fa-arrow-right"></i>
        <span class="ingredient-quantity">
        ${ing.quantity ? new Fraction(ing.quantity).toString() : ""}
        </span>
        <span class="ingredient-unit">${ing.unit}</span>
        <span class="ingredient-description">${ing.description}</span>
    </p>
    `;
  }
}

export default new RecipeView();
