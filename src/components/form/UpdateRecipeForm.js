import React, { useEffect, useState } from "react";
import { Checkbox, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { updateRecipeData, getRecipe } from "../../api/RecipeApi";
import { Modal, Box, Typography, FormControlLabel } from "@mui/material";

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

const UpdateRecipeForm = (props) => {
  console.log(props.recipe);
  const classes = useStyles();

  const [recipeTitle, setRecipeTitle] = useState(props.props.recipe.name);
  const [recipeDescription, setRecipeDescription] = useState(
    'props.recipe.description'
  );
  const [cookingTime, setCookingTime] = useState(
    'props.recipe.cookingTime'
  );
  const [prepTime, setPrepTime] = useState('props.recipe.prepTime');
  const [cookingInstructions, setCookingInstructions] = useState(
    'props.recipe.cookingInstructions'
  );
  const [image, setImage] = useState('props.recipe.image');
  const [ingredientName, setIngredientName] = useState("");
  const [privateRecipe, setPrivateRecipe] = useState(
   'props.recipe.privateRecipe'
  );

  let recipeId = "";

  if (props !== undefined) {
    recipeId = 'props.props.recipe.recipeId';
  } else {
    recipeId = "";
  }
  // props.recipe.ingredients !== undefined && setIngredientName(props.recipe.ingredients[0].name);

  //   if (props.recipe.ingredients === undefined) {
  //     setIngredientName('');
  //   } else {
  //     setIngredientName(props.recipe.ingredients[0].name);
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipeData(
      recipeId,
      recipeTitle,
      recipeDescription,
      ingredientName,
      cookingTime,
      prepTime,
      cookingInstructions,
      image,
      privateRecipe
    );
    props.props.handleClose();
    clearForm();
  };
  const clearForm = () => {
    setRecipeDescription("");
    setRecipeTitle("");
    setCookingInstructions("");
    setCookingTime("");
    setPrepTime("");
    setImage("");
    setIngredientName("");
    setPrivateRecipe(false);
  };

  const cancelButton = () => {
    clearForm();
    props.props.handleClose();
  };

  return (
    <>
      <Modal
        open={false}
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
              label="Image Url"
              variant="filled"
              type="text"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <Typography>Check box below to make private.</Typography>
            <FormControlLabel
              control={
                props.props.recipe.privateRecipe === false ? (
                  <Checkbox />
                ) : (
                  <Checkbox defaultChecked />
                )
              }
              label="Check to make Private!!!"
              onChange={(e) => setPrivateRecipe(e.target.checked)}
            />
            <Typography>
              If box is not checked recipe will be viewable on the main page.
              Private recipes can only be viewed in user page.
            </Typography>

            <div>
              <Button variant="contained" onClick={cancelButton}>
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

export default UpdateRecipeForm;
