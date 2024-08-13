import { createContext, useState, useContext, useEffect } from "react";
import CartModal from "../components/modals/CartModal";
import { AuthContext } from "./AuthContext";


export const CartContext = createContext();

const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];

};

export function CartProvider(props) {
    const [cart, setCart] = useState(() => loadCartFromLocalStorage());
    const [modal, setModal] = useState(null);
    const { isAuthenticated } = useContext(AuthContext)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

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
        setModal({ title: product.title, quantity: product.quantity || 1, image: product.image });
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

    const emptyCart = () => {
        setCart([])
        localStorage.removeItem('cart')
    }

    useEffect(() => {
        if (!isAuthenticated) {
            emptyCart()
        }
    }, [isAuthenticated])


    return (
        <CartContext.Provider value={{ cart, addToCart, modal, calcTotalQuantity, calcTotalPrice, removeCartItem, updateCartItemQuantity, emptyCart }}>
            {props.children}
            {modal && <CartModal title={modal.title} quantity={modal.quantity} image={modal.image} onClose={() => setModal(null)} />}
        </CartContext.Provider>
    )


}

export const useCart = () => {
    return useContext(CartContext);
};