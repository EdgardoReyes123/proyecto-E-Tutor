import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import React, { useContext, useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { Context } from "../store/appContext";
import UpcommingClassesCard from "../component/UpcommingClassesCard.jsx";

const UpcommingsClasses = () => {
    const { store, actions } = useContext(Context);

  return (
    <div id="About" className="container text-center border-top pt-5">
        <div className="row mt-5">
                
                <div className="col-md-8 classes">
                    <div className="boxTitle">
                        <h2 className="title">Upcomming Classes...</h2>
                    </div>
                    <div>
                        <Carousel variant="dark"
                        // nextIcon={<i className="fas fa-chevron-circle-right carouselNext"></i>}
                        >
                                {store.planets.map((planet,index) => {
                                    return (
                                        <Carousel.Item interval={3000} key={planet.name}>
                                            <img
                                            className="foto2 d-block w-100"
                                            src={`https://starwars-visualguide.com/assets/img/planets/${(index+2)}.jpg`}
                                            alt="First slide"
                                            />
                                            <Carousel.Caption>
                                            <h5><span className="classTitle">{planet.name}</span></h5>
                                            <p><span className="classTitle">Nulla vitae elit libero, a pharetra augue mollis interdum.</span></p>
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
                        <div className="comment-item">
                            <div className="d-inline-flex">
                                <Image src="https://www.mundopsicologos.com/site/article/60606/50895/las-10-cualidades-de-una-persona-mas-valoradas-0_ai1.jpg" 
                                className="person rounded-circle mw-100" alt="p1"/>
                                <div>
                                    <h3 className="texto-title">
                                        The Second Heading <span>Is Pretty Cool Too.</span>
                                    </h3>
                                    <p className="texto"> 
                                        Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                                        id ligula porta felis euismod semper. Praesent commodo cursus magna,
                                        vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="comment-item2">
                            <div className="d-inline-flex">
                                <div>
                                    <h3 className="texto-title">
                                        The Second Heading <span>Is Pretty Cool Too.</span>
                                    </h3>
                                    <p className="texto"> 
                                        Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                                        id ligula porta felis euismod semper. Praesent commodo cursus magna,
                                        vel scelerisque nisl consectetur.
                                    </p>
                                </div>
                                <Image src="https://cdn.create.vista.com/api/media/medium/329263782/stock-photo-handsome-smiling-man-taking-selfie?token=" 
                                className="person rounded-circle mw-100" alt="p1"/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default UpcommingsClasses;