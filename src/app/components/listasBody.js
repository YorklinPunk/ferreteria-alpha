import React from 'react';

import '../../layaouts/style.css';

import imagen1 from '../../images/iconos/patio.png';
import imagen2 from '../../images/iconos/electrico.png';
import imagen3 from '../../images/iconos/tubo.png';
import imagen4 from '../../images/iconos/pintura.png';
import imagen5 from '../../images/iconos/fierro.png';
import imagen6 from '../../images/iconos/herramienta.png';
import imagen7 from '../../images/iconos/cementoSol.png';

const images = [imagen1,imagen2,imagen3,imagen4,imagen5,imagen6]
const nombres = ["Cerámicos y Losetas","Eléctrico","Gasfitería","Pinturas","Fierros y Metales","Herramientas"]

const bodyList = () => {
    return (
        <div style={{display:'flex'}}>            
            <div style={{ color: 'black', width: '70%' }}>
            <div style={{ display: 'flex' }}>
                <h2 style={{ marginLeft: '30px' }}>Categorias</h2>
            </div>

            <section className="sectionBody">
                <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                {images.map((img, index) => (
                    <div key={index} className="divBody">
                    <div className="divSubBody">
                        <img className="imgClas" src={img} alt={nombres[index]} />
                        <h3 className="inconText">{nombres[index]}</h3>
                    </div>
                    </div>
                ))}
                </div>
            </section>
            </div>

            <div style={{color : 'black', width : '30%'}}>
                <div style={{display: 'flex'}}>
                    <h2 style={{marginLeft :'30px'}}>Destacado</h2>
                </div>
                <section className="sectionBodyDes"> {/*SECCION DE 6 IAMGENES*/}
                    <div className="divSubBody">
                        <img src={imagen7}/>
                        <h3>CEMENTO SOL</h3>
                        <a href="https://wa.me/923358202" className="buttonA">Cotizar</a>
                    </div>
                </section >

            </div>
        </div>
    );
}

export default bodyList;