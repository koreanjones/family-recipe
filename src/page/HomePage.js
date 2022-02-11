import React from "react";
import { Button } from "@mui/material";
import RecipeList from "../components/RecipeList";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <>
      {props.recipeList === undefined ? (
        console.log("Not working")
      ) : (
        <>
          <RecipeList
            recipeList={props.recipeList}
              deleteCard={props.deleteCard}
              updateUser={props.updateUser}
          />
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
