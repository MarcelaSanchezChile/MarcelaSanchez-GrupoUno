import { Link } from "react-router-dom"

export default function Item({id, name, price, img}) {

    return (

        <div className="flex flex-col items-center my-[20px] w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
            <Link to={`/products/${id}`}><img src={img} alt="Imagen Productos" /></Link>
            <img src={img} alt="Imagen Productos" style={{width: '200px', height: '200px', objectFit: 'cover'}}/>
            <h3 className="text-[22px] font-bold my-[15px] tracking-[3px] uppercase text-[#2d3a4b] hover:text-[rgb(255,225,21)]">{name}</h3>
            <h4 className="text-[18px] font-bold mb-[20px]">{price}</h4>
            <div className="btn-read-more">Comprar</div>
        </div>

    )
}