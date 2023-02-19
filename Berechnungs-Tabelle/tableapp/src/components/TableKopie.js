import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TableKopie = () => {
  return (

    <div className="container">
      <div className="item">1</div>
      <div className="item">2</div>
      <div className="item">3</div>
      <div className="item">4</div>
      <div className="item">5</div>
      <div className="item">6</div>
    </div>
  )
}

export default TableKopie


/*import { Button } from "react-bootstrap";
import React, { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import "../index.css";
import FormContext from "../context/FormContext";
import AddForm from "./AddForm";

const Tablen = () => {
    const { addForm, form } = useContext(FormContext);

    const [product, setProduct] = useState(
        { id: 1, name: "", price: 2, menge: 4, artikel: "Fernseher" }
        //   { id: 2, name:"", price: 5, menge: 6, artikel: "Laptop" },
        //   { id: 3, name:"", price:4, menge: 6, artikel: "Wachmachine" },
        //   { id: 4, name:"", price: 6, menge: 6, artikel: "Handy" },
    );
    const handelChange = (id, e) => {
        const index = product.findIndex((item) => item.id === id);
        console.log(e.target.value, e.target.name);
        //  setProduct(e.target.value);
        const newProduct = product;
        newProduct[index][e.target.name] = e.target.value;
        console.log(newProduct);
        setProduct([...newProduct]);
    };

    const handelChange2 = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        addForm(product);
        console.log("jj");
        setProduct({
            id: 1,
            name: "",
            price: 2,
            menge: 4,
            artikel: "Fernseher",
        });
    };
    const summe1 = product.price * product.menge;
    return (
       <div>
         <form className="tabl" onSubmit={handelSubmit}>
            <Table bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Menge</th>

                        <th>summe1</th>
                        <th>Summe2</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {product.map((item,index) => { 

                    {/*  let summe1=0
                        for(let i =index; i>=0;i--){
                          summe1=summe1 + product[i].price * product[i].menge
                        } 
                    {/* return ( 
                    {/* <React.Fragment key={item.id}> 

                    <tr>
                        <td>{product.artikel}</td>
                        <td>
                            <input
                                value={product.name}
                                type="text"
                                name="name"
                                style={{
                                    width: "100%",
                                    fontSize: "17px",
                                    border: "none",
                                }}
                                onChange={handelChange2}
                                className="inpt"
                            />
                        </td>
                        <td>
                            <input
                                value={product.price}
                                type="number"
                                name="price"
                                onChange={handelChange2}
                                className="inpt"
                            />
                        </td>
                        <td>
                            <input
                                value={product.menge}
                                type="number"
                                name="menge"
                                onChange={handelChange2}
                                className="inpt"
                            />
                        </td>

                        <td>{summe1}</td>
                        {/*   <td>{summe1}</td> 
                    </tr>

                    {/* </React.Fragment> 
                    {/* ); 
                    {/* })} 

                    {/* <tr className="centr">
                        <td colSpan={5}>Total</td>
                        
                        <td> {product.reduce((total, cartItem) => {
                                return total + cartItem.price * cartItem.menge;
                            }, 0).toFixed(2)}</td>
                          
                    </tr>  

{/* <tr className="centr">
                        <td colSpan={5}>Total</td>
                        
                        <td> </td>
                          
                    </tr> 
                </tbody>
            </Table>
            <Button type="submit" value="add">
                Add Neu Table
            </Button>
        </form>
        <AddForm  summe1={summe1}/>
       </div>
    );
};

export default Tablen; */


// const [menge,setMenge]=useState(0)
// // const [product3,setProduct3]=useState(0)
// console.log(price * 2);
// console.log(menge);
// // console.log(product3);

// const summe = +price* +menge
// console.log(summe);

//  <tr>
//                 <td>Hose</td>
//                 <td>
//                     <input
//                         value={price}
//                         type="number"
//                         onChange={e=>setPrice(e.target.value)}
//                         className="inpt"
//                     />
//                 </td>
//                 <td>
//                     <input
//                         value={menge}
//                         type="number"
//                         onChange={e=>setMenge(e.target.value )}
//                         className="inpt"
//                     />
//                 </td>

//                 <td>{summe}</td>
//             </tr>
