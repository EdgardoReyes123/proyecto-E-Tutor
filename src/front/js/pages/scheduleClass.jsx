import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import ClassView from "../component/classView";

export const ScheduleClass = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid p-0 scheduleClass">
      {/* <FirstHeading /> */}
      <ClassView />
    </div>
  );
};
