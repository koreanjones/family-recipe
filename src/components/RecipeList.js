import React from "react";
import Recipe from "./Recipe";
import { Grid } from "@mui/material";

const RecipeList = (props) => {
  const privateRecipes = [];
  const recipes = props.recipeList;
  recipes.map(
    (recipe) =>
      recipe.id === props.currentUser.uid && privateRecipes.push(recipe)
  );

  return (
    <>
      <Grid
        container
        spacing={6}
        sx={{
          justifyContent: "center",
        }}
        marginBottom={"2%"}
      >{console.log(props)}
        {props.currentUser &&
          privateRecipes.map((recipe) => (
            <Grid key={Math.random()} item md={2.5}>
              <Recipe
                props={props}
                recipe={recipe}
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default RecipeList;
