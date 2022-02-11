import React from "react";
import { Button, Box, Grid } from "@mui/material";
import RecipeList from "../components/RecipeList";
import { Link } from "react-router-dom";
import RecipeModalDialog from "../components/form/AddRecipeForm";

const HomePage = (props) => {
  console.log("00000000>", props)
  return (
    <>
      <div>
        <RecipeModalDialog
          props={props}
          open={props.open}
          handleClose={props.handleClose}
        />
        {/* {props.user === "" ? (
          console.log("no user")
        ) : (
          <>
            <Button variant="contained" onClick={props.handleOpen}>
              Update User
            </Button>
            <Link to="/">
              <Button variant="contained">Back</Button>
            </Link>
          </>
        )} */}
      </div>
      {props.recipeList === undefined ? (
        console.log("Not working")
      ) : (
        <>
          <RecipeList
            handleRecipeOpen={props.handleRecipeOpen}
            recipeList={props.recipeList}
            deleteCard={props.deleteCard}
            updateUser={props.updateUser}
          />
          <Grid container direction="row" justifyContent="center" padding='10px'>
            <Link to="/addUserPage">
              <Button variant="contained">Add User</Button>
            </Link>
          </Grid>
          {props.user === "" ? (
            console.log("not working")
          ) : (
            <Grid container direction="row" justifyContent="center">
              <Link to="/addRecipePage">
                <Button variant="contained">Update User</Button>
              </Link>
            </Grid>
          )}
        </>
      )}
    </>
  );
};

export default HomePage;
