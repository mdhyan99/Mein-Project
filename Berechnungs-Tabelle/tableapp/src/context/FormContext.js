import { createContext, useState ,useEffect} from "react";


const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [date, setDate] = useState(
        JSON.parse(localStorage.getItem("date")) || [
            { id: 1, name: "", price:1 , menge: 1, artikel: "Fernseher" },
            { id: 2, name: "", price: 1, menge: 1, artikel: "Laptop" },
            { id: 3, name: "", price: 1, menge: 1, artikel: "Bücher" },
            { id: 4, name: "", price: 1, menge: 1, artikel: "Handy" },
            { id: 5, name: "", price: 1, menge: 1, artikel: "Handy" },
            { id: 6, name: "", price: 1, menge: 1, artikel: "Handy" },
            { id: 7, name: "", price: 1, menge: 1, artikel: "Handy" },
            { id: 8, name: "", price: 1, menge: 1, artikel: "Handy" },
            { id: 9, name: "", price: 1, menge: 1, artikel: "Handy" },
            { id: 10, name: "", price: 1, menge: 1, artikel: "Handy" },
            { id: 11, name: "", price: 1, menge: 1, artikel: "Handy" },
            { id: 12, name: "", price: 1, menge: 1, artikel: "Handy" },
            { id: 13, name: "", price: 1, menge: 1, artikel: "Handy" },
            { id: 14, name: "", price: 1, menge: 1, artikel: "Handy" },
            { id: 15, name: "", price: 1, menge: 1, artikel: "Handy" },
            { id: 16, name: "", price: 1, menge: 1, artikel: "Handy" },
            { id: 17, name: "", price: 1, menge: 1, artikel: "Handy" },
            { id: 18, name: "", price: 1, menge: 1, artikel: "Handy" },
            { id: 19, name: "", price: 1, menge: 1, artikel: "Handy" },
            { id: 20, name: "", price: 1, menge: 1, artikel: "Handy" },
        ]
    );

    useEffect(() => {
     localStorage.setItem("date",JSON.stringify(date))
    }, [date]);

   
    return <FormContext.Provider
    value={{
        date,
        setDate,
       
    }}
    >
        {children}
    </FormContext.Provider>;
};
export default FormContext;
