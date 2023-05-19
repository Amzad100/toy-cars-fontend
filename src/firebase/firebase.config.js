// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtyNfnHDGjcViqSvrAZVEpo6-mnLkr-dI",
    authDomain: "toy-cars-c5c05.firebaseapp.com",
    projectId: "toy-cars-c5c05",
    storageBucket: "toy-cars-c5c05.appspot.com",
    messagingSenderId: "1052287828992",
    appId: "1:1052287828992:web:03f61c8a3eab79bdc9c4e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;