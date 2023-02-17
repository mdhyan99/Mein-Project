import React, { useContext } from "react";
import data from "../data/data.json";
import FavoritContext from "../contexts/FavoritContext";
import { Col, Row } from "react-bootstrap";
import Product from "./Product";

const FavoriteProdukt = () => {
  const { favorite } = useContext(FavoritContext);
    


    const data_ff= data.filter((item)=> favorite.includes(item.id)  )

    return (
        <div>
    
            <Row md={2} xs={1} lg={4} className="g-3">
                {data_ff.map((item) => (
                    <Col key={item.id}>
                        <Product {...item} />
                        {/* das kommt von Product.js */}
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default FavoriteProdukt;
