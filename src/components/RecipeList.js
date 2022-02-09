import React from "react";
import Recipe from "./Recipe";

const RecipeList = (recipeList) => {
  const recipes = recipeList.recipeList
  console.log('look here=======>>>>>>', recipeList)
  return (
      <>
      {recipes.map((recipe) => (
          <Recipe
              key={Math.random()}
              recipe={recipe} />
      ))}
    </>
  );
};

export default RecipeList;
