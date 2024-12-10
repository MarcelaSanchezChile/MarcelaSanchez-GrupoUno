import './Mejoresproductos.css'
export default function Mejoresproductos (){
    return (
        <div className="mejoresproductos">
        <section className="container top-products">
            <h1 className="heading-1">Mejores Productos</h1>

            <div className="container-options">
                <span className="active">Destacados</span>
                <span>Más recientes</span>
                <span>Mejores Vendidos</span>
            </div>

            <div className="container-products">

                <div className="card-product">
                    <div className="container-img">
                        <img src="/mejoresproductos2.jpg" alt="Galleta clasica de chips"/>
                        <span className="discount">-13%</span>
                        <div className="button-group">
								<span>
									<i className="fa-regular fa-eye"></i>
								</span>
                            <span>
									<i className="fa-regular fa-heart"></i>
								</span>
                            <span>
									<i className="fa-solid fa-code-compare"></i>
								</span>
                        </div>
                    </div>
                    <div className="content-card-product">
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <h3>Galleta Clasica de chips</h3>
                        <span className="add-cart">
								<i className="fa-solid fa-basket-shopping"></i>
							</span>
                        <p className="price">$1000 <span>$1500</span></p>
                    </div>
                </div>

                <div className="card-product">
                    <div className="container-img">
                        <img
                            src="/mejoresproductos.jpg"
                            alt="Galleta de azucar y cacao"
                        />
                        <span className="discount">-22%</span>
                        <div className="button-group">
								<span>
									<i className="fa-regular fa-eye"></i>
								</span>
                            <span>
									<i className="fa-regular fa-heart"></i>
								</span>
                            <span>
									<i className="fa-solid fa-code-compare"></i>
								</span>
                        </div>
                    </div>
                    <div className="content-card-product">
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <h3>Galletas de azucar y cacao</h3>
                        <span className="add-cart">
								<i className="fa-solid fa-basket-shopping"></i>
							</span>
                        <p className="price">$1000 <span>$1500</span></p>
                    </div>
                </div>

                <div className="card-product">
                    <div className="container-img">
                        <img
                            src="/mejoresproductos1.jpg"
                            alt="Galletas de Chocolate"
                        />
                        <div className="button-group">
								<span>
									<i className="fa-regular fa-eye"></i>
								</span>
                            <span>
									<i className="fa-regular fa-heart"></i>
								</span>
                            <span>
									<i className="fa-solid fa-code-compare"></i>
								</span>
                        </div>
                    </div>
                    <div className="content-card-product">
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <h3>Galletas de Chocolate</h3>
                        <span className="add-cart">
								<i className="fa-solid fa-basket-shopping"></i>
							</span>
                        <p className="price">$1000</p>
                    </div>
                </div>

                <div className="card-product">
                    <div className="container-img">
                        <img src="/galletas%20abeja.jpg" alt="Sugar cookies bee"/>
                        <div className="button-group">
								<span>
									<i className="fa-regular fa-eye"></i>
								</span>
                            <span>
									<i className="fa-regular fa-heart"></i>
								</span>
                            <span>
									<i className="fa-solid fa-code-compare"></i>
								</span>
                        </div>
                    </div>
                    <div className="content-card-product">
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <h3>Sugar cookies bee</h3>
                        <span className="add-cart">
								<i className="fa-solid fa-basket-shopping"></i>
							</span>
                        <p className="price">$1000</p>
                    </div>
                </div>
            </div>
        </section>
        </div>

    )


}