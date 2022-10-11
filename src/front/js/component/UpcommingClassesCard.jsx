import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import img from "/workspace/proyecto-E-Tutor/src/front/img/rigo-baby.jpg";

function UpcommingClassesCard() {
    // const [favorites, setFavorites] = useEffect([])
    const navigate = useNavigate();
    const {actions, store} = useContext(Context);

  return (
    <Card style={{ width: '18rem', display: 'inline-block' }}>
      <Card.Img className="imgCard" 
        variant="top" 
        src={`https://starwars-visualguide.com/assets/img/characters/3.jpg`}
      />
      <Card.Body>
        <Card.Title>Ejemplo</Card.Title>
        <Card.Text>
          Height: 170
        </Card.Text>
        <Button variant="outline-warning" onClick={() => navigate(`/${type}/${id}`)}>
            Learn More!
        </Button>
        {/* <div className="heart ms-md-5" variant="outline-warning" onClick={() => actions.manageFavorites(detail.name)}>
            {actions.isIn(store.favorites, detail.name) ? <i className='fas fa-heart'></i> : <i className='far fa-heart'></i>}
        </div> */}
      </Card.Body>
    </Card>
  );
}

export default UpcommingClassesCard;