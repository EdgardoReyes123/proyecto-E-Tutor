import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/profile.css";

export function Profile() {
  const [post, setPost] = useState([]);
  const [inputPost, setInputPost] = useState("");

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
    <div className="Container" fluid="md">
      <Row className="Row">
        <Col sm={10}>
          <div className="hero">
            <div className="Portada">
              <img src="https://i.picsum.photos/id/324/1180/300.jpg?hmac=IzsPd2zvvUbzOYRufGgA56ZnVoiw_QnjFSx2rDUItQE"></img>
            </div>
            <div className="imgperfil">
              <img src="https://i.picsum.photos/id/276/100/100.jpg?hmac=UaT7sojlOY8hIbIHpc9DEwjr3VSLkqfFGG-imYhlolw"></img>
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

        <input
          className="bar"
          onChange={(e) => setInputPost(e.target.value)}
          value={inputPost}
          onKeyDown={handleAdd}
          type="text"
          placeholder="Add new post..."
        />

        <ListGroup className="col-sm-8">
          {post.map((post, index) => {
            return (
              <div className="post">
                <ListGroup.Item key={index}>
                  <div className="postInfo">
                    <img src="https://i.picsum.photos/id/402/50/50.jpg?hmac=TKqsv4y6IYI-OkMqcmihYayIT8u9SsQa4OO7wRnmW8s"></img>
                    <p className="title">4Geeks Academy Venezuela</p>
                  </div>
                  <div className="postData">
                    <p>{post}</p>
                  </div>
                  {/*<div className="postImg">
                      <img
                        src="https://i.picsum.photos/id/907/300/500.jpg?hmac=5JhmKFTFA0Ob7w_lnuzpmaHOyLPFUDzNW0ZzzpZzwL8"
                        alt=""
                      />
                    </div>*/}
                </ListGroup.Item>
              </div>
            );
          })}
        </ListGroup>
      </Row>
    </div>
  );
}

Profile;
