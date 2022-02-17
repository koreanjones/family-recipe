import React, {useState} from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { updateUserData } from "../../api/RecipeApi";

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

const RecipeForm = ({ props, handleClose }) => {
  console.log("============", props);
  const classes = useStyles();
  // create state variables for each input
  const [id, setId] = useState(props.user.id)
  const [firstName, setFirstName] = useState(props.user.name.first);
  const [lastName, setLastName] = useState(props.user.name.last);
  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState(props.user.password);
  const [recipeTitle, setRecipeTitle] = useState(props.user.recipeList[0].name);
  const [recipeDescription, setRecipeDescription] = useState(
    props.user.recipeList[0].description
  );
  const [cookingTime, setCookingTime] = useState(
    props.user.recipeList[0].cookingTime
  );
  const [prepTime, setPrepTime] = useState(props.user.recipeList[0].prepTime);
  const [cookingInstructions, setCookingInstructions] = useState(
    props.user.recipeList[0].cookingInstructions
  );
  const [image, setImage] = useState(props.user.recipeList[0].image);
  const [ingredientName, setIngredientName] = useState(
    props.user.recipeList[0].ingredients[0].name
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserData(
      id,
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
        label="id"
        variant="filled"
        required
        placeholder={id}
        value={id}
      />
      <TextField
        label="First Name"
        variant="filled"
        required
        placeholder={firstName}
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
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
      />
      <TextField
        label="Recipe Name"
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

export default RecipeForm;
