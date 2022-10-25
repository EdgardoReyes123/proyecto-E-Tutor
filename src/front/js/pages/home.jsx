import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import FirstHeading from "../component/FirstHeading.jsx";
import UpcommingsClasses from "../component/UpcommingsClasses.jsx";
import { addDoc, collection, getFirestore, getDocs } from "firebase/firestore";
import {db} from '../firebase'
import { useEffect } from "react";
export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid p-0">
      <FirstHeading />
      <UpcommingsClasses />
    </div>
  );
};

  // try {
  //   const docRef = await addDoc(collection(db, "users"), {
  //     first: "Alan",
  //     middle: "Mathison",
  //     last: "Turing",
  //     born: 1912
  //   });
  //   // addDoc(docRef, docData, {merge: true});
  
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
  // function addDocument() {
    
  //   const addNewDocument = collection(db, 'users')
  //   addDoc(addNewDocument).then(response => {
  //     console.log(response)
  //   }).catch(err => console.log(err.message))
    
  // }

  
  // useEffect(()=>{
  //   addDocument()
  // }, [])
  // const querySnapshot = await getDocs(collection(db, "users"));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });


