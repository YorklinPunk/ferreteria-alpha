import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//IMPROT IMAGENES
import imagen1 from '../../images/Alicate de corte.jpg';
import imagen2 from '../../images/Alicate.jpg';
import imagen3 from '../../images/Cable mellizo blanco.jpg';
import imagen4 from '../../images/Cable mellizo verde.jpg';
import imagen5 from '../../images/canaleta 15x10x2MT.jpg';
import imagen6 from '../../images/Cinta aislante trupper.jpg';
import imagen7 from '../../images/Clavos de acero.jpg';
import imagen8 from '../../images/descarga.jpg';
import imagen9 from '../../images/Destornillador.jpg';
import imagen10 from '../../images/Kit de alicates.jpg';
//
import fondoImagen from "../../images/Fonde de ferreteria 5.jpg";

const images = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10];

const MiCarousel = () => {
    const carouselStyle = {
      backgroundImage: `url(${fondoImagen})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div className="carousel-container divCarousel" style={carouselStyle}>
        <Carousel 
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={true}
          showStatus={true}>
          {images.map((imagen,index) => (
            <div key={index} className="liCarousel">
              <img src={imagen} alt={`Imagen ${index}`} className="imgCarousel"/>
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

export default MiCarousel;