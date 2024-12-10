import './Footer.css'
import {Link} from 'react-router-dom';

 export default function Footer (){

    return (
        <div className="footer">
            <div className="container container-footer">
                <div className="menu-footer">
                    <div className="contact-info">
                        <p className="title-footer">Información de Contacto</p>
                        <ul>
                            <li>
                                Dirección: 71 Pennington Lane Vernon Rockville, CT
                                06066
                            </li>
                            <li>Teléfono: 123-456-7890</li>
                            <li>Fax: 55555300</li>
                            <li>EmaiL: galletitas@support.com</li>
                        </ul>
                        <div className="social-icons">
							<span className="facebook">
								<i className="fa-brands fa-facebook-f"></i>
							</span>
                            <span className="twitter">
								<i className="fa-brands fa-twitter"></i>
							</span>
                            <span className="youtube">
								<i className="fa-brands fa-youtube"></i>
							</span>

                            <span className="instagram">
								<i className="fa-brands fa-instagram"></i>
							</span>
                        </div>
                    </div>

                    <div className="information">
                        <p className="title-footer">Información</p>
                        <ul>
                            <li>< Link to= '/acercade' >Acerca de Nosotros</Link></li>
                            <li><a href="#">Información Delivery</a></li>
                            <li><a href="#">Politicas de Privacidad</a></li>
                            <li><a href="#">Términos y condiciones</a></li>
                            <li><a href="#">Contactános</a></li>
                        </ul>
                    </div>

                    <div className="my-account">
                        <p className="title-footer">Mi cuenta</p>
                        <ul>
                            <li><a href="#">Mi cuenta</a></li>
                            <li><a href="#">Historial de ordenes</a></li>
                            <li><a href="#">Lista de deseos</a></li>
                            <li><a href="#">Boletín</a></li>
                            <li><a href="#">Reembolsos</a></li>
                        </ul>
                    </div>

                    <div className="newsletter">
                        <p className="title-footer">Boletín informativo</p>

                        <div className="content">
                            <p>
                                Suscríbete a nuestros boletines ahora y mantente al
                                día con nuevas colecciones y ofertas exclusivas.
                            </p>
                            <input type="email" placeholder="Ingresa el correo aquí..."/>
                            <button>Suscríbete</button>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <p>
                        Desarrollado por Marcela &copy; 2024
                    </p>

                </div>
            </div>
        </div>
    )
 }
