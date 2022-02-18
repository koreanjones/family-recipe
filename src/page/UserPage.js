import React from "react";
import { Button } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import AddRecipeForm from "../components/form/AddRecipeForm";
import RecipeList from "../components/RecipeList";

const UserPage = (props) => {
  const { currentUser } = useAuth();
  console.log(currentUser, props);

  return (
    <>
      <AddRecipeForm
        props={props}
        currentUser={currentUser}
        handleClose={props.handleClose}
      />
      {props.recipeList === undefined ? (
        console.log("Not working")
      ) : (
        <>
          <RecipeList
            // currentUser={currentUser}
            // handleRecipeOpen={props.handleRecipeOpen}
                        recipeList={props.recipeList}
                        currentUser = {currentUser}
            deleteCard={props.deleteCard}
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
