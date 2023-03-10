import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

import StoreContext from "../context/StoreContext";

const HomePage = () => {
    const { todos, addTodos, setTodos } = useContext(StoreContext);
    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get("/todos");
                setTodos(data);
            } catch (err) {
                console.log(err);
                toast.error("Es ist schief gelaufen");
            }
        };
        getData();

     
    }, []);
    return (
        <div>
            <h1 className="text-5xl mb-5"> Aufgaben verwalten</h1>
            <TodoForm />
            <Todos todos={todos} setTodos={setTodos}/>
       
            {/* <div>
   <Link to={"/"} >Home 
    </Link>
    </div> */}
        </div>
    );
};

export default HomePage;
