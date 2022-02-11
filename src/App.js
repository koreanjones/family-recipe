import Header from "./components/Header";
import { getUsers } from "./api/RecipeApi";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import HomePage from "./page/HomePage";
import AddRecipePage from "./page/AddRecipePage";
import AddUserPage from "./page/AddUserPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from './firebase.config';

function App() {
  const [recipeList, setRecipeList] = useState([]);
  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);
  const [recipeOpen, setRecipeOpen] = useState(false);
  
  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
    
    const body = document.getElementsByTagName("body");
    body[0].style.overflow = "hidden auto";
  };
  const handleRecipeOpen = () => {
    setRecipeOpen(true);
  };

  const deleteCard = async (id) => {
    await deleteDoc(doc(db, 'users', id));
    setRecipeList(recipeList.filter((recipe) => recipe.id !== id))
  }
  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
    setRecipeOpen(false);
    setTimeout(() => window.location.reload(), 1000);
    
    
  };
  const getRecipeList = async () => {
    const recipesFromFirebase = await getUsers();
    setRecipeList(recipesFromFirebase);
  };
  useEffect(() => {
    getRecipeList();
  }, []);

  return (
    <div className="App">
      <Box
        sx={{
          backgroundColor: "lightgrey",
          textAlign: "center",
        }}
      >
        <Router>
          <Header />
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
                  recipeList={recipeList}
                  recipeOpen={recipeOpen}
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
  );
}

export default App;
