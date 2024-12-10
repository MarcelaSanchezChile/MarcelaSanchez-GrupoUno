import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';
import useStore from "../../UseStore/UseStore.jsx";
import Loading from '../Loading/Loading.jsx';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({ product: 0, stock: 0 });
    const [loading, setLoading] = useState(true);

    // Cargar datos del producto por ID
    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const [quantity, setQuantity] = useState(1);

    // Funciones para incrementar y decrementar la cantidad
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const addToCart = useStore(state => state.addToCart);
    const precioTotal = product.price * quantity;

    if (loading) {
        return <div className='container mx-auto max-w-[1170px]'><Loading /></div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='container mx-auto max-w-[1170px]'>
            <Link to="/category/:categoryId">
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">Todas</button>
            </Link>
            <Link to="/products/4">
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">Galletas clásicas</button>
            </Link>
            <Link to="/products/3">
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">Galletas de Chocolate</button>
            </Link>
            <Link to="/products/2">
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">Galletas de azúcar</button>
            </Link>

            <div className="grid grid-cols-2 pt-[50px] pb-[100px]">
                <div className="span-col-1 pr-[30px]">
                    <img src={product.img} alt="Imagen del producto" className='w-full rounded-[20px]' />
                </div>
                <div>
                    <h1 className='text-[45px] font-medium uppercase'>{product.name}</h1>
                    <p className='text-[20px] my-[20px]'>{product.description}</p>
                    <p className='text-[20px] my-[20px]'>Stock: {product.stock}</p>

                    <div className='flex'>
                        <button onClick={decrementQuantity}
                                className='rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'>-</button>
                        <p className='text-[20px] px-[10px]'>{quantity}</p>
                        <button onClick={incrementQuantity}
                                className='rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'>+</button>
                    </div>

                    <p className='text-[20px] my-[20px]'>Precio: ${product.price} por unidad</p>
                    <p className='text-[20px] my-[20px]'>Precio Total: ${precioTotal}</p>

                    <button
                        className='bg-[#171e27] text-[#ffffff] text-[20px] px-[20px] py-[5px] hover:bg-[#172625]'
                        onClick={() => addToCart({...product, quantity})}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}
