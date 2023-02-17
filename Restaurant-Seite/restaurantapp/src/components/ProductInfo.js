import React from "react";

const ProductInfo = ({ item }) => {
    return (
        <>
            <div className="">
                <div className="d-flex justify-content-around flex-colum">
                    <span className="item-title"> {item.title} </span>
                    <span className="item-price"> {item.price} </span>
                </div>

                <p className="item-description">{item.description}</p>
            </div>
        </>
    );
};

export default ProductInfo;
