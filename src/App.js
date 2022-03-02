import Header from "./components/Header";
import { getRecipe, getUserRecipes } from "./api/RecipeApi";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import HomePage from "./page/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase.config";
import PrivateRoute from "./components/PrivateRoute";
import UserPage from "./page/UserPage";

const App = () => {
  const [recipeList, setRecipeList] = useState([]);
  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);
  const [updateRecipeOpen, setUpdateRecipeOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [recipe, setRecipe] = useState("");
  const [createRecipeOpen, setCreateRecipeOpen] = useState(false);
  const [logInOpen, setLogInOpen] = useState(false);

  useEffect(() => {
    getRecipes();
  }, []);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSignUpOpen = () => {
    setSignUpOpen(true);
  };

  const handleLogInOpen = () => {
    setLogInOpen(true);
  };
  const handleCreateRecipeOpen = () => {
    setCreateRecipeOpen(true);
  };

  const deleteCard = async (id) => {
    setRecipeList(recipeList.filter((recipe) => recipe.recipeId !== id));
    await deleteDoc(doc(db, "recipes", id));
    console.log(recipeList);
  };
  

  const updateRecipeCard = async (id) => {
    const singleRecipe = await getSingleRecipe(id)
    setRecipe(singleRecipe);
    
    // const recipe = await getSingleRecipe(id)
    //   .then(setRecipe(recipe))
    if (recipe === '') {
      console.log("notWoring")
    } else {
      handleUpdateRecipeOpen();
    }
  
  };
  const handleUpdateRecipeOpen = () => {
    setUpdateRecipeOpen(true);
  };

  const getSingleRecipe = async (id) => {
    const recipe = await getRecipe(id);
    return recipe;
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
    setSignUpOpen(false);
    setLogInOpen(false);
    setUpdateRecipeOpen(false);
    getRecipes();

    // navigate("/");
    // setTimeout(
    //   () => window.location.replace("https://recipe-91a35.firebaseapp.com/"),
    //   500
    // );
  };
  const handleRecipeFormClose = () => {
    setCreateRecipeOpen(false);
    getRecipes();
    // setTimeout(
    //   () => window.location.replace("https://recipe-91a35.firebaseapp.com/"),
    //   500
    // );
  };
  const getRecipes = async (id) => {
    const recipesFromFirebase = await getUserRecipes(id);
    setRecipeList(recipesFromFirebase);
  };

  return (
    <div className="App">
      <Box
        sx={{
          backgroundColor: "lightgrey",
          minHeight: "400px",
        }}
      >
        <Header
          open={signUpOpen}
          logInOpen={logInOpen}
          handleClose={handleClose}
          handleSignUpOpen={handleSignUpOpen}
          handleLogInOpen={handleLogInOpen}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <HomePage
                handleOpen={handleOpen}
                handleClose={handleClose}
                recipeList={recipeList}
                deleteCard={deleteCard}
              />
            }
          />
          console.log(recipe)
          {recipe === "" ? console.log("working") : console.log("not working")}
          <Route path="/userPage" element={<PrivateRoute />}>
            <Route
              path="/userPage"
              element={
                <UserPage
                  updateRecipeOpen={updateRecipeOpen}
                  handleClose={handleClose}
                  handleRecipeFormClose={handleRecipeFormClose}
                  handleCreateRecipeOpen={handleCreateRecipeOpen}
                  createRecipeOpen={createRecipeOpen}
                  updateRecipeCard={updateRecipeCard}
                  recipeList={recipeList}
                  deleteCard={deleteCard}
                  recipe={recipe}
                />
              }
            />
          </Route>
        </Routes>
      </Box>
    </div>
  );
};

export default App;
