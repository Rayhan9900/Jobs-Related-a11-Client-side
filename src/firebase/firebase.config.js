// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyCobtYarOQWHuWrIim3Zbt3LfCMrBy2CBk",
    // authDomain: "jobs-related-assignment-11.firebaseapp.com",
    // projectId: "jobs-related-assignment-11",
    // storageBucket: "jobs-related-assignment-11.appspot.com",
    // messagingSenderId: "1055128690522",
    // appId: "1:1055128690522:web:9047482226dc8315585d63"

    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId

};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app