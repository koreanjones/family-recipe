import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import { getRecipes } from "./api/RecipeApi";
import { useEffect, useState } from "react";

function App() {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const getRecipeList = async () => {
      const recipesFromFirebase = await getRecipes();
      setRecipeList(recipesFromFirebase);
    };
    
    getRecipeList();
  }, []);
  return (
    <div className="App">
        <Header />
      {recipeList.length > 0 ? (
          <RecipeList
            recipeList={recipeList}
          />
      ) : (
        <h1> No Recipes </h1>
      )}
    </div>
  );
}

export default App;
