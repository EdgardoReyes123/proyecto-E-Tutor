import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Navbar from "../component/Navbar.jsx";
import FirstHeading from "../component/FirstHeading.jsx";
import UpcommingsClasses from "../component/UpcommingsClasses.jsx";
// import Container from "./Container.jsx";
// import Footer from "./Footer.jsx";

//create your first component
export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid p-0">
      <FirstHeading />
      <UpcommingsClasses />
    </div>
  );
};

// export const Home = () => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<div className="text-center mt-5">
// 			<h1>Hello Rigo!!</h1>
// 			<p>
// 				<img src={rigoImageUrl} />
// 			</p>
// 			<div className="alert alert-info">
// 				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
// 			</div>
// 			<p>
// 				This boilerplate comes with lots of documentation:{" "}
// 				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
// 					Read documentation
// 				</a>
// 			</p>
// 		</div>
// 	);
// };
