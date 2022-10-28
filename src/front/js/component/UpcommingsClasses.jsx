import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import React, { useContext, useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { Context } from "../store/appContext";
import UpcommingClassesCard from "../component/UpcommingClassesCard.jsx";

const UpcommingsClasses = () => {
    const { store, actions } = useContext(Context);

  return (
    <div id="About" className="container text-center border-top pt-5">
        <div className="row mt-5 pb-5">
                
                <div className="col-md-8 classes">
                    <div className="boxTitle">
                        <h2 className="title">Upcomming Classes...</h2>
                    </div>
                    <div>
                        <Carousel variant="dark"
                        // nextIcon={<i className="fas fa-chevron-circle-right carouselNext"></i>}
                        >
                                {store.clasesGeneral.map((claseG,index) => {
                                    return (
                                        <Carousel.Item interval={3000} key={claseG.name}>
                                            <img
                                            className="foto2 d-block w-100"
                                            // src={'https://cdn.windowsreport.com/wp-content/uploads/2019/12/html5-1200x900.jpg'} ---- HTML
                                            // src={'https://images.ctfassets.net/23aumh6u8s0i/2QjNmyDo6LfK4HC8F1q4qw/b8baddde46d79ec9432a15f14b4a41a2/javascript'} ---- JS
                                            // src={'https://blog.logrocket.com/wp-content/uploads/2021/06/how-browser-rendering-works.png'} --- HTM,CSS,JS
                                            // src={'https://blog.logrocket.com/wp-content/uploads/2021/04/utility-first-css-frameworks.png'} ----CSS
                                            // src={'https://neoghco.github.io/Blog/images/html.png'} --- HTML
                                            src={claseG.url}
                                            alt="First slide"
                                            />
                                            <Carousel.Caption>
                                            <h5><span className="classTitle">{claseG.name}</span></h5>
                                            <p><span className="classTitle">{claseG.description}</span></p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        
                                        
                                    );
                                })}
                        </Carousel>
                    </div>
                </div>
                <div className="col-md-4 comments">
                    <div className="boxTitle">
                        <h2 className="title">Comments</h2>
                    </div>
                    <div className="tarjeta-comments">
                        <div className="comment-item">
                            <div className="d-inline-flex">
                                <Image src="https://www.mundopsicologos.com/site/article/60606/50895/las-10-cualidades-de-una-persona-mas-valoradas-0_ai1.jpg" 
                                className="person rounded-circle mw-100" alt="p1"/>
                                <div>
                                    <h3 className="texto-title">
                                       Veronica C. - <span>"Muy buen Curso!"</span>
                                    </h3>
                                    <p className="texto"> 
                                        Aprendí muchísimo en estos meses, 
                                        las clases son dinámicas, enseña excelentes practicas y va actualizando 
                                        los proyectos que quedan obsoletos/desactualizados.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="comment-item2">
                            <div className="d-inline-flex">
                                <div>
                                    <h3 className="texto-title">
                                        Estefany P. -<span>"Asombroso Contenido"</span>
                                    </h3>
                                    <p className="texto"> 
                                        A lo largo de mi recorrido en este curso he aprendido muchísimas cosas 
                                        con respecto a la programación, no podría estar más satisfecha. 
                                        Gracias al profesor por crear este asombroso contenido.
                                    </p>
                                </div>
                                <Image src="https://www.recreoviral.com/wp-content/uploads/2015/01/mitad-2-personas-2.jpg" 
                                className="person rounded-circle mw-100" alt="p1"/>
                            </div>
                        </div>
                        <div className="comment-item">
                            <div className="d-inline-flex">
                                <Image src="http://www.paredro.com/wp-content/uploads/2015/08/shutterstock_188419790-e1439475344980.jpg" 
                                className="person rounded-circle mw-100" alt="p1"/>
                                <div>
                                    <h3 className="texto-title">
                                       Mauricio G. - <span>"Super recomendado!!"</span>
                                    </h3>
                                    <p className="texto"> 
                                    Es un curso excelente, actualizado y donde enseña bastante y con el que 
                                    con las herramientas y conocimientos que proporciona podemos construir 
                                    muchos proyectos que se nos ocurran.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default UpcommingsClasses;