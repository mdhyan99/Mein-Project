import { createContext, useState ,useEffect} from "react";


const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [date, setDate] = useState(
        JSON.parse(localStorage.getItem("date")) || []
    );

    useEffect(() => {
     localStorage.setItem("date",JSON.stringify(date))
    }, [date]);

   
    return <FormContext.Provider
    value={{
        date,
        setDate,
       
    }}
    >{children}</FormContext.Provider>;
};
export default FormContext;
