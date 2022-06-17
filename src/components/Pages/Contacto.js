import React from "react";
import ContactFondo from "../FondoContact";
import Formulario from "../Formulario";
import './contacto.css';


export const Contacto= () => {
  return (
    <>
    <div className="container-carrusel">
    <ContactFondo />
    </div>
 
    <div className="Maps">
     <h2>EN ESTE APARTADO TENDRIA QUE IR EL API DE GOOGLE MAPS PERO AHORA SE PAGA -.-</h2>
    </div>


    <div className="formularioC">
      <div className="tituloC">
      <h2>¿Necesitas más información?</h2>
      <p>Completa el formulario y escríbenos para solicitar mayor información sobre nuestros productos.</p> 
      </div>
      <Formulario />
    </div>
  </>
  );
};