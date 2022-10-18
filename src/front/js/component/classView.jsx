import React, { useContext, useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';

const classView = () => {
    const { store, actions } = useContext(Context);

  return (
    <div id="About" className="container border-top pt-5">
        <div className="row mt-1">
                <div className="col-md-8 classesMenu">
                    <Button variant="warning" onClick={() => navigate(`/${type}/${id}`)}>
                        Learn More!
                    </Button>
                    
                </div>
                <div className="col-md-4 classRoomView">
                    <div className="boxTitle2">
                        <h2 className="title">Classroom</h2>
                    </div>
                    <div className="classRoom">
                            <div className="d-inline-flex">
                                <Image src="https://www.mundopsicologos.com/site/article/60606/50895/las-10-cualidades-de-una-persona-mas-valoradas-0_ai1.jpg" 
                                className="tutor rounded-circle mw-100" alt="p1"/>
                            </div>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default classView;