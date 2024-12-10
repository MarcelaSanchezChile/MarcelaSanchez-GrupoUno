import { useState, useEffect } from "react";

const TituloRotatorio = () => {
    const titulos = [
        "Descubre nuestras deliciosas galletas",
        "Ingredientes de la mejor calidad para ti",
        "Visítanos y vive la experiencia Levain"
    ];

    const [tituloActual, setTituloActual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTituloActual((prevTitulo) => (prevTitulo + 1) % titulos.length);
        }, 4000); // Cambia cada 4 segundos

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalo);
    }, [titulos.length]);

    return (
        <div style={{ textAlign: "center", backgroundColor: "#5D4037", color: "#fff", padding: "10px" }}>
            <h2>{titulos[tituloActual]}</h2>
        </div>
    );
};

export default TituloRotatorio;
