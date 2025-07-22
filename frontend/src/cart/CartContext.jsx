// CartContext.js
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (item, quantity) => {
        setCart(prev => [...prev, { ...item, quantity }]);
    };
    const totalAmount = cart.reduce((sum, item) => sum + item.pcost * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};
