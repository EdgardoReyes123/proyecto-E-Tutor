import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import React, { useContext, useEffect, useState } from "react";

const FirstHeading = () => {
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
      <div className="carousel row p-5 mt-5">
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
      </div>
      <div className="row p-2 mt-5">
        <div className="headingText col-md-12">
          <h3 style={{ fontSize: "37px" }}>
            The best way to LEARN <span>Will Catch Your Eye</span>
          </h3>
          <p style={{ fontSize: "18px" }}>
            {" "}
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
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
