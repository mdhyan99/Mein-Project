import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const TodoItem = ({ _id,title,description }) => {
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="w-full flex flex-col px-3 py-2 rounded-xl">
             {openModal && (
                <Modal _id={_id} title={title} setOpenModal={setOpenModal}   onClose={() => setOpenModal(false)} />
            )}
            <div className="w-full flex  items-center justify-between">
                <h1> Title :{title}</h1>
                <div className="flex items-center space-x-3">
                    <AiFillEdit onClick={()=>navigate(`/todo/${_id}`)} className="h-5 cursor-pointer text-orange-400" />
                    <AiFillDelete
                        onClick={() => setOpenModal(true)}
                        // onClick={e=>onHandleDelete(e,todo._id)}
                        className="h-5 cursor-pointer text-red-400"
                    />
                </div>
            </div>
            <p className="text-[10px] text-gray-300 italic ">
                Description : {description}
            </p>

        </div>
    );
};

export default TodoItem;
