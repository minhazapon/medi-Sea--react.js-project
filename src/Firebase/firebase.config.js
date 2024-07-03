// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHc0jyOmN_VKyU7I53_oM3bjb1BQeyeNE",
  authDomain: "medicine-galaxy-32df3.firebaseapp.com",
  projectId: "medicine-galaxy-32df3",
  storageBucket: "medicine-galaxy-32df3.appspot.com",
  messagingSenderId: "807632622734",
  appId: "1:807632622734:web:8593dd082b00b27f8765df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;