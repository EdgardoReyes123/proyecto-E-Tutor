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



