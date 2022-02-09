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

const RecipeForm = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookingInstructions, setCookingInstructions] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="filled"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Description"
        variant="filled"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        label="Cooking Time"
        variant="filled"
        type="email"
        required
        value={cookingTime}
        onChange={(e) => setCookingTime(e.target.value)}
      />
      <TextField
        label="Prep Time"
        variant="filled"
        type="password"
        required
        value={prepTime}
        onChange={(e) => setPrepTime(e.target.value)}
      />
      <TextField
        label="Cooking Instructions"
        variant="filled"
        required
        value={cookingInstructions}
        onChange={(e) => setCookingInstructions(e.target.value)}
      />
      <TextField
        label="image"
        variant="filled"
        required
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <TextField
        label="Ingredients"
        variant="filled"
        type="email"
        required
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
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

export default RecipeForm;
