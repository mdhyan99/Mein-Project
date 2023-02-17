import React,{useState} from 'react'
import './addItem.css'
const AddItem = ({addItem}) => {
    const [state, setstate] = useState({
        name:"",
        age:"",
        vorname:""
    });
     const handelChange1 = (e) =>{
         setstate({ ...state,
             name: e.target.value
         })
     }
     const handelChange2 = (e) =>{
        setstate({ ...state,
            age: e.target.value
        })
    }

const handelSubmit =(e) =>{
    e.preventDefault()
 if(e.target.name.value === ""){
    return false
 }else{
    addItem(state)
    setstate({
        name:"",
        age:"",
        vorname:""
      
    })
 }

}

  return (
    <div>
     <form onSubmit={handelSubmit}>
        <input type="text"  placeholder='screib deine Name..' name='name' onChange={handelChange1} value={state.name}/>
        <input type="number"  placeholder='screib deine Age..' age='age' onChange={handelChange2} value={state.age}/>
        <input type="submit" value="add" />
     </form>

    </div>
  )
}

export default AddItem