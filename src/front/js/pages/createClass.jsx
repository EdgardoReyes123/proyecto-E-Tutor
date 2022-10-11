import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";

export const CreateClass = () => {
  const { store, actions } = useContext(Context);
  //   Tema
  //   A quien va dirigido
  //   Fecha y hora
  //   Duración
  //   Palabras Claves
  //   Links a reursos (videos de youtube, guias en la nube, podcasts etc)
  //   Costo
  //   Modalidad: presencial o virtual

  return (
    <>
      <div>
        <div className="d-flex">
          <span className="p-2 center-label">
            <i className="fa fa-star "></i>
          </span>
          <h1 className="p-2 flex-grow-1">Crear clase</h1>
          <button className="btn btn-primary p-2 m-2">Close</button>
        </div>
        <div>
          <Form id="myForm" action="">
            <Form.Group as={Row} className="mb-2 bg-light p-2 mt-3">
              <Col sm={3}></Col>

              <Form.Label column sm={1} className="mb-2 bg-light">
                Event Name
              </Form.Label>
              <Col sm={5}>
                <Form.Control id="eventName" type="text" />
              </Col>

              <Col sm={3}></Col>

              <Col sm={3}></Col>
              <Form.Label column sm={1} className="mb-2">
                Start Date
              </Form.Label>
              <Col sm={5}>
                <Form.Control id="startDate" type="datetime-local" />
              </Col>
              <Col sm={3}></Col>

              <Col sm={3}></Col>
              <Form.Label column sm={1} className="mb-2">
                End Date
              </Form.Label>
              <Col sm={5}>
                <Form.Control id="endDate" type="datetime-local" />
              </Col>
              <Col sm={3}></Col>

              <Col sm={3}></Col>
              <Form.Label column sm={1} className="mb-2">
                Modalidad
              </Form.Label>
              <Form.Label column sm={1} className="mb-2">
                Presencial
              </Form.Label>
              <Col sm={1}>
                <Form.Check id="presencial" type="checkbox" name="presencial" />
              </Col>
              <Form.Label column sm={1} className="mb-2">
                Virtual
              </Form.Label>
              <Col sm={1}>
                <Form.Check id="virtual" type="checkbox" name="virtual" />
              </Col>
              <Col sm={4}></Col>

              <Col sm={3}></Col>
              <Form.Label column sm={1} className="mb-2">
                Cost
              </Form.Label>
              <Col sm={5}>
                <Form.Control id="cost" type="text" />
              </Col>

              <Col sm={3}></Col>

              {/* <Col sm={3}></Col>
            <Form.Label column sm={1} className="mb-2">
              Calendar
            </Form.Label>
            <Col sm={5}>
              <Form.Control id="calendar" type="text" />
            </Col>
            <Col sm={3}></Col>             */}

              <Col sm={3}></Col>
              <Form.Label column sm={1} className="mb-2">
                Details
              </Form.Label>
              <Col sm={5}>
                <Form.Control as="textarea" rows={3} />
              </Col>
              <Col sm={3}></Col>
            </Form.Group>
          </Form>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary p-2 m-2"
              form="myForm"
              type="submit"
            >
              Save
            </button>
            <button
              className="btn btn-secondary p-2 m-2"
              form="myForm"
              type="submit"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
