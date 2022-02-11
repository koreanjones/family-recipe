import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createUserData } from "../../api/RecipeApi";

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

const UserForm = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookingInstructions, setCookingInstructions] = useState("");
  const [image, setImage] = useState("");
  const [ingredientName, setIngredientName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserData(
      firstName,
      lastName,
      password,
      email,
      recipeTitle,
      recipeDescription,
      ingredientName,
      cookingTime,
      prepTime,
      cookingInstructions,
      image
    );

    handleClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
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
      <TextField
        label="Name"
        variant="filled"
        value={recipeTitle}
        onChange={(e) => setRecipeTitle(e.target.value)}
      />
      <TextField
        label="Description"
        variant="filled"
        value={recipeDescription}
        onChange={(e) => setRecipeDescription(e.target.value)}
      />
      <TextField
        label="Cooking Time"
        variant="filled"
        value={cookingTime}
        onChange={(e) => setCookingTime(e.target.value)}
      />
      <TextField
        label="Prep Time"
        variant="filled"
        value={prepTime}
        onChange={(e) => setPrepTime(e.target.value)}
      />
      <TextField
        label="Cooking Instructions"
        variant="filled"
        value={cookingInstructions}
        onChange={(e) => setCookingInstructions(e.target.value)}
      />
      <TextField
        label="image"
        variant="filled"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <TextField
        label="Ingredients"
        variant="filled"
        value={ingredientName}
        onChange={(e) => setIngredientName(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
