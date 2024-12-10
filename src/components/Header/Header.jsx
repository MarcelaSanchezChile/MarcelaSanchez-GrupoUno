import './Header2.css';
import {Link} from 'react-router-dom';
import useStore from "../../UseStore/UseStore.jsx";

export default function Header (){

    return(
        <div>
            <div className="container-hero">
                <div className="container hero">
                    <div className="customer-support">
                        <i className="fa-solid fa-headset"></i>
                        <div className="content-customer-support">
                            <span className="text">Soporte al cliente</span>
                            <span className="number">123-456-7890</span>
                        </div>
                    </div>

                    <div className="container-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                             className="bi bi-cookie" viewBox="0 0 16 16">
                            <path
                                d="M6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                            <path
                                d="M8 0a7.96 7.96 0 0 0-4.075 1.114q-.245.102-.437.28A8 8 0 1 0 8 0m3.25 14.201a1.5 1.5 0 0 0-2.13.71A7 7 0 0 1 8 15a6.97 6.97 0 0 1-3.845-1.15 1.5 1.5 0 1 0-2.005-2.005A6.97 6.97 0 0 1 1 8c0-1.953.8-3.719 2.09-4.989a1.5 1.5 0 1 0 2.469-1.574A7 7 0 0 1 8 1c1.42 0 2.742.423 3.845 1.15a1.5 1.5 0 1 0 2.005 2.005A6.97 6.97 0 0 1 15 8c0 .596-.074 1.174-.214 1.727a1.5 1.5 0 1 0-1.025 2.25 7 7 0 0 1-2.51 2.224Z"/>
                        </svg>
                        <h1 className="logo"><a href="/">Galletas</a></h1>
                    </div>

                    <div className="container-user">
                        <i className="fa-solid fa-user"></i>
                        <Link to='/carrito'><i className="fa-solid fa-basket-shopping"></i></Link>
                        <div className="content-shopping-cart">
                            <span className="text">Carrito</span>
                            <span className="number">(0)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-navbar">
                <nav className="navbar container">
                    <i className="fa-solid fa-bars"></i>
                    <ul className="menu">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to='/category/:categoryId'>Productos</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to="/mejoresproductos">Mejores Productos</Link></li>
                        <li>< Link to='/acercade'>Acerca de Nosotros</Link></li>
                        <li>< Link to='/contacto'> Contáctanos</Link></li>
                    </ul>

                    <form className="search-form">
                    <input type="search" placeholder="Buscar..."/>
                        <button className="btn-search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </nav>
            </div>

        </div>


    )
}

