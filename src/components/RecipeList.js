import React from "react";
import Recipe from "./Recipe";
import { Grid } from "@mui/material";

const RecipeList = (props) => {
  const privateRecipes = [];
  const recipes = props.recipeList;
  console.log(props.recipeList);
  console.log(privateRecipes);
  console.log(props.currentUser.uid);

  props.currentUser && console.log(props.currentUser.uid);
  recipes.map(
    (recipe) =>
      recipe.id === props.currentUser.uid && privateRecipes.push(recipe)
  );
  console.log(privateRecipes);

  return (
    <>
      <Grid
        container
        spacing={6}
        sx={{
          justifyContent: "center",
        }}
        marginBottom={"2%"}
      >
        {props.currentUser &&
          privateRecipes.map((recipe) => (
            <Grid key={Math.random()} item md={2.5}>
              <Recipe recipe={recipe} deleteCard={props.deleteCard} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default RecipeList;
