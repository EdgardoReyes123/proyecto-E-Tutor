import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA8L9H6cbAsiWTuNLJOY7NXSOjObn5djo",
  authDomain: "e-tutor-6dc22.firebaseapp.com",
  projectId: "e-tutor-6dc22",
  storageBucket: "e-tutor-6dc22.appspot.com",
  messagingSenderId: "725051473181",
  appId: "1:725051473181:web:5e282be3125039cc6f75f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  });
  // addDoc(docRef, docData, {merge: true});

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});