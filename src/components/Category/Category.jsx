import './Category.css'
// HOOKS DE REACT PARA USESTATE Y EFFECT

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Link } from 'react-router-dom';

// IMPORTO FUNCION PARA OBTENER LOS PRODUCTOS POR CATEGORIAS
import { getProductByCategory } from "../../data/asyncMock";

// IMPORTO ITEMLIST
import ItemList from "../ItemList/ItemList";

// IMPORTO EL LOADING
import Loading from "../Loading/Loading";
import Otros from "../Otros/Otros.jsx";

export default function Category(){
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect (() => {
        setLoading(true);
        getProductByCategory(categoryId)
            .then((data) => setProducts(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [categoryId]);


    return(
        <div className="category">
        <div className="container mx-auto max-w-[1170px]">
            <Link to="/category/:categoryId">
            <button onClick={() => {
            }} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700"> Todas
            </button>
            </Link>
            <Link to="/products/4">
            <button onClick={() => {
            }} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">Galletas clasicas
            </button>
            </Link>
            <Link to="/products/3">
            <button onClick={() => {
            }} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">Galletas de
                Chocolate
            </button>
            </Link>
            <Link to="/products/2">
                <button onClick={() => {}} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">Galletas de azucar</button>
            </Link>
            {loading ? (
                <div>
                    <Loading/>
                </div>
            ) : (

                <ItemList products={products}/>
            )}
        </div>
            <Otros/>

        </div>
    )
};