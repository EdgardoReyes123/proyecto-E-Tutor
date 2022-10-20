import React, { useContext, useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';

const classView = () => {
    const { store, actions } = useContext(Context);

  return (
    <div id="About" className="container-fluid scheduleClassFondo border-top pt-5">
        <div className="row justify-content-center mt-1">
                <div className="col-md-8 classesMenu">
                    <h3 className="aboutTitle">
                        The best way to LEARN <span>Will Catch Your Eye</span>
                    </h3>
                    <p className="aboutClass">
                        Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
                        ligula porta felis euismod semper. Praesent commodo cursus magna,
                        vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
                        commodo.
                    </p>
                    <Button variant="outline-primary" size="sm" className="registerButton" onClick={() => navigate(`/${type}/${id}`)}>
                        Register
                    </Button>
                    <Button variant="outline-success" className="registerButton ms-2" onClick={() => navigate(`/${type}/${id}`)}>
                        Content
                    </Button>
                    
                </div>
                <div className="col-md-4 classRoomView">
                    <div className="boxTitle2">
                        <h2 className="title">Classroom</h2>
                    </div>
                    <div className="classRoom">
                            <div className="d-inline-flex">
                                {/* <Image src="https://www.mundopsicologos.com/site/article/60606/50895/las-10-cualidades-de-una-persona-mas-valoradas-0_ai1.jpg"  className="tutor rounded-circle mw-100" alt="p1"/>*/}
                                <div className="row tutor rounded-circle mw-100" alt="p1">Tutor</div>
                                <div className="row student-1 rounded-circle mw-100" alt="p1">St</div>
                                <div className="row student-2 rounded-circle mw-100" alt="p1">St2</div>
                                <div className="row student-3 rounded-circle mw-100" alt="p1">St3</div>
                                <div className="row student-4 rounded-circle mw-100" alt="p1">St4</div>
                                <div className="row student-5 rounded-circle mw-100" alt="p1">St5</div>
                                <div className="row student-6 rounded-circle mw-100" alt="p1">St6</div>
                                <div className="row student-7 rounded-circle mw-100" alt="p1">St7</div>
                                <div className="row student-8 rounded-circle mw-100" alt="p1">St8</div>
                                <div className="row student-9 rounded-circle mw-100" alt="p1">St9</div>
                            </div>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default classView;