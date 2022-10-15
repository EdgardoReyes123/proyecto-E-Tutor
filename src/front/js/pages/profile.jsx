import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { Container, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import "../../styles/profile.css";

export function Profile() {
  const [post, setPost] = useState([]);
  const [inputPost, setInputPost] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = (e) => {
    if (e.key == "Enter") {
      if (inputPost != "") {
        setPost([...post, inputPost]);
        setInputPost("");
      } else {
        alert("No puede estar vacio");
      }
    }
  };

  return (
    <Container>
      <Row>
        {/*****************************RECUADRO PERFIL******************************************** */}
        <Col sm={10}>
          <div className="hero">
            <img
              className="portada"
              src="https://i.picsum.photos/id/324/1180/300.jpg?hmac=IzsPd2zvvUbzOYRufGgA56ZnVoiw_QnjFSx2rDUItQE"
            ></img>
            <div>
              <img
                className="imgperfil"
                src="https://i.picsum.photos/id/276/100/100.jpg?hmac=UaT7sojlOY8hIbIHpc9DEwjr3VSLkqfFGG-imYhlolw"
              ></img>
              <FontAwesomeIcon
                className="edit"
                icon={faPencil}
                onClick={handleShow}
              />
              {/***************************MODAL************************************************ */}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="4Geek Venezuela"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Bio</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Somos una academia de programacion web. Nuestra proxima cohorte online inicia el 17 de octubre"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>About Me</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat in numquam minus, id accusamus quo rem quia, ut atque
                        mollitia nemo voluptate error esse ipsum cupiditate harum
                        iste! Ut, nisi?"
                        autoFocus
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              {/***************************MODAL************************************************ */}
            </div>
            <div className="data">
              <h5>4Geeeks Academy Venezuela</h5>
              <p>
                Somos una academia de programacion web. Nuestra proxima cohorte
                online inicia el 17 de octubre
              </p>
              <div>
                <Button className="Button follow" variant="primary">
                  Following
                </Button>
                <Button className="Button" variant="primary">
                  Visit Website
                </Button>
                <Button className="Button" variant="primary">
                  More
                </Button>
              </div>
            </div>
          </div>
        </Col>
        {/*****************************RECUADRO PERFIL******************************************** */}

        <Col sm={10}>
          <Row>
            {/*******************************Cuadro Detalles*************************************** */}
            <Col sm={4} className="bio">
              <h4>Details</h4>
              <p>
                <FontAwesomeIcon icon={faStar} />5 Instructor Rating
              </p>
              <p>
                <FontAwesomeIcon icon={faAward} /> 500 Reviews
              </p>
              <p>
                <FontAwesomeIcon icon={faPlay} /> 6 Courses
              </p>
              <div>
                <h4>About me</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat in numquam minus, id accusamus quo rem quia, ut atque
                  mollitia nemo voluptate error esse ipsum cupiditate harum
                  iste! Ut, nisi?
                </p>
              </div>
            </Col>
            {/*******************************Cuadro Detalles*************************************** */}

            {/**********************CUADRO POST******************************************** */}
            <Col sm={8} className="">
              {/*<input
              className="bar col-md-8"
              onChange={(e) => setInputPost(e.target.value)}
              value={inputPost}
              onKeyDown={handleAdd}
              type="text"
              placeholder="Add new post..."
            />*/}

              <div className="post">
                <div className="postInfo">
                  <img src="https://i.picsum.photos/id/402/50/50.jpg?hmac=TKqsv4y6IYI-OkMqcmihYayIT8u9SsQa4OO7wRnmW8s"></img>
                  <p className="title">4Geeks Academy Venezuela</p>
                </div>
                <div className="postData">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-50"
                        src="https://picsum.photos/50"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-50"
                        src="https://picsum.photos/50"
                        alt="Second slide"
                      />

                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-50"
                        src="https://picsum.photos/50"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </Col>
            {/**********************CUADRO POST******************************************** */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

Profile;
