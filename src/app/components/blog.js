import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import imagen1 from '../../images/blog/techo.jpg'
import imagen2 from '../../images/blog/hierro.jpg'
import imagen3 from '../../images/blog/drywall.jpeg'

const Blog = () => {
    return(
        <div style={{display:'flex'}}>
            <div style={{color : 'black', width : '99%'}}>
                <div>
                    <h2 style={{marginLeft :'30px'}}>Blog</h2>
                </div>
                <div className="row">
                    <div className="col">
                        <img className="imgClas" src={imagen1}/>
                        <div className="subTitulo">
                            <h3>Tipos de tejas</h3>
                        </div>
                        <div className="textBlog">
                            <p>Las tejas son elementos clave en la construcción de techos y cubiertas. No solo cumplen una función práctica al proteger la estructura de los elementos</p>
                        </div>
                    </div>
                    <div className="col">
                        <img className="imgClas" src={imagen2}/>
                        <div className="subTitulo">
                            <h3>Diferencias entre el hierro y acero</h3>
                        </div>
                        <div className="textBlog">
                            <p>El hierro y el acero son dos materiales ampliamente utilizados en la industria de la construcción y la fabricación. Aunque a menudo se utilizan indistintamente</p>
                        </div>
                    </div>
                    <div className="col">
                        <img className="imgClas" src={imagen3}/>
                        <div className="subTitulo">
                            <h3>¿Qué es el sistema DryWall?</h3>
                        </div>
                        <div className="textBlog">
                            <p>El sistema Drywall, también conocido como sistema liviano o construcción en seco, es una técnica de construcción ampliamente utilizada en todo el mundo. Consiste en</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
