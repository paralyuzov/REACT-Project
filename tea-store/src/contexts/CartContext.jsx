import { createContext, useState, useContext } from "react";
import Popup from "../components/popup/Popup";


export const CartContext = createContext();

export function CardProvider(props) {
    const [cart, setCart] = useState([]);
    const [popup, setPopup] = useState(null);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item._id === product._id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                        : item

                );

            } else {
                return [...prevCart, { ...product, quantity: product.quantity || 1 }];
            }

        });
        setPopup({ title: product.title, quantity: product.quantity || 1, image: product.image });
        setTimeout(() => setPopup(null), 3000);
    }

    const updateCartItemQuantity = (productId, quantity) => {
        setCart((prevCart) => {
            return prevCart.map(item =>
                item._id === productId
                    ? { ...item, quantity: Math.max(1, quantity || 1) }
                    : item
            );
        });
    };

    const removeCartItem = (productId) => {
        setCart((prevCart) => {
            return prevCart.filter(item => item._id !== productId);
        });
    };

    const calcTotalQuantity = () => {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    };

    const calcTotalPrice = () => {
        return cart.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, popup, calcTotalQuantity, calcTotalPrice, removeCartItem, updateCartItemQuantity }}>
            {props.children}
            {popup && <Popup title={popup.title} quantity={popup.quantity} image={popup.image} />}
        </CartContext.Provider>
    )


}

export const useCart = () => {
    return useContext(CartContext);
};