import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import UpcommingClassesCard from "../component/UpcommingClassesCard.jsx";

const UpcommingsClasses = () => {
    const { store, actions } = useContext(Context);

  return (
    <div id="About" className="container text-center border-top">
        <div className="row mt-5">
                
                <div className="col-md-8 classes">
                    <div className="boxTitle">
                        <h2 className="title">Upcomming Classes...</h2>
                    </div>
                    <div className="tarjeta">
                        <Carousel variant="dark">
                                {store.planets.map((planet,index) => {
                                    return (
                                        <Carousel.Item interval={3000} key={planet.name}>
                                            {/* <UpcommingClassesCard
                                            detail={planet}
                                            type="planets"
                                            id={index + 1} /> */}
                                            <img
                                            className="foto d-block w-100"
                                            src={`https://starwars-visualguide.com/assets/img/planets/${(index+2)}.jpg`}
                                            alt="First slide"
                                            />
                                            <Carousel.Caption>
                                            <h5 className="classTitle">{planet.name}</h5>
                                            <p className="classTitle">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        
                                        
                                    );
                                })}
                        </Carousel>
                    </div>
                </div>
                <div className="col-md-4 comments">
                    <div className="boxTitle">
                        <h2 className="title">Comments</h2>
                    </div>
                    <div className="tarjeta-comments">
                        <div className="comment-item"></div>
                        <div className="comment-item"></div>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default UpcommingsClasses;