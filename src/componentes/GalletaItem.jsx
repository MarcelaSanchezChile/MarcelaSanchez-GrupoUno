import React from 'react';
import PropTypes from 'prop-types';

function GalletaItem({ imagen, titulo }) {
    return (
        <div className="galletas-item">
            <img src={imagen} alt={titulo} />
            <h3>{titulo}</h3>
            <button>Comprar</button>
        </div>
    );
}

GalletaItem.propTypes = {
    imagen: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
};

export default GalletaItem;
