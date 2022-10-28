import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import React, { useContext, useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Context } from "../store/appContext";

const FirstHeading = () => {
  const { store, actions } = useContext(Context);

  // const data = ["ITEM 1", "ITEM 2", "ITEM 3"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === store.planets.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);
    //clean up function
    return () => clearInterval(interval);
  });

  return (
    <div id="About" className="container-fluid first border-top">
      <div className="row p-4 mt-5" style={{placeContent: "center"}}>
        <Carousel className="carrusel" variant="dark">
          {store.classFavorites.map((classFavorite,index) => {
          return (
            <Carousel.Item className="carousel-I" interval={3000} key={classFavorite.title}>
            <img
              className="foto d-block"
              src={classFavorite.picture}
              alt="First slide"
              />
              <Carousel.Caption>
              <h5> <span className="classTitle">{classFavorite.title}</span></h5>
              <p><span className="classTitle">{classFavorite.tutor}</span></p>
              </Carousel.Caption>
            </Carousel.Item>
            );
            })}
        </Carousel>
      </div>
      <div className="row px-5 mt-3 mx-5 pb-5">
        <div className="headingText col-md-12">
          <h3 className="headingTextTitle">
            El mejor camino para Aprender <span className="logoName">E-Tutor</span>
          </h3>
          <p style={{ fontSize: "18px" }}>
            Ponemos en contacto a tutores y alumnos 
            con el objetivo de ofrecer tutorías presenciales o virtuales 
            para estudiantes y profesionales.
          </p>
        </div>
        <div className="linkText col-12 text-end pb-5">
          {/* <i className="fas fa-play-circle playIcon"></i> */}
          <p className="linkToVideo"><i className="fas fa-play-circle playIcon"></i>What people think</p>
        </div>
      </div>
    </div>
  );
};

export default FirstHeading;
