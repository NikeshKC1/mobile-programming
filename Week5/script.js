  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import {getDatabase,ref, set, get, update, remove } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js"
  
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



// Function to write user data to Firebase Realtime Database
// function writeUserData(userId, firstname, lastname,age,phoneNumber,gender,email,address,field,year) {
// //     // Create a reference/points to 'users/{userId}' and set the data
//     set(ref(db, 'users/' + userId), {
//       firstname: firstname,      
//       lastname: lastname,
//       age: age,
//       phoneNumber: phoneNumber,
//       gender: gender,
//       email: email,
//       address: address,
//       field: field,
//       year: year
      
//     })
// }

// writeUserData(1, "Nikesh", "KC",22,9738136437,"Male","nikesh@gmail.com","Nepal","BscIt","3rd")
// writeUserData(2, "Amit", "Pokhrel",23,9738136347,"Male","amit@gmail.com","Nepal","BscIt","3rd")


// // ref(db, 'users') points to the users path.
// // get(userRef) gets the data at that path.
// // snapshot.forEach(...) loops over each child node (each user).
// // childsnapshot.val() gives the actual data (name and email), which is printed.
function readUser(){
    const userRef = ref(db,'users')

    get(userRef).then((snapshot)=>{
        snapshot.forEach((childsnapshot)=>{
            console.log(childsnapshot.val());
        })
    })
}
readUser();


function updateUserData(userId, updatedData) {
  const userRef = ref(db, 'users/' + userId);  
  update(userRef, updatedData)
    .then(() => {
      console.log("User updated successfully");
    })
    .catch((error) => {
      console.error("Error updating user:", error);
    });
}
// Example usage:
updateUserData(1, {firstname: "Nikesh", lastname: "KC", email: "nikesh@gmail.com"});




// function deleteUserData(userId) {
//   const userRef = ref(db, 'users/' + userId);
//   remove(userRef)
//     .then(() => {
//       console.log("User deleted successfully");
//     })
//     .catch((error) => {
//       console.error("Error deleting user:", error);
//     });
// }

// // // // // // // // // // Example usage:
// deleteUserData(1);

// //console.log("Added! Good")