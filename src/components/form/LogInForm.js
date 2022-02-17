import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createUserData } from "../../api/RecipeApi";
import { Modal, Box, Typography } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

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

const LogInForm = ({ props, handleClose }) => {
  console.log("============", props, handleClose);

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

  const { login, currentUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    handleClose();
  };

  return (
      <>
          {console.log("dsadd",props)}
      <Modal
        open={props.logInOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className={classes.root} onSubmit={handleSubmit}>
            
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
              <Button variant="contained" onClick={props.handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Log In
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

export default LogInForm;
