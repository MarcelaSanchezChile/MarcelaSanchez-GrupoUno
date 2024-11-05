
export default function Navbar() {

    return (
        <div className="Container-navbar">
            <nav className="navbar container">
                <i className="fa-solid fa-bars"></i>
            <ul className="menu">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Galletas Clasicas</a></li>
                    <li><a href="#">Galletas de Cacao</a></li>
                    <li><a href="#">Galetas de azucar</a></li>
                    <li><a href="#">Galetas de azucar y Cacao</a></li>
                </ul>
                <form className="search-form">
                      <input type="search" placeholder="Buscar..." />
                    <button className="btn-search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </nav>
        </div>
    );


}
