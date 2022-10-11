import React from "react";
import Button from "react-bootstrap/Button";
//import { Container } from "react-bootstrap/Container";
//import { Row } from "react-bootstrap/Row";
//import { Col } from "react-bootstrap/Col";

export function Profile() {
  return (
    <div className="Container" fluid="md">
      <div className="Row">
        <div className="Col1">
          <div className="Portada">
            <img src="https://i.picsum.photos/id/582/500/150.jpg?hmac=LlpH0hVyiXUveq_1ZxIN_r2YOa2_XG7yXUauK7P63wc"></img>
          </div>
          <div className="imgperfil">
            {" "}
            <img src="https://i.picsum.photos/id/276/100/100.jpg?hmac=UaT7sojlOY8hIbIHpc9DEwjr3VSLkqfFGG-imYhlolw"></img>
          </div>
          <div>
            <h5>4geeeks Academy Venezuela</h5>
            <p>
              Somos una academia de programacion web. Nuestra proxima cohorte
              online inicia el 17 de octubre
            </p>
            <div variant="primary" type="submit">
              <Button className="Button" variant="primary">
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
        <div className="Col2">2 of 2</div>
      </div>
    </div>
  );
}

Profile;
