import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import StoreContext from "../context/StoreContext";
import axios from 'axios'
import toast from "react-hot-toast";

const TodoForm = () => {
    const { todos,addTodos } = useContext(StoreContext);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    console.log(todos);


    const watchTitle = watch("title", "");

    const onSubmitHandler = async (form) => {
        console.log(form);
        try{
            // hinzugefügt in DB
            const {data} = await axios.post('/todos',form,{
                headers:{
                    'Content-Type':'application/json'
                }
            })
            // Zu unseren gloabelen Zustandsmanagment hinzugefügt
            addTodos(data)
            //Benachrichtigung an den Nutzer
            toast.success(`du hast neu Aufgabe ${form.title} hinzugefügt`)
            reset()
        }
        catch (err){
          toast.error("es ist schief gelaufen!ff")
        }
        // reset()
    };
    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <input
                className="w-full px-2 text-xs py-2 rounded-xl bg-slate-800 text-gray-200 placeholder:italic  placeholder:text-sm outline-none"
                type="text"
                placeholder="Aufgabe eingeben..."
                {...register("title", {
                    required: true,
                })}
            />
            {watchTitle && (
                <textarea
                    className="w-full h-20 px-3 text-xs py-2 rounded-xl bg-slate-800 text-gray-200 placeholder:italic  placeholder:text-sm outline-none"
                    placeholder="Beschreibung eingeben..."
                    {...register("description", {
                        required: true,
                    })}
                />
            )}
            <input
            className="hidden"
                type="text"
                defaultValue={false}
                {...register("status", {
                    value: false,
                })}
            />
            <button className="w-fit  px-3  py-2 rounded-xl bg-blue-700 text-white text-sm "
            type="submit">
                Hinzufügen
            </button>
        </form>
    );
};

export default TodoForm;
