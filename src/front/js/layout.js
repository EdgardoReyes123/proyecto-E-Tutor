import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { ScheduleClass } from "./pages/scheduleClass";
import injectContext from "./store/appContext";

import { NavbarP } from "./component/Navbar";
import { Footer } from "./component/footer";
import { Profile } from "./pages/profile";
import { Register } from "./pages/register";
import { CreateClass } from "./pages/createClass";

//create your first component
function Layout() {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          {/*<Navbar />*/}
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<ScheduleClass />} path="/scheduleClass" />
            <Route element={<Register />} path="/register" />
            <Route element={<Login />} path="/login" />
            <Route element={<CreateClass />} path="/createClass" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          {/*<Footer />*/}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(Layout);
