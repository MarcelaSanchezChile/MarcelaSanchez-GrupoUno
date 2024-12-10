import useStore from "../../UseStore/UseStore.jsx";

const CartPage = () => {
    const cart = useStore(state => state.cart);
    const total = useStore(state => state.total);
    const removeFromCart = useStore(state => state.removeFromCart);
    const clearCart = useStore(state => state.clearCart);

    return (
        <div className="p-4">
            <h1>CANASTA DE GALLETAS</h1>
            <div className="mt-4">
                {cart.length === 0 ? (
                    <p>Tu carrito está vacío</p>
                ) : (
                    <ul>
                        {cart.map(item => (
                            <li key={item.id} className="flex items-center border-b border-gray-300 py-2">
                                <img src={item.img} alt={item.name} className="w-24 h-auto mr-4" />
                                <div className="flex flex-col">
                                    <h3 className="m-0">{item.name}</h3>
                                    <p className="my-1">Precio: ${item.price}</p>
                                    <p className="my-1">Cantidad: {item.quantity}</p>
                                    <div className="mt-2">
                                        <button
                                            onClick={() => removeFromCart(item)}
                                            className="bg-gray-500 text-white px-4 py-2 cursor-pointer"
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                {cart.length > 0 && (
                    <div className="mt-4 text-right">
                        <h3>Total: ${total}</h3>
                        <div className="mt-2">
                            <button
                                onClick={clearCart}
                                className="bg-gray-500 text-white px-4 py-2 cursor-pointer"
                            >
                                Vaciar Carrito
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartPage;
