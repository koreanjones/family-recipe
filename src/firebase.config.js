import firebase from 'firebase/compat/app'
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_SECRET_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

// Initialize Firebase
const db = getFirestore(app);

export const auth = app.auth();
export { db };
  
export default app;
