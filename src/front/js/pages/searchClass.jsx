import React, { useState, useEffect, useContext } from "react";
import html1Url from "../../img/html-1.png";
import html2Url from "../../img/html-2.png";
import css1Url from "../../img/css-1.jpg";
import css2Url from "../../img/css-2.png";
import js1Url from "../../img/js-1.jpg";
import js2Url from "../../img/js-2.jpg";
import completoUrl from "../../img/completo.jpg";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../styles/searchClass.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { Context } from "../store/appContext";

export const SearchClass = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const { store, actions } = useContext(Context);

  const clases = [
    {
      name: "clase 1",
      description: "Curso basico de HTML",
      url: html1Url,
    },
    {
      name: "clase 2",
      description: "Curso avanzado de HTML",
      url: html2Url,
    },
    {
      name: "clase 3",
      description: "Curso basico de CSS. Aprende a dar estilo a tus paginas.",
      url: css1Url,
    },
    {
      name: "clase 4",
      description:
        "Curso CSS avanzado. Aprende todo acerca de los selectores y mucho mas.",
      url: css2Url,
    },
    {
      name: "clase 5",
      description:
        "Curso basico de JS. Lo que necesitas saber para dar accion a tu pagina",
      url: js1Url,
    },
    {
      name: "clase 6",
      description: "Curso de JS avanzado",
      url: js2Url,
    },
    {
      name: "clase 7",
      description: "Curso completo de HTML, CSS y JS.",
      url: completoUrl,
    },
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
          style={{ backgroundColor: "white" }}
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
                <div className="d-flex">
                  {clases
                    .filter(
                      (planet, index) =>
                        index >= cardIndex && index < cardIndex + offset
                    )
                    .map((planet, index) => {
                      return (
                        <Card key={planet.name} className="cardClass">
                          <Card.Img
                            variant="top"
                            src={planet.url}
                            style={{
                              objectFit: "contain",
                              // borderRadius: 55,
                              // width: "50vw",
                              paddingTop: "2px",
                              height: "100px",
                              // border: "1px solid red",
                            }}
                          />
                          <Card.Body>
                            <Card.Title>{planet.name}</Card.Title>
                            <Card.Text
                              style={{
                                height: "100px",
                              }}
                            >
                              {planet.description}
                            </Card.Text>
                            <Button variant="primary">Ver</Button>
                          </Card.Body>
                        </Card>
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
