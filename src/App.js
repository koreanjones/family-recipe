import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import { getUsers } from "./api/RecipeApi";
import { useEffect, useState } from "react";
import UserModalDialog from "./components/form/AddUserForm";
import RecipeModalDialog from "./components/form/AddRecipeForm";
import Button from "@mui/material/Button";
import { Box, textAlign } from "@mui/system";
import { CenterFocusStrong } from "@mui/icons-material";

function App() {
  const [recipeList, setRecipeList] = useState([]);
  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);
  const [recipeOpen, setRecipeOpen] = useState(false)

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };
  const handleRecipeOpen = () => {
    setRecipeOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
    setRecipeOpen(false);
  };

  useEffect(() => {
    const getRecipeList = async () => {
      const recipesFromFirebase = await getUsers();
      setRecipeList(recipesFromFirebase);
    };
    console.log(recipeList);
    getRecipeList();
  }, []);
  return (
    <div className="App">
      <Box sx={{
        backgroundColor: "lightgrey",
        textAlign: "center"
      }}>
        <Header />
        <UserModalDialog open={open} handleClose={handleClose} />
        <RecipeModalDialog open={recipeOpen} handleClose={handleClose} />
        <Button variant="contained" onClick={handleOpen}>
          Add User
        </Button>
        <Button variant="contained" onClick={handleRecipeOpen}>
          Add Recipe
        </Button>

        {recipeList.length > 0 ? (
          <RecipeList recipeList={recipeList} />
        ) : (
          <h1> No Recipes </h1>
        )}
      </Box>
    </div>
  );
}

export default App;
