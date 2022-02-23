import React from "react";
import Recipe from "./Recipe";
import { Grid } from "@mui/material";

const PublicRecipeList = (props) => {
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
        {props.recipeList.map(
          (recipe) =>
            recipe.privateRecipe === false && (
              <Grid key={Math.random()} item md={2.5}>
                <Recipe key={Math.random()} recipe={recipe} />
              </Grid>
            )
        )}
      </Grid>
    </>
  );
};

export default PublicRecipeList;
