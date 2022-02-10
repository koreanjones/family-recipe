import React from "react";
import UserModalDialog from "../components/form/AddUserForm";
import RecipeModalDialog from "../components/form/AddRecipeForm";
import { Button } from "@material-ui/core";
import RecipeList from "../components/RecipeList";
import { Link } from "react-router-dom";

const HomePage = (open) => {
  return (
    <>
      {open.recipeList === undefined ? (
        console.log("Not working")
      ) : (
        <div>
          <RecipeList recipeList={open.recipeList} />
          <Link to="/addUserPage">Add User</Link>
          <Link to="/addRecipePage">Add Recipe</Link>
        </div>
      )}
    </>
  );
};

export default HomePage;
