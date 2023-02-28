import { createContext, useState ,useEffect} from "react";


const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [date, setDate] = useState(
        JSON.parse(localStorage.getItem("date")) || [
            { id: 1, name: "", price: 1, menge: 1, artikel: "Fernseher" },
            { id: 2, name: "", price: 1, menge: 1, artikel: "Laptop" },
            { id: 3, name: "", price: 1, menge: 1, artikel: "Bücher" },
            { id: 4, name: "", price: 1, menge: 1, artikel: "Handy" },
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
