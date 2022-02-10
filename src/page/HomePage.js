import React from "react";
import { Button } from "@mui/material";
import RecipeList from "../components/RecipeList";
import { Link } from "react-router-dom";

const HomePage = (open) => {
  return (
    <>
      {open.recipeList === undefined ? (
        console.log("Not working")
      ) : (
        <>
          <RecipeList recipeList={open.recipeList} />
          <Link to="/addUserPage">
            <Button variant="contained">Add User</Button>
          </Link>
          <Link to="/addRecipePage">
            <Button variant="contained">Add Recipe</Button>
          </Link>
        </>
      )}
    </>
  );
};

export default HomePage;
