import React, { createContext, useState, useEffect } from "react";
import WarenKorb from "../components/WarenKorb";
const WarenKorbContext = createContext();

export const WarenKorbProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    // für product in warenkorb
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // für add produckt in Warenkorb
    const addKorb = (id) => {
        const item = cart.find((item) => item.id === id);

        if (item) {
            item.quantity++;
            setCart([...cart]);
        } else {
            setCart([...cart, { id, quantity: 1 }]);
        }
    };
    // für remove produckt in Warenkorb
    const removeKorb = (id) => {
        const item = cart.find((item) => item.id === id);
        
        if (item) {
            item.quantity--;
            if (item.quantity <= 0) {
                setCart(cart.filter((item) => item.id !== id));
            } else {
                setCart([...cart]);
                console.log({ cart });
            }
        }
    };

    const openCart = () => {
        setIsOpen(true);
    };
    const closeCart = () => {
        setIsOpen(false);
    };

    return (
        <WarenKorbContext.Provider
            value={{
                cart,
                setCart,
                addKorb,
                openCart,
                closeCart,
                removeKorb,
                isOpen,
            }}
        >
            {children}
            {/* <WarenKorb isOpen={isOpen}  /> */}
        </WarenKorbContext.Provider>
    );
};
export default WarenKorbContext;
