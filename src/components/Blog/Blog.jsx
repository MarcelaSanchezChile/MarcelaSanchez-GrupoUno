import './Blog.css'
export default function Blog (){
    return (

        <div className="blogs">

            <h1 className="heading-1">Últimos Blogs</h1>

            <div className="container-blogs">
                <div className="card-blog">
                    <div className="container-img">
                        <img src="/Deliciablog.jpg" alt="Imagen Blog 1"/>
                        <div className="button-group-blog">
								<span>
									<i className="fa-solid fa-magnifying-glass"></i>
								</span>
                            <span>
									<i className="fa-solid fa-link"></i>
								</span>
                        </div>
                    </div>
                    <div className="content-blog">
                        <h3>Galletas Delicias</h3>
                        <span>26 de Octubre de 2024</span>
                        <p>
                            Las galletas Delicias son una irresistible combinación de sabor y textura, hechas con ingredientes de alta calidad para lograr un equilibrio perfecto entre lo crujiente y lo suave.
                            Estas galletas vienen en una variedad de sabores que van desde el clásico chocolate hasta opciones frutales y de nueces, ideales para acompañar con una taza de té o café. Su presentación es tan cuidadosa como su sabor, haciendo de cada galleta un pequeño placer visual y gastronómico.
                            Perfectas para compartir en cualquier ocasión o disfrutar a solas como un capricho dulce.
                        </p>
                        <div className="btn-read-more">Leer más</div>
                    </div>
                </div>
                <div className="card-blog">
                    <div className="container-img">
                        <img src="/Casitablog.jpeg" alt="Imagen Blog 2"/>
                        <div className="button-group-blog">
								<span>
									<i className="fa-solid fa-magnifying-glass"></i>
								</span>
                            <span>
									<i className="fa-solid fa-link"></i>
								</span>
                        </div>
                    </div>
                    <div className="content-blog">
                        <h3>Casita de Jengibre</h3>
                        <span>26 de Octubre de 2024 </span>
                        <p>Las casitas de jengibre navideñas son una deliciosa tradición de las fiestas, hechas con galleta de jengibre aromática y especiada, decoradas con glaseado y dulces de colores.
                            Cada casa es una obra de arte comestible que combina la dulzura de las golosinas con la calidez de las especias, como el jengibre, la canela y el clavo.
                            Con detalles que pueden incluir tejados nevados de azúcar glas, ventanas de caramelo y jardines de chispas y gomitas, estas casitas son perfectas para decorar el hogar o compartir en familia.
                            Son el equilibrio perfecto entre tradición, creatividad y sabor navideño.

                        </p>
                        <div className="btn-read-more">Leer más</div>
                    </div>
                </div>
                <div className="card-blog">
                    <div className="container-img">
                        <img src="/Waffles.jpg" alt="Imagen Blog 3"/>
                        <div className="button-group-blog">
								<span>
									<i className="fa-solid fa-magnifying-glass"></i>
								</span>
                            <span>
									<i className="fa-solid fa-link"></i>
								</span>
                        </div>
                    </div>
                    <div className="content-blog">
                        <h3>Stroopwafels</h3>
                        <span>26 de Octubre 2024</span>
                        <p>
                            Los stroopwafels son una delicia tradicional holandesa compuesta por dos finas galletas tipo waffle rellenas de un caramelo suave y pegajoso llamado stroop.
                            Estos wafles son ligeramente crujientes por fuera y, al calentarse, el caramelo se vuelve más cremoso, liberando un aroma dulce y especiado que los hace irresistibles.
                            Generalmente, se disfrutan colocando el stroopwafel sobre una taza de café o té caliente, lo que permite que el relleno se derrita ligeramente y se potencie su sabor.
                            Perfectos para un capricho dulce o para acompañar una bebida caliente, los stroopwafels son una auténtica experiencia de sabor europeo.
                        </p>
                        <div className="btn-read-more">Leer más</div>
                    </div>
                </div>
            </div>
        </div>


    )
}