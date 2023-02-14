import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB6l4F3XVVyTy227ne50YF6ApzEvBRFjuA",
	authDomain: "bachelor-suite.firebaseapp.com",
	projectId: "bachelor-suite",
	storageBucket: "bachelor-suite.appspot.com",
	messagingSenderId: "766691259607",
	appId: "1:766691259607:web:8af7e4337effbc22192c92",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);