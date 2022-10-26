import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import React, { useContext, useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Context } from "../store/appContext";

const FirstHeading = () => {
  const { store, actions } = useContext(Context);
  const data = ["ITEM 1", "ITEM 2", "ITEM 3"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
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
      <div className="row p-5 mt-5" style={{placeContent: "center"}}>
        <Carousel className="carrusel" variant="dark"
          // nextIcon={<i className="fas fa-chevron-circle-right carouselNext"></i>}
          >
          {store.planets.map((planet,index) => {
          return (
            <Carousel.Item className="carousel-I" interval={3000} key={planet.name}>
            <img
              className="foto d-block"
              src={'https://www.onlinecoursereport.com/wp-content/uploads/2020/06/shutterstock_1150510607-1024x512.jpg'}
              // src={`https://starwars-visualguide.com/assets/img/planets/${(index+2)}.jpg`}
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

      {/* <div className="carousel row p-5 mt-5">
        {data.map((item, index) => {
          return (
            <h1
              className="carouselItem"
              style={{ transform: `translate(-${currentIndex * 100}%)` }}
              key={index}
            >
              {item}
            </h1>
          );
        })}
      </div> */}
      <div className="row px-5 mt-3 mx-5 pb-5">
        <div className="headingText col-md-12">
          <h3 className="headingTextTitle">
            The best way to LEARN <span>Will Catch Your Eye</span>
          </h3>
          <p style={{ fontSize: "18px" }}>
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div className="linkText col-12 text-end">
          {/* <i className="fas fa-play-circle playIcon"></i> */}
          <p className="linkToVideo"><i className="fas fa-play-circle playIcon"></i>Will Catch Your Eye</p>
        </div>
      </div>
    </div>
  );
};

export default FirstHeading;
