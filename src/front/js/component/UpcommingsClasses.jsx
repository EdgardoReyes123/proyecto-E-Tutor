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
                <div className="col-4">
                    <p style={{ fontSize: "18px" }}> Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                        id ligula porta felis euismod semper. Praesent commodo cursus magna,
                        vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                    </p>
                    {/* <img src="../website/assets/img/1.jpg" class="rounded-circle mw-100" alt="keyboard"> */}
                </div>
        </div>
    </div>
  );
};

export default UpcommingsClasses;