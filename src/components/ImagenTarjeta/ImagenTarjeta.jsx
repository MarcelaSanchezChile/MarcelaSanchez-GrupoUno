import React from 'react';
import PropTypes from 'prop-types';

const ImagenTarjeta = ({ imagenSrc, imagenAlt}) => {
    const estiloImgTarjeta = {
        width: '50px', //Ancho
        height: '50px', //Alto
        objectFit: 'cover' //Encajado
    };

    return (
        <img src={imagenSrc} alt={imagenAlt} style={estiloImgTarjeta} />
    );
}
ImagenTarjeta.propTypes = {
    imagenSrc: PropTypes.string, // La imagen es opcional
    imagenAlt: PropTypes.string, // El texto alternativo es opcional
}
export default ImagenTarjeta;