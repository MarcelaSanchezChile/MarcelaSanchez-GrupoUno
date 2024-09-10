import React from 'react';
import PropTypes from 'prop-types';
import Main from './Main.css';
import ImagenTarjeta from "../ImagenTarjeta/ImagenTarjeta.jsx";

const MainSection = ({ titulo, contenido, imagenSrc,imagenAlt }) => {
    return (
        <section>
            <h1>{titulo}</h1>
            <p>{contenido}</p>
            <ImagenTarjeta imagenSrc={imagenSrc} imagenAlt={imagenAlt} />
            </section>
    );
};

// Validación de las props
MainSection.propTypes = {
    titulo: PropTypes.string.isRequired,
    contenido: PropTypes.string.isRequired,
    imagenSrc: PropTypes.string, // La imagen es opcional
    imagenAlt: PropTypes.string, // El texto alternativo es opcional
};

export default MainSection;
