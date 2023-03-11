import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";

const TodoDetailPage = () => {
    const { id } = useParams();
    const [todo, setTodo] = useState({});
    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(`/todos/${id}`);
                setTodo(data);
            } catch (err) {
                console.log(err);
                toast.error("Es ist schief gelaufen");
            }
        };
        getData();
    }, [id]);
    console.log(todo);
    if (!todo) return null;
    return (
        <div>
            <h1 className="mb-5 text-5xl"> Todo bearbeiten</h1>
            <EditForm  todo={todo}/>
        </div>
    );
};

export default TodoDetailPage;
