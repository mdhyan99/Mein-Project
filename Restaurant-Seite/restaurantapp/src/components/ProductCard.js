import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";

import { IoMdAdd } from "react-icons/io";

import IconProdCard from "./IconProdCard";
import ProductInfo from "./ProductInfo";
import WarenKorbContext from "../context/WarenKorbContext";
// import { MdOutlineDeleteForever } from "react-icons/md";

const ProductCard = ({ item }) => {
    const { addKorb, cart } = useContext(WarenKorbContext);
    return (
        <div className="">
            <div className="d-flex  justify-content-between card  ">
                {/* für Preis un Beschreibun */}
                <Row>
                    <Col>
                        <ProductInfo item={item} />
                    </Col>
                </Row>

                {/* für Icon  */}
                <div className="d-flex justify-content-between icon">
                    <IconProdCard item={item} />

                    <div>
                        <IoMdAdd
                            style={{
                                color: "gray",
                                fontSize: "40px",
                            }}
                            onClick={() => addKorb(item.id)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
