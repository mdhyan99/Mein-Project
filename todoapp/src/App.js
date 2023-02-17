import React,{useState} from "react";
import './index.css';
import TodoItems from "./components/TodoItems/TodoItems";
import AddItem from "./components/AddItems/AddItem";

function App() {
  const [state, setState] = useState({
    items:[
      {id:1,name:"Ahmad",age:22},
      {id:2,name:"hasan",age:23},
      {id:3,name:"kaled",age:24}
    ]
  });
  
  const deletItem =(id) =>{
    let items = state.items.filter((item)=>{
      return item.id !== id
    })
   
  setState({items})
  }

  const addItem = (item) =>{
    item.id =Math.random()
    let items= state.items
items.push(item)
setState({items})

  }

  // oder
  // const deletItem2 =(id) =>{
  //   let items = state.items
  //   let i = items.findIndex((item) => item.id === id )
  //   items.splice(i,1)
  // setState({items})
  // }

  return (
    <div className="App container">
      <h1 className="text-center"> Todo List</h1>
     <TodoItems items={state.items} deletItem={deletItem} />
     <AddItem addItem={addItem} />
    </div>
  );
}

export default App;
