import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavbarP = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">E-Tutor</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Class</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    // 	<div className="container-fluid">
    // 		<Link to="/">
    // 			<span className="navbar-brand text-white" href="#">Start Bootstrap</span>
    // 		</Link>
    // 		<Link to="/demo">
    // 			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    // 				<span className="navbar-toggler-icon"></span>
    // 			</button>
    // 		</Link>
    // 		<div className="collapse navbar-collapse" id="navbarNav">
    // 			<ul className="navbar-nav">
    // 				<li className="nav-item">
    // 					<a className="nav-link text-white" aria-current="page" href="#">Home</a>
    // 				</li>
    // 				<li className="nav-item">
    // 					<a className="nav-link" href="#">About</a>
    // 				</li>
    // 				<li className="nav-item">
    // 					<a className="nav-link" href="#">Services</a>
    // 				</li>
    // 				<li className="nav-item">
    // 					<a className="nav-link" href="#">Contact</a>
    // 				</li>
    // 			</ul>
    // 		</div>
    // 	</div>
    // </nav>
  );
};

export default NavbarP;
