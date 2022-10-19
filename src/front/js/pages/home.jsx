import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import FirstHeading from "../component/FirstHeading.jsx";
import UpcommingsClasses from "../component/UpcommingsClasses.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid p-0">
      <FirstHeading />
      <UpcommingsClasses />
    </div>
  );
};
