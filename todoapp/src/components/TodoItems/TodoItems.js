import React from "react";


const TodoItems = ({ items, deletItem }) => {

    const listItems = items.length ?(

    items.map((item) => {
        return (
            <div key={item.id} >
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={() => deletItem(item.id)}>&times;</span>
            </div>
        );
    })): <p>es gibt kein data</p> 
    return (
    <div className="listItems">

       <div>
       <span className="name title" >Name</span>
        <span className="age title" >Age</span>
        <span className="action title" >Action</span>
       </div>
        {listItems}
        </div>);
};

export default TodoItems;
