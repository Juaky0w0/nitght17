import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./sliderser.css"
import {dataSliderService, dataSliderService2} from '../components/dataServices';



export function SliderServi() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container-all-services">
      <div className="ServiSlider">
        <Slider {...settings}>        
          {dataSliderService.map(item => ( 
            <>         
            <div className="imgServi">
              <img src={item.imga} />
            </div> 
            <div className="titleServi">
            <h2>{item.titulo}</h2>
            <h4>{item.titleS}</h4>
            </div>  
            </>       
          ))} 
        </Slider>      
      </div>
      </div>
    );
  }

  export function SliderServi2() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container-all-services">
      <div className="ServiSlider">
        <Slider {...settings}>        
          {dataSliderService2.map(item => ( 
            <>         
            <div className="imgServi">
              <img src={item.imga} />
            </div> 
            <div className="titleServi">
            <h2>{item.titulo}</h2>
            <h4>{item.titleS}</h4>
            </div>  
            </>       
          ))} 
        </Slider>      
      </div>
      </div>
    );
  }