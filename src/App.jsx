
import './App.css'; /*Importa el archivo CSS que contiene los estilos aplicados a los componentes dentro del archivo App.jsx */
import GalletaItem from './componentes/GalletaItem'; /*Importa el componente GalletaItem desde la carpeta componentes. Este componente representa cada tarjeta individual de galletas, que contiene una imagen, un título y un botón.*/
import Encabezado from "./componentes/Encabezado.jsx";

function App() {
    return (

        <div className="galletas-contenedor">

            <h1>Galletas recién horneadas todos los días</h1>

            <div className="galletas-fila">
                <GalletaItem imagen="src/assets/images/galletas chips de chocolate.jpg"
                             titulo="Galletas Chips de Chocolate"/>
                <GalletaItem imagen="src/assets/images/galletas cacao chips blanco.jpg"
                             titulo="Cacao y Chips de Chocolate Blanco"/>
                <GalletaItem imagen="src/assets/images/galletas abeja.jpg" titulo="Abejitas y Chocolate"/>
                <GalletaItem imagen="src/assets/images/mantequilla cacaogeo.jpg"
                             titulo="Galletas de Mantequilla y Chocolate Blanco"/>
            </div>

            <p className="texto-delivery">Compra antes de las 12 del día y recibe tus galletas el mismo
                día <span>⭐</span></p>
            <div className="delivery-icon">
                <img src="src/assets/images/delivery.jpg" alt="Entrega rápida"/>
            </div>
            <div>
                <p className="descripcion-galletas"></p>
            </div>




        </div>



    );
}

export default App;
