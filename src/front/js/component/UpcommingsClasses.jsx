import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import React, { useContext, useEffect, useState } from "react";
import UpcommingClassesCard from "../component/UpcommingClassesCard.jsx";

const UpcommingsClasses = () => {

  return (
    <div id="About" className="container text-center border-top">
        <div className="row mt-5">
                
                <div className="col-md-8 classes">
                    <div className="boxTitle">
                        <h2 className="title">Upcomming Classes...</h2>
                    </div>
                    <div className="tarjeta">
                        <UpcommingClassesCard/>
                    </div>
                </div>
                <div className="col-md-4 comments">
                    <div className="boxTitle">
                        <h2 className="title">Upcomming Classes...</h2>
                    </div>
                    <div className="tarjeta">
                        <div className="comment-item"></div>
                        <div className="comment-item"></div>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default UpcommingsClasses;