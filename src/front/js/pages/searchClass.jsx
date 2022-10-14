import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../styles/home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const SearchClass = () => {
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
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
        <div className="d-flex">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
