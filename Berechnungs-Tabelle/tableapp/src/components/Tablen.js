import React, { useContext} from "react";

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
             <p className="text-1"> Berechnungstabelle</p>
            <div className="container1">
                <div className="item"><p className="text">###</p></div>
                <div className="item"><p className="text">Datum</p> </div>
                <div className="item"><p className="text">Price</p> </div>
                <div className="item"><p className="text">Menge</p> </div>
                <div className="item"><p className="text">sum1</p> </div>
                <div className="item"><p className="text">Sum2</p> </div>
            </div>
            <div className="container1">
                {date.map((item, index) => {
                    const summe = (+item.price / +item.menge).toFixed(2);
                    let summe1 = 0;
                    for (let i = index; i >= 0; i--) {
                        summe1 =summe1 + date[i].price / date[i].menge;
                    }
                    return (
                        <React.Fragment key={item.id}>
                            <div className="item"><span className="span-zahl">{item.id}</span></div>

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
                            <div className="item"><span className="span-sum2">{summe1.toFixed(2)}</span></div>
                        </React.Fragment>
                    );
                })}
            </div>
            <div className="container1 ">
                {/* <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div> */}
                <div className="total item"><p className="text-1">Total</p></div>
                <div className="item">
                   <span className="span-result">
                   {date
                        .reduce((total, cartItem) => {
                            return total + cartItem.price / cartItem.menge;
                        }, 0)
                        .toFixed(2)}
                   </span>
                </div>
            </div>
        </div>
    );
};

export default Tablen;
