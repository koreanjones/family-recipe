import React from "react";
import { Button } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import AddRecipeForm from "../components/form/AddRecipeForm";
import UpdateRecipeForm from "../components/form/UpdateRecipeForm";
import RecipeList from "../components/RecipeList";

const UserPage = (props) => {
  const { currentUser } = useAuth();

  return (
    <>
      <AddRecipeForm
        props={props}
        currentUser={currentUser}
        handleRecipeFormClose={props.handleRecipeFormClose}
      />
      <UpdateRecipeForm props={props} handleClose={props.handleClose} />
      {props.recipeList === undefined ? (
        console.log("Not working")
      ) : (
        <>
          <RecipeList
            // currentUser={currentUser}
            // handleRecipeOpen={props.handleRecipeOpen}
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
