import React, { useState, useEffect, useContext } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../styles/home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { Context } from "../store/appContext";

export const SearchClass = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const { store, actions } = useContext(Context);

  const clases = [
    { name: "clase 1" },
    { name: "clase 2" },
    { name: "clase 3" },
    { name: "clase 4" },
    { name: "clase 5" },
    { name: "clase 6" },
    { name: "clase 7" },
    { name: "clase 8" },
    { name: "clase 9" },
    { name: "clase 10" },
    { name: "clase 11" },
    { name: "clase 12" },
    { name: "clase 13" },
    { name: "clase 14" },
    { name: "clase 15" },
    { name: "clase 16" },
    { name: "clase 17" },
  ];

  const handleDirection = (direction) => {
    if (direction == "start") {
      if (cardIndex + offset > clases.length - 1) {
        console.log(0);
        setCardIndex(0);
      } else {
        console.log(cardIndex + offset);
        setCardIndex(cardIndex + offset);
      }
    }

    if (direction == "end") {
      if (cardIndex - offset < 0)
        setCardIndex(Math.floor((clases.length - 1) / 5) * 5);
      else setCardIndex(cardIndex - offset);
    }
  };
  const numberOfSlides = Math.floor(clases.length / 5) + 1;
  const slides = [];
  for (let i = 0; i < numberOfSlides; i++) {
    slides.push(i);
  }
  const offset = 5;

  // const getToDo = async () => {
  //   let response = await fetch("https://swapi.dev/api/people", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "GET",
  //   });
  //   let data = await response.json();
  //   console.log(data.results);
  //   return data.results;
  // };
  // const tutores = getTodo();
  // console.log(tutores);
  return (
    <>
      <div>
        <div className="d-flex">
          <span className="p-2 center-label">
            <i className="fa fa-star "></i>
          </span>
          <h1 className="p-2 flex-grow-1">Clases disponibles</h1>
        </div>

        <Form id="myForm" action="" className="d-flex justify-content-center">
          <Form.Control
            id="palabraClave"
            type="text"
            placeholder="Palabra Clave"
          />
          <Form.Label column sm={2} className="mb-2 bg-light">
            Fecha
          </Form.Label>
          <Form.Control id="fecha" type="date" />
          <Form.Select aria-label="Default select example">
            <option>Tutor</option>
            {console.log(store.tutores)}
            {store.tutores.map((tutor, index) => {
              return <option value={index}>{tutor.name}</option>;
            })}
          </Form.Select>
        </Form>

        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary p-2 m-2"
            form="myForm"
            type="submit"
          >
            Buscar
          </button>
        </div>
      </div>
      <div>
        <Carousel
          variant="dark"
          nextIcon={
            <i className="fas fa-chevron-circle-right carouselNext"></i>
          }
          prevIcon={<i className="fas fa-chevron-circle-left carouselNext"></i>}
          // onSlide={(eventKey, direction) => handleDirection(direction)}
          onSlid={(eventKey, direction) => handleDirection(direction)}
        >
          {slides.map((slide, index) => {
            // {store.planets.map((planet,index) => {
            return (
              <Carousel.Item key={slide}>
                <div className="row gx-1">
                  {clases
                    .filter(
                      (planet, index) =>
                        index >= cardIndex && index < cardIndex + offset
                    )
                    .map((planet, index) => {
                      return (
                        <div className="col-2">
                          <Card key={planet.name} className="cardClass h-100">
                            <Card.Img variant="top" src={rigoImageUrl} />
                            {console.log(__dirname)}
                            <Card.Body>
                              <Card.Title>{planet.name}</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                          </Card>
                        </div>
                      );
                    })}
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
