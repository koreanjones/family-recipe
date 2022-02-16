import React from "react";
import Recipe from "./Recipe";
import { Grid } from "@mui/material";

const RecipeList = (props) => {
  const users = props.recipeList;
  console.log(users)
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
        {users.map((user) => (
          <Grid
            key={Math.random()}
            item
            md={2.5}
          >
            <Recipe key={Math.random()} handleRecipeOpen={ props.handleRecipeOpen } user={user} deleteCard={props.deleteCard} updateUser={ props.updateUser }/>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RecipeList;
