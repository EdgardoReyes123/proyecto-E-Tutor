import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Register = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!! REGISTER</h1>
      <p>
        <img src={rigoImageUrl} />
      </p>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <h1>Cambios para hacer el register</h1>
    </div>
  );
};
