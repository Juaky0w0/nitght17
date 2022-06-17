import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselContainer.css';
import image1 from '../img/1.png';
import image2 from '../img/2.png';
import image3 from '../img/3.png';

export const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <div className='img-baner'>
        <img
          className="d-block w-100"
          src={image1}
          alt="Imcetron"
        />
          </div>
        <Carousel.Caption>
          <div className='texts'>
          <h3>Suministros de materiales aislantes</h3>
          <p>Utilizado en transformadores y motores eléctricos</p>
        
          <button className='boton-personalizado-4'><a>VER CATALOGO</a></button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <div className='img-baner'>
        <img
          className="d-block w-100"
          src={image2}
          alt="Imcetron"
        />
          </div>
        <Carousel.Caption>
        <div className='texts'>
          <h3>Servicios eléctricos</h3>
          <p>Amplia experiencia y tecnología sólida</p>
     
          <button className='boton-personalizado-4'><a>NUESTO SERVICIOS</a></button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <div className='img-baner'>
        <img
          className="d-block w-100"
          src={image3}
          alt="Imcetron"
        />
          </div>
        <Carousel.Caption>
        <div className='texts'>
          <h3>Third slide label scelerisque</h3>
          <p>vel scelerisque nisl consectetur.</p>
          
          <button className='boton-personalizado-4'><a>NUESTO SERVICIOS</a></button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}


