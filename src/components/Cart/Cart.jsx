
import useStore from "../../UseStore/UseStore.jsx";

const CartPage = () => {
    const cart = useStore(state => state.cart);
    const total = useStore(state => state.total);
    const incrementQuantity = useStore(state => state.incrementQuantity);
    const decrementQuantity = useStore(state => state.decrementQuantity);
    const removeFromCart = useStore(state => state.removeFromCart);
    const clearCart = useStore(state => state.clearCart);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">CANASTA DE GALLETAS</h1>

            <div className="mt-4">
                {cart.length === 0 ? (
                    <p className="text-center text-lg text-gray-600">Tu carrito está vacío <i className="fa-solid fa-cart-shopping"></i></p>
                ) : (
                    <ul className="space-y-4">
                        {cart.map(item => (
                            <li key={item.id} className="flex items-center bg-white shadow-md rounded-lg p-4">
                                <img src={item.img} alt={item.name} className="w-24 h-auto mr-4" />
                                <div className="flex flex-col flex-1">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="my-1 text-gray-600">Precio: ${item.price}</p>
                                    <div className="flex items-center my-2">
                                        <button
                                            onClick={() => decrementQuantity(item)}
                                            className="bg-gray-200 text-lg px-3 py-1 rounded-full mx-2 transition hover:bg-gray-300"
                                        >
                                            -
                                        </button>
                                        <span className="text-xl font-bold">{item.quantity}</span>
                                        <button
                                            onClick={() => incrementQuantity(item)}
                                            className="bg-gray-200 text-lg px-3 py-1 rounded-full mx-2 transition hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="mt-2">
                                        <button
                                            onClick={() => removeFromCart(item)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer transition hover:bg-red-600"
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
                        <h3 className="text-2xl font-bold text-gray-800">Total: ${total}</h3>
                        <div className="mt-2">
                            <button
                                onClick={clearCart}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer transition hover:bg-blue-600"
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
