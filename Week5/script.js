  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
    import { getDatabase } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDRPJCtcKSc0bZAnXNF5auDnRO0gisZPas",
    authDomain: "mobile-program-83ca0.firebaseapp.com",
    projectId: "mobile-program-83ca0",
    storageBucket: "mobile-program-83ca0.firebasestorage.app",
    messagingSenderId: "89727077781",
    appId: "1:89727077781:web:0b8dd922dd61e5869c7a9c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

console.log(db)