import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createRecipeData } from "../../api/RecipeApi";
import { Modal, Box, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const AddRecipeForm = ({ props, currentUser, handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookingInstructions, setCookingInstructions] = useState("");
  const [image, setImage] = useState("");
  const [ingredientName, setIngredientName] = useState("");
  const [privateRecipe, setPrivateRecipe ] = useState(true)
  let id = "";

  if (currentUser !== undefined) {
    id = currentUser.uid;
  } else {
    id = "";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipeData(
      id,
      recipeTitle,
      recipeDescription,
      ingredientName,
      cookingTime,
      prepTime,
      cookingInstructions,
      image,
      privateRecipe
    );
    props.handleClose(id);
  };

  return (
    <>
      <Modal
        open={props.createRecipeOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
              label="Recipe Title"
              variant="filled"
              type="text"
              required
              value={recipeTitle}
              onChange={(e) => setRecipeTitle(e.target.value)}
            />
            <TextField
              label="Recipe Description"
              variant="filled"
              type="text"
              required
              value={recipeDescription}
              onChange={(e) => setRecipeDescription(e.target.value)}
            />
            <TextField
              label="Prep Time"
              variant="filled"
              type="text"
              required
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
            />
            <TextField
              label="Cooking Time"
              variant="filled"
              type="text"
              required
              value={cookingTime}
              onChange={(e) => setCookingTime(e.target.value)}
            />

            <TextField
              label="Cooking Instructions"
              variant="filled"
              type="text"
              required
              value={cookingInstructions}
              onChange={(e) => setCookingInstructions(e.target.value)}
            />
            <TextField
              label="Ingredients"
              variant="filled"
              type="text"
              required
              value={ingredientName}
              onChange={(e) => setIngredientName(e.target.value)}
            />
            <TextField
              label="image"
              variant="filled"
              type="text"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <TextField
              label="private"
              variant="filled"
              type="text"
              required
              value={true}
              onChange={(e) => setPrivateRecipe(e.target.value)}
            />

            <div>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Add Recipe
              </Button>
            </div>
          </form>
        </Box>
      </Modal>

      {/* <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            variant="filled"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            display={"none"}
          />
          <TextField
            label="Last Name"
            variant="filled"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="filled"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </div>
        </form> */}
    </>
  );
};

export default AddRecipeForm;
