import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import StoreContext from "../context/StoreContext";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const EditForm = ({ todo }) => {
    const navigate = useNavigate();
    const { todos, addTodos, setTodos } = useContext(StoreContext);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    console.log(todos);

    const onSubmitHandler = async (form) => {
        try {
            // hinzugefügt in DB
            const { data } = await axios.put(`/todos/${todo._id}`, form, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            navigate("/");
            reset();
        } catch (err) {
            toast.error("es ist schief gelaufen!ff");
        }
        // reset()
    };
    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <input
                defaultValue={todo.title}
                className="w-full px-2 text-xs py-2 rounded-xl bg-slate-800 text-gray-200 placeholder:italic  placeholder:text-sm outline-none"
                type="text"
                placeholder="Aufgabe eingeben..."
                {...register("title", {
                    required: true,
                    value: todo.title,
                })}
            />

            <textarea
                defaultValue={todo.description}
                className="w-full h-20 px-3 text-xs py-2 rounded-xl bg-slate-800 text-gray-200 placeholder:italic  placeholder:text-sm outline-none"
                placeholder="Beschreibung eingeben..."
                {...register("description", {
                    required: true,
                    value: todo.description,
                })}
            />

            <div className="flex items-center space-x-3">
                <input
                    className="block"
                    type="checkbox"
                    {...register("status", {
                        value: todo?.status,
                    })}
                />
                <span className="text-xs">(Erlidigt / Nicht Erlidigt)</span>
            </div>
            <div>
            <button
                className="w-fit  px-3  py-2 rounded-xl bg-blue-700 text-white text-sm "
                type="submit"
            >
                Bearbeiten
            </button>
                {" "}
                <Link to={"/"}>
                    <button className="w-fit  px-3  py-2 rounded-xl bg-blue-700 text-white text-sm ">
                        {" "}
                        Startseite
                    </button>
                </Link>
            </div>
        </form>
    );
};

export default EditForm;
