import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase.config";

export const getUsers = async () => {
  const users = collection(db, "users");
  const usersSnapshot = await getDocs(users);
  const usersList = usersSnapshot.docs.map((doc) => doc.data());
  return usersList;
};
export const getUser = async (id) => {
  const userSnapshot = await getDoc(doc(db, "users", id));
  const user = userSnapshot.data();
  return user;
};
export const getUserRecipes = async (id) => {
  const userRecipes = collection(db, "recipes");
  const userRecipesSnapshot = await getDocs(userRecipes);
  const userRecipeList = userRecipesSnapshot.docs.map((doc) => doc.data());
  return userRecipeList;
};
export const getRecipe = async (recipeId) => {
  const recipeSnapShot = await getDoc(doc(db, "recipes", recipeId));
  const recipe = recipeSnapShot.data();
  return recipe;
};

// create database and fields.  Will create a new db everytime this is ran.
export async function createRecipeData(
  id,
  recipeTitle,
  recipeDescription,
  ingredientName,
  cookingTime,
  prepTime,
  cookingInstructions,
  image,
  privateRecipe
) {
  try {
    console.log(id);
    const docRef = await addDoc(collection(db, "recipes"), {
      id: id,
      recipeId: "",
      name: recipeTitle,
      description: recipeDescription,
      ingredients: [
        {
          name: ingredientName,
        },
      ],
      cookingTime: cookingTime,
      prepTime: prepTime,
      cookingInstructions: cookingInstructions,
      image: image,
      privateRecipe: privateRecipe,
    });
    console.log("Document written with ID: ", id);
    console.log(docRef.id);
    updateRecipeIdData(docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function updateRecipeData(
  recipeId,
  recipeTitle,
  recipeDescription,
  ingredientName,
  cookingTime,
  prepTime,
  cookingInstructions,
  image,
  privateRecipe
) {
  try {
    console.log("", recipeId);
    const updateRecipe = doc(db, "recipes", recipeId);

    await updateDoc(updateRecipe, {
      name: recipeTitle,
      description: recipeDescription,
      ingredients: [
        {
          name: ingredientName,
        },
      ],
      cookingTime: cookingTime,
      prepTime: prepTime,
      cookingInstructions: cookingInstructions,
      image: image,
      privateRecipe: privateRecipe,
    });
    console.log("Document written with ID: ", recipeId);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
async function updateRecipeIdData(id) {
  const updateRecipe = doc(db, "recipes", id);

  await updateDoc(updateRecipe, {
    recipeId: id,
  });
}
