import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../styles/login.css";
import FooterE from "../component/footer.js";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="background">
        <Col sm={12} className="formData">
          <Form id="myForm" action="" className="formLogin">
            <Form.Group as={Row} className="mb-2 p-2 mt-3 rowRegister">
              <Form.Group className="mb-3 info" controlId="formBasicEmail">
                <Form.Control className="formCasilla" type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group className="mb-3 info" controlId="formBasicPassword">
                <Form.Control className="formCasilla" type="password" placeholder="Password" required />
              </Form.Group>
            </Form.Group>
          </Form>
          <div className="d-flex justify-content-center">
            <button
              className="logButton btn btn-success p-2 m-2"
              form="myForm"
              type="submit"
            >
              Login
            </button>
          </div>
        </Col>
      </div>
    // </>
  );
};
