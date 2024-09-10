
import './App.css'; /*Importa el archivo CSS que contiene los estilos aplicados a los components dentro del archivo App.jsx */

import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Bajada from "./components/Bajada/Bajada.jsx";
import MainSection from "./components/Main-section/Main-section.jsx";
function App() {
    return (
        <>
            <Header/>
            <Bajada/>
            <div className="contenido">
            <MainSection
                titulo=" Galletas de azucar"
                contenido="este es el contenido"
                imagenSrc="src/assets/images/galletas abeja.jpg"
                imagenAlt="descripcion de la imagen"
            />
                <MainSection
                    titulo="hola"
                    contenido="este es el contenido"
                    imagenSrc="src/assets/images/galletas abeja.jpg"
                    imagenAlt="descripcion de la imagen"
                />
                <MainSection
                    titulo="hola"
                    contenido="este es el contenido"
                    imagenSrc="src/assets/images/galletas abeja.jpg"
                    imagenAlt="descripcion de la imagen"
                />

                <MainSection
                    titulo="hola"
                    contenido="este es el contenido"
                    imagenSrc="src/assets/images/galletas abeja.jpg"
                    imagenAlt="descripcion de la imagen"
                />

            </div>
            <Footer/>
        </>
    );
}
export default App;
