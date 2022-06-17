import React from 'react';
import imgContact from '../img/img-contact.png';
import './FondoServices.css';



const ContactFondo = () => {
  return (
    <>
    <div className="container-contact">

<img
   className="d-block w-100"
   src={imgContact}
   alt="imcetron"
 />

<div className="container-title">
<div className="title-main">
<h3 className="title-contact">Contacto</h3>
</div>
</div>
  

</div>

<div className='container-atention'>
  <div className='titulos'>
  
<h1>Atencion al cliente</h1>
</div>
<div className='columns'>
<div className='column-one'>
  <h3>Ubicanos</h3>
  <h3>Oficina</h3>
  <p>Calle La Colonia Nro.116<br></br>Urb. El Manzano<br></br>Rimac 15094</p>
</div>
<div className='column-one'>
<h3>Ventas</h3>
<h3>Llamanos</h3>
  <p>+51 994 013 327 <br></br>+51 994 013 330</p>
  <h3>Escribenos</h3>
  <p>ventas@imcetron.com.pe</p>
</div>
<div className='column-one'>
<h3>Horarios de atencion</h3>
  <h3>Luneasa a Viernes</h3>
  <p>08:00hs a 18:00hs</p>
  <h3>Sabado</h3>
  <p>08:00hs a 13:00hs</p>
</div>
</div>
</div>


        </>
  )
}

export default ContactFondo;