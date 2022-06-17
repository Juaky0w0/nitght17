import React from 'react';
import imgEmpresa from '../img/img-empresa.png';
import {EmpresaProps} from './Props';
import './FondoServices.css';




const EmpresaFondo = () => {
  return (
    <>
    <div className="container-numero">

<img
   className="d-block w-100"
   src={imgEmpresa}
   alt="imcetron"
 />
<div className='container-title'>
<div className="title-main">
<h3 className="title-empresa">Acerca de Imcetron</h3>
</div>
<p className='texto-empresa'>Conoce más sobre nosotros</p>
</div>   
</div>
<div className='container-somos'>
<h2>¿Quienes Somos?</h2>
<p>Somos una empresa peruana fundada en el año 1998, con la finalidad de importar y comercializar materiales eléctricos y aislantes utilizados en la fabricación, reparación 
  y mantenimiento de motores y generadores eléctricos en general. <br></br><br></br>Contamos con una amplia gama de materiales de alta calidad, lo cual sin duda ha originado un beneficio significativo al área de reparaciones y 
  mantenciones de los sectores: industrias, minerías generadores y distribuidores de energía, pesqueras y azucareras. <br></br><br></br>Con el propósito de sustentar adecuadamente la calidad de nuestros productos, 
  nos preocupamos de que estos cumplan con las normas correspondientes, como fichas técnicas y normas de seguridad, lo cual es importante en la actualidad.</p>

</div>
<EmpresaProps 
title='Trayectoria'
name='Nuestra historia'
context='Conozca un poco más acerca de nuestra trayectoria y nuestros logros cumplidos desde los inicios de Imcetron hasta la actualidad.'
img='2'/>
<EmpresaProps 
title='Objetivo principal'
name='Nuestra misión'
context='Imcetron sigue una filosofía empresarial simple: suministrar materiales eléctricos y ofrecer soluciones eléctricas confiables para las condiciones particulares de nuestro país, cumpliendo con las normas nacionales e internacionales exigidas por nuestros clientes.'
img='2'/>

<EmpresaProps 
title='Enfoque y meta'
name='Nuestra visión'
context='Ser un actor relevante en el mercado nacional e internacional como una empresa líder en la comercialización de materiales eléctricos utilizados en la fabricación y reparación de todo tipo de motores eléctricos y transformadores de distribución y potencia.'
img='3'
/>









        </>
  )
}

export default EmpresaFondo;