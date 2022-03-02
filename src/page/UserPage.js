import React from "react";
import { Button } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import AddRecipeForm from "../components/form/AddRecipeForm";
import UpdateRecipeForm from "../components/form/UpdateRecipeForm";
import RecipeList from "../components/RecipeList";
import { useEffect, useState } from "react";
import { getRecipe } from "../api/RecipeApi";

const UserPage = (props) => {
  console.log(props);
  const { currentUser } = useAuth();
  return (
    <>
      <AddRecipeForm
        props={props}
        currentUser={currentUser}
        handleRecipeFormClose={props.handleRecipeFormClose}
      />

      {props.recipe === undefined ? console.log("not working"): console.log('working')}
        {/* <UpdateRecipeForm
          props={props}
          handleClose={props.handleClose}
        /> */}
      {props.recipeList === undefined ? (
        console.log("Not working")
      ) : (
        <>
          <RecipeList
            // currentUser={currentUser}
            // handleRecipeOpen={props.handleRecipeOpen}
            handleClose={props.handleClose}
            recipeList={props.recipeList}
            currentUser={currentUser}
            deleteCard={props.deleteCard}
            updateRecipeCard={props.updateRecipeCard}
            // updateUser={props.updateUser}
          />
        </>
      )}

      <Button variant="contained" onClick={props.handleCreateRecipeOpen}>
        Add Recipe
      </Button>
    </>
  );
};

export default UserPage;
