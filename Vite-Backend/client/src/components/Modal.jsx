import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import StoreContext from "../context/StoreContext";

const Modal = ({ _id,title, setOpenModal }) => {
    const { todos, setTodos } = useContext(StoreContext);

    //   const handleDelete = (id) => {
    //     const neuTodos = [...todos];
    //     neuTodos.splice(id, 1);
    //     setTodos(neuTodos);
    //     console.log(neuTodos);
    // };

    // const onHandleDelete = async (e, id) => {
    // e.preventDefault();

    //     try {
    //         //   hinzugefügt in DB
    //         const { data } = await axios.delete(`/todos/${id}`, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         toast.success(`du hast die Aufgabe mit id :${id} gelöscht`);
    //         handleDelete(id);
    //         //   Zu unseren gloabelen Zustandsmanagment hinzugefügt
    //         //  Benachrichtigung an den Nutzer
    //     } catch (err) {
    //         console.error(err);
    //         toast.error("es ist schief gelaufen!");
    //     }
    //        reset()
    //   };

    const onHandleDelete = async (e, id) => {
      e.preventDefault();
        const newTodos = todos.filter((todo) => todo._id !== id);
        const { data } = await axios.delete(`/todos/${id}`);
        if(data.status){
          toast.success(data.message);
        }
        setTodos(newTodos)
    };
    return (
        <div className="fixed bg-gray-800 bg-opacity-90 h-screen inset-0 z-20  flex items-center justify-center">
            <div className="px-5 py-3 rounded-xl flex flex-col space-y-3 bg-slate-900 font-extralight ">
                <h1>Möchten Sie diese "{title}" wirklich löschen</h1>

                <div className="flex items-center gap-x-3">
                    <button
                        className={
                            "w-1/2 bg-red-500 hover:opacity-70 rounded-xl px-3 py-2 "
                        }
                        onClick={(e) => onHandleDelete(e,_id)}
                    >
                        {" "}
                        Ja
                    </button>
                    <button
                        className={
                            "w-1/2 bg-blue-500 hover:opacity-70 rounded-xl px-3 py-2 "
                        }
                        onClick={() => setOpenModal(false)}
                    >
                        {" "}
                        Nein
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
