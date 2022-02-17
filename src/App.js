import Header from "./components/Header";
import { getUsers, getUser } from "./api/RecipeApi";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import HomePage from "./page/HomePage";
import AddRecipePage from "./page/AddRecipePage";
import AddUserPage from "./page/AddUserPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase.config";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  const [recipeList, setRecipeList] = useState([]);
  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);
  const [recipeOpen, setRecipeOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [user, setUser] = useState("");
  const [logInOpen, setLogInOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
    const html = document.querySelector("html");
    const overflowLog = window.getComputedStyle(html)["overflow"];
    console.log(overflowLog);
    html.style.overflow = "hidden auto";
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

  const deleteCard = async (id) => {
    await deleteDoc(doc(db, "users", id));
    setRecipeList(recipeList.filter((recipe) => recipe.id !== id));
  };

  const updateUser = async (id) => {
    setRecipeOpen(true);
    setUser(await getUser(id));
    console.log(user);
  };
  
  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
    setRecipeOpen(false);
    setSignUpOpen(false);
    setLogInOpen(false)
    // setTimeout(
    //   () => window.location.replace("https://recipe-91a35.firebaseapp.com/"),
    //   500
    // );
    const html = document.querySelector("html");
    const overflowLog = window.getComputedStyle(html)["overflow"];
    console.log(overflowLog);
    document.body.style.overflow = "auto";
  };

  const getRecipeList = async () => {
    const recipesFromFirebase = await getUsers();
    setRecipeList(recipesFromFirebase);
  };
  useEffect(() => {
    getRecipeList();
  }, []);

  return (
    <AuthProvider>
      <div className="App">
        <Box
          sx={{
            backgroundColor: "lightgrey",
            minHeight: "400px",
          }}
        >
          <Router>
            <Header
              open={signUpOpen}
              logInOpen = {logInOpen}
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
                    open={open}
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
              <Route
                path="/addRecipePage"
                element={
                  <AddRecipePage
                    open={open}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    handleRecipeOpen={handleRecipeOpen}
                    recipeOpen={recipeOpen}
                    user={user}
                  />
                }
              />
              <Route
                path="/addUserPage"
                element={
                  <AddUserPage
                    open={open}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    handleRecipeOpen={handleRecipeOpen}
                    recipeList={recipeList}
                    recipeOpen={recipeOpen}
                  />
                }
              />
            </Routes>
          </Router>
        </Box>
      </div>
    </AuthProvider>
  );
};

export default App;
