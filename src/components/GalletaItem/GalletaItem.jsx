import './GalletaItem.css';

const GalletaItem = ({ titulo, imagen, descripcion }) => {
    return (
        <div className="GalletaItem">
            <h1>{titulo}</h1>
            <img src={imagen} alt={descripcion} />
            <p>{descripcion}</p>
        </div>
    );
};
export default GalletaItem;
