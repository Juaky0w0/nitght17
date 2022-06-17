import React from 'react';
import './FondoServices.css';
import banerS from '../img/baner-services.png';
import {ServicesProps} from './Props';
import { SliderServi, SliderServi2 } from './sliderservices';


const ServicesFondo = () => {
  return (
    <>
<div className="container-numero">

<img
   className="d-block w-100"
   src={banerS}
   alt="imcetron"
 />
<div className='container-title'>
<div className="title-main">
<h3 className="title-service">Nuestros Servicios</h3>
</div>
<p className='texto-services'>Garantizamos la mejor experiencia
 a nuestros clientes</p>
</div>   

</div>


<ServicesProps 
title='Principales servicios'
name='Mantenimiento y pruebas'
context='Manejamos tecnología sólida y contamos con una alta experiencia en nuestros proyectos. Nuestro servicio de mantenimiento y pruebas de transformadores de potencia y distribución lo realizamos in situ o en nuestro taller de Puente Piedra.'/>

<SliderServi  />

<div className='body-color'>
<ServicesProps 
title='Alquiler y suministros'
name='Equipos para proyectos'
context='Ofrecemos productos y servicios de excelente calidad, con profesionalismo, responsabilidad y eficacia, así como los equipos adecuados para atender eficazmente sus necesidades técnicas y/o tecnológicas'/>

<SliderServi2  />
</div>
</>
  );
}


export default ServicesFondo;
