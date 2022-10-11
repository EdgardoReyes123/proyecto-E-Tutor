import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

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
    <div>
      <div>
        <h1>
          <i class="fa-regular fa-star"></i>Event
        </h1>
        <button>Close</button>
      </div>
      <div>
        <form id="myForm" action="">
          <label htmlFor="eventName">Event Name</label>
          <input id="eventName" type="text" />
          <label htmlFor="startDate">Start Date</label>
          <input id="startDate" type="time" />
          <label htmlFor="endDate">End Date</label>
          <input id="endDate" type="time" />
          <label htmlFor="allDay">All-day</label>
          <input id="allDay" type="checkbox" />
          <label htmlFor="calendar">Calendar</label>
          <input id="calendar" type="text" />
          <label htmlFor="details">Details</label>
          <textarea name="details" id="details" cols="30" rows="10"></textarea>
        </form>
        <button form="myForm" type="submit">
          Save
        </button>
      </div>
    </div>
  );
};
