import './Galletadechips.css'
export default function Galletadechips(){
    return (
        <main>
            <div className="container-img">
                <img
                    src="/Galletaclasica.jpg"
                    alt="imagen-producto"
                />
            </div>

            <div className="container-info-product">
                <div className="container-price">
                    <span>$1000</span>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className="container-add-cart">
                    <div className="container-quantity">
                        <input
                            type="number"
                            placeholder="1"
                            value="1"
                            min="1"
                            className="input-quantity"
                        />
                        <div className="btn-increment-decrement">
                            <i className="fa-solid fa-chevron-up" id="increment"></i>
                            <i className="fa-solid fa-chevron-down" id="decrement"></i>
                        </div>
                    </div>
                    <button className="btn-add-to-cart">
                        <i className="fa-solid fa-plus"></i>
                        Añadir al carrito
                    </button>
                </div>

                <div className="container-description">
                    <div className="title-description">
                        <h4>Descripción</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="text-description">
                        <p>
                            Las galletas de azúcar son un clásico de la repostería,
                            conocidas por su textura suave y crujiente a la vez, y su sabor dulce y delicado
                        </p>
                    </div>
                </div>

                <div className="container-additional-information">
                    <div className="title-additional-information">
                        <h4>Información adicional</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="text-additional-information hidden">
                        <p>-----------</p>
                    </div>
                </div>

                <div className="container-reviews">
                    <div className="title-reviews">
                        <h4>Reseñas</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="text-reviews hidden">
                        <p>-----------</p>
                    </div>
                </div>

                <div className="container-social">
                    <span>Compartir</span>
                    <div className="container-buttons-social">
                        <a href="#"><i className="fa-solid fa-envelope"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </main>


    )


}
