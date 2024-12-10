import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import useStore from "../../UseStore/UseStore.jsx";

export default function Item({id, name, price, img}) {

    const addToCart = useStore(state => state.addToCart);

    const product = {id, name, price, img,quantity: 1 };

    return (


        <div className="flex flex-col items-center my-[20px] w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
            <Link to={`/products/${id}`}><img src={img} alt="Imagen Productos" /></Link>
            <Link to={`/products/${id}`} className="text-[22px] font-bold my-[15px] tracking-[3px] uppercase text-[#2d3a4b] hover:text-[rgb(255,225,21)]">{name}</Link>
            <h4 className="text-[18px] font-bold mb-[20px]">{price}</h4>
            <button
                className="btn-read-more"
                onClick={() => addToCart({...product})}
            >
                Agregar
            </button>
        </div>

    )
}

Item.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
};