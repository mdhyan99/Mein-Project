import React, { useState,  createContext,useEffect } from "react";
import axios from "axios";


const TerminContext = createContext();

export const TerminProvider = ({ children }) => {
    const [termine, setTermine] = useState([]);
    const [  termin, setTermin ] = useState({
        name: "",
        datum: "",
        uhr: "",
        beschreibung: "",
    });
    console.log(termin);



 
    useEffect(() => {
        axios.get("http://localhost:5002/termin").then((res) => setTermine(res.data));
        console.log(termine);
    },[]);
    const fetchProduct = async () => {
        const response = await axios.get("http://localhost:5002/termin");
        console.log("1", response.data);
        setTermine(response.data);
    };


    const handelChange1 = (e) => {
        setTermin({ ...termin, [e.target.id]: e.target.value });
    };
    const handelSubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value === "") {
          alert("Bitte schreiben Sie Ihre Name");
          return
        } 
        console.log("speichern");
            addItem(termin);
            setTermin({
                name: "",
                datum: "",
                uhr: "",
                beschreibung: "",
            });
            axios
            .post("http://localhost:5002/termin", {
                name:termin.name,
                datum: termin.datum,
                uhr: termin.uhr,
                beschreibung: termin.beschreibung,
            }).then(fetchProduct);
        };


    const deletItem = (event) => {
        console.log(event);
        const deleteOneTermin = termine.find((item) => item=== item)
        axios
        .delete(`http://localhost:5002/termin/${deleteOneTermin._id}`)
        .then(fetchProduct());
        // let items = termine.filter((item) => {
        //     return item.id !== id;
        // });
        // setTermine(items);
        console.log(deleteOneTermin._id);
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
                termin,
                handelChange1,
                handelSubmit
            }}
        >
            {children}
        </TerminContext.Provider>
    );
};
export default TerminContext;
