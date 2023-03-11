import React, { createContext ,useState} from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [todos,setTodos]=useState([]);
    
    const addTodos=(item)=>{
   setTodos([...todos,item])
    }
    return (
    <StoreContext.Provider 
        value={{
            todos,
            setTodos,
            addTodos,

        }}>
     
     { children }
     </StoreContext.Provider>
      );
};
export default StoreContext;
