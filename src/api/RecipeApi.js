import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase.config";

export const getUsers = async () => {
  const users = collection(db, "users");
  const usersSnapshot = await getDocs(users);
  console.log(usersSnapshot.docs);
  const usersList = usersSnapshot.docs.map((doc) => doc.data());
  console.log(usersList)
  return usersList;
};

// create database and fields.  Will create a new db everytime this is ran.

export async function createUserData(
  firstName,
  lastName,
  password,
  email,
  recipeTitle,
  recipeDescription,
  ingredientName,
  cookingTime,
  prepTime,
  cookingInstructions,
  image
) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      id:'',
      name: {
        first: firstName,
        last: lastName,
      },
      email: email,
      password: password,
      recipeList: [
        {
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
        },
      ],
    });
    console.log("Document written with ID: ", docRef.id);
    updateUserData(docRef.id)
    
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
async function updateUserData(id) {
  const updateUsers = doc(db, "users", id);

  await updateDoc(updateUsers, {
    id: id,
  });
}
// async function updateUserData(
//   firstName,
//   lastName,
//   password,
//   email,
//   recipeTitle,
//   recipeDescription,
//   ingredientName,
//   ingredientAmount,
//   ingredientName2,
//   ingredientAmount2,
//   cookingTime,
//   prepTime,
//   cookingInstructions,
//   image
// ) {
//   const updateUsers = doc(db, "users", "JoC7wX2FWrnPdjZNkTZb");

//   await updateDoc(updateUsers, {
//     name: {
//       first: firstName,
//       last: lastName,
//     },
//     email: email,
//     password: password,
//     recipeList: [
//       {
//         name: recipeTitle,
//         description: recipeDescription,
//         ingredients: [
//           {
//             name: ingredientName,
//             amount: ingredientAmount,
//           },
//           {
//             name: ingredientName2,
//             amount: ingredientAmount2,
//           },
//         ],
//         cookingTime: cookingTime,
//         prepTime: prepTime,
//         cookingInstructions: cookingInstructions,
//         image: image,
//       },
//     ],
//   });
// }
// updateUserData(
//   "justin",
//   "luna",
//   "pass123",
//   "email@email.com",
//   "birria",
//   "mexican food",
//   "tortillas",
//   "10",
//   "carne asada",
//   "2lbs",
//   "30 min",
//   "10 min",
//   "instructions how to make meal",
//   "image"
// );

// getUsers();
