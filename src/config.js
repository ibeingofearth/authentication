// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2uUbl9y93aZooDJYnfQUbFGlYcKzhXkE",
  authDomain: "tridentauthentication.firebaseapp.com",
  projectId: "tridentauthentication",
  storageBucket: "tridentauthentication.appspot.com",
  messagingSenderId: "1061325999513",
  appId: "1:1061325999513:web:63e5902cf6839b55641708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { db }

const email ='irshad@gmail.com'
const password = '123456'


  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('user created successfully');
  })
  .catch((error) => {
    const errorCode = error.code; 
    const errorMessage = error.message;
    // ..
  });
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// Initialize Firebase

