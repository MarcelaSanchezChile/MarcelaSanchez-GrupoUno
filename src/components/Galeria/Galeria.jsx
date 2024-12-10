import './Galeria.css'

export default function Galeria (){
    return (
        <div className="ga">
            <h1> Galeria </h1>
            <div className="gallery">


                <img
                    src="/Galeria1.jpg"
                    alt="Gallery Img1"
                    className="gallery-img-1"
                />
                <img
                    src="/Galeria2.jpg"
                    alt="Gallery Img2"
                    className="gallery-img-2"
                />
                <img
                    src="/Galeria3.jpg"
                    alt="Gallery Img2"
                    className="gallery-img-3"
                />
                <img
                    src="/Galeria4.jpg"
                    alt="Gallery Img2"
                    className="gallery-img-4"
                />
                <img
                    src='/Galeria5.jpg'
                    alt="Gallery Img2"
                    className="gallery-img-5"
                />
            </div>
            <div className="contenedor">
                <div>
                    <i className="fa-solid fa-asterisk"></i>
                    <p className="text-3xl font accent-black">Los ingredientes más finos</p>
                    <p className="text-xl">Usamos trozos de chocolate (no chispas), mantequilla sin sal, harina de
                        trigo,
                        azúcar de caña y huevos frescos.</p>
                    <i className="fa-solid fa-asterisk"></i>
                    <p className="text-3xl font accent-black">Horneado el mismo día</p>
                    <p className="text-xl" >Preparamos la masa para galletas en nuestra cocina ubicada a las afueras de
                        New York. Luego, la enviamos a nuestras tiendas en el mundo.</p>
                    <i className="fa-solid fa-asterisk"></i>
                    <p className="text-3xl font accent-black">Una galleta sin concesiones</p>
                    <p className="text-xl" >Cada día hacemos lo mejor posible para crear algo que las personas realmente amen, y dejamos que ellas hablen por nosotros.</p>
                </div>
                <img src="/Galeria6.jpg" alt="diseñogalletas"/>
            </div>

        </div>
    )
}

