
import GalletaItem from '../componentes/Galletas/GalletaItem.jsx';
import '../App.css';

function Inicio() {
    return (
        <div className="galletas-contenedor">
            <h2>Galletas recién horneadas todos los días</h2>
            <GalletaItem imagen="ruta/a/la/imagen1.jpg" titulo="Galletas Chips de Chocolate" />
            <GalletaItem imagen="ruta/a/la/imagen2.jpg" titulo="Cacao y Chips de Chocolate Blanco" />
            <GalletaItem imagen="ruta/a/la/imagen3.jpg" titulo="Abejitas y Chocolate" />
            <GalletaItem imagen="ruta/a/la/imagen4.jpg" titulo="Galletas de Mantequilla y Chocolate Blanco" />
            <p>Compra antes de las 12 del día y recibe tus galletas el mismo día <span>⭐</span></p>
            <div className="delivery-icon">
                <img src="ruta/a/icono-de-entrega.svg" alt="Entrega rápida" />
            </div>
        </div>
    );
}

export default Inicio;