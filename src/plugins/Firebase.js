// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCkULmSPNPH2T-1jo-cZaOh9EFl618Dw5c",
	authDomain: "vue-git-search.firebaseapp.com",
	projectId: "vue-git-search",
	storageBucket: "vue-git-search.appspot.com",
	messagingSenderId: "741246152168",
	appId: "1:741246152168:web:ecc3edf8c726cd2b3a085d",
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
export default Firebase;
