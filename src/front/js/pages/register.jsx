import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../styles/home.css";
import "../../styles/register.css";
import { useState } from "react";

export const Register = () => {
  // const { store, actions } = useContext(Context);

  const [initialValues, setInitialValues] = useState({
    username: "",
    password: "",
    rol: "",
  })

  const [registerValue, setRegisterValue] = useState([]);

  const {actions} = useContext(Context)

  const  registerForm = (e) => {
    e.preventDefault();
    setRegisterValue((prevFormValues) => [...prevFormValues, initialValues]);
    actions.addUser(initialValues)
  }

  return (
    <div className="background">
      <Col sm={12} className="data">
        <Form id="myForm" className="form" action="">
          <Form.Group as={Row} className="mb-2 p-2 mt-3 rowRegister">
            <Form.Group className="mb-3 info" controlId="formBasicEmail">
              <Form.Control 
              className="formCasillaRegister" 
              type="email" 
              placeholder="Enter email" required 
              onChange={(e) => setInitialValues({...initialValues, username: e.target.value})}
              value={initialValues.username}/>
            </Form.Group>

            <Form.Group className="mb-3 info" controlId="formBasicPassword">
              <Form.Control 
              className="formCasillaRegister" 
              type="password" 
              placeholder="Password" required 
              onChange={(e) => setInitialValues({...initialValues, password: e.target.value})}
              value={initialValues.password}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Control
                className="formCasillaRegister"
                type="password"
                placeholder="Confirm Password"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                label="Tutor"
                type="radio"
                name="profile"
                value="tutor"
                id="tutor"
              />
              <Form.Check
                label="Student"
                type="radio"
                name="profile"
                value="student"
                id="student"
              />
            </Form.Group>
          </Form.Group>
        </Form>
        <div className="d-flex justify-content-center">
          <button 
          className="registerBtn btn btn-success p-2 m-2" 
          form="myForm" 
          type="submit"
          onClick={registerForm}>
            Submit
          </button>
        </div>
      </Col>
    </div>
  );
};
