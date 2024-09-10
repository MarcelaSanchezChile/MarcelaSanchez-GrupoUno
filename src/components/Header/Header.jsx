import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header">
                <h1>Dulce Magia </h1>
            </div>

            <div className="navbar">
                <a href="#">ENVÍOS A NIVEL NACIONAL</a>
                <a href="#">ENTREGA LOCAL O RECOGIDA</a>
                <a href="#">EVENTOS Y REGALOS CORPORATIVOS</a>
                <a href="#">ABASTECIMIENTO</a>
            </div>
        </div>
    );
};

export default Header;