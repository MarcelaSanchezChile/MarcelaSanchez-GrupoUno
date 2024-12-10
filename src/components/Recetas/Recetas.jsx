import './Recetas.css'


export default function Recetas (){
    return (

        <div className="mejoresrecetas">
            <section className="recetas">
                <h1 className="heading-1">Recetas </h1>
                <p className="text-black text-2xl font-medium">Descubre recetas fáciles y rápidas para hacer galletas caseras. Desde la clásica galleta de avena
                    hasta deliciosas combinaciones de sabores, tenemos la receta perfecta para ti</p>

                <div className="container-recetas">

                    <div className="card-product mt-4">
                        <div className="container-img">
                            <img src="/Recetas1.jpg" alt="Galleta clasica de chips"/>

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

                            <h3>Galleta de avena, chocolate y sal de mar</h3>
                            <p className="text-black text-xl font-medium mt-4 ">Perfectas para un snack saludable o un dulce capricho, con combinaciones que van desde lo
                                clásico hasta lo innovador. ¡Prepáralas hoy mismo!</p>
                            <div className="mt-4">
                                <p> Desayuno <i className="fa-solid fa-mug-saucer text-3xl"></i></p>
                                <p> 30 minutos <i className="fa-regular fa-clock text-3xl"></i></p>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    Ir a la receta
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className="card-product mt-4 ">
                        <div className="container-img">
                        <img
                                src="/Recetas2.jpg"
                                alt="Palmeritas"
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

                            <h3>Palmeritas</h3>
                            <p className="text-black text-xl font-medium mt-4">Disfruta de las irresistibles palmeritas, unas galletas hojaldradas con forma de corazón
                                que combinan una textura crujiente con un delicado toque de azúcar caramelizado.
                                Perfectas para acompañar un café o té, estas galletas son un clásico que nunca pasa de
                                moda.</p>
                            <div className="mt-4">
                                <p> Desayuno <i className="fa-solid fa-mug-saucer text-3xl"></i></p>
                                <p> 30 minutos <i className="fa-regular fa-clock text-3xl"></i></p>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    Ir a la receta
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className="card-product mt-4">
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

                            <h3>Galletas de Chocolate</h3>

                        </div>
                    </div>

                    <div className="card-product mt-4">
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

                            <h3>Sugar cookies bee</h3>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}