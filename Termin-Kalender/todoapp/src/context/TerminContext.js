import React, { useState, useEffect, createContext } from "react";

const TerminContext = createContext();

export const TerminProvider = ({ children }) => {
    const [termine, setTermine] = useState(
        JSON.parse(localStorage.getItem("termine")) || []
    );

    useEffect(() => {
        localStorage.setItem("termine", JSON.stringify(termine));
    }, [termine]);

    const deletItem = (id) => {
        let items = termine.filter((item) => {
            return item.id !== id;
        });
        setTermine(items);
    };

    const addItem = (item) => {
        item.id = Math.random();

        setTermine([...termine, item]);
    };

    return (
        <TerminContext.Provider
            value={{
                termine,
                setTermine,
                deletItem,
                addItem,
            }}
        >
            {children}
        </TerminContext.Provider>
    );
};
export default TerminContext;
