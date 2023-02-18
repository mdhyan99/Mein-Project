import React, { createContext, useState, useEffect } from "react";
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

    /*const [cart2, setCart2] = useState([]);
    const [date, setDate] = useState([]);
    useEffect(() => {
        // localStorage.setItem("cart", JSON.stringify(cart));
        fetch("https://api.stripe.com/v1/charges")
        .then((res)=>res.json())
        .then((daten)=>setDate(daten))

    }, []);
    
    useEffect(() => {
        // localStorage.setItem("cart", JSON.stringify(cart));
        fetch("https://api.stripe.com/v1/charges")
        .then((res)=>res.json())
        .then((daten)=>setCart2(daten))

    }, []);

    useEffect(() => {
        // localStorage.setItem("cart", JSON.stringify(cart));
        fetch("https://api.stripe.com/v1/charges",{
            method:"PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(cart2),
        })

        
    }, [cart2]);*/

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
                // date
            }}
        >
            {children}
            {/* <WarenKorb isOpen={isOpen}  /> */}
        </WarenKorbContext.Provider>
    );
};
export default WarenKorbContext;
