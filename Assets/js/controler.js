"use strict";
// Packages
import "regenerator-runtime/runtime";
import "core-js/stable";
import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

// Elements
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    // Render Recipe
    recipeView.render(model.state.recipe)

  } catch (err) {
    console.log(err.message);
  }
};
["hashchange", "load"].forEach((e) => window.addEventListener(e, controlRecipes));
