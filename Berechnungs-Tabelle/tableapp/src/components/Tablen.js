import React, { useContext, useState } from "react";

import "../index.css";
import FormContext from "../context/FormContext";

const Tablen = () => {
    const { date, setDate } = useContext(FormContext);
    // const [product, setProduct] = useState();
    // const [product, setProduct] = useState();
    const handelChange = (id, e) => {
        const index = date.findIndex((item) => item.id === id);

        console.log(e.target.value, e.target.name);

    
        date[index][e.target.name] = e.target.value;
        console.log(date);
        setDate([...date]);
        
    };

    return (
        <div className="tab">
            <div className="container1">
                <div className="item">###</div>
                <div className="item">Name</div>
                <div className="item">Price</div>
                <div className="item">Menge</div>
                <div className="item">sum1</div>
                <div className="item">Sum2</div>
            </div>
            <div className="container1">
                {date.map((item, index) => {
                    const summe = +item.price * +item.menge;
                    let summe1 = 0;
                    for (let i = index; i >= 0; i--) {
                        summe1 = summe1 + date[i].price * date[i].menge;
                    }
                    return (
                        <React.Fragment key={item.id}>
                            <div className="item">{item.artikel}</div>

                            <div className="item itemname">
                                <input
                                    value={item.name}
                                    type="text"
                                    name="name"
                                    style={{
                                        width: "100%",
                                        fontSize: "17px",
                                        border: "none",
                                    }}
                                    onChange={(e) => handelChange(item.id, e)}
                                    className="inpt"
                                />
                            </div>
                            <div className="item">
                                <input
                                    value={item.price}
                                    type="number"
                                    name="price"
                                    onChange={(e) => handelChange(item.id, e)}
                                    className="inpt"
                                />
                            </div>
                            <div className="item">
                                <input
                                    value={item.menge}
                                    type="number"
                                    name="menge"
                                    onChange={(e) => handelChange(item.id, e)}
                                    className="inpt"
                                />
                            </div>
                            <div className="item">{summe}</div>
                            <div className="item">{summe1}</div>
                        </React.Fragment>
                    );
                })}
            </div>
            <div className="container1 ">
                {/* <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div> */}
                <div className="total item">Total</div>
                <div className="item">
                    {date
                        .reduce((total, cartItem) => {
                            return total + cartItem.price * cartItem.menge;
                        }, 0)
                        .toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default Tablen;
