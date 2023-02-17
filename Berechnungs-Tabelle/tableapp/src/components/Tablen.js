import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "../index.css";
import Forloop from "./Forloop";


const Tablen = () => {
  
    const [product, setProduct] = useState([
      { id: 1, name:"", price: 2, menge: 4, artikel: "Fernseher" },
      { id: 2, name:"", price: 5, menge: 6, artikel: "Laptop" },
      { id: 3, name:"", price:4, menge: 6, artikel: "Wachmachine" },
      { id: 4, name:"", price: 6, menge: 6, artikel: "Handy" },
  ]);
    const handelChange = (id,e) => {
      const index=product.findIndex((item)=> item.id === id)
      console.log(e.target.value,e.target.name);
    //  setProduct(e.target.value);
    const newProduct =product
    newProduct[index][e.target.name] =e.target.value
    console.log(newProduct);
    setProduct([...newProduct])
    };
   
   
    
      
    return (
        <div className="tabl">
            <Table  bordered >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Menge</th>
                        <th>Summe</th>
                    </tr>
                </thead>
                <tbody>
                
                    
                    {product.map((item) => {
                        const summe = (+item.price)*(+item.menge)
                        const summe1 = (+item.price)*(+item.menge)
                      
                      return (
                        <React.Fragment key={item.id}>
                              <tr>
                                    <td>{item.artikel}</td>
                                    <td>
                                        
                                        <input
                                            value={item.name}
                                            type="text"
                                             name="name"
                                             style={{width:"100%",fontSize:"7px", border:"none"}}
                                            onChange={(e)=>handelChange(item.id,e)}
                                            className="inpt"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            value={item.price}
                                            type="number"
                                             name="price"
                                             
                                            onChange={(e)=>handelChange(item.id,e)}
                                            className="inpt"
                                        />
                                    </td>
                                    <td>
                                        <input
                                           value={item.menge}
                                           type="number"
                                            name="menge"
                                            onChange={(e)=>handelChange(item.id,e)}
                                           className="inpt"
                                        />
                                    </td>

                                    <td>{summe}</td>
                                    <td></td>
                               

         
                              
                                
                                </tr>
                            </React.Fragment>
                        );
                    })}

                    <tr className="centr">
                        <td colSpan={4}>Total</td>
                        
                        <td> {product.reduce((total, cartItem) => {
                                return total + cartItem.price * cartItem.menge;
                            }, 0).toFixed(2)}</td>
                          
                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default Tablen;

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
