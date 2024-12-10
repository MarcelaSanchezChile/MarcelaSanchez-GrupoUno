import { create } from 'zustand';

const useStore = create((set) => ({
    cart: [],
    total: 0,
    addToCart: (item) => set((state) => {
        const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
        let newCart;
        if (existingItem) {
            newCart = state.cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
        } else {
            newCart = [...state.cart, { ...item, quantity: 1 }];
        }
        const newTotal = newCart.reduce((acc, cartItem) => acc + (cartItem.price * cartItem.quantity), 0);
        return {
            cart: newCart,
            total: newTotal
        };
    }),
    removeFromCart: (item) => set((state) => {
        const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
        let newCart;
        if (existingItem.quantity > 1) {
            newCart = state.cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            );
        } else {
            newCart = state.cart.filter(cartItem => cartItem.id !== item.id);
        }
        const newTotal = newCart.reduce((acc, cartItem) => acc + (cartItem.price * cartItem.quantity), 0);
        return {
            cart: newCart,
            total: newTotal
        };
    }),
    clearCart: () => set(() => ({
        cart: [],
        total: 0
    }))
}));

export default useStore;
