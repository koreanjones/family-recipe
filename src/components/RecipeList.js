import React from "react";
import Recipe from "./Recipe";
import { Grid } from "@mui/material";

const RecipeList = (props) => {
  const recipes = props.recipeList;
  return (
    <>
      <Grid
        container
        spacing={6}
        sx={{
          justifyContent: "center",
        }}
        marginBottom={'2%'}
      >
        {recipes.map((recipe) => (
          <Grid
            key={Math.random()}
            item
            md={2.5}
          >
            <Recipe key={Math.random()} recipe={recipe} deleteCard={props.deleteCard} updateUser={ props.updateUser }/>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RecipeList;
