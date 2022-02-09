import React from "react";
import Recipe from "./Recipe";
import { Grid } from "@mui/material";
import { FileCopyOutlined } from "@mui/icons-material";

const RecipeList = (recipeList) => {
  const recipes = recipeList.recipeList;
  console.log("look here=======>>>>>>", recipeList);
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          padding: "10px",
          justifyContent: "center",
        }}
      >
        {recipes.map((recipe) => (
          <Grid key={Math.random()} item xs={3} md={2}>
            <Recipe key={Math.random()} recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RecipeList;
