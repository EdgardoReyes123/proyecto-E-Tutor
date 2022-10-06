import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const FirstHeading = () => {
  return (
    <div id="About" className="container border-top">
        <div className="row p-5 mt-5">
                
        </div>
        <div className="row p-5 mt-5">
                <div className="headingText col-md-12">
                    <h3 style={{fontSize: "37px"}}>
                        The best way to LEARN <span>Will Catch Your Eye</span>
                    </h3>
                    <p style={{fontSize: "18px"}}>  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                        id ligula porta felis euismod semper. Praesent commodo cursus magna,
                        vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                    </p>
                </div>
                <div className="col-12 text-end">
                    <i className="fas fa-play-circle playIcon"></i>
                    <span className="linkToVideo">Will Catch Your Eye</span>
                </div>
        </div>
    </div>
    );
};
    
export default FirstHeading;