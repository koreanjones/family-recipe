import React from "react";
import { Button, Grid } from "@mui/material";
import PublicRecipeList from "../components/PublicRecipeList";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  const publicRecipeList = [];
  props.recipeList.map((recipe) => {
    recipe.privateRecipe !== true && publicRecipeList.push(recipe);
  });
  return (
    <>
      {PublicRecipeList === "" ? (
        console.log("Not working")
      ) : (
        <>
          <PublicRecipeList
            handleRecipeOpen={props.handleRecipeOpen}
            recipeList={props.recipeList}
            deleteCard={props.deleteCard}
            updateUser={props.updateUser}
          />
        </>
      )}
      <Grid container direction="row" justifyContent="center" padding="10px">
        <Link to="/userPage">
          <Button variant="contained">User Page</Button>
        </Link>
      </Grid>
    </>
  );
};

export default HomePage;
