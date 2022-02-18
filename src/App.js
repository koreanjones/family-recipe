import Header from "./components/Header";
import { getUsers, getUser, getUserRecipes } from "./api/RecipeApi";
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
import { useAuth } from "./contexts/AuthContext";

const App = () => {
  const [recipeList, setRecipeList] = useState([]);
  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);
  const [recipeOpen, setRecipeOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [createRecipeOpen, setCreateRecipeOpen] = useState(false);
  const [user, setUser] = useState("");
  const [logInOpen, setLogInOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipes();
  }, []);
  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };
  const handleRecipeOpen = () => {
    setRecipeOpen(true);
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
    console.log(recipeList)
   
  };

  const updateUser = async (id) => {
    setRecipeOpen(true);
    setUser(await getUser(id));
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
    setRecipeOpen(false);
    setSignUpOpen(false);
    setLogInOpen(false);
    
    // navigate("/");
    // setTimeout(
    //   () => window.location.replace("https://recipe-91a35.firebaseapp.com/"),
    //   500
    // );
  };
  const handleRecipeFormClose = () => {
    setCreateRecipeOpen(false);
   
  }
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
          user={user}
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
                handleRecipeOpen={handleRecipeOpen}
                recipeList={recipeList}
                recipeOpen={recipeOpen}
                deleteCard={deleteCard}
                updateUser={updateUser}
                user={user}
              />
            }
          />
          <Route path="/userPage" element={<PrivateRoute />}>
            <Route
              path="/userPage"
              element={
                <UserPage
                  handleClose={handleRecipeFormClose}
                  handleCreateRecipeOpen={handleCreateRecipeOpen}
                  createRecipeOpen={createRecipeOpen}
                  recipeList={recipeList}
                  deleteCard={deleteCard}
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
