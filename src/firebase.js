// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdlkPSo4iQ0rdzR5m1GeoDc4OkUFgFicg",
  authDomain: "eatai-30d56.firebaseapp.com",
  databaseURL: "https://eatai-30d56-default-rtdb.firebaseio.com",
  projectId: "eatai-30d56",
  storageBucket: "eatai-30d56.appspot.com",
  messagingSenderId: "656926860998",
  appId: "1:656926860998:web:5acbc631fe5e11da6d59c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app