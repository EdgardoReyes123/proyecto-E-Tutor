import React, { useContext, useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';

const classView = () => {
    const { store, actions } = useContext(Context);

  return (
    <div id="About" className="container-fluid scheduleClassFondo border-top pt-5">
        <div className="row justify-content-center mt-1">
                <div className="col-md-8 classesMenu">
                    <h3 className="aboutTitle">
                        Entendiendo <span>HTML</span>
                    </h3>
                    <p className="aboutClass">
                        Un curso paso a paso si deseas comenzar en el mundo de la Programación Web.
                    </p>
                    <p className="aboutClass">
                        En este curso aprenderás HTML.
                    </p>
                    <p className="aboutClass">
                        El Curso Incluye 1 proyecto final, puedes ver los videos con los demos totalmente gratis!
                    </p>

                    <div className="usersIcon">
                        <p><i className="fas fa-users"></i> 8 </p>
                    </div>
                    
                    
                    <Button variant="outline-success" size="sm" className="registerButton" onClick={() => navigate(`/${type}/${id}`)}>
                        Register
                    </Button>
                    <Button variant="outline-success" className="registerButton ms-2" onClick={() => navigate(`/${type}/${id}`)}>
                        Content
                    </Button>
                    
                </div>
                <div className="col-md-4 classRoomView">
                    <div className="boxTitle2">
                        <h2 className="title">Classroom</h2>
                    </div>
                    <div className="classRoom">
                            <div className="d-inline-flex">
                                {/* <Image src="https://www.mundopsicologos.com/site/article/60606/50895/las-10-cualidades-de-una-persona-mas-valoradas-0_ai1.jpg"  className="tutor rounded-circle mw-100" alt="p1"/>*/}
                                <div className="salonTutor rounded-circle mw-100">
                                    <Image src="https://muhimu.es/wp-content/uploads/2017/04/FRENTE-NITIDA.jpg"
                                    className="row tutor rounded-circle mw-100" alt="p1"/>
                                    <div className="overlayTutor">
                                        <div className="text">Ehiber Graterol</div>
                                    </div>
                                </div>
                                <div className="salonStudent-1 rounded-circle mw-100">
                                    <Image src="https://www.recreoviral.com/wp-content/uploads/2015/01/mitad-2-personas-2.jpg"
                                    className="row student-1 rounded-circle mw-100" alt="p1"/>
                                    <div className="overlayStudent">
                                        <div className="textStudent">Anastasia De Caro</div>
                                    </div>
                                </div>
                                {/* <Image src="https://www.recreoviral.com/wp-content/uploads/2015/01/mitad-2-personas-2.jpg"
                                className="row student-1 rounded-circle mw-100" alt="p1"/> */}
                                <div className="salonStudent-2 rounded-circle mw-100">
                                    <Image src="https://psicologiaymente.com/media/xy/pq/jr/xypqjrQ4qG/xavier-molina/xavier-molina-medium.jpg"
                                    className="row student-2 rounded-circle mw-100" alt="p1"/>
                                    <div className="overlayStudent">
                                        <div className="textStudent">Mauricio Pinto</div>
                                    </div>
                                </div>
                                {/* <Image src="https://psicologiaymente.com/media/xy/pq/jr/xypqjrQ4qG/xavier-molina/xavier-molina-medium.jpg"
                                className="row student-2 rounded-circle mw-100" alt="p1"/> */}
                                <div className="salonStudent-3 rounded-circle mw-100">
                                    <Image src="https://www.inboundcycle.com/hubfs/ClaraAlvarez.jpg"
                                    className="row student-3 rounded-circle mw-100" alt="p1"/>
                                    <div className="overlayStudent">
                                        <div className="textStudent">Veronica Gutierres</div>
                                    </div>
                                </div>
                                {/* <Image src="https://www.inboundcycle.com/hubfs/ClaraAlvarez.jpg"
                                className="row student-3 rounded-circle mw-100" alt="p1"/> */}
                                <div className="salonStudent-4 rounded-circle mw-100">
                                    <Image src="https://themoneycoach.com.mx/wp-content/uploads/2021/07/Testimonio-mujer.jpg"
                                    className="row student-4 rounded-circle mw-100" alt="p1"/>
                                    <div className="overlayStudent">
                                        <div className="textStudent">Lyn Chang</div>
                                    </div>
                                </div>
                                {/* <Image src="https://themoneycoach.com.mx/wp-content/uploads/2021/07/Testimonio-mujer.jpg"
                                className="row student-4 rounded-circle mw-100" alt="p1"/> */}
                                <div className="salonStudent-5 rounded-circle mw-100">
                                    <Image src="http://www.paredro.com/wp-content/uploads/2015/08/shutterstock_188419790-e1439475344980.jpg"
                                    className="row student-5 rounded-circle mw-100" alt="p1"/>
                                    <div className="overlayStudent">
                                        <div className="textStudent">Alejandro Lopez</div>
                                    </div>
                                </div>
                                {/* <Image src="http://www.paredro.com/wp-content/uploads/2015/08/shutterstock_188419790-e1439475344980.jpg"
                                className="row student-5 rounded-circle mw-100" alt="p1"/> */}
                                <div className="salonStudent-6 rounded-circle mw-100">
                                    <Image src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg"
                                    className="row student-6 rounded-circle mw-100" alt="p1"/>
                                    <div className="overlayStudent">
                                        <div className="textStudent">Natalia Vera</div>
                                    </div>
                                </div>
                                {/* <Image src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg"
                                className="row student-6 rounded-circle mw-100" alt="p1"/> */}
                                <div className="salonStudent-7 rounded-circle mw-100">
                                    <Image src="https://thumbs.dreamstime.com/b/cara-sonriente-de-la-persona-diversa-108427785.jpg"
                                    className="row student-7 rounded-circle mw-100" alt="p1"/>
                                    <div className="overlayStudent">
                                        <div className="textStudent">Sandra Vargas</div>
                                    </div>
                                </div>
                                {/* <Image src="https://thumbs.dreamstime.com/b/cara-sonriente-de-la-persona-diversa-108427785.jpg"
                                className="row student-7 rounded-circle mw-100" alt="p1"/> */}
                                <div className="salonStudent-8 rounded-circle mw-100">
                                    <Image src="https://static.vecteezy.com/system/resources/previews/000/897/964/non_2x/black-man-portrait-photo.jpg"
                                    className="row student-8 rounded-circle mw-100" alt="p1"/>
                                    <div className="overlayStudent">
                                        <div className="textStudent">Roger Carr</div>
                                    </div>
                                </div>
                                {/* <Image src="https://static.vecteezy.com/system/resources/previews/000/897/964/non_2x/black-man-portrait-photo.jpg"
                                className="row student-8 rounded-circle mw-100" alt="p1"/> */}
                                <div className="salonStudent-9 rounded-circle mw-100">
                                    <div className="row studentAvailable-9 rounded-circle mw-100" alt="p1">Available</div>
                                    <div className="overlayStudentAvailable ">
                                        <div className="textStudent">Available</div>
                                    </div>
                                </div>
                                {/* <div className="row student-9 rounded-circle mw-100" alt="p1">Available</div> */}
                            </div>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default classView;