import React from "react";
import {CarouselContainer} from '../CarouselContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Producto.scss';
import { SliderProd } from "../Sliderprod";
import  {BanerIniciofour, BanerInicioone, BanerIniciotree, BanerIniciotwo } from "../BanersInicio";
import { SliderInfinite } from "./sliderInfinito.jsx";
import homeFinal from '../../img/home-final.png';
import $ from "jquery";



export const Producto = () => {


  var isAlreadyRun = false;


  $(window).scroll( function(){
  
      $('.container-numero').each( function(){
  
          var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
  
  
              if( bottom_of_window > ( bottom_of_object + 20 )  ){
          if (!isAlreadyRun) {
            $('.count-number').each(function () {
                  
                    $(this).prop('box', 300).animate({
                      box: $(this).text()
                    }, {
                            duration: 1500,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                  });
          }
                  isAlreadyRun = true;
              }
      }); 
  
  });
  
  return (
    <>
    <div className="container-carrusel">
    <CarouselContainer />
    </div>

   <div className="products">
    <h2>Productos Destacados</h2>
  </div>

  <SliderProd  />
  <BanerInicioone  />
  <BanerIniciotwo  />
  <BanerIniciotree  />
  <BanerIniciofour  />
  
  <div className="contenido">
  <div className="marcas">
    <h2>Ellos confian en Nosotros</h2>
  </div>

  <div className="container-marcas">
  <div className="con-mar">

  <SliderInfinite />


  </div>
  </div>
  </div>

  <div className="container-boto">
  <button className='boton-personalizado-contact'><a>CONTACTANOS</a></button>
  </div>

  <div className="container-numero">

       <img
          className="d-block w-100"
          src={homeFinal}
          alt="imcetron"
        />
    <div className='contador'>
    <div className="box">
    <div className="signo"><p>+</p>
    <h3 className="count-number">200</h3>
    </div>
    <p>clientes satifechos por nuestra atencion</p>
    </div>   
    <div className="box">
    <h3 className="count-number">25</h3>
    <p>años de experiencia en el mercado</p>
    </div>  
    <div className="box">
    <div className="signo"><p>+</p>
    <h3 className="count-number">200</h3>
    </div>
    <p>Productos importados y comercializamos</p>
    </div>  
     <div className="box-button">
    <button className='boton-personalizado-conocenos'><a>CONOCENOS</a></button>
    </div>

    </div>
    <div className="box-button-activate">
    <button className='boton-personalizado-activate'><a>CONOCENOS</a></button>
    </div>
</div>

</>
  );
};

