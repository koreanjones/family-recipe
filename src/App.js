import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import { getUsers } from "./api/RecipeApi";
import { useEffect, useState } from "react";
import ModalDialog from "./components/form/AddUserForm";

function App() {
  const [recipeList, setRecipeList] = useState([]);
  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
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
      <Header />
      <ModalDialog open={open} handleClose={handleClose} />
      <button onClick={handleOpen}>Add User</button>
      {recipeList.length > 0 ? (
        <RecipeList recipeList={recipeList} />
      ) : (
        <h1> No Recipes </h1>
      )}
    </div>
  );
}

export default App;
